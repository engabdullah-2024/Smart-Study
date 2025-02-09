import { FaDownload } from "react-icons/fa";

const examData = {
  12: {
    Arabic: {
      2019: "arabic2019.pdf",
      2020: "arabic2020.pdf",
      2021: "arabic2021.pdf",
      2022: "arabic2022.pdf",
      2023: "arabic2023.pdf",
      2024: "arabic2024.pdf",
      2025: "arabic2025.pdf"
    },
    Mathematics: {
      2019: "math2019.pdf",
      2020: "math2020.pdf",
      2021: "math2021.pdf",
      2022: "math2022.pdf",
      2023: "math2023.pdf",
      2024: "math2024.pdf",
      2025: "math2025.pdf"
    },
    Physics: {
      2019: "physics2019.pdf",
      2020: "physics2020.pdf",
      2021: "physics2021.pdf",
      2022: "physics2022.pdf",
      2023: "physics2023.pdf",
      2024: "physics2024.pdf",
      2025: "physics2025.pdf"
    }
  },
  8: {
    Somali: {
      2019: "somali2019.pdf",
      2020: "somali2020.pdf",
      2021: "somali2021.pdf",
      2022: "somali2022.pdf",
      2023: "somali2023.pdf",
      2024: "somali2024.pdf",
      2025: "somali2025.pdf"
    },
    Science: {
      2019: "science2019.pdf",
      2020: "science2020.pdf",
      2021: "science2021.pdf",
      2022: "science2022.pdf",
      2023: "science2023.pdf",
      2024: "science2024.pdf",
      2025: "science2025.pdf"
    },
    History: {
      2019: "history2019.pdf",
      2020: "history2020.pdf",
      2021: "history2021.pdf",
      2022: "history2022.pdf",
      2023: "history2023.pdf",
      2024: "history2024.pdf",
      2025: "history2025.pdf"
    }
  }
};

const ExamSection = ({ grade, subject, exams }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 my-6 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Grade {grade} - {subject} Exams</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(exams).map(([year, pdf], index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-between">
            <span className="text-gray-800 font-semibold">{year}</span>
            <a
              href={pdf}
              download
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition"
            >
              <FaDownload size={20} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Exams = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 ">
      <h1 className="text-3xl font-bold text-center text-gray-800">Exams</h1>
      {Object.entries(examData).map(([grade, subjects]) => (
        Object.entries(subjects).map(([subject, exams]) => (
          <ExamSection key={`${grade}-${subject}`} grade={grade} subject={subject} exams={exams} />
        ))
      ))}
    </div>
  );
};

export default Exams;
