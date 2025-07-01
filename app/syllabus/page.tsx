import { FaPlay, FaChalkboardTeacher, FaUsers, FaLightbulb, FaRegSmile, FaLink, FaCloud, FaShieldAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';

export default function OrientationPage() {
  // Mock data
  const highlights = [
    {
      title: "Future of AI",
      description: "Exploring how AI will transform industries in the next decade",
      icon: <FaLightbulb className="text-2xl" />
    },
    {
      title: "Cloud Revolution",
      description: "Understanding multi-cloud strategies and edge computing",
      icon: <FaCloud className="text-2xl" />
    },
    {
      title: "Blockchain Potential",
      description: "Beyond cryptocurrency - real world applications",
      icon: <FaLink className="text-2xl" />
    },
    {
      title: "Cybersecurity",
      description: "Protecting digital assets in an interconnected world",
      icon: <FaShieldAlt className="text-2xl" />
    }
  ];

  const testimonials = [
    {
      quote: "The session completely changed my perspective on career paths in IT.",
      author: "Rahul Sharma, Batch 2023"
    },
    {
      quote: "Director sir's insights about emerging technologies were eye-opening.",
      author: "Priya Patel, Batch 2023"
    }
  ];

  const dailySchedule = [
    { time: "9:00 AM", activity: "Morning Motivation", duration: "30 mins" },
    { time: "9:30 AM", activity: "Tech Trends Discussion", duration: "1 hour" },
    { time: "10:30 AM", activity: "Hands-on Workshop", duration: "2 hours" },
    { time: "1:00 PM", activity: "Lunch & Networking", duration: "1 hour" },
    { time: "2:00 PM", activity: "Case Studies", duration: "1.5 hours" }
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-400 to-orange-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to CIMAGE IT Family</h1>
          <p className="text-xl md:text-2xl mb-8">Director's Motivational Session on Leading IT Technologies</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition duration-300">
              Watch Highlights
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition duration-300">
              Join Daily Classes
            </button>
          </div>
        </div>
      </div>

      {/* Bento Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Session Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-orange-500"
            >
              <div className="text-orange-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-orange-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Session Glimpses</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Video */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative pt-[56.25%] bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPlay className="text-6xl text-orange-500 opacity-80" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Director's session" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Director's Opening Address</h3>
                <p className="text-gray-600 mb-4">Watch our Director inspire the new batch with vision for the future of IT</p>
                <button className="text-orange-600 font-medium hover:underline">Watch Full Video</button>
              </div>
            </div>
            
            {/* Video Thumbnails */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <div className="relative pt-[56.25%] bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaPlay className="text-2xl text-orange-500 opacity-80" />
                    </div>
                    <img 
                      src={`https://source.unsplash.com/random/300x200/?technology,${item}`} 
                      alt="Session highlight" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-sm">Highlight {item}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CIMAGE Culture */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">The CIMAGE Culture</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaUsers className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inclusive Community</h3>
              <p className="text-gray-600">Every student is valued and supported in their learning journey</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaChalkboardTeacher className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Learn from industry experts and experienced faculty</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaRegSmile className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Positive Environment</h3>
              <p className="text-gray-600">Fostering creativity, innovation, and personal growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Class Schedule */}
      <div className="py-12 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Daily Class Structure</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {dailySchedule.map((item, index) => (
                <div key={index} className="p-6 hover:bg-orange-50 transition duration-200">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-lg mr-4">
                      <FiClock className="text-orange-600 text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">{item.activity}</h3>
                      <div className="flex justify-between mt-1">
                        <span className="text-orange-600 font-medium">{item.time}</span>
                        <span className="text-gray-500">{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
              Join Tomorrow's Session
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 bg-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">What Students Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-orange-400 text-4xl mb-2">"</div>
                <p className="text-gray-700 text-lg mb-4">{item.quote}</p>
                <p className="text-orange-600 font-medium">{item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your IT Journey?</h2>
          <p className="text-xl mb-8">Join our daily sessions and transform your future with cutting-edge technology education</p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-orange-50 transition duration-300">
            Register for Orientation
          </button>
        </div>
      </div>
    </div>
  );
}