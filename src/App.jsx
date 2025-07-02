
import './App.css' 
import { useState } from 'react'
import React from 'react'

function App() {
  

  return (
        <div className="App">
          
        </div>

  )
}

export default App

// const Testimonials = () => {
//   const [activeTab, setActiveTab] = useState("education");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="qualification-section">
//       <div className="tab-buttons">
//         <button
//           onClick={() => handleTabClick("education")}
//           className={activeTab === "education" ? "active" : ""}
//         >
//           Education
//         </button>
//         <button
//           onClick={() => handleTabClick("experience")}
//           className={activeTab === "experience" ? "active" : ""}
//         >
//           Experience
//         </button>
//       </div>
//         <div className="timeline">
//         {activeTab === "education" && (
//           <ul>
//             <li>📘 BSc in Computer Science - UniXYZ (2020–2024)</li>
//             <li>📗 Frontend Bootcamp - Zuri (2021)</li>
//           </ul>
//         )}
//         {activeTab === "experience" && (
//           <ul>
//             <li>👨‍💻 Frontend Intern - DevCompany (2023)</li>
//             <li>🧠 Built 10+ projects using React, Tailwind, Framer Motion</li>
//           </ul>
//         )}
//       </div>
//     </div>
      

//   )
// }