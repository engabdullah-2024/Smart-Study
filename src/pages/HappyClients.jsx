import React, { useEffect, useState } from 'react';
import { FaUserFriends, FaProjectDiagram, FaUserGraduate, FaBook, FaClipboardList } from 'react-icons/fa';

const HappyClients = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [subjectsCount, setSubjectsCount] = useState(0);
  const [examsCount, setExamsCount] = useState(0);

  useEffect(() => {
    const clientInterval = setInterval(() => {
      setClientsCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);

    const projectInterval = setInterval(() => {
      setProjectsCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);

    const studentsInterval = setInterval(() => {
      setStudentsCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 15);

    const subjectsInterval = setInterval(() => {
      setSubjectsCount((prev) => (prev < 20 ? prev + 1 : 20));
    }, 80);

    const examsInterval = setInterval(() => {
      setExamsCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);

    return () => {
      clearInterval(clientInterval);
      clearInterval(projectInterval);
      clearInterval(studentsInterval);
      clearInterval(subjectsInterval);
      clearInterval(examsInterval);
    };
  }, []);

  return (
    <div className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">We are trusted by over</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
          <div className="flex flex-col items-center space-y-4">
            <FaUserFriends className="text-5xl" />
            <div>
              <p className="text-6xl font-extrabold">{clientsCount}+ </p>
              <p className="text-xl">Happy Clients</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <FaProjectDiagram className="text-5xl" />
            <div>
              <p className="text-6xl font-extrabold">{projectsCount}+ </p>
              <p className="text-xl">Projects Delivered</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <FaUserGraduate className="text-5xl" />
            <div>
              <p className="text-6xl font-extrabold">{studentsCount}+ </p>
              <p className="text-xl">Students Enrolled</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <FaBook className="text-5xl" />
            <div>
              <p className="text-6xl font-extrabold">{subjectsCount}+ </p>
              <p className="text-xl">Total Subjects</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <FaClipboardList className="text-5xl" />
            <div>
              <p className="text-6xl font-extrabold">{examsCount}+ </p>
              <p className="text-xl">Total Exams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
