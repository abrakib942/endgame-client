import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calendar from "./Pages/Calendar";
import Completed from "./Pages/Completed";
import Home from "./Pages/Home/Home";
import Todo from "./Pages/Todo/Todo";
import Navbar from "./Shared/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./Shared/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complete" element={<Completed />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>

      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
