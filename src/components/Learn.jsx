// import ccl from '../Images/CCL.webp';
// export default function Learn() {
//   return (
//     <div className="w-full bg-white py-10 px-4 md:px-16">
//       <div className="flex flex-col md:flex-row gap-10 items-center">
//         <div className="md:w-1/2 space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Don’t know how to wear contact lenses?
//           </h2>
//           <p className="text-lg text-gray-600">
//             Learn the Basics of Contact Lens Wear
//           </p>

//           <button className="bg-teal-100 text-teal-700 font-semibold py-3 px-6 rounded-full hover:bg-teal-200 transition">
//             Shop now →
//           </button>

//           <img
//              src={ccl}
//              alt="Try on app demo"
//             className="rounded-2xl w-full max-w-md shadow"
//           />
//         </div>

//         <div className="md:w-1/2">
//           <img
//              src={ccl}
//              alt="Try on app demo"
//             className="rounded-2xl w-full max-w-md shadow"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }




import ccl from '../Images/CCL.webp';

export default function Learn() {
  return (
    <div className="w-full bg-white py-10 px-4 md:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Don’t know how to wear contact lenses?
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Learn the Basics of Contact Lens Wear
          </p>

          <button className="bg-teal-100 text-teal-700 font-semibold py-3 px-6 rounded-full hover:bg-teal-200 transition">
            Shop now →
          </button>

          <img
            src={ccl}
            alt="Learn Contact Lenses"
            className="rounded-2xl w-full shadow"
          />
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src={ccl}
            alt="Learn Contact Lenses"
            className="rounded-2xl w-full shadow"
          />
        </div>
      </div>
    </div>
  );
}
