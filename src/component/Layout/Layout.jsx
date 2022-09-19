import Navigation from "../Navigation/Navigation";
// import { Container } from "reactstrap";
import { Fragment } from "react";
import Footer from "../Footer/Footer";


const Layout = ({children}) => {
    return(
        <Fragment>
          <Navigation/>
            {children}
          <Footer/>  
        </Fragment>
    )
}

export default Layout;