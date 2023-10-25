import "./App.scss";
//import Header from "./components/header/header";
import Home from "./components/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import MyNotes from "./components/myNotes/myNotes.component";
import MyLogin from "./components/login/login.components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/notes" element={<MyNotes />} />
        <Route path="/login" element={<MyLogin />} />
      </Route>
    </Routes>
  );
}

export default App;
