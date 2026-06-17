import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({data, employeeData, index}) => {

const [userData, setUserData] = useContext(AuthContext)

const acceptTask = ()=>{

const updatedData = [...userData]

updatedData.forEach((elem)=>{

if(elem.id == employeeData.id){

elem.tasks[index].active = true
elem.tasks[index].newTask = false

elem.taskNumber.active += 1
elem.taskNumber.newTask -= 1

}

})

setUserData(updatedData)

localStorage.setItem('employees', JSON.stringify(updatedData))

}

  return (
   <>
   <div className='shrink-0  p-5 bg-red-400 h-full w-75 rounded-xl'>

<div className="flex justify-between items-center ">
  <h3 className='bg-red-500 px-3 py-1 rounded text-sm'>
    {data.category}
  </h3>

  <h4 className='text-sm'>
    {data.taskDate}
  </h4>
</div>

<h2 className='mt-5 text-2xl font-semibold'>
  {data.taskTitle}
</h2>

<p className='text-sm mt-2'>
  {data.taskDescription}
</p>

<div className='mt-4 '>

<button
onClick={acceptTask}
className='bg-green-500 py-1 px-2 text-sm rounded'
>
Accept Task
</button>

</div>
</div>
   </>
  )
}

export default NewTask