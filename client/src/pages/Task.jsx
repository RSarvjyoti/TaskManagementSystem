import React from 'react'
import '../styles/task.css'
import TaskForm from '../components/TaskForm'
import TaskTable from '../components/TaskTable'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Task() {
  return (
    <div>
      <Navbar />
      <TaskForm />
      <TaskTable />
      <Footer />
    </div>
  )
}

export default Task
