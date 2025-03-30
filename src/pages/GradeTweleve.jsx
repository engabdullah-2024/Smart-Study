import React from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaBookReader, FaUserGraduate } from "react-icons/fa";

const GradeTweleve = () => {
    return (
        <section className="py-16 bg-gray-50 text-gray-800">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">About Grade 12 Services</h2>
                <p className="text-lg mb-10 text-gray-600">Our platform provides essential learning tools to help grade 12 students excel in their studies.</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center hover:scale-105 transition-transform">
                        <FaChalkboardTeacher className="text-blue-500 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                        <p className="text-gray-600 text-center">Learn from experienced educators and access top-quality study materials.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center hover:scale-105 transition-transform">
                        <FaLaptopCode className="text-green-500 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Digital Learning</h3>
                        <p className="text-gray-600 text-center">Interactive resources, quizzes, and AI-powered study aids at your fingertips.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center hover:scale-105 transition-transform">
                        <FaBookReader className="text-purple-500 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Comprehensive Study Materials</h3>
                        <p className="text-gray-600 text-center">Access PDFs, books, and guides to help you prepare effectively.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center hover:scale-105 transition-transform">
                        <FaUserGraduate className="text-indigo-500 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Student Success</h3>
                        <p className="text-gray-600 text-center">Empowering students with the right tools for academic achievement.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GradeTweleve;