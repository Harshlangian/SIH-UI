import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import CurrentPage from "./components/currentPage";
import SignUp from "./components/signUp";
export default function App() {
  const navigate = useNavigate();

  return (
    <>
      

      <Routes>
        <Route path="/current" element={<CurrentPage />} />
         <Route path="/" element={<SignUp />} />
      </Routes>
    </>
  );
}
