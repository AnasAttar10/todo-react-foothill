import React from 'react'

function AddTask({Addtask}) {
  return (
    <div>
        <form action="" onSubmit={Addtask} className=' d-flex justify-content-between mt-5'>
            <input type='text' name="title" placeholder='Enter The Task ' className='col-sm-10' required/>
            <input className='btn btn-success col-sm-2 border-radius-0' type="submit" value="ADD"/>
        </form>

    </div>
  )
}

export default AddTask