import React, { useState } from 'react';

// Questions for each subject
const subjectsWithQuestions = {
  somali: [
    { question: 'Micnaha Erayga Wadaay Waa?', options: ['Nin', 'Diraac', 'Abaar', 'Saaxiib'], answer: 'Saaxiib' },
    { question: 'Micnaha Erayga Dingaraaro Waa?', options: ['Qof la sigay', 'Qof aan la sigin', 'Dabar', 'Midna'], answer: 'Qof la sigay' },
    { question: 'Micnaha Erayga Raar Waa?', options: ['Sibraar', 'Guran', 'Buurta Gunteeda Hoose', 'Midna'], answer: 'Buurta Gunteeda Hoose' },
    { question: 'Ili il ma', options: ['Dhugato', 'Dheehato', 'Ma giigsana', 'dhowrto'], answer: 'dhowrto' },
    { question: 'Micnaha Erayga Amakaag Waa?', options: ['Askun', 'Yaab', 'Guntin', 'Midna'], answer: 'Yaab' },
   
  ],
  Physics: [
    { question: 'What is the unit of resistance?', options: ['Ohm', 'Watt', 'Volt', 'Ampere'], answer: 'Ohm' },
    { question: 'What is Newton’s second law of motion?', options: ['F = ma', 'E = mc²', 'V = IR', 'W = mg'], answer: 'F = ma' },
    { question: 'What is the speed of light in vacuum?', options: ['3 x 10^8 m/s', '3 x 10^6 m/s', '1 x 10^8 m/s', '1 x 10^6 m/s'], answer: '3 x 10^8 m/s' },
    { question: 'What is the force of gravity on Earth?', options: ['9.8 m/s²', '9.8 N', '9.8 kg', '9.8 m'], answer: '9.8 m/s²' },
    { question: 'What is the principle of conservation of energy?', options: ['Energy can be created', 'Energy can be destroyed', 'Energy cannot be created or destroyed', 'Energy can be transformed'], answer: 'Energy cannot be created or destroyed' },
    { question: 'What is the formula for kinetic energy?', options: ['KE = 1/2 mv²', 'KE = mv', 'KE = mgh', 'KE = Fd'], answer: 'KE = 1/2 mv²' },
    { question: 'What is the acceleration due to gravity?', options: ['9.8 m/s²', '10 m/s²', '8.9 m/s²', '9.7 m/s²'], answer: '9.8 m/s²' },
    { question: 'What is the unit of power?', options: ['Watt', 'Joule', 'Newton', 'Pascal'], answer: 'Watt' },
    { question: 'What is the primary force that keeps planets in orbit?', options: ['Electromagnetic force', 'Gravity', 'Friction', 'Tension'], answer: 'Gravity' },
    { question: 'What is the law of inertia?', options: ['An object in motion stays in motion', 'An object at rest stays at rest', 'Both A and B', 'None of the above'], answer: 'Both A and B' },
  ],
  Chemistry: [
    { question: 'What is the atomic number of Oxygen?', options: ['8', '10', '16', '12'], answer: '8' },
    { question: 'What is the pH of pure water?', options: ['7', '0', '14', '5'], answer: '7' },
    { question: 'What is the chemical symbol for Gold?', options: ['Au', 'Ag', 'Fe', 'Pb'], answer: 'Au' },
    { question: 'What is the process of separating mixtures by boiling and condensing called?', options: ['Filtration', 'Distillation', 'Evaporation', 'Chromatography'], answer: 'Distillation' },
    { question: 'Which gas is necessary for combustion?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], answer: 'Oxygen' },
    { question: 'What is the most abundant gas in the Earth’s atmosphere?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'], answer: 'Nitrogen' },
    { question: 'What is the chemical formula for table salt?', options: ['NaCl', 'KCl', 'CaCl₂', 'MgCl₂'], answer: 'NaCl' },
    { question: 'What is the name of the reaction that releases energy?', options: ['Endothermic', 'Exothermic', 'Synthesis', 'Decomposition'], answer: 'Exothermic' },
    { question: 'What is the smallest unit of an element?', options: ['Atom', 'Molecule', 'Compound', 'Ion'], answer: 'Atom' },
    { question: 'What is the main component of natural gas?', options: ['Methane', 'Propane', 'Butane', 'Ethane'], answer: 'Methane' },
  ],
  Biology: [
    { question: 'What is the powerhouse of the cell?', options: ['Mitochondria', 'Ribosome', 'Nucleus', 'Chloroplast'], answer: 'Mitochondria' },
    { question: 'What is the process by which plants make food?', options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Digestion'], answer: 'Photosynthesis' },
    { question: 'Which part of the cell contains the genetic material?', options: ['Nucleus', 'Cytoplasm', 'Cell membrane', 'Ribosome'], answer: 'Nucleus' },
    { question: 'What is the basic unit of life?', options: ['Cell', 'Tissue', 'Organ', 'Organism'], answer: 'Cell' },
    { question: 'What do we call the biological community of interacting organisms?', options: ['Ecosystem', 'Population', 'Biome', 'Habitat'], answer: 'Ecosystem' },
    { question: 'What is the function of red blood cells?', options: ['Transport oxygen', 'Fight infections', 'Clot blood', 'Provide energy'], answer: 'Transport oxygen' },
    { question: 'What is the main function of the digestive system?', options: ['To absorb nutrients', 'To circulate blood', 'To provide energy', 'To eliminate waste'], answer: 'To absorb nutrients' },
    { question: 'What type of blood cells are responsible for immune response?', options: ['White blood cells', 'Red blood cells', 'Platelets', 'Plasma'], answer: 'White blood cells' },
    { question: 'What is the largest organ in the human body?', options: ['Skin', 'Liver', 'Heart', 'Lung'], answer: 'Skin' },
    { question: 'Which organ is responsible for detoxification?', options: ['Liver', 'Kidney', 'Heart', 'Lung'], answer: 'Liver' },
  ],
  Business: [
    { question: 'What is the primary goal of a business?', options: ['Profit', 'Welfare', 'Growth', 'Reputation'], answer: 'Profit' },
    { question: 'What does the term "liquidity" refer to?', options: ['Cash availability', 'Debt level', 'Investment returns', 'Asset value'], answer: 'Cash availability' },
    { question: 'What is a market economy?', options: ['Economy based on supply and demand', 'Economy controlled by the government', 'Economy based on barter', 'None of the above'], answer: 'Economy based on supply and demand' },
    { question: 'What is the role of marketing in a business?', options: ['To create demand', 'To produce goods', 'To finance operations', 'To manage human resources'], answer: 'To create demand' },
    { question: 'What is the difference between revenue and profit?', options: ['Revenue is total income; profit is revenue minus expenses', 'Profit is total income; revenue is profit minus expenses', 'Revenue is cash; profit is assets', 'None of the above'], answer: 'Revenue is total income; profit is revenue minus expenses' },
    { question: 'What is an entrepreneur?', options: ['A business owner', 'An employee', 'A customer', 'A supplier'], answer: 'A business owner' },
    { question: 'What is the purpose of a business plan?', options: ['To outline goals and strategies', 'To provide financial statements', 'To hire employees', 'To manage daily operations'], answer: 'To outline goals and strategies' },
    { question: 'What does SWOT stand for?', options: ['Strengths, Weaknesses, Opportunities, Threats', 'Sales, Wages, Operations, Trends', 'Systems, Workflows, Objectives, Targets', 'None of the above'], answer: 'Strengths, Weaknesses, Opportunities, Threats' },
    { question: 'What is customer segmentation?', options: ['Dividing customers into groups', 'Identifying target markets', 'Creating products for specific customers', 'All of the above'], answer: 'All of the above' },
    { question: 'What is a merger?', options: ['The combination of two companies', 'The sale of a company', 'The bankruptcy of a company', 'None of the above'], answer: 'The combination of two companies' },
  ],
};

const QuizPage = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleAnswer = (selectedOption) => {
    const question = subjectsWithQuestions[selectedSubject][currentQuestion];
    const isCorrect = selectedOption === question.answer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 2);
      setFeedback('Correct!');
    } else {
      setFeedback(`Incorrect! The correct answer is: ${question.answer}`);
    }

    // Move to the next question after feedback
    setTimeout(() => {
      if (currentQuestion < subjectsWithQuestions[selectedSubject].length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setFeedback(''); // Clear feedback for next question
      } else {
        setShowResult(true);
      }
    }, 1500); // Wait for 1.5 seconds before moving to the next question
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setFeedback('');
  };

  const renderQuestions = () => {
    const question = subjectsWithQuestions[selectedSubject][currentQuestion];

    return (
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="block mt-2 w-full p-2 border border-gray-300 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            {option}
          </button>
        ))}
        {feedback && (
          <p className={`mt-4 text-lg font-bold ${feedback.startsWith('Correct') ? 'text-green-500' : 'text-red-500'}`}>
            {feedback}
          </p>
        )}
      </div>
    );
  };

  const renderResult = () => {
    return (
      <div className="bg-white p-4 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-2">Your Score: {score}</h2>
        <button onClick={() => handleSubjectSelect(null)} className="mt-4 p-2 border border-gray-300 rounded bg-green-500 text-white hover:bg-green-600 transition">
          Play Again
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 hover:text-blue-500">Choose The Correct Answer</h1>
      {!selectedSubject ? (
        <div className="bg-white p-4 rounded shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Select a Subject</h2>
          {Object.keys(subjectsWithQuestions).map((subject) => (
            <button
              key={subject}
              onClick={() => handleSubjectSelect(subject)}
              className="block mt-2 w-full p-2 border border-gray-300 rounded bg-purple-500 text-white hover:bg-purple-600 transition"
            >
              {subject}
            </button>
          ))}
        </div>
      ) : showResult ? (
        renderResult()
      ) : (
        renderQuestions()
      )}
    </div>
  );
};

export default QuizPage;
