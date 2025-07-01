


// import Head from "next/head";
// import {
//   FaUniversity,
//   FaRobot,
//   FaBookOpen,
//   FaGraduationCap,
//   FaCodeBranch,
//   FaLaptopCode,
//   FaNetworkWired,
//   FaServer,
//   FaTools,
//   FaBrain,
//   FaPython,
//   FaCode,
//   FaFileAlt,
//   FaPenNib,
// } from "react-icons/fa";

// export default function SyllabusPage() {
//   return (
//     <>
//       <Head>
//         <title>Syllabus | Academic Programs</title>
//       </Head>

//       <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 p-6 md:p-12">
//         <section className="max-w-6xl mx-auto">
//           {/* Header */}
//           <header className="text-center mb-12">
//             <FaUniversity size={50} className="text-blue-600 mx-auto mb-4" />
//             <h1 className="text-4xl font-bold text-blue-800">
//               Academic Programs & Syllabus
//             </h1>
//             <p className="text-gray-600 mt-2">
//               Explore the full curriculum and specialization add-ons across
//               our technical and management programs.
//             </p>
//           </header>

//           {/* Degree Programs */}
//           <section className="mb-16">
//             <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center justify-center">
//               <FaBookOpen className="mr-2 text-blue-500" />
//               Degree Programs
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "BCA",
//                   icon: <FaLaptopCode />,
//                   subjects: [
//                     "C & C++",
//                     "Data Structures",
//                     "DBMS",
//                     "Networking",
//                     "Web Dev",
//                     "Python",
//                   ],
//                 },
//                 {
//                   title: "BSc IT",
//                   icon: <FaCodeBranch />,
//                   subjects: [
//                     "Java",
//                     "Computer Networks",
//                     "Software Engineering",
//                     "SQL",
//                     "Cloud Basics",
//                   ],
//                 },
//                 {
//                   title: "PGDM",
//                   icon: <FaGraduationCap />,
//                   subjects: [
//                     "Finance",
//                     "Marketing",
//                     "Business Analytics",
//                     "HR Management",
//                   ],
//                 },
//                 {
//                   title: "BBA",
//                   icon: <FaUniversity />,
//                   subjects: [
//                     "Accounting",
//                     "Organizational Behavior",
//                     "Economics",
//                     "Digital Business",
//                   ],
//                 },
//                 {
//                   title: "BBM",
//                   icon: <FaUniversity />,
//                   subjects: [
//                     "Supply Chain",
//                     "Entrepreneurship",
//                     "Business Law",
//                     "Marketing Research",
//                   ],
//                 },
//                 {
//                   title: "MCA",
//                   icon: <FaLaptopCode />,
//                   subjects: [
//                     "Python & AI",
//                     "OS",
//                     "Cloud Computing",
//                     "Mobile Apps",
//                     "Compiler Design",
//                   ],
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-center flex flex-col items-center"
//                 >
//                   <div className="text-blue-500 text-4xl mb-4">{item.icon}</div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">
//                     {item.title}
//                   </h3>
//                   <ul className="text-gray-600 text-sm space-y-1">
//                     {item.subjects.map((subj, idx) => (
//                       <li key={idx} className="flex items-center justify-center gap-2">
//                         <FaCode className="text-blue-400" /> {subj}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Add-On Programs */}
//           <section className="mt-20">
//             <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center justify-center">
//               <FaTools className="mr-2 text-green-500" />
//               Add-On Specializations
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "Robotics & IoT",
//                   icon: <FaRobot />,
//                   desc: "Learn automation with Arduino, sensors, Raspberry Pi, and robotic arms.",
//                 },
//                 {
//                   title: "A+ Certification",
//                   icon: <FaServer />,
//                   desc: "Get started with hardware, troubleshooting, and PC assembly.",
//                 },
//                 {
//                   title: "N+ Certification",
//                   icon: <FaNetworkWired />,
//                   desc: "Master networking basics, routers, IP, and configuration.",
//                 },
//                 {
//                   title: "Python for AI",
//                   icon: <FaPython />,
//                   desc: "Build skills in Python, data science, and machine learning.",
//                 },
//                 {
//                   title: "Govt. Exam Prep",
//                   icon: <FaFileAlt />,
//                   desc: "Coaching support for SSC, Banking, UPSC, and State-level exams.",
//                 },
//                 {
//                   title: "MCA Entrance / NIMSETS",
//                   icon: <FaBrain />,
//                   desc: "Crack entrance tests like NIMCET, CUET-PG, and other MCA/M.Tech exams.",
//                 },
//               ].map((addon, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col text-center items-center"
//                 >
//                   <div className="text-green-600 text-4xl mb-4">{addon.icon}</div>
//                   <h4 className="text-lg font-semibold text-gray-800 mb-1">
//                     {addon.title}
//                   </h4>
//                   <p className="text-gray-600 text-sm">{addon.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* University Info */}
//           <section className="mt-24 bg-blue-50 border border-blue-100 p-8 rounded-lg shadow-sm text-center">
//             <FaUniversity className="text-blue-400 text-5xl mx-auto mb-4" />
//             <h3 className="text-2xl font-bold text-blue-800 mb-2">
//               Affiliated Universities
//             </h3>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               Our curriculum is designed in collaboration with reputed
//               universities such as IGNOU, PTU, and institutions approved by
//               UGC/AICTE. Certifications are nationally recognized and industry
//               aligned.
//             </p>
//           </section>
//         </section>
//       </main>
//     </>
//   );
// }



// import Head from "next/head";
// import {
//   FaUniversity,
//   FaRobot,
//   FaBookOpen,
//   FaGraduationCap,
//   FaCodeBranch,
//   FaLaptopCode,
//   FaNetworkWired,
//   FaServer,
//   FaTools,
//   FaBrain,
//   FaPython,
//   FaFileAlt,
// } from "react-icons/fa";

// const degreePrograms = [
//   {
//     title: "BCA",
//     icon: <FaLaptopCode />,
//     description:
//       "Comprehensive program in software development, databases, and application design.",
//   },
//   {
//     title: "BSc IT",
//     icon: <FaCodeBranch />,
//     description:
//       "Emphasis on network technology, system analysis, and programming logic.",
//   },
//   {
//     title: "PGDM",
//     icon: <FaGraduationCap />,
//     description:
//       "Specialized postgraduate training in finance, marketing, HR, and management skills.",
//   },
//   {
//     title: "BBA",
//     icon: <FaUniversity />,
//     description:
//       "Business program for leadership, accounting, and operational strategy.",
//   },
//   {
//     title: "BBM",
//     icon: <FaUniversity />,
//     description:
//       "Focuses on innovation, entrepreneurship, and global business practices.",
//   },
//   {
//     title: "MCA",
//     icon: <FaLaptopCode />,
//     description:
//       "Master’s program in computer science, full stack dev, and AI applications.",
//   },
// ];

// const addOnPrograms = [
//   {
//     title: "Robotics & IoT",
//     icon: <FaRobot />,
//     desc: "Work on hardware-driven automation using sensors and controllers.",
//   },
//   {
//     title: "A+ Certification",
//     icon: <FaServer />,
//     desc: "Foundation course in hardware, installation, and system support.",
//   },
//   {
//     title: "N+ Certification",
//     icon: <FaNetworkWired />,
//     desc: "Networking essentials for routing, IP addressing, and firewalls.",
//   },
//   {
//     title: "Python for AI",
//     icon: <FaPython />,
//     desc: "Start your AI journey with Python, ML tools, and automation logic.",
//   },
//   {
//     title: "Govt. Exam Prep",
//     icon: <FaFileAlt />,
//     desc: "Preparation for SSC, banking, and central/state level exams.",
//   },
//   {
//     title: "MCA Entrance / NIMCET",
//     icon: <FaBrain />,
//     desc: "Mock tests, aptitude training, and advanced CS concepts for MCA admission.",
//   },
// ];

// export default function SyllabusPage() {
//   return (
//     <>
//       <Head>
//         <title>Syllabus | Academic Programs</title>
//       </Head>

//       <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 px-4 py-8 sm:px-6 md:px-12">
//         <section className="max-w-6xl mx-auto">
//           {/* Header */}
//           <header className="text-center mb-12">
//             <FaUniversity size={40} className="text-blue-600 mx-auto mb-3 sm:mb-4" />
//             <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 leading-tight">
//               Academic Programs & Syllabus
//             </h1>
//             <p className="text-gray-600 text-sm sm:text-base mt-2">
//               Explore the curriculum highlights across our undergraduate,
//               postgraduate, and technical diploma programs.
//             </p>
//           </header>

//           {/* Degree Programs */}
//           <section className="mb-20">
//             <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6 flex items-center justify-center">
//               <FaBookOpen className="mr-2 text-blue-500" />
//               Degree Programs
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//               {degreePrograms.map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-center flex flex-col items-center"
//                 >
//                   <div className="text-blue-500 text-3xl mb-3">{item.icon}</div>
//                   <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
//                   <p className="text-gray-600 text-sm">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Add-On Programs */}
//           <section className="mt-12">
//             <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-6 flex items-center justify-center">
//               <FaTools className="mr-2 text-green-500" />
//               Add-On Specializations
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
//               {addOnPrograms.map((addon, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col text-center items-center"
//                 >
//                   <div className="text-green-600 text-3xl mb-3">{addon.icon}</div>
//                   <h4 className="text-base font-semibold text-gray-800 mb-1">{addon.title}</h4>
//                   <p className="text-gray-600 text-sm">{addon.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* University Info */}
//           <section className="mt-20 bg-blue-50 border border-blue-100 p-6 sm:p-8 rounded-lg shadow-sm text-center">
//             <FaUniversity className="text-blue-400 text-4xl sm:text-5xl mx-auto mb-4" />
//             <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2">
//               Affiliated Universities
//             </h3>
//             <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
//               All academic programs are affiliated with recognized universities such as IGNOU, PTU, and other UGC/AICTE approved institutions, ensuring quality education and valid certifications.
//             </p>
//           </section>
//         </section>
//       </main>
//     </>
//   );
// }



import Head from "next/head";
import {
  FaUniversity,
  FaBookOpen,
  FaGraduationCap,
  FaCodeBranch,
  FaLaptopCode,
  FaTools,
  FaRobot,
  FaNetworkWired,
  FaServer,
  FaBrain,
  FaPython,
  FaFileAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const degreePrograms = [
  {
    title: "BCA",
    icon: <FaLaptopCode />,
    duration: "3 Years",
    whatYouLearn: [
      "Programming in C, C++, Python, Java",
      "Web Development & Database Management",
      "Software Engineering & Cloud Basics",
    ],
    benefits: [
      "Strong base for software careers",
      "Preparation for MCA or tech jobs",
    ],
  },
  {
    title: "BSc IT",
    icon: <FaCodeBranch />,
    duration: "3 Years",
    whatYouLearn: [
      "Network fundamentals & security",
      "Data Structures & Operating Systems",
      "System analysis & IT tools",
    ],
    benefits: [
      "Perfect for IT support & admin roles",
      "Good base for certifications",
    ],
  },
  {
    title: "PGDM",
    icon: <FaGraduationCap />,
    duration: "2 Years",
    whatYouLearn: [
      "Finance, HR, Marketing basics",
      "Project Management & Analytics",
      "Startup & leadership skills",
    ],
    benefits: [
      "Gateway to management roles",
      "Business-ready practical exposure",
    ],
  },
  {
    title: "BBA",
    icon: <FaUniversity />,
    duration: "3 Years",
    whatYouLearn: [
      "Organizational behavior, accounting",
      "Business strategy, HR & ops",
      "Marketing & communication skills",
    ],
    benefits: [
      "Career-ready business curriculum",
      "Good for MBA aspirants",
    ],
  },
  {
    title: "BBM",
    icon: <FaUniversity />,
    duration: "3 Years",
    whatYouLearn: [
      "International business & logistics",
      "Financial systems & analytics",
      "E-commerce & innovation",
    ],
    benefits: [
      "Great for management trainees",
      "Well-rounded corporate prep",
    ],
  },
  {
    title: "MCA",
    icon: <FaLaptopCode />,
    duration: "2 Years",
    whatYouLearn: [
      "AI/ML, Full Stack & Data Science",
      "Advanced DBMS & DevOps",
      "System architecture & app design",
    ],
    benefits: [
      "Leads to high-paying tech roles",
      "Ideal for tech advancement",
    ],
  },
];

const addOnPrograms = [
  {
    title: "Robotics & IoT",
    icon: <FaRobot />,
    desc: "Projects with Arduino, sensors, and automation kits.",
  },
  {
    title: "A+ Certification",
    icon: <FaServer />,
    desc: "Hardware installation, OS setup, and support basics.",
  },
  {
    title: "N+ Certification",
    icon: <FaNetworkWired />,
    desc: "Network topologies, IP addressing, routing essentials.",
  },
  {
    title: "Python for AI",
    icon: <FaPython />,
    desc: "Basics to intermediate scripting with automation and ML.",
  },
  {
    title: "Govt. Exam Prep",
    icon: <FaFileAlt />,
    desc: "Practice sets and coaching for SSC, Railways & Banks.",
  },
  {
    title: "MCA Entrance (NIMCET)",
    icon: <FaBrain />,
    desc: "Logical reasoning, coding aptitude, mock test series.",
  },
];

export default function SyllabusPage() {
  return (
    <>
      <Head>
        <title>Syllabus | Academic Programs</title>
      </Head>

      <main className="bg-gradient-to-b from-white via-gray-50 to-gray-100 px-4 py-10 sm:px-6 md:px-12">
        <section className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <FaUniversity size={40} className="text-gray-700 mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
              Academic Programs & Syllabus
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl mx-auto">
              Detailed overview of our degree programs and technical add-ons to upskill for real-world careers.
            </p>
          </header>

          {/* Degree Programs */}
          <section className="mb-20">
            <h2 className="text-xl sm:text-2xl font-medium text-center text-gray-800 mb-8 flex items-center justify-center">
              <FaBookOpen className="mr-2 text-gray-500" /> Degree Programs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {degreePrograms.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
                >
                  <div className="text-3xl text-gray-600 mb-3">{program.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{program.title}</h3>
                  <div className="text-sm text-gray-500 mb-3 flex items-center justify-center gap-1">
                    <FaClock className="text-gray-400" /> Duration: {program.duration}
                  </div>
                  <ul className="text-sm text-gray-700 list-disc list-inside mb-3 space-y-1 text-left w-full max-w-xs">
                    {program.whatYouLearn.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="w-full max-w-xs">
                    {program.benefits.map((b, i) => (
                      <div key={i} className="text-gray-600 flex items-start text-sm">
                        <FaCheckCircle className="mr-2 mt-0.5 text-gray-500" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Add-On Programs */}
          <section className="mt-16">
            <h2 className="text-xl sm:text-2xl font-medium text-center text-gray-800 mb-8 flex items-center justify-center">
              <FaTools className="mr-2 text-gray-500" />
              Add-On Specializations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {addOnPrograms.map((addon, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col text-center items-center"
                >
                  <div className="text-3xl text-gray-600 mb-2">{addon.icon}</div>
                  <h4 className="text-base font-semibold text-gray-800 mb-1">
                    {addon.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{addon.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* University Info */}
          <section className="mt-24 bg-gray-100 border border-gray-200 p-6 sm:p-8 rounded-lg text-center">
            <FaUniversity className="text-4xl text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Affiliated Universities
            </h3>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
              We are partnered with IGNOU, PTU, and other UGC-recognized universities to offer certified and respected degrees nationwide.
            </p>
          </section>
        </section>
      </main>
    </>
  );
}
