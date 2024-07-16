import { NavLink } from "react-router-dom";
const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jane Doe",
      role: "Designer",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "John Smith",
      role: "Developer",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "John Smith",
      role: "Developer",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "John Smith",
      role: "Developer",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Welcome to Skill Sync, your premier destination for enriching
              online learning experiences. Founded with a passion for education
              and innovation, we strive to empower individuals globally by
              providing access to high-quality, expert-led online courses.
              Whether you're looking to enhance your professional skills,
              explore new hobbies, or embark on a journey of personal
              development, we have something for everyone.
            </p>
            {/* <div className="mt-8">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </a>
            </div> */}
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="Online-Learning.jpg"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="bg-rose-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">OUR TEAM</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden mx-auto"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${member.imageUrl})` }}
                title="Team member"
              ></div>
              <div className="bg-white p-4">
                <NavLink
                  to="#"
                  className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out text-center"
                >
                  {member.name}
                </NavLink>
                <p className="text-sm text-gray-600 text-center">
                  {member.role}
                </p>
                <p className="text-gray-500 text-base mt-4 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className="mt-4 flex justify-center space-x-3">
                  <a href="#">
                    <svg
                      className="w-6 h-6"
                      fill="#000000"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="w-6 h-6"
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm-2 15.5v-9l8.5 4.8-8.5 4.8z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="w-6 h-6"
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm-2 15.5v-9l8.5 4.8-8.5 4.8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 bg-orange-100 text-black-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-bold tracking-widest text-black uppercase title-font">
              Why choose us?
            </h2>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
              We know tech, we know finance. We are fintech experts.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
              At Skill Sync, we stand out for several compelling reasons that
              make us your top choice for online learning.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="courses_icon.svg" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Diverse Course Selection
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Explore a vast array of courses curated to meet your diverse
                  learning needs. Whether you're a beginner or an expert looking
                  to deepen your knowledge, our platform offers courses across
                  various disciplines.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Interactive Learning Experience
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {" "}
                  Engage in an immersive learning environment with interactive
                  quizzes, assignments, and projects designed to reinforce your
                  understanding and skills.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Affordable Pricing
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {" "}
                  Access high-quality education at affordable prices. We believe
                  in making learning accessible without compromising on quality.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="support-svgrepo-com.svg" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Learning Support
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {" "}
                  Receive dedicated support throughout your learning experience.
                  From technical assistance to course-related queries, our team
                  is here to help you succeed.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
