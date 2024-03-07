
import Sidebar from "../components/Sidebar";
import SinglePost from "../components/SinglePost";
import "./Single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
