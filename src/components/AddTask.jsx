import React from 'react'

function AddTask({Addtask}) {
  return (
    <div>
        <form action="" onSubmit={Addtask} className=' d-flex justify-content-between '>
            <input type='text' name="text" placeholder='Enter The Task ' className='col-sm-4' required/>
            <input type='text' name="assignee" placeholder='Enter The Assignee' className='col-sm-4' required/>
            <input className='btn btn-success col-sm-2' type="submit" value="ADD"/>
        </form>

    </div>
  )
}

export default AddTask