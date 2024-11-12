import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createBlogInputs, updateBlogInputs } from "@singhkiranjot/medium-common-package";

export const blogRouter = new Hono<{
    Bindings:{
      DATABASE_URL:string
      JWT_SECRET : string
    }
    Variables: {
        userID : string;
    }
}>()


blogRouter.use('/*' , async (c,next)=>{
    const header = await c.req.header('Authorization') || " "
    
    const token = header.split(" ")[1]
    const user = await verify(token , c.env.JWT_SECRET)
    if(user){
        //@ts-ignore
        c.set('userID' , user.id)
        await next()
    }
    else{
        return c.json({
            msg : "unauthorized"
          })
    }
})


blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const authorId = c.get('userID')

    const body = await c.req.json()

    const { success } = createBlogInputs.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        msg : "inputs not correct"
      })
    }
    const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId,
		}
	});
	return c.json({
		id: post.id
	});
})


blogRouter.put('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const { success } = updateBlogInputs.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        msg : "inputs not correct"
      })
    }
    const post = await prisma.post.update({
		where: {
            id : body.id,
        },
           
        data: {
			title: body.title,
			content: body.content,
			
		}
	});
	return c.json({
		id: post.id
	});
})

blogRouter.get('/bulk',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const posts = await prisma.post.findMany({
      select :{
        content : true ,
        title : true ,
        id : true,
        author: {
          select:{
            name : true
          }
        }
      }
    });
    return c.json({
        posts
    });
})

blogRouter.get('/:id',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id =  c.req.param('id')
    console.log(id)
    const post = await prisma.post.findFirst({
		where: {
            id : id
        },

        select:{
          id: true,
          title:true,
          content:true,
          author:{
            select:{
              name:true
            }
          }
        }
	});
	return c.json({
		post
	});
})


    