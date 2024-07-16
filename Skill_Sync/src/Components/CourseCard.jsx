// import { NavLink } from "react-router-dom";

// function CourseCard({ courses }) {

//   return (
//     <section className="py-10">
//       <h1 className="mb-12 text-center font-sans text-5xl font-bold">
//         Courses We Offer
//       </h1>
//       <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg"
//           >
//             <NavLink to="#">
//               <img
//                 src={course.imageUrl}
//                 className="h-56 w-full object-cover"
//                 alt=""
//               />
//               <div className="flex-auto px-6 py-5">
//                 <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
//                   {course.title}
//                 </h3>
//                 <p className="mb-4 text-base font-light">
//                   {course.description}
//                 </p>
//                 <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
//                   Explore
//                 </span>
//               </div>
//             </NavLink>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default CourseCard;
