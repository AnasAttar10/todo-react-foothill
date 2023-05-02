import React from 'react'
import Search from './Search'
import Toggleswitch from './Toggleswitch'
import AddTask from './AddTask'


function Header({showItems , handleSearchInput ,Addtask}) {

  return (
    <div>
        <h2 className='p-2'>To Do List </h2>
        <AddTask Addtask={Addtask}/>
        <Search handleSearchInput={handleSearchInput}/>
        <Toggleswitch showItems={showItems}/>

    </div>
  )
}

export default Header