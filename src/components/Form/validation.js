export const validationEmail = (form,errors,setErrors) =>{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const { email } = form;


    if(!form.email){
        setErrors({...errors, email:'Email vavcio'});
    }else{
        if(email.length>35){
            setErrors({...errors, email:'esta muy grande'});
        }else{
            if(!regex.test(form.email)){
                setErrors({...errors, email:'Ingresar un email valido'});
            }else {
                setErrors({...errors, email:''});
            }
        }
        
    }
}

export const validationPass = (form,errors,setErrors) =>{
    const { password } = form;

    if (password.length < 6 || password.length > 10) {
        setErrors({ ...errors, password: 'La contraseña debe tener entre 6 y 10 caracteres.' });
        return false;
      }

      if (!/\d/.test(password)) {
        setErrors({ ...errors, password: 'La contraseña debe contener al menos un número.' });
        return false;
      }

      setErrors({ ...errors, password: '' });

    
}