import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Settings.css";
import baseurl from "../Api";
import axios from "axios";

const Settings = () => {
  const [file, setFile] = useState(null);
  var [selectedimage, setSelectedimage] = useState();
  const [inputs, setInputs] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    // status: "",
  });

  const token = localStorage.getItem("imageid");

  useEffect(() => {
    const storevalue = localStorage.getItem("user");
    axios
      .get(baseurl + "/register/sviewuser/" + storevalue)
      .then((response) => {
        console.log(response);
        setInputs((prevData) => ({
          username: response.data[0].username,
          email: response.data[0].email,
          password: response.data[0].password,
          id: response.data[0]._id,
          // status: response.data[0].status,
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  const inputhandler = (event) => {
    const { name, value } = event.target;
    setInputs((nputs) => ({ ...nputs, [name]: value }));
  };

  const handleimage = (event) => {
    const file = event.target.files[0];
    setSelectedimage(file);
    setFile(file);
    inputs.profilephoto = file;
  };

  const savedata = (event) => {
    event.preventDefault();
    console.log("dgjks");

    const formdata = new FormData();
    formdata.append("username", inputs.username);
    formdata.append("email", inputs.email);
    formdata.append("password", inputs.password);
    formdata.append("profilephoto", selectedimage);

    // fetch(baseurl + "/update/pnew", { method: "post", body: formdata })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     alert("record saved");
    //   })
    //   .catch((err) => {
    //     console.log("error");
    //   });

    axios
      .put(
        `${baseurl}/update/user/${inputs.id}`,
        { inputs, file },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((data) => {
        console.log(data.data.data._id);
        localStorage.setItem("imageid", data.data.data._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="settings">
      <div>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account</span>
            <span className="settingsTitleDelete">Delete Account</span>
          </div>
          {inputs && (
            <>
              <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                  {file && (
                    <img
                      className="writeImg"
                      src={URL.createObjectURL(file)}
                      alt=""
                    />
                  )}
                  {token && (
                    <img src={`${baseurl}/public/images/${token}.jpg`} />
                  )}
                  <label htmlFor="fileInput">
                    <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    className="settingsPPInput"
                    onChange={handleimage}
                  />
                </div>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={inputs.username}
                  onChange={inputhandler}
                />
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={inputs.email}
                  onChange={inputhandler}
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={inputs.password}
                  onChange={inputhandler}
                />
                <button
                  className="settingsSubmitButton"
                  type="submit"
                  onClick={savedata}
                >
                  update
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
