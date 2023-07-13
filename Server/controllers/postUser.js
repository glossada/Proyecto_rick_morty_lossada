const {User} = require('../src/DB_connection');

const postUser = async (req,res)=>{
const {email, password}=req.body;
if(email && password){
    const user={
        email,
        password,
    }
    try {
        const newUser= await User.create(user);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}else{
    res.status(400).json({error:'Faltan Datos!'})
}

}

module.exports=postUser;