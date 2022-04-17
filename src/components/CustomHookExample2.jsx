import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

function CustomHookExample2() {
  // setting the tasks for the hooks
  const [task, setTask] = useLocalStorage('task', '')
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const onSubmit = e => {
    e.preventDefault()

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString()
    }

    setTasks([...tasks, taskObj])
  }

// printing the tasks
  return (
    <>
      <form onSubmit={onSubmit} action="" className='w-25'>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Task</label>
          <input className='form-control' type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
        </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <hr />
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  )
}

export default CustomHookExample2
