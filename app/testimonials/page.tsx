

"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Alice Johnson",
    course: "Full Stack Web Development",
    duration: "6 months",
    review: "This course completely transformed my career. The hands-on projects and industry-relevant curriculum helped me land a job at Amazon within 3 months of completion. The instructors were always available to help, and the community support was exceptional.",
    photo: "https://i.pravatar.cc/150?img=32",
    company: "Amazon",
    rating: 5
  },
  {
    name: "Ben Carter",
    course: "UI/UX Design Specialization",
    duration: "4 months",
    review: "As a career switcher, I was nervous about breaking into tech. This program gave me the confidence and skills I needed. The portfolio-building exercises were crucial for my job hunt. I'm now working at Meta as a product designer!",
    photo: "https://i.pravatar.cc/150?img=33",
    company: "Meta",
    rating: 4
  },
  {
    name: "Carla Smith",
    course: "Data Science & Machine Learning",
    duration: "8 months",
    review: "The depth of the curriculum impressed me. We didn't just learn theory - we worked on real datasets and deployed models to production. The capstone project became a talking point in all my interviews. Now I'm part of Netflix's recommendation team!",
    photo: "https://i.pravatar.cc/150?img=34",
    company: "Netflix",
    rating: 5
  },
  {
    name: "David Yu",
    course: "Cloud Engineering & DevOps",
    duration: "5 months",
    review: "From zero cloud knowledge to AWS Certified Solutions Architect! The labs simulating real-world infrastructure challenges were invaluable. The career services team helped me negotiate a 40% salary increase at my current role at Microsoft.",
    photo: "https://i.pravatar.cc/150?img=35",
    company: "Microsoft",
    rating: 5
  },
  {
    name: "Ella Kapoor",
    course: "Cybersecurity Professional",
    duration: "7 months",
    review: "The live hacking simulations were intense but prepared me for real-world security challenges. I particularly appreciated the ethical hacking modules and digital forensics training. I've since led security audits for Fortune 500 clients.",
    photo: "https://i.pravatar.cc/150?img=36",
    company: "IBM Security",
    rating: 4
  },
];

const youtubeData = [
  { title: "React Tutorial", url: "https://youtu.be/Nk92uasWNNc?si=51ckZcTtk7ucyVlg" },
  { title: "Next.js Crash Course", url: "https://youtu.be/yzBgik6b7dQ?si=ovOphJVmmfHt6I4_" },
  { title: "Tailwind CSS Guide", url: "https://www.youtube.com/live/xa1IiLKvLiU?si=phim96Rh3Xznf5Z7" },
  { title: "Tailwind CSS Guide", url: "https://youtube.com/shorts/x1QZplaZlrg?si=NUFJDcSd32tHKLMT" },

];

// Helper to extract YouTube video ID
const getYouTubeID = (url: string) => {
  const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([\w\-]+)/);
  return match ? match[1] : null;
};


export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-2">
          Student Success Stories
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        <p className="text-orange-600 mt-6 max-w-2xl mx-auto">
          Hear from our alumni who have transformed their careers through our programs
        </p>
      </div>

      <div className="relative w-full max-w-5xl">
        <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-2/5 bg-orange-50 p-8 flex flex-col items-center justify-center">
              <div className="relative mb-6">
                <div className="bg-orange-200 rounded-full p-1">
                  <img
                    src={currentTestimonial.photo}
                    alt={currentTestimonial.name}
                    className="w-32 h-32 rounded-full border-4 border-white object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  {currentTestimonial.company}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-orange-900">{currentTestimonial.name}</h3>
              <p className="text-orange-700 text-sm mt-1">
                {currentTestimonial.course} • {currentTestimonial.duration}
              </p>
              
              
            </div>
            
            {/* Review Section */}
            <div className="md:w-3/5 p-8 flex flex-col justify-center">
              <div className="relative">
                <FaQuoteLeft className="text-orange-200 text-5xl absolute -top-2 -left-2" />
                <p className="text-gray-700 text-lg relative z-10 pl-8">
                  {currentTestimonial.review}
                </p>
              </div>
              
              <div className="mt-8 pt-4 border-t border-orange-100">
                <div className="flex flex-wrap gap-2">
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Placement: {currentTestimonial.company}
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {currentTestimonial.duration} Program
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Career Transformation
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Bottom Right */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-orange-50 transition-all group focus:outline-none focus:ring-2 focus:ring-orange-300"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft className="text-orange-600 text-lg group-hover:text-orange-800 transition-colors" />
            </button>
            
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-orange-50 transition-all group focus:outline-none focus:ring-2 focus:ring-orange-300"
              aria-label="Next testimonial"
            >
              <FaArrowRight className="text-orange-600 text-lg group-hover:text-orange-800 transition-colors" />
            </button>
          </div>
        </div>
      </div>
        <h3 className="text-4xl text-orange-400 mt-4 md:mt-8 hidden md:flex font-bold -tracking-wide">Still curious ? watch out these</h3>
        <h3 className="flex sm:hidden text-4xl text-orange-400 font-extrabold mt-5">Here is more</h3>
      


      

      
      
    <div className="min-h-screen h-auto w-full  py-12 px-4 md:px-8">
      <div className="flex flex-col items-center gap-16">
        {youtubeData.map((video, index) => {
          const videoId = getYouTubeID(video.url);
          if (!videoId) return null;

          return (
            <div key={index} className="h-96 bg-orange-100 w-96 px-4">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`YouTube video ${index + 1}`}
                  className="w-full h-96 rounded-xl shadow-lg"
                  frameBorder="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          );
        })}
      
    </div>
    </div>

      
    </div>
  );
}