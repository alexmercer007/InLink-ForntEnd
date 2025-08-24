
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import "./index.css"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
