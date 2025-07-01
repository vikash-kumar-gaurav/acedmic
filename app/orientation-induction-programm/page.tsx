// import { FaPlay, FaChalkboardTeacher, FaUsers, FaLightbulb, FaRegSmile, FaLink, FaCloud, FaShieldAlt } from 'react-icons/fa';
// import { FiClock } from 'react-icons/fi';

// export default function OrientationPage() {
//   // Mock data
//   const highlights = [
//     {
//       title: "Future of AI",
//       description: "Exploring how AI will transform industries in the next decade",
//       icon: <FaLightbulb className="text-2xl" />
//     },
//     {
//       title: "Cloud Revolution",
//       description: "Understanding multi-cloud strategies and edge computing",
//       icon: <FaCloud className="text-2xl" />
//     },
//     {
//       title: "Blockchain Potential",
//       description: "Beyond cryptocurrency - real world applications",
//       icon: <FaLink className="text-2xl" />
//     },
//     {
//       title: "Cybersecurity",
//       description: "Protecting digital assets in an interconnected world",
//       icon: <FaShieldAlt className="text-2xl" />
//     }
//   ];

//   const testimonials = [
//     {
//       quote: "The session completely changed my perspective on career paths in IT.",
//       author: "Rahul Sharma, Batch 2023"
//     },
//     {
//       quote: "Director sir's insights about emerging technologies were eye-opening.",
//       author: "Priya Patel, Batch 2023"
//     }
//   ];

//   const dailySchedule = [
//     { time: "9:00 AM", activity: "Morning Motivation", duration: "30 mins" },
//     { time: "9:30 AM", activity: "Tech Trends Discussion", duration: "1 hour" },
//     { time: "10:30 AM", activity: "Hands-on Workshop", duration: "2 hours" },
//     { time: "1:00 PM", activity: "Lunch & Networking", duration: "1 hour" },
//     { time: "2:00 PM", activity: "Case Studies", duration: "1.5 hours" }
//   ];

//   return (
//     <div className="min-h-screen bg-orange-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-orange-400 to-orange-600 text-white py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to CIMAGE IT Family</h1>
//           <p className="text-xl md:text-2xl mb-8">Director's Motivational Session on Leading IT Technologies</p>
//           <div className="flex justify-center space-x-4">
//             <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition duration-300">
//               Watch Highlights
//             </button>
//             <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition duration-300">
//               Join Daily Classes
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bento Grid Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Session Highlights</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {highlights.map((item, index) => (
//             <div 
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-orange-500"
//             >
//               <div className="text-orange-500 mb-4">{item.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
//               <p className="text-gray-600">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Video Section */}
//       <div className="bg-orange-100 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Session Glimpses</h2>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Main Video */}
//             <div className="bg-white rounded-xl overflow-hidden shadow-lg">
//               <div className="relative pt-[56.25%] bg-gray-200">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <FaPlay className="text-6xl text-orange-500 opacity-80" />
//                 </div>
//                 <img 
//                   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
//                   alt="Director's session" 
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">Director's Opening Address</h3>
//                 <p className="text-gray-600 mb-4">Watch our Director inspire the new batch with vision for the future of IT</p>
//                 <button className="text-orange-600 font-medium hover:underline">Watch Full Video</button>
//               </div>
//             </div>
            
//             {/* Video Thumbnails */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {[1, 2, 3, 4].map((item) => (
//                 <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
//                   <div className="relative pt-[56.25%] bg-gray-200">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <FaPlay className="text-2xl text-orange-500 opacity-80" />
//                     </div>
//                     <img 
//                       src={`https://source.unsplash.com/random/300x200/?technology,${item}`} 
//                       alt="Session highlight" 
//                       className="absolute inset-0 w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h4 className="font-medium text-sm">Highlight {item}</h4>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CIMAGE Culture */}
//       <div className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">The CIMAGE Culture</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center p-6">
//               <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
//                 <FaUsers className="text-orange-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Inclusive Community</h3>
//               <p className="text-gray-600">Every student is valued and supported in their learning journey</p>
//             </div>
            
//             <div className="text-center p-6">
//               <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
//                 <FaChalkboardTeacher className="text-orange-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
//               <p className="text-gray-600">Learn from industry experts and experienced faculty</p>
//             </div>
            
//             <div className="text-center p-6">
//               <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
//                 <FaRegSmile className="text-orange-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Positive Environment</h3>
//               <p className="text-gray-600">Fostering creativity, innovation, and personal growth</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Daily Class Schedule */}
//       <div className="py-12 bg-orange-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Daily Class Structure</h2>
          
//           <div className="bg-white rounded-xl shadow-md overflow-hidden">
//             <div className="divide-y divide-gray-200">
//               {dailySchedule.map((item, index) => (
//                 <div key={index} className="p-6 hover:bg-orange-50 transition duration-200">
//                   <div className="flex items-start">
//                     <div className="bg-orange-100 p-3 rounded-lg mr-4">
//                       <FiClock className="text-orange-600 text-xl" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-lg font-semibold text-gray-800">{item.activity}</h3>
//                       <div className="flex justify-between mt-1">
//                         <span className="text-orange-600 font-medium">{item.time}</span>
//                         <span className="text-gray-500">{item.duration}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="mt-8 text-center">
//             <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
//               Join Tomorrow's Session
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials */}
//       <div className="py-12 bg-orange-100">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">What Students Say</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {testimonials.map((item, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
//                 <div className="text-orange-400 text-4xl mb-2">"</div>
//                 <p className="text-gray-700 text-lg mb-4">{item.quote}</p>
//                 <p className="text-orange-600 font-medium">{item.author}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="py-16 bg-orange-500 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Begin Your IT Journey?</h2>
//           <p className="text-xl mb-8">Join our daily sessions and transform your future with cutting-edge technology education</p>
//           <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-orange-50 transition duration-300">
//             Register for Orientation
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { FaPlay, FaChalkboardTeacher, FaUsers, FaCalendarAlt, FaRegSmile, FaArrowRight } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';

export default function OrientationPage() {
  // Mock data
  const pastInductionHighlights = [
    {
      title: "Director's Welcome",
      description: "Inspiring words to kickstart the academic journey",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "May 15, 2024"
    },
    {
      title: "Tech Showcase",
      description: "Hands-on demonstration of emerging technologies",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "May 16, 2023"
    },
    {
      title: "Industry Connect",
      description: "Panel discussion with IT industry leaders",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "May 17, 2023"
    },
    {
      title: "Campus Tour",
      description: "Exploring our state-of-the-art facilities",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "May 18, 2023"
    }
  ];

  const programDetails = [
    {
      day: "Day 1",
      title: "Orientation & Welcome",
      description: "Formal introduction to the institute, meet the faculty, and understand the academic roadmap for the coming year.",
      activities: [
        "Inaugural address by Director",
        "Department overview",
        "Ice-breaking sessions"
      ]
    },
    {
      day: "Day 2",
      title: "Technology Immersion",
      description: "Deep dive into current IT trends and how our curriculum prepares you for industry demands.",
      activities: [
        "Emerging tech showcase",
        "Lab demonstrations",
        "Alumni interaction"
      ]
    },
    {
      day: "Day 3",
      title: "Career Pathways",
      description: "Understanding various career options and specialization tracks available.",
      activities: [
        "Industry expert panel",
        "Placement process explained",
        "Skill development workshops"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Fixed Register Now Ribbon */}
      <div className="fixed top-20 right-0 bg-red-600 text-white px-6 py-2 transform rotate-45 translate-x-8 z-50 shadow-lg hover:bg-red-700 transition duration-300">
        <a href="#register" className="flex items-center font-bold">
          REGISTER NOW <FaArrowRight className="ml-2" />
        </a>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-red-700 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CIMAGE Induction Program 2024</h1>
          <p className="text-xl md:text-2xl mb-8">Embark on Your Technology Journey with Confidence</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 flex items-center">
              <FaPlay className="mr-2" /> Watch Highlights
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition duration-300">
              Program Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Past Induction Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">Highlights from Last Year's Induction</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Relive the memorable moments from our 2023 induction program that set the foundation for our students' success</p>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastInductionHighlights.map((item, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="flex items-center text-sm mb-2">
                  <FaCalendarAlt className="mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bento Effect */}
          <div className="bg-blue-100 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">Induction Program Glimpses</h2>
    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Explore highlights from our immersive orientation experience</p>
    
    {/* Bento Grid Container */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {/* Large Card (Top Left) */}
      <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Director's address"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 border border-white/10">
            <h3 className="text-white text-xl font-bold">Director's Welcome</h3>
            <p className="text-white/90 text-sm mt-1">Inspiring words to kickstart your journey</p>
          </div>
        </div>
      </div>

      {/* Medium Card (Top Right) */}
      <div className="relative rounded-2xl overflow-hidden group aspect-square">
        <img 
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Campus tour"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 border border-white/10">
            <h3 className="text-white text-lg font-bold">Campus Exploration</h3>
            <p className="text-white/90 text-xs mt-1">Discover our world-class facilities</p>
          </div>
        </div>
      </div>

      {/* Small Card (Middle Right) */}
      <div className="relative rounded-2xl overflow-hidden group aspect-square">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Tech showcase"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-red-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 border border-white/10">
            <h3 className="text-white text-lg font-bold">Tech Showcase</h3>
            <p className="text-white/90 text-xs mt-1">Hands-on with emerging technologies</p>
          </div>
        </div>
      </div>

      {/* Medium Card (Bottom Left) */}
      <div className="relative rounded-2xl overflow-hidden group aspect-square">
        <img 
          src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Workshop"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 border border-white/10">
            <h3 className="text-white text-lg font-bold">Interactive Workshop</h3>
            <p className="text-white/90 text-xs mt-1">Learning by doing</p>
          </div>
        </div>
      </div>

      {/* Large Card (Bottom Right) */}
      <div className="relative col-span-2 rounded-2xl overflow-hidden group">
        <img 
          src="https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/484049827_1051790576976881_7300474968993738926_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-Xpt5VKEaIEQ7kNvwHbfzyB&_nc_oc=Adl5RmNmYL8ZY9Pca0cnkJXESyjeIqoD7Ja4bTQnM-K2uqtwPKVgN65N5ao3C69yBmU&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=bMD7XsufxTN_mViCe_OfCQ&oh=00_AfNkXSlnAz5pKoNsPfEpKTOgMpGgBZt5_BKTaInCO24gHw&oe=6869771B"
          alt="Networking"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 border border-white/10">
            <h3 className="text-white text-xl font-bold">Networking Session</h3>
            <p className="text-white/90 text-sm mt-1">Connect with peers and faculty</p>
          </div>
        </div>
      </div>
    </div>

    {/* Program Details Button */}
    <div className="text-center mt-12">
      <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
        View Full Program Schedule
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  </div>
</div>

      {/* Video Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Watch the Induction Experience</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">See for yourself how our induction program transforms newcomers into confident IT professionals</p>
          
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden shadow-xl">
            {/* YouTube Video Embed */}
            <div className="w-full h-0 pb-[56.25%] relative">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="cursor-pointer group">
                <div className="relative">
                  <img 
                    src={`https://plus.unsplash.com/premium_photo-1750317246680-8e0c19023ec5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8`}
                    alt={`hi there`}
                    className="rounded-lg w-full"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <FaPlay className="text-white text-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div id="register" className="py-16 bg-gradient-to-r from-blue-800 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our IT Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Register now for the 2024 Induction Program and start your journey with the best possible foundation</p>
          
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Registration Form</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
                <button 
                  type="submit" 
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
                >
                  Submit Registration
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}