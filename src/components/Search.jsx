import React from 'react'

function Search({handleSearchInput}) {
  return (
    <div>
        <input type='search' className='my-3 w-100 p-1' placeholder='Search by Task Text ...' onChange={handleSearchInput}/>
    </div>
  )
}

export default Search