import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import ApiRequest from "../Axios/axios.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../Utills/authContext.jsx";

const LoginComponent = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  // const history = useHistory();
  const defaultValues = {
    email: "",
    password: "",
  };
  const validateSchema = yup.object(defaultValues).shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await ApiRequest.post("/signin", {
        email: values.email,
        password: values.password,
      });
      console.log("Login successful:", response);

      // Storing token in localStorage
      let token = localStorage.setItem("token", response.data.token);
      login(token);
      toast.success("Login successful!", {
        autoClose: 0.5, // Close the toast after 1 seconds
        onClose: () => navigate("/"), // Redirect after toast closes
      });
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.", {
        autoClose: 0.5,
      });
    }

    resetForm();
    setSubmitting(false);
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <ToastContainer />
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h4 className="text-primary mb-2 mt-0 text-center text-3xl font-medium leading-tight text-gray-700">
            Log In
          </h4>
          <Formik
            initialValues={defaultValues}
            validationSchema={validateSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <label htmlFor="email"></label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="border-blue-gray-200 text-blue-gray-700 placeholder-blue-gray-200 disabled:bg-blue-gray-50 h-full w-full rounded-md border bg-transparent px-3 py-3 font-sans text-sm font-normal outline-none transition-all focus:border-2 focus:border-pink-500 focus:outline-none disabled:border-0"
                    />

                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                  <div className="relative h-11 w-full min-w-[200px]">
                    <label htmlFor="password"></label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="border-blue-gray-200 text-blue-gray-700 placeholder-blue-gray-200 disabled:bg-blue-gray-50 h-full w-full rounded-md border bg-transparent px-3 py-3 font-sans text-sm font-normal outline-none transition-all focus:border-2 focus:border-pink-500 focus:outline-none disabled:border-0"
                    />

                    <ErrorMessage
                      name="password"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                </div>

                <button
                  className="mt-6 block w-full select-none rounded-lg bg-slate-600 px-6 py-3 text-center align-middle text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-90 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                  data-ripple-light="true"
                >
                  Log In
                </button>
                <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  Don't have an account? &nbsp;
                  <Link
                    to="/register"
                    className="font-semibold text-gray-700 transition-colors hover:text-blue-700"
                  >
                    Register
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
