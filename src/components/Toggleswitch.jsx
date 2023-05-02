import React from 'react'

function Toggleswitch({showItems}) {
  return (
    <div className="form-check form-switch d-flex justify-content-center">
    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked="true" onChange={showItems}/>
    <label className="form-check-label  ms-3" >Show All To Dos </label>
    </div>
  )
}

export default Toggleswitch