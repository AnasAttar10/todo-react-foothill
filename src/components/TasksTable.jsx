import React from 'react'
import Task from './Task'

function TasksTable({tasks ,isVisible ,TaskDone ,deletTask}) {
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center  bg-primary p-3 text-white border border-bottom-2'>
          <p className='col-sm-3 m-0 text-center'>Task</p>
          <p className='col-sm-3 m-0 text-center'>Assignee</p>
          <p className='col-sm-3 m-0 text-end'>Done</p>
          <p className='col-sm-3 m-0 text-end'>Delete</p>
        </div>
        { isVisible && tasks.map(t => <Task task={t} key={Math.random()} TaskDone={TaskDone}
        deletTask={deletTask}/>)}
    </div>
  )
}

export default TasksTable