import "./App.css";
import { useState } from "react";
import React from "react";
import Count from "./Components/Count";
import TodoList from "./Components/TodoList";
import Profile from "./Components/Profile";
import Comment from "./Components/Comment";
import ShoppingList from "./Components/ShoppingList";

function App() {
  // const [friends, setFriends] = useState(["Alex", "John"]);
  // const [movies, setMovies] = useState([
  //   {
  //     id: 1,
  //     title: "Spider Man",
  //     ratings: 6,
  //   },
  //   {
  //     id: 2,
  //     title: "Equalizer",
  //     ratings: 7,
  //   },
  // ]);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Count/>
      <TodoList/>
      <Profile/>
      <ShoppingList/>
      <Comment/>
      {/* <Count count={count} onClickHandler = {() => setCount(prevCount => prevCount + 1)} /> */}
      {/* // useState second example
    
    //   {movies.map((m) => (
    //     <li key={Math.random()}>{m.title}</li>
    //   ))}
    //   <button 
    //     onClick={() => { 
    //       setMovies(
    //         movies.map((n) =>
    //           n.id === 1 ? { ...movies, title: "John Wick 5" } : n
    //         )
    //       );
    //     }}
    //   >Change Name</button> */}

      {/* useState first example
          {friends.map((f)=>(
            <li key={Math.random()}>{f}</li>
          ))}
          <button onClick={()=>{setFriends([...friends , 'Judah'])}}>Add new Friend</button>
          <button onClick={()=>{setFriends(friends.map((one)=>(
                         one.slice(0 , -1)
          )))}}>d</button>
          <button onClick={()=>{setFriends(friends.map((yo)=>(
            yo === 'Alex' ? 'Alex Smith' : yo
          )))}}>Update</button> */}
    </div>
  );
}

export default App;

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
