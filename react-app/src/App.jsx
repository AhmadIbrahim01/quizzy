import './App.css'
import './styles/base/utilities.css'
import './styles/base/base.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Quiz from './pages/Quiz';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/home"
                        element={<Home />}
					>
                    </Route>
                    <Route
                        path="/quiz"
                        element={<Quiz />}
					>
                    </Route>
                    <Route
                        path="/login"
                        element={<Login />}
					>
                    </Route>
                    <Route
                        path="/"
                        element={<Register />}
					>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
