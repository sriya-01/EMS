import React, {useContext, useState ,useEffect} from 'react'
// import './App.css'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { AuthContext } from './context/AuthProvider.jsx'
// import "./App.css"
const  App =()=> {
 const [user, setUser] = useState(null)
const [LoggedInUser, setLoggedInUser] = useState(null)

const [userData,setUserData] =useContext(AuthContext);
//  console.log(userData.admin)


useEffect(() => {
const loggedInUser = localStorage.getItem('loggedInUser')
// console.log(loggedInUser)
if(loggedInUser){
  
const userData = JSON.parse(loggedInUser);
setUser(userData.role)
setLoggedInUser(userData.data)
}
  
},[])


 const handelLogin = (email,password)=>{

if (email == 'admin@me.com' && password =='1234'){
  setUser('admin')
  localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
}else if (userData){
  const employee = userData.find((e)=>email == e.email && e.password == password)
 if(employee){
   setUser('employee')
   setLoggedInUser(employee);
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
 }

}
else{
  alert('invalid credentials access');
}

}


  return (
<>

{!user  ? <Login handelLogin={handelLogin} />: ''}
{user == 'admin' ? <AdminDashboard changeUser={setUser} /> : user == 'employee' ?  <EmployeeDashboard data={LoggedInUser} changeUser={setUser} />  : null}   

</>

  )
}

export default App