const { Favorite } = require('../src/DB_connection');

const postFav= async(req,res)=>{
    const {id,name, origin, status, image, species, gender}=req.body;
    if(!name || !origin || !status || !image || !species || !gender){
        res.status(401).json({error:'Faltan Datos!'});
    }
    const char ={
        id:id,
        name:name, 
        origin:origin, 
        status:status, 
        image:image, 
        species: species, 
        gender:gender,
    }
    try {
        const newFavo= await Favorite.findOrCreate({
            where: { id: id },
            defaults: char,
          });
        const favChars= await Favorite.findAll();
        res.status(200).json(favChars);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
    
}

module.exports=postFav;