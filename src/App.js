import "./App.scss";
import React from "react";
import Nav from "./components/Nav";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Profile from "./components/Profile";
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
                    <Route path="/home/:id" element={<Profile />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
