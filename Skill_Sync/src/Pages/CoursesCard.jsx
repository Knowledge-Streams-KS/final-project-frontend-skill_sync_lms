import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-use-history";
import ApiRequest from "../Axios/axios.js";

const CoursesCard = () => {
  const [courses, setCourses] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await ApiRequest.get("/courses");
        setCourses(response.data.courses);
        console.log("Courses fetched successfully: ", response.data.courses);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCourses();
  }, []);
  const handleCourseClick = (courseId) => {
    history.push(`/course/${courseId}`);
  };
  return (
    <>
      <h1 className="mt-8 text-center font-heading  text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        Courses we offer
      </h1>
      <div className="grid md:grid-cols-3 gap-4 m-8 ">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleCourseClick(course.id)}
            className="w-full h-[440px] rounded-md border-2 shadow-md mb-4"
          >
            <img
              src={course.imageUrl}
              alt=""
              className="rounded-md rounded-b-none w-full h-[250px]"
            />
            <div className="flex flex-col gap-3 ml-3">
              <h1 className="text-3xl font-semibold">{course.title}</h1>
              <p>{course.description}</p>
              <p className="font-bold">Rs.{course.price}</p>
              <div className="flex">
                <Link
                  to={`/course/${course.id}`}
                  className="p-3 bg-[#2980B9] text-white font-semibold rounded-md"
                >
                  START LEARNING
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoursesCard;
