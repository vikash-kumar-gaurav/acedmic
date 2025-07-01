import Head from "next/head";
import {
  FaMoneyBillWave,
  FaRupeeSign,
  FaCalendarAlt,
  FaUniversity,
  FaTags,
} from "react-icons/fa";

const courses = [
  {
    title: "BCA",
    duration: "3 Years",
  },
  {
    title: "BSc IT",
    duration: "3 Years",
  },
  {
    title: "BBA",
    duration: "3 Years",
  },
  {
    title: "BBM",
    duration: "3 Years",
  },
  {
    title: "PGDM",
    duration: "2 Years",
  },
  {
    title: "MCA",
    duration: "2 Years",
  },
];

export default function FeeStructurePage() {
  return (
    <>
      <Head>
        <title>Fee Structure | Academic Programs</title>
      </Head>

      <main className="bg-gradient-to-b from-white via-gray-50 to-gray-100 px-4 py-10 sm:px-6 md:px-12">
        <section className="max-w-6xl mx-auto">
          {/* Page Header */}
          <header className="text-center mb-12">
            <FaMoneyBillWave size={40} className="text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
              Course Fee Structure
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl mx-auto">
              Transparent and student-friendly payment options for all major programs. Choose from flexible monthly or one-time plans.
            </p>
          </header>

          {/* Table */}
          <div className="overflow-x-auto bg-white shadow-md rounded-xl">
            <table className="w-full table-auto border-collapse text-left text-sm sm:text-base">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-4 font-semibold"><FaUniversity className="inline mr-1" />Course</th>
                  <th className="p-4 font-semibold"><FaCalendarAlt className="inline mr-1" />Duration</th>
                  <th className="p-4 font-semibold"><FaRupeeSign className="inline mr-1" />Monthly Fee</th>
                  <th className="p-4 font-semibold"><FaTags className="inline mr-1" />Yearly Payment</th>
                  <th className="p-4 font-semibold"><FaMoneyBillWave className="inline mr-1" />One-Time (Annual)</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr
                    key={index}
                    className={`border-t ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                  >
                    <td className="p-4 font-medium text-gray-800">{course.title}</td>
                    <td className="p-4 text-gray-600">{course.duration}</td>
                    <td className="p-4 text-gray-700 font-semibold">₹8,500 x 12</td>
                    <td className="p-4 text-gray-700 font-semibold">₹1,00,000</td>
                    <td className="p-4 text-green-600 font-bold">₹95,000</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-8 text-sm text-gray-600 text-center max-w-2xl mx-auto">
            <p>💡 <strong>Note:</strong> One-time payment includes a ₹5,000 discount. Monthly plans are available via secure digital EMI options. GST extra as applicable.</p>
          </div>
        </section>
      </main>
    </>
  );
}
