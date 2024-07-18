import "font-awesome/css/font-awesome.min.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import RegisterComponent from "./Pages/Register.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import LoginComponent from "./Pages/Login.jsx";
import CheckoutPage from "./Pages/Checkout.jsx";
import { AuthProvider } from "./Utills/authContext.jsx";
import DefaultLayout from "./Layout/defaultLayout.jsx";
import CourseDetail from "./Components/CourseDetail.jsx";

import CoursesCard from "./Pages/CoursesCard.jsx";
import TermsAndConditions from "./Components/TermsAndConditions.jsx";
import ContactForm from "./Services/Contact.jsx";
function App() {
  return (
    <>
      <AuthProvider>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesCard />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
          </Routes>
        </DefaultLayout>
      </AuthProvider>
    </>
  );
}

export default App;
