import { Link } from "react-router-dom";

const CoursesCard = () => {
  return (
    <div className="grid md:grid-cols-3 w-100% md:h-[500px] p-4 mt-10">
      {/** this is fontend course */}
      <div className="w-100% h-[400px] mx-2 rounded-md border-2 shadow-md mb-4">
        <img
          src="font-end.jpg"
          alt="font end"
          className="rounded-md rounded-b-none w-[100%] h-[250px]"
        />
        <div className="flex flex-col gap-3 ml-3">
          <h1 className="text-3xl font-semibold">Front-End Engineer</h1>
          <p>HTML,CSS,JS and REACT.JS</p>
          <div className="flex">
            <Link
              to="/product-detail"
              className="p-3 bg-[#2980B9] text-white font-semibold rounded-md"
            >
              START LEARNING
            </Link>
          </div>
        </div>
      </div>

      {/** this is backen course */}
      <div className="w-100% h-[400px] mx-2 rounded-md border-2 shadow-md mb-4">
        <img
          src="back-end.jpeg"
          alt="back end"
          className="rounded-md rounded-b-none w-[100%] h-[250px]"
        />
        <div className="flex flex-col gap-3 ml-3 h-[250px]">
          <h1 className="text-3xl font-semibold">Back-End Engineer</h1>
          <p>NODE.JS EXPRESS.JS</p>
          <div className="flex">
            <Link
              to="/product-detail"
              className="p-3 bg-[#2980B9] text-white font-semibold rounded-md"
            >
              START LEARNING
            </Link>
          </div>
        </div>
      </div>

      {/** this is full stack course */}
      <div className="w-100% h-[400px] mx-2 rounded-md border-2 shadow-md">
        <img
          src="full-stack.jpeg"
          alt="full stack"
          className="rounded-md rounded-b-none w-[100%] h-[250px]"
        />
        <div className="flex flex-col gap-3 ml-3">
          <h1 className="text-3xl font-semibold">Full Stack Engineer</h1>
          <p>HTML,CSS,JS and REACT.JS,NODE.JS</p>
          <div className="flex">
            <Link
              to="/product-detail"
              className="p-3 bg-[#2980B9] text-white font-semibold rounded-md"
            >
              START LEARNING
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
