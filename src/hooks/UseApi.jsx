import { useEffect, useState } from 'react'
import axios from 'axios'

function UseApi(api) {
    const [tasks ,settasks]=useState([])
    const [errors ,seterrors]=useState("")

    useEffect(()=>{
         axios.get(api).then(res => settasks(res.data)).catch(err => seterrors(err))
    },[])
    return [tasks , settasks , errors , seterrors]
}

export default UseApi