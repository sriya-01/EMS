import React from 'react'
import { setlocalStorage } from '../../utils/LocalStorage'

function Header(props) {
  // console.log("data",data)

  // const [username, setusername] = useState('')

  // if(!data){
  //   setusername("Admin")

  // }else{
  //   setusername(data.name)
  // }

  const logOutUser =()=>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('') 
  }

  return (

<>
<div className=" flex justify-between items-end  ">
<h1 className='text-2xl font-medium'>
  Hello <br />
<span className='text-3xl font-semibold '>  
  {props.data ? props.data.name : "Admin"} 🖐️
</span>
</h1>

<button 
onClick={logOutUser} 
className='text-lg  font-medium px-4 py-2 bg-red-500 border-2 border-red-300'>
  Logout
</button>
</div>
</>

)
}

export default Header