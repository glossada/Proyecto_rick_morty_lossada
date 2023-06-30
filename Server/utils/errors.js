module.exports=(res,error)=>{
    const {response}=error;
    if(response && error.response.status===404){
        res.status(error.response.status).send('No existe el muchachito');
    }else{
        res.status(500).send(error.message)
    }
}