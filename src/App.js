import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Rule from "./pages/Rule";
import Each from "./pages/Each";
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path={"info"} element={<Info />} />
        <Route path={"info/:name"} element={<Each />} />
        <Route path={"rule"} element={<Rule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
