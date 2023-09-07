import { Routes, Route } from "react-router-dom";
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";


function App() {
  return (
    <div>
      <NavBar />
     
      <Routes>
        <Route path="/" element={<ItemlistContainer />} />
        <Route path="/category/:categoryId" element={<ItemlistContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartWidget />} />
        <Route path= "*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
