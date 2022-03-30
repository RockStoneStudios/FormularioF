import axios from 'axios';
import {useState} from 'react'
import Alerta from './Alerta';
import clienteAxios from '../config/clienteAxios';
 const Formulario = () => {
   
     const [nombre,setNombre] = useState('');
     const [email,setEmail] = useState('');
     const [cc,setCc] = useState(0);
    
     const [telefono,setTelefono] = useState('');
     const [alerta,setAlerta] = useState({});


     const handleSubmit = async e =>{
      
         e.preventDefault();
         if([nombre,email,cc,telefono].includes('')){
            setAlerta({
                msg : "Todos los campos son Obligatorios",
                error : true
            })
         }
          try{
               const {data} = await clienteAxios.post(`/api/usuarios/registrar`,{
                   nombre,email,cc,telefono
               });
               console.log(data);
               setAlerta({
                   msg : data.message,
                   error : false
               });
               setNombre('');
               setEmail('');
               setCc('');
               
               setTelefono('');
               setTimeout(()=>{
                   setAlerta({})
               },2500)

               
          }catch(error){
              setAlerta({
                  msg : "Email en Uso",
                  error : true
              });

          }finally {
              setTimeout(()=>{

                  setAlerta({});
              },2000)
              setNombre('');
               setEmail('');
               setCc('');
         
               setTelefono('');
          }
     }

     

    return (

   
  <>
     <div className='flex flex-col'>
     <h1 className=' my-8 text-4xl text-white text-center font-bold '>Colombia segura</h1>
     
     <form  onSubmit={handleSubmit}  className= " mt-10 bg-gradient-to-r from-sky-700 to-sky-500 py-10 px-5 md:w-4/3 h-100  my-10 rounded-lg shadow-sm">
      {alerta.msg && <Alerta alerta ={alerta}/>}
     <div className='mb-5'>
         <label htmlFor="nombre" className='text-gray-100 uppercase font-bold text-sm cursor-pointer'>
             Nombre 
         </label>
         <input type="text" className='border-2 w-full p-2 mt-2  cursor-pointer
         placeholder-gray-400 rounded-md '
           id='nombre'
           placeholder='Nombre'
           value={nombre}
           onChange={e=>setNombre(e.target.value)}          
         />
     </div>
     <div className='mb-4'>
         <label htmlFor="email" className='text-gray-100 uppercase font-bold text-sm cursor-pointer'>
             Email
         </label>
         <input type="email" className='border-2 w-full p-2 mt-2 cursor-pointer
         placeholder-gray-400 rounded-md '
           id='email'
           placeholder='example@gmail.com'
           value={email}
           onChange={e => setEmail(e.target.value)}  
         />
     </div>
     <div className='mb-4'>
         <label htmlFor="cc" className='text-gray-100 uppercase font-bold text-sm cursor-pointer'>
             CC
         </label>
         <input type="number" className='border-2 w-full p-2 mt-2 cursor-pointer
         placeholder-gray-400 rounded-md '
           id='cc'
           placeholder='ejem : 101*****'
           value={cc}
           onChange = {e=>setCc(e.target.value)}
           
           
         />
     </div>
    
 
     <div className="mb-4">
         <label htmlFor="tel" className='text-gray-100 uppercase font-bold text-sm cursor-pointer'>
             Telefono
         </label>
         <input 
         type="number"
         placeholder='350*******'
         className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md cursor-pointer'
         id='tel'
         value={telefono}
         onChange = {e =>setTelefono(e.target.value)}
         />
     </div>
     
     <input type="submit" 
      
      className='bg-sky-600 w-full p-3 text-white font-bold uppercase rounded-md cursor-pointer hover:bg-sky-700 transition-colors'
     
     />
     
 </form>
    </div>  
  </>
 )
  
}

export default Formulario;
