import React from "react";
import { FaFilePdf, FaBook, FaClipboardCheck, FaBrain, FaQuestionCircle, FaGraduationCap } from "react-icons/fa";

const services = [
    { icon: <FaFilePdf className="text-red-500 text-5xl" />, title: "Free PDFs", desc: "Download grade 12 study materials, notes, and past papers for free." },
    { icon: <FaBook className="text-blue-500 text-5xl" />, title: "Resources", desc: "Access a wide range of learning resources tailored for students." },
    { icon: <FaClipboardCheck className="text-green-500 text-5xl" />, title: "Exams & Quizzes", desc: "Practice with interactive exams and quizzes to test your knowledge." },
    { icon: <FaBrain className="text-purple-500 text-5xl" />, title: "AI Assistance", desc: "Use AI-powered tools to get study recommendations and insights." },
    { icon: <FaQuestionCircle className="text-yellow-500 text-5xl" />, title: "Q&A Section", desc: "Ask questions and get answers from experts and peers." },
    { icon: <FaGraduationCap className="text-indigo-500 text-5xl" />, title: "Smart Study", desc: "A modern platform designed to make learning smarter and easier." }
];

const Services = () => {
    return (
        <section className="py-16 bg-gray-100 text-gray-800">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Services</h2>
                <p className="text-lg mb-12">Smart Study provides everything you need to excel in grade 12.</p>
                <div className="grid md:grid-cols-3 gap-8 px-4">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-center">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
