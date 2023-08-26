import { Routes, Route } from "react-router-dom";
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
     
      <Routes>
        <Route path="/" element={<ItemlistContainer />} />
        <Route path="/category/:categoryId" element={<ItemlistContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
