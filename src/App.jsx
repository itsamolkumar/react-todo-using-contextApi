import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import AddForm from "./components/AddForm";
import { TodoProvider } from "./contexts/Todo";

// Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const Home = ({ todos }) => (
  <div className="min-h-[70vh]">
    <AddForm />
    <div className="flex flex-col gap-5 px-4">
      {todos.map((todo) => (
        <div key={todo.id} className="w-full">
          <TaskList todo={todo} />
        </div>
      ))}
    </div>
  </div>
);

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    setTodos([task, ...todos]);
  };

  const updateTask = (id, newTodo) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, task: newTodo } : t)));
  };

  const delTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const isCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos"));
    if (stored && stored.length > 0) {
      setTodos(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTask, updateTask, delTask, isCompleted }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home todos={todos} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/task" element={<Home todos={todos} />} />
        </Routes>
      </Router>
      <Footer/>
    </TodoProvider>
  );
};

export default App;
