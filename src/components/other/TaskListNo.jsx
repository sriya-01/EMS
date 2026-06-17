import React from 'react'

function TaskListNo({data}) {
  return (
<>
<div className="flex mt-10 gap-5 screen ">
  
<div className="bg-yellow-300 w-[45%] px-9 py-6  rounded-xl ">
<h1 className='text-3xl text-black font-semibold  ' >{data.taskNumber.active}</h1>
<h3 className='text-2xl font-medium'>Accepted</h3>
</div>
<div className="bg-blue-400 w-[45%] px-9 py-6  rounded-xl ">
<h1 className='text-3xl font-semibold  ' >{data.taskNumber.newTask}</h1>
<h3 className='text-2xl font-medium'>New Task</h3>
</div>

<div className="bg-green-300 w-[45%] px-9 py-6  rounded-xl ">
<h1 className='text-3xl font-semibold  ' >{data.taskNumber.completed}</h1>
<h3 className='text-2xl font-medium'>Completed</h3>
</div>



<div className="bg-red-400 w-[45%] px-9 py-6  rounded-xl ">
<h1 className='text-3xl font-semibold  ' >{data.taskNumber.failed}</h1>
<h3 className='text-2xl font-medium'>Failed</h3>
</div>

</div>

</>  

)


}

export default TaskListNo