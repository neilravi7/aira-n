import Navigation from "../Navigation/Navigation";
// import { Container } from "reactstrap";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";


const CommonLayout = (props) => {
    return(
        <>
          <Navigation/>
          <main>
          <Outlet></Outlet>
          </main>
          <Footer/>  
        </>
    )
}

export default CommonLayout;