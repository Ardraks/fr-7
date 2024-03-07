import { useLocation } from "react-router";
import "./Homepage.css";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";


export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
    <Topbar />
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
   
    </>
  );
}
