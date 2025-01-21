import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { BiMath } from "react-icons/bi";
import { IoColorFilter } from "react-icons/io5";
import { SlChemistry } from "react-icons/sl";

const subjects = [
  {
    name: "Mathematics", 
    icon: <BiMath className="text-2xl text-blue-600" />, // Added icon
    chapters: [
      {
        chapter: "Chapter 1",
        lessons: [
          { lesson: "Lesson 1", videoId: "https://youtu.be/Zd_zh0RAWsI?list=PL01nldWFSR6o3nIrzrw0_bUKr_qjGh_DQ" },

        ],
      },
      {
        chapter: "Chapter 2",
        lessons: [
          { lesson: "Lesson 1", videoId: "https://youtu.be/SoMnQdt2G7Q?list=PLe-c-0-dwzFg9JjdMl1MH3OggcWfMgYVF" },
         
        ],
      },
    ],
  },
  {
    name: "Saynis", 
    icon: <SlChemistry  className="text-2xl text-blue-600" />, // Added icon
    chapters: [
      {
        chapter: "Chapter 1",
        lessons: [
          { lesson: "Lesson 1", videoId: "https://youtu.be/PWT4wDIVB4E?list=PL01nldWFSR6qEFFlwWnTc_3-OCqC1OrPy" },

        ],
      },
      {
        chapter: "Chapter 2",
        lessons: [
          { lesson: "Lesson 1", videoId: "" },
         
        ],
      },
    ],
  },
  {
    name: "Islamic",
    icon: <IoColorFilter className="text-2xl text-blue-600" />,
    chapters: [
      {
        chapter: "Chapter 1",
        lessons: [
          { lesson: "Lesson 1", videoId: "https://youtu.be/ZmvIXAfYDLM?list=PL01nldWFSR6oO4mQhwUL-_vixdmIBP0MO" },
        
          
        ],
      },
      {
        chapter: "Chapter 2",
        lessons: [
          { lesson: "Lesson 1", videoId: "https://fogaandersi.edu.so/so/subject/56/lessons/2328" },
         
        ],
      },
    ],
  },
];

const Resources = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6 animate-slideInLeft">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Grade 8 Free Video Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition"
          >
             {subject.icon && <div className="mb-2 animate-pulse">{subject.icon}</div>} {/* Display icon */}
            <h2 className="text-xl font-semibold mb-3 animate-typing">{subject.name}</h2>
            <button
              onClick={() => {
                setSelectedSubject(subject);
                setSelectedChapter(null);
                setSelectedLesson(null);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition"
            >
              <FaPlayCircle className="text-lg" /> Watch Now
            </button>
          </div>
        ))}
      </div>

      {selectedSubject && (
        <div className="mt-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">
            {selectedSubject.name}
          </h2>
          <h3 className="text-lg font-semibold text-center text-gray-700 mb-2">Course Overview</h3>
          <h3 className="text-lg font-semibold text-center text-gray-700 mb-4">Key Topics</h3>
          <p className="text-center text-gray-600 mb-4">Grade: 8</p>
          <div className="flex flex-col items-center gap-3">
            {selectedSubject.chapters.map((chapter, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedChapter(chapter)}
                className="bg-purple-600 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-purple-700 transition"
              >
                <FaPlayCircle className="text-lg" /> {chapter.chapter}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedChapter && (
        <div className="mt-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">
            {selectedChapter.chapter}
          </h2>
          <div className="flex flex-col items-center gap-3">
            {selectedChapter.lessons.map((lesson, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedLesson(lesson)}
                className="bg-green-600 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-green-700 transition"
              >
                <FaPlayCircle className="text-lg" /> {lesson.lesson}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedLesson && (
        <div className="mt-6 flex justify-center">
          <iframe
            className="w-full md:w-2/3 h-64 md:h-96"
            src={`https://www.youtube.com/embed/${selectedLesson.videoId}`}
            title={selectedLesson.lesson}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Resources;
