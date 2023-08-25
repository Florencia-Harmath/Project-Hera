import { Routes, Route } from "react-router-dom";
import ItemlistContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";

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
