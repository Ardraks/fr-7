import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Topbar from "./components/Topbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/categories/Header";
import Writes from "./pages/Writes";
import About from "./components/About";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Topbar />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/single/:id" element={<SinglePost />} />
          {/* <Route path='/view/:id' element={<View />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/writes" element={<Writes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
