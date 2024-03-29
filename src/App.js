import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Rule from "./pages/Rule";
import Each from "./pages/Each";
import Header from "./components/Header";
import MakeForm from "./pages/MakeForm";
import "./App.css";
import ResForm from "./pages/ResForm";
import Lotto from "./pages/Lotto";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className={"App"}>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path={"info"} element={<Info />} />
            <Route path={"info/:name"} element={<Each />} />
            <Route path={"rule"} element={<Rule />} />
            <Route path={"makeform"} element={<MakeForm />} />
            <Route path={"resform"} element={<ResForm />} />
            <Route path={"lotto"} element={<Lotto />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
