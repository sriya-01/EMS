import React from 'react'
import Header from '../other/Header.jsx'
import TaskListNo from '../other/TaskListNo.jsx'
import TaskList from '../TaskList/TaskList.jsx'

function EmployeeDashboard({data,changeUser}) {

  return (
<>
<div className="p-10 bg-[#1C1C1C]  h-screen text-white ">

<Header data={data} changeUser={changeUser} />

<TaskListNo data={data}/>
<TaskList data={data} />

</div>
</>
)
}

export default EmployeeDashboard