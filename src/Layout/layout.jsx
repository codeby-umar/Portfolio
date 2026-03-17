import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function layout({children}) {
  return (
      <main>
          <Navbar/>
               {children}
          <Footer/>
      </main>
  )
}

export default layout