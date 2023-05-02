import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import TasksTable from './components/TasksTable';
import Footer from './components/Footer'
import UseApi from './hooks/UseApi';



function App() {

  const [isVisible , setisVisible] = useState(true)

  const [searchValue ,setSearchValue] = useState("")

  // const [todos ,errors]=UseApi("https://jsonplaceholder.typicode.com/todos")

  const [DoneTasksCount ,setDoneTasksCount ]=useState(0)

  const [tasks , settasks ,errors , seterrors] =UseApi("https://jsonplaceholder.typicode.com/todos")

  useEffect(()=>{
    countDoneTasks()
  })

  const Addtask =(e)=>{
    e.preventDefault();
    console.log(e.target.title.value);
    const id = Math.random()
    const title = e.target.title.value
    const completed = false 
    const newTask = {id ,title , completed}
    settasks(tasks => [...tasks , newTask])
    clear(e)
  }

  const clear =(e)=>{
    e.target.title.value =""
  }

  const deletTask =(targetId)=>{
    const targetIndex = tasks.findIndex(t=>t.id === targetId ) 
    const newTasks = tasks.splice(targetIndex , 1)
    settasks(tasks=>[...tasks])
    countDoneTasks()

  }
  const handleSearchInput =(e)=>{
    setSearchValue(e.target.value.trim().toLowerCase());
  }

  const showItems =()=>{
    setisVisible(! isVisible)
  }

  const TaskDone =(targetId)=>{
    const targetTask = tasks.find(t=> t.id === targetId)
    targetTask.completed = ! targetTask.completed
    settasks(tasks)
    countDoneTasks()
  }

  const countDoneTasks =()=>{ 
    const count = tasks.filter(t =>t.completed).length
    setDoneTasksCount(count)
  }

  return (
    <div className='d-flex align-items-center bg-dark text-white'>
        <div className="App w-50 mx-auto mt-5 bg-secondary p-2">
          <Header showItems={showItems} handleSearchInput={handleSearchInput} Addtask={Addtask}/>
          <TasksTable tasks={searchValue ? tasks.filter(t=>t.title.trim().toLowerCase().includes(searchValue)) : tasks} 
          isVisible={isVisible} TaskDone={TaskDone} deletTask={deletTask}/>
          <Footer tasks_number= {tasks.length}  Done_tasks={DoneTasksCount}/>
        </div>
    </div>

  );
}

export default App;
