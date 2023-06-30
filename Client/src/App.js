import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect  } from 'react';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import {Routes,Route,Navigate,useNavigate,} from 'react-router-dom';
import About from './views/About/About';
import Detail from './views/Detail/Detail';
import Form from './components/Form/Form.jsx'
import { Favorites } from './components/Favorites/Favorites';

function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const [users, setUsers] = useState([]);


   const onSearch = async (id) =>{
     const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
     try {
      if (data.name) {
         setUsers((oldChars) => [...oldChars, data]);
      } 
     } catch (error) {
      alert(error.response.data)
     }
      
   }

   const onClose = (id) =>{
      const filter = users.filter((char)=>{
         return char.id !== Number(id)
      })
      
      setUsers(filter);
   }

   async function login(userData) {
      const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   const {data}=await axios(URL + `?email=${email}&password=${password}`) 
      try {
      const { acces } = data;
      setAccess(acces);
      access && navigate('/home');
      } catch ({response}) {
         const {data}=response;
         alert(data.mje)

      }
   
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access,navigate]);


   return (
      <div className='App' >

      <Nav onSearch={onSearch}/>
      <Routes>
         <Route path="/" element={<Form login={login}/>} />

         <Route path="/home" element={<Cards characters={users} onClose={onClose}/>}/>
            

         <Route path='/about' element={<About/>} />

         <Route path='/detail/:id' element={<Detail/>} />

         <Route path='/favorites' element={<Favorites/>} />
      </Routes>
         
      </div>
   );
}

export default App;
