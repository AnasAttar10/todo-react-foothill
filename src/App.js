import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import TasksTable from './components/TasksTable';
import Footer from './components/Footer'



function App() {

  const [isVisible , setisVisible] = useState(true)

  const [searchValue ,setSearchValue] = useState("")

  const [DoneTasksCount ,setDoneTasksCount ]=useState(0)

  const [tasks , settasks] =useState([
    { id : 1 , text : "built portfolio " , assignee : "Ahmad " , isDone : false },
    { id : 2 , text : "built to do list  " , assignee : "Muhammad  " , isDone : false },
    { id : 3 , text : "built landing page  " , assignee : "Omar  " , isDone : false }
  ])

  const Addtask =(e)=>{
    e.preventDefault();
    const id = Math.random()
    const text = e.target.text.value 
    const assignee = e.target.assignee.value  
    const isDone = false 
    const newTask = {id ,text ,assignee , isDone}
    settasks(tasks => [...tasks , newTask])
    clear(e)
  }

  const clear =(e)=>{
    e.target.text.value =""
    e.target.assignee.value =""
  }

  const deletTask =(targetId)=>{
    const targetIndex = tasks.findIndex(t=>t.id === targetId ) 
    const newTasks = tasks.splice(targetIndex , 1)
    console.log(tasks);
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
    targetTask.isDone = ! targetTask.isDone
    settasks(tasks)
    countDoneTasks()
  }

  const countDoneTasks =()=>{ 
    const count = tasks.filter(t =>t.isDone).length
    setDoneTasksCount(count)
  }

  return (
    <div className="App w-50 mx-auto border border-2 border-dark p-2">
      <Header showItems={showItems} handleSearchInput={handleSearchInput} Addtask={Addtask}/>
      <TasksTable tasks={searchValue ? tasks.filter(t=>t.text.trim().toLowerCase().includes(searchValue)) : tasks} 
      isVisible={isVisible} TaskDone={TaskDone} deletTask={deletTask}/>
      <Footer tasks_number= {tasks.length}  Done_tasks={DoneTasksCount}/>
    </div>
  );
}

export default App;
