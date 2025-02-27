import { useState } from "react";
import { FaFlask, FaMicroscope, FaBook, FaQuestionCircle } from "react-icons/fa";

const subjects = [
  { name: "Physics", icon: <FaFlask /> },
  { name: "Biology", icon: <FaMicroscope /> },
  { name: "English", icon: <FaBook /> }
];

const qaData = {
  Physics: [
    { question: "What is physics?", answer: "Physics is the study of matter and energy." },
    { question: "What is Newton's First Law?", answer: "An object in motion stays in motion unless acted upon by an external force." },
    { question: "A pendulum with a mass of 0.5 kg swings back and forth, completing one full oscillation every 2 seconds. a) What is the frequency of the pendulum's oscillations? b) If the pendulum completes 10 oscillations, how much time will have passed?", 
      answer: `a) To find the frequency (f), we use the formula:

      f = 1 / T
      
      Where T is the time period (2 seconds in this case).
      
      f = 1 / 2 seconds = 0.5 Hz
      
      So, the frequency of the pendulum's oscillations is 0.5 Hz.
      
      b) To find the total time taken for 10 oscillations, we multiply the number of oscillations by the time period of one oscillation:
      
      Total time = 10 * T = 10 * 2 seconds = 20 seconds
      
      So, the time taken for 10 oscillations is 20 seconds.`
    }
  ],
  Biology: [
    { question: "What is biology?", answer: "Biology is the study of living organisms." },
    { question: "What is DNA?", answer: "DNA is the molecule that carries genetic information." }
  ],
  English: [
    { question: "What is a noun?", answer: "A noun is a word that represents a person, place, or thing." },
    { question: "What is an adjective?", answer: "An adjective describes a noun." }
  ]
};

export default function ChatBot() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [greeting, setGreeting] = useState("Hello! How can I assist you today?");

  const handleAskQuestion = () => {
    const subjectQA = qaData[selectedSubject] || [];
    const foundQA = subjectQA.find(qa => qa.question.toLowerCase() === input.toLowerCase());

    // If a question is found, provide the answer, else offer a default message
    if (foundQA) {
      setResponse(foundQA.answer);
    } else if (input.trim().toLowerCase() === "hello" || input.trim().toLowerCase() === "hi") {
      setResponse("Hello! How can I assist you today?");
    } else {
      setResponse("Sorry, I don't have an answer for that.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">AI Q&A Chatbot</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {subjects.map((subject) => (
          <button
            key={subject.name}
            onClick={() => setSelectedSubject(subject.name)}
            className="flex items-center space-x-3 p-4 bg-white shadow-lg rounded-lg hover:bg-gray-200 transition"
          >
            <span className="text-xl">{subject.icon}</span>
            <span className="text-lg font-medium">{subject.name}</span>
          </button>
        ))}
      </div>
      {selectedSubject && (
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaQuestionCircle className="mr-2" /> {selectedSubject} Q&A
          </h2>
          <input
            type="text"
            placeholder="Ask a question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border rounded-lg mb-4"
          />
          <button
            onClick={handleAskQuestion}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Ask
          </button>
          {response && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow">
              <p className="font-medium">A: {response}</p>
            </div>
          )}
        </div>
      )}
      {/* AI Greeting Display */}
      {!selectedSubject && (
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md mt-6">
          <p className="font-medium">{greeting}</p>
        </div>
      )}
    </div>
  );
}
