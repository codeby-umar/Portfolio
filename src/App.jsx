import Home from "./pages/Home";
import Layout from "./Layout/layout";
import { Route , Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
           <Route path="/" element={<Layout><Home/></Layout>} />
      </Routes>
  )
}

export default App