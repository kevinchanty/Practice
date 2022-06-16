import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import AppLayout from "./componenets/AppLayout";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />ˇ
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
