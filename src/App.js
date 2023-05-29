import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect  } from 'react';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import {Routes,Route,Navigate,useNavigate,} from 'react-router-dom';
import About from './views/About/About';
import Detail from './views/Detail/Detail';
import Form from './components/Form/Form.jsx'

function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const [users, setUsers] = useState([]);

   const EMAIL = 'gabi@gmail.com';
   const PASSWORD = 'nutria88';

   const onSearch = (id) =>{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setUsers((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   }

   const onClose = (id) =>{
      const filter = users.filter((char)=>{
         return char.id !== Number(id)
      })
      
      setUsers(filter);
   }

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }else{
         alert('pusiste todo mal pajero')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (
      <div className='App' >

      <Nav onSearch={onSearch}/>
      <Routes>
         <Route path="/" element={<Form login={login}/>} />

         <Route path="/home" element={<Cards characters={users} onClose={onClose}/>}/>
            

         <Route path='/about' element={<About/>} />

         <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
         
      </div>
   );
}

export default App;
