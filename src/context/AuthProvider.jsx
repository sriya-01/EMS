import React,{createContext,useState,useEffect} from 'react'
import { getlocalStorage, setlocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()


const AuthProvider = ({children})=> {
// localStorage.clear()
    const [userData, setUserData] = useState([])

useEffect(() => {

  if(!localStorage.getItem('employees')){
    setlocalStorage();
  }

  const {employees}= getlocalStorage();
  setUserData(employees);

}, [])



  return (
<>
  <div>
<AuthContext.Provider value ={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>    
    </div>

</>
  )
}

export default AuthProvider