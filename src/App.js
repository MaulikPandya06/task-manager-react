// import React, {useState} from "react";
// import Tweet from "./Tweets";

// function App() {

//   const [users, setUser] = useState([
//     {name:"Sheldon Cooper", message:"Buzzinga" },
//     {name:"Lenoard Hofstater", message:"Yeah"}
//   ]);
//   return (
//     <div className="app">
//       {users.map(user=>(
//         <Tweet name={user.name} message={user.message}/>
//       ))}
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Headers from './Headers'
import Tasks from './Tasks'
import AddTask from './AddTask'
import { useState } from 'react'
function App() {

  const [showAddTask, setShowAddTask] = useState(false)    
  const [tasks,setTasks]=useState([ ])

      const addTask = (task) =>{
            // console.log(task)
            const id = Math.floor(Math.random() * 1000) + 1
            // console.log(id)
            const newTask = { id, ...task }
            setTasks([...tasks,newTask])
      }

      const onDelete = (id) =>{
            setTasks(tasks.filter((task)=>task.id !== id))
      }

      const onToggle = (id) =>{
            setTasks(tasks.map((task)=> task.id === id ? {...task, reminder:!task.reminder}: task))
            // console.log('toggle',id)
      }

  return (
    <div className='container'>
      <Headers onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} /> : "No Tasks to Show"}
     </div>
  )
}

export default App

