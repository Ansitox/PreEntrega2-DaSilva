import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./pages/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./pages/ItemDetail/ItemDetailContainer";
import { CartContainer } from "./pages/Cart/CartContainer";
import { ScreenMessage } from "./pages/ScreenMessage/ScreenMessage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route
            path="/cart"
            element={
              <ScreenMessage message="No has agregado ningún producto al carrito." />
            }
          />
          <Route
            path="*"
            element={
              <ScreenMessage message="Error 404, no se ha podido encontrar la página." />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
