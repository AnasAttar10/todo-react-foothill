import React from 'react'

function Task({task ,TaskDone ,deletTask}) {

  return (
    <div className='d-flex justify-content-between align-items-center text-center bg-secondary p-2 text-white border border-bottom-2'>
        <p className='col-sm-3 m-0'>{task.text}</p>
        <p className='col-sm-3 m-0'>{task.assignee}</p>
        <p className='col-sm-3 m-0'>
        <input className='text-center' type="checkbox" defaultChecked={task.isDone} onChange={()=>TaskDone(task.id)}/>
        </p>
        <button className='btn btn-danger' onClick={()=>deletTask(task.id)}>Delete</button>
    </div>
  )
}

export default Task