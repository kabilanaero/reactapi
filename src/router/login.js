import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import './login.css'
import { useDispatch } from 'react-redux';
import {  useSelector } from 'react-redux';
import { login } from '../redux/stateSlice';


        let object=[
            {
                name:"kabilan",
                password:"0109"
          
              },
              {
               name:"none",
               password:"0109"    
              }
        ]

    const Login = () => {

     const state = useSelector(({sample}) => sample);
     const dispatch = useDispatch();
    

            const [isName, setIsName] = useState('');
            const [isPass, setIsPass] = useState('');
            const [formSubmit, setFormSubmit] = useState(false);
            const navigate=useNavigate()
            
            const userName=(e)=>{
                console.log("e", e.target.value)
                setIsName(e.target.value)
            }

            const userPass=(e)=>{
                console.log("e",e.target.value)
                setIsPass(e.target.value)
            }

            const handleSubmit=(e)=>{
                e.preventDefault();
                setFormSubmit(true)
                let arr=object.find((e)=>{
                if((e.name===isName)&&(e.password===isPass)){
                    navigate('/Homepage')
                }
                })
            }
  return (
        <div className='containers'>
             <form className="log-form" onSubmit={handleSubmit}>
                 <h2 className='log'>Login</h2>

             <FormControl>
        
    <p><label>Name:</label></p>
     <span><TextField id="outlined-basic" label="Name" classname="text1"variant="outlined" value={isName} type="text" onChange={userName} /></span>
        {isName === "" && formSubmit && <div className='one'>userName is required</div>}

    <p><label>Password:</label> </p> 
     <span><TextField id="outlined-password-input" label="Password"type="password" value={isPass} onChange={userPass}/></span>
        {isPass === "" && formSubmit && <div className='one'>userPass is required</div>}

    <div>
        <button onClick={() => 
            dispatch(login(true))}>LOGIN</button>
    
      </div>

    
     </FormControl>
        </form>
        </div>
     )
}

export default Login


