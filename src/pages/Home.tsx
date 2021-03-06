import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkMode, setDarkMode] = useState(true);

  function handleAddTask(newTaskTitle: string) {
    if (!!newTaskTitle) {
      setTasks([...tasks, {
        id: new Date().getTime(),
        done: false,
        title: newTaskTitle
      }])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(tasks.map(task => ({
      ...task,
      done: task.id === id ? !task.done : task.done
    })))
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <Header darkMode={darkMode} />

      <TodoInput addTask={handleAddTask} darkMode={darkMode} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
        darkMode={darkMode}
      />
    </>
  )
}