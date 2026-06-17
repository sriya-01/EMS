import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
  return (
<>
<div id='tasklist' className="overflow-x-auto flex flex-row  justify-start items-center flex-nowrap gap-5 w-full h-[55%] mt-10 py-5  ">
 
{data.tasks.map((e ,idx)=>{

if(e.active){
  return <AcceptTask key={idx} data={e} employeeData={data} index={idx} />
}

if(e.newTask){ 
  return <NewTask key={idx} data={e} employeeData={data} index={idx} />
}

if(e.completed){
  return <CompleteTask key={idx} data={e} employeeData={data} index={idx} />
}

if(e.failed){
  return <FailedTask key={idx} data={e} employeeData={data} index={idx} />
}

})}

</div>


</>  )
}

export default TaskList 