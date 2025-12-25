import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Terms from "./pages/terms";
import Winrate from "./pages/calculator/winrate";
import Zodiac from "./pages/calculator/zodiac";
import MagicWheel from "./pages/calculator/magicwheel"; // ⬅️ TAMBAH INI

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/terms" element={<Terms />} />

      {/* CALCULATOR */}
      <Route path="/calculator/winrate" element={<Winrate />} />
      <Route path="/calculator/zodiac" element={<Zodiac />} />
      <Route path="/calculator/magicwheel" element={<MagicWheel />} /> {/* ⬅️ BARU */}
    </Routes>
  );
}

export default App;
