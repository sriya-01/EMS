import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({data, employeeData, index}) => {

const [userData, setUserData] = useContext(AuthContext)

const completeTask = ()=>{

const updatedData = [...userData]

updatedData.forEach((elem)=>{

if(elem.id == employeeData.id){

elem.tasks[index].active = false
elem.tasks[index].completed = true

elem.taskNumber.active -= 1
elem.taskNumber.completed += 1

}

})

setUserData(updatedData)

localStorage.setItem('employees', JSON.stringify(updatedData))

}

const failedTask = ()=>{

const updatedData = [...userData]

updatedData.forEach((elem)=>{

if(elem.id == employeeData.id){

elem.tasks[index].active = false
elem.tasks[index].failed = true

elem.taskNumber.active -= 1
elem.taskNumber.failed += 1

}

})

setUserData(updatedData)

localStorage.setItem('employees', JSON.stringify(updatedData))

}

  return (
    <>
    
<div className='shrink-0 p-5 bg-yellow-400 h-full w-[300px] rounded-xl'>

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

<div className='flex justify-between mt-4 '>

<button
onClick={completeTask}
className='bg-green-500 py-1 px-2 text-sm rounded'
>
Mark as Completed
</button>

<button
onClick={failedTask}
className='bg-red-500 py-1 px-2 text-sm rounded'
>
Mark as Failed
</button>

</div>
</div>

    </>
  )
}

export default AcceptTask