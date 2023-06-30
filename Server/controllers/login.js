const users = require('../utils/users')


const login =(req,res)=>{
    const {email, password} = req.query;

    const user = users.find(user => user.email === email && user.password === password);

    if(user){
        res.status(200).json({acces:true});
    }else{
        res.status(401).json({acces:false, mje:'guarda que esta todo mal lo que metiste ahí gil'});
    }
}

module.exports= login;