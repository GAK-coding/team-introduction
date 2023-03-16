import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Rule from "./pages/Rule";
import Each from "./pages/Each";
import Header from "./components/Header";
import MakeForm from "./pages/MakeForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className={"App"}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path={"info"} element={<Info />} />
          <Route path={"info/:name"} element={<Each />} />
          <Route path={"rule"} element={<Rule />} />
          <Route path={"makeform"} element={<MakeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
