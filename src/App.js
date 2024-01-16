import "./App.css";
import Login from "./screens/Login";
import Main from "./screens/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./screens/Signup.js";
import { CardProvider } from "./components/ContextReducer.js";
import MyOrder from "./screens/MyOrder.js";

function App() {
  return (
    <CardProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/myOrder" element={<MyOrder />}></Route>
          </Routes>
        </div>
      </Router>
    </CardProvider>
  );
}

export default App;
