

import express from "express";

import prisma from "./lip/index.js";


const router = express.Router();

router.get("/"  , async(req,res) => {

    try {
        const author = await prisma.author.findMany();
    
        if (author) {
          res.status(200).json(author);
        } else {
          res.status(404).json({ message: "author not found" });
        }
      } catch (err) {
        res.status(500).json({ message: "Failed to get author" });
      }
    });



    router.get("/:id"  , async(req,res) => {
        try{
            const {id} = req.params
          
            const One =   await prisma.author.findUnique({
                where : {
                    id: Number(id),
                }

            })
            if (One) {
                res.status(200).json(One);
              } else {
                res.status(404).json({ message: "One not found" });
              }


        } catch(e){
            console.log(e)
        }
    })





    router.post("/" , async(req,res) => {
        const{name ,email } = req.body
          

        try{
            const created = await prisma.author.create({
                data : {
                    name,
                    email
                }
            })
            if(created){
                res.status(200).json(created);
            } else {
              res.status(404).json({ message: "no created " });
            }
            
    

        }catch(e){
            console.log(e)
        }
    })



    router.put("/:id"  , async(req,res) => {
        try{


           

            const updated  =  await prisma.author.update({
                where : {
                   id: Number(req.params.id),
                },
                data: req.body,

            })

            if(updated){
                res.status(200).json(updated);
            } else {
              res.status(404).json({ message: "no updated " });
            

            }
        } catch(e){
            console.log(e)
        }
    }) 



    
    router.delete("/:id"  , async(req,res) => {
        try{


           

            const deleted  =  await prisma.author.delete({
                where : {
                   id: Number(req.params.id),
                },
    
            })

            if(deleted){
                res.status(200).json(deleted);
            } else {
              res.status(404).json({ message: "no deleted " });
            

            }
        } catch(e){
            console.log(e)
        }
    }) 
export default router