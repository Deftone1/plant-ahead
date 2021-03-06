import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar";
import Main from "./pages/Main"
import MyProjects from "./pages/MyProjects";
// import ProtectedExamplePage from "./pages/ProtectedExamplePage";
import { ProvideAuth } from "./util/authContext";
import ProtectedRoute from "./pages/ProtectedRoute";
// import Title from "./components/Title";
import Community from "./pages/Community";


function App() {
  return (
    <ProvideAuth>
      <Router>
        <Navbar />
        
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <ProtectedRoute path="/protected/main">
            <Main/>
          </ProtectedRoute>
          <ProtectedRoute path="/protected/projects">
            <MyProjects/>
          </ProtectedRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
