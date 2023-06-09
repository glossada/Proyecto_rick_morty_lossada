const express = require('express');
const morgan=require('morgan');
const server = express();
const PORT = 3001;
const router=require('./routes/index');
const {conn}=require('./src/DB_connection');
//const cors = require('cors')
//probar cors de express, hay que instalarlo como express cors

server.use(morgan('dev'));

//server.use(cors())
//cors reemplaza todo este choricito
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json());
server.use('/rickandmorty',router);

conn.sync({force:false}).then(()=>{
   server.listen(PORT, () => {
      console.log('Se alzo todo en el puerto: ' + PORT);
   });

})
