import React, {useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);

  const [employee, setEmployee] = useState({
    taskTitle: "",
    taskDescription: "",
    taskDate: "",
    assignTo: "",
    category: ""
  })

  const [newTask, setNewTask] = useState({})

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const task = {
      taskTitle: employee.taskTitle,
      taskDescription: employee.taskDescription,
      taskDate: employee.taskDate,
      category: employee.category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    }

    setNewTask(task)

    const data = [...userData]

    data.forEach(function(e){

      if(employee.assignTo == e.name){

        e.tasks.push(task)

        e.taskNumber.newTask += 1

      }

    })

    setUserData(data)

    localStorage.setItem('employees', JSON.stringify(data))

    setEmployee({
      taskTitle: "",
      taskDescription: "",
      taskDate: "",
      assignTo: "",
      category: ""
    })

  }

  return (
    <>
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">

        <form
          onSubmit={submitHandler}
          className='flex w-full items-start justify-between'
        >

          <div className='w-1/2'>

            <div>
              <h3 className='text-sm text-gray-300 mb-1'>
                Task
              </h3>

              <input
                name='taskTitle'
                value={employee.taskTitle}
                onChange={handleChange}
                className='text-sm px-3 py-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                type="text"
                placeholder='Make a UI Design'
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-1'>
                Date
              </h3>

              <input
                name='taskDate'
                value={employee.taskDate}
                onChange={handleChange}
                className='text-sm px-3 py-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                type="date"
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-1'>
                Assign To
              </h3>

              <input
                name='assignTo'
                value={employee.assignTo}
                onChange={handleChange}
                className='text-sm px-3 py-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                type="text"
                placeholder='Employee Name'
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-1'>
                Category
              </h3>

              <input
                name='category'
                value={employee.category}
                onChange={handleChange}
                className='text-sm px-3 py-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                type="text"
                placeholder='Design, Dev, etc'
              />
            </div>

          </div>

          <div className='w-2/5 flex flex-col items-start'>

            <h3 className='text-sm text-gray-300 mb-1'>
              Description
            </h3>

            <textarea
              name='taskDescription'
              value={employee.taskDescription}
              onChange={handleChange}
              className='text-sm px-3 py-2 w-full rounded outline-none bg-transparent border border-gray-400 mb-4'
              rows={10}
              placeholder='Enter task details'
            ></textarea>

            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm w-full'>
              Create Task
            </button>

          </div>

        </form>

      </div>
    </>
  )
}

export default CreateTask