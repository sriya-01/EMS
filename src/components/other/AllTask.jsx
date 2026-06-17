import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTask() {

const [userData,setUserData] =useContext(AuthContext);
// console.log(userData.employees)


  return (

<>
<div className="bg-[#1c1c1c] p-5 mt-5 rounded ">

<div className='bg-red-400 py-2 mb-3 px-4 flex justify-between rounded '>
    <h2 className='w-1/5  text-lg font-medium'>Employees Name</h2>
        <h5 className='w-1/5  text-lg font-medium '>Active Task</h5>

    <h3 className='w-1/5  text-lg font-medium'>New Task</h3>
        <h5 className='w-1/5  text-lg font-medium '>Completed</h5>
        <h5 className='w-1/5  text-lg font-medium'>Failed</h5>

</div>
   <div>
 {userData.map(function(e,idx){
        return  <div  key={idx} className='border-2 border-emerald-500 py-2 mb-3 px-4 flex justify-between rounded '>
    <h2 className='w-1/5  text-lg font-medium  '>{e.name}</h2>
    <h3 className='w-1/5  text-lg font-medium !text-blue-600'>{e.taskNumber.active}</h3>
    <h5 className='w-1/5  text-lg font-medium !text-yellow-600'>{e.taskNumber.newTask}</h5>
        <h5 className='w-1/5  text-lg font-medium '>{e.taskNumber.completed}</h5>
        <h5 className='w-1/5  text-lg font-medium !text-red-600'>{e.taskNumber.failed}</h5>

</div>
    })}

   </div>




</div>

</>
)
}

export default AllTask