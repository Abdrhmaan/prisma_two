

import expreess from "express"

import prisma from "./lip/index.js";


const roter = expreess.Router();

roter.get("/"  , async(req,res) => {

    try {
        const rating = await prisma.restrunt.findMany();
    
        if (rating) {
          res.status(200).json(rating);
        } else {
          res.status(404).json({ message: "author not rating" });
        }
      } catch (err) {
        res.status(500).json({ message: "Failed to get rating" });
      }
    })
  

    roter.get("/:id"  , async(req,res) => {
        try{
            const {id} = req.params
          
            const One =   await prisma.restrunt.findUnique({
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



    
    roter.post("/" , async(req,res) => {
   
          

        try{
            const created = await prisma.restrunt.create({
                data : req.body
                
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



    
    roter.put("/:id"  , async(req,res) => {
        try{


           

            const updated  =  await prisma.restrunt.update({
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



    
    roter.delete("/:id"  , async(req,res) => {
        try{


           

            const deleted  =  await prisma.restrunt.delete({
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



    export default roter