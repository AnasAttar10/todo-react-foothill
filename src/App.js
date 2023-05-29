import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import TasksTable from './components/TasksTable';
import Footer from './components/Footer'
import axios from 'axios';



function App() {

  const [isTasksVisible , setIsTasksVisible] = useState(true)

  const [tasks , setTasks] =useState([])

  const [searchValue ,setSearchValue] = useState("")
  
  const retriveTodos =async (api)=>{
     const tasks = await axios.get(api).then(res=>res.data).catch(err => console.log(err.message))
     setTasks(tasks)
  }

  useEffect(()=>{

     retriveTodos("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10")

  },[])


  const addTask =(newTask)=>{
    setTasks([...tasks , newTask])
  }


  const deletTask =(targetId)=>{
    const oldTasks = [...tasks]
    setTasks(oldTasks.filter(t=>t.id !== targetId))

  }
  const handleSearchInput =(search)=>{
    setSearchValue(search);
  }

  const finishTask =(targetId)=>{
    setTasks([...tasks].map(t=>t.id === targetId ?{...t , completed : ! t.completed } : t))
  }
  const completedTasks = tasks.filter(t=>t.completed).length

  const filterdTasks = searchValue? tasks.filter(t=>t.title.trim().toLowerCase().includes(searchValue)) : tasks

  return (
    <div className='d-flex min-vh-100 align-items-center bg-dark text-white'>
        <div className="App w-50 mx-auto mt-5 bg-secondary p-2">
          <Header 
          showItems={()=>setIsTasksVisible(!isTasksVisible)}
          isTasksVisible={isTasksVisible}
          handleSearchInput={handleSearchInput}
          addTask={addTask}
          />
          <TasksTable
            tasks={filterdTasks} 
            isTasksVisible={isTasksVisible}
            finishTask={finishTask}
            deletTask={deletTask}
          />
          <Footer 
            totalTasks= {tasks.length} 
            completedTasks={completedTasks}
          />
        </div>
    </div>

  );
}

export default App;
