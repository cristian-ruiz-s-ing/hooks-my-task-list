import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { TaskList } from './components/TaskList'
import { myTaskList } from './utils/tasks'

function App() {

  return (
    <div className="App">
       <Header />
       <TaskList list={myTaskList}/>
    </div>
  )
}

export default App
