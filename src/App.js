import { BrowserRouter as Router, Routes, Route, Outlet, } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Register from './Register';
import Login from "./Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
