
import { FaUserEdit, FaClipboardCheck, FaUserTie, FaUsers, FaYoutube, FaArrowRight, FaQuestionCircle, FaUserGraduate } from 'react-icons/fa';

const AdmissionProcessPage = () => {
  const steps = [
    {
      id: 1,
      title: "Online Registration",
      description: "Fill out our simple online application form with basic information about your child and your family.",
      icon: <FaUserEdit className="text-blue-500 text-3xl" />,
      image: "https://plus.unsplash.com/premium_photo-1661371736790-de30674f9e46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9ybSUyMGZpbGxpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 2,
      title: "Entrance Examination",
      description: "Students will take a brief assessment to help us understand their current academic level.",
      icon: <FaClipboardCheck className="text-red-500 text-3xl" />,
      image: "https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/485004483_1050978943724711_2149463396478522350_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Y2Yxm-6CXzYQ7kNvwHJaBr8&_nc_oc=AdmLeu5Yui6Czro7Ya7WwVbR2ZSDq0hxDK7Vw7UsCKqv_HdLKKrGFQN7Cx28PS61als&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=7AkrmNFqBYx4J05YTRxofg&oh=00_AfN-kz4THH5WFvcgOaXbmQV0tp9V2D1Zxe60aOhaZ_TqCA&oe=68698997"
    },
    {
      id: 3,
      title: "Student Interview",
      description: "A friendly conversation with our faculty to get to know your child better.",
      icon: <FaUserTie className="text-blue-500 text-3xl" />,
      image: "https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/487286907_1060133819475890_7989696927894130848_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=m4_vREb3Bv0Q7kNvwHNZksG&_nc_oc=AdkAWJ1FpzqnycTydGYiAj56952QbA9NiPOSn85BmXKu-gRx_LYdHg1taAmn4bQCpwo&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=df0JqJCzfrMOU17aYspIYA&oh=00_AfNWbXhIvbQrcJIYt0ZQclJMtwBCTafwN7gPVBI-hEHNTQ&oe=6869708C"
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting",
      description: "An opportunity for us to discuss your child's needs and our educational approach.",
      icon: <FaUsers className="text-red-500 text-3xl" />,
      image: "https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/487181229_1060103419478930_6683140028752957733_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HoPRiq_2XMsQ7kNvwE14jdC&_nc_oc=AdkDdPzxX5iraZDOBifA4HhtiTsHzDqIu2j2z_k-l_yEw4aDjWk6lDgMZ4AIaDSItA4&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=DsKQ0l-k76nCT69CWNtLWQ&oh=00_AfOT2Fe9jZh8Xm8VVasUmd-7F8YO0dxnWV-Jd9h5yOMBZQ&oe=6869911C"
    }
  ];

  const highlights = [
    "Personalized learning approach",
    "Experienced and caring faculty",
    "State-of-the-art facilities",
    "Inclusive and diverse community",
    "Focus on holistic development"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Admission Process</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step admission process ensures we get to know each student and family personally.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-white p-3 rounded-full shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden ">
          <div className="md:flex items-center">
            <div className="md:w-1/2 p-8 flex items-start space-x-4">
  {/* Icon */}
  <div className="text-blue-500 mt-1">
    <FaQuestionCircle size={32} />
  </div>

  {/* Text Content */}
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Still have questions?</h2>
    <p className="text-gray-600">
      Watch our short video that walks you through the entire admission process and what makes our school special.
    </p>
  </div>
</div>
            <div className="flex items-center justify-end w-full">
              {/* YouTube video embed */}
              <iframe src="https://www.youtube.com/embed/OM--5qQrZ8s?si=ACAb1e0ZEnH-hu6m" title="YouTube video player"  className='rounded-md w-full aspect-video border-2 m-3 max-w-2xl shadow-2xl' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </div>

        {/* CTA Section */}
<div className="bg-white rounded-xl shadow-md overflow-hidden">
  <div className="md:flex items-center">
    
    {/* Text Block */}
    <div className="w-full p-8 md:p-12">
      {/* Badge */}
      <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
        <FaUserGraduate className="mr-2" />
        Admissions Open 2025
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to begin your journey with us?</h2>

      {/* Subtext */}
      <p className="text-gray-600 mb-6">
        Unlock a world of opportunities by enrolling in a school that prioritizes curiosity, creativity, and character.
      </p>

      {/* Highlights List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {highlights.map((item, index) => (
          <li key={index} className="flex items-center text-orange-300">
            <span className="bg-blue-100 text-blue-500 rounded-full p-1 mr-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>

      {/* Register Button */}
      <button className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-full flex items-center transition-all duration-300 shadow-lg hover:shadow-xl">
        Register Now <FaArrowRight className="ml-2" />
      </button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default AdmissionProcessPage;


