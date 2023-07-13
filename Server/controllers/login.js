const { User } = require('../src/DB_connection');

const login = async (req, res) => {
    const { email, password } = req.query;

    if (email && password) {
        try {
            const userEmail = await User.findOne({
                where: {
                    email: email,
                }
            });
            if (!userEmail) {
                res.status(404).json({ error: 'Usuario No Encontrado!' });
            }
            const userPass = await User.findOne({
                where: {
                    password: password,
                }
            });
            if (!userPass) {
                res.status(403).json({ error: 'Contraseña incorrecta!' });
            }
            res.status(200).json({acces:true});
        } catch (error) {
            res.status(500).json({ error:error.message });
        }
    } else {
        res.status(400).json({ error: 'Faltan Datos!' })
    }
}

module.exports=login;