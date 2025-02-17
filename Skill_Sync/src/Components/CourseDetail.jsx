import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiRequest from "../Axios/axios";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    console.log(courseId, "courseId");
    const fetchCourse = async () => {
      try {
        const response = await ApiRequest.get(`/course/${courseId}`);
        setCourse(response.data);
        console.log("Course fetched successfully: ", response.data.course);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCourse();
  }, [courseId]);
  if (!course) {
    return <div>Loading.......</div>;
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl ">
          Course Details
        </h1>
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full max-w-full object-cover"
                    src={course.imageUrl}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
              {course.title}
            </h1>

            <h2 className="mt-8 text-base text-gray-900">
              Choose subscription
            </h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              <label>
                <input
                  type="radio"
                  name="subscription"
                  value="4 Months"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  1 Months
                </p>
                <span className="mt-1 block text-center text-xs">$80/mo</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="subscription"
                  value="8 Months"
                  className="peer sr-only"
                  defaultChecked
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  6 Months
                </p>
                <span className="mt-1 block text-center text-xs">$60/mo</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="subscription"
                  value="12 Months"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  1 Year
                </p>
                <span className="mt-1 block text-center text-xs">$40/mo</span>
              </label>
            </div>

            <div className="mt-20 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-1xl font-bold">{course.price}</h1>{" "}
                {/*props will come from Product card*/}
                <span className="text-base">/month</span>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-5 py-2 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 mr-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {/*when clicked on a button it will navigate to payment page*/}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Proceed
              </button>
            </div>

            <ul className="mt-8 space-y-2">
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  className="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Free shipping worldwide
              </li>

              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  className="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                Cancel Anytime
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="flex gap-4">
              <h4
                to="#"
                className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
              >
                {" "}
                Description{" "}
              </h4>
            </div>

            <div className="mt-3 flow-root sm:mt-12">
              <h1 className="mt-3 text-3xl font-bold">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                numquam enim facere.
              </p>
              <p className="mt-4">
                Amet consectetur adipisicing elit. Optio numquam enim facere.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                rerum nostrum eius facere, ad neque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
