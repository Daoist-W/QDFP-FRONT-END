import "./App.scss";
import React from "react";
import Nav from "./components/Nav";
import Login from "./containers/Login";
import Home from "./containers/Home";
import JobCenter from "./containers/JobCenter";
import UserCenter from "./containers/UserCenter";
import User from "./components/User";
import Job from "./components/Job";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
    // function to import fontAwesome CDN;
    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://kit.fontawesome.com/61144d7783.js";
        script.crossOrigin = "anonymous";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/user/center" element={<UserCenter />} />
                    <Route path="/job/center" element={<JobCenter />} />
                    <Route path="/user/:id" element={<User />} />
                    <Route path="/job/:id" element={<Job />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
