import Footer from "../Components/Footer.jsx";
import NavBar from "../Components/NavBar.jsx";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
