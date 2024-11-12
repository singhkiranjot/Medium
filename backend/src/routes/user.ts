
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { sign } from 'hono/jwt'
import { signupInputs , signinInputs } from "@singhkiranjot/medium-common-package"



export const userRouter = new Hono<{
    Bindings:{
      DATABASE_URL:string
      JWT_SECRET : string
    }
}>()

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json()

    const { success } = signupInputs.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        msg : "inputs not correct"
      })
    }
  
    const user = await prisma.user.create({
      data:{
        email : body.email,
        password : body.password,
        name : body.name
      },
    })
  
    const token =  await sign({id:user.id} , c.env.JWT_SECRET)
  
  
    return c.json({
      jwt : token,
      name : user.name
    })
})
  
userRouter.post('/signin',async  (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json()
    
    const { success } = signinInputs.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        msg : "inputs not correct"
      })
    }
    const user =await prisma.user.findUnique({
      where:{
        email:body.email,
        password:body.password
      },
      
    })
  
    if(!user){
      return c.json({
        msg : "user not found"
      })
    }
  
    const token =  await sign({id:user.id} , c.env.JWT_SECRET)
  
    return c.json({
      jwt : token,
      name:user.name
    })
})