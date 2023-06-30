const axios = require('axios');
const URL= "https://rickandmortyapi.com/api/character/";
const errorHandler=require('../utils/errors')


const getCharById = async (res,req)=>{
        const {id}=req.params
        try {
            const {data} = await axios.get(URL+Number(id));
            
        const char ={
                        id:data.id,
                        name:data.name,
                        gender:data.gender,
                        species:data.species,
                        origin:data.origin,
                        image:data.image,
                        status:data.status
        }
        res.status(200).json(char);
        
            
         } catch (error) {
             errorHandler(res,error)
         }

    // .then(response =>{
    //     //corregir if!!!!!
    //     if(Object.keys(data).length!=0){
    //     const char ={
    //         id:data.id,
    //         name:data.name,
    //         gender:data.gender,
    //         species:data.species,
    //         origin:data.origin,
    //         image:data.image,
    //         status:data.status
    //         }
    //     res.json(char)
    //     }
    //     if(Object.keys(data).length===0){
    //         res.status(404).send('Error 404: muchachito no encontrado');
    //     }
        
    // })
    


}


module.exports = getCharById;