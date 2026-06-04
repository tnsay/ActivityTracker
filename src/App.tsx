import { useState } from 'react';

interface UserProfile {
  city: string;
  hobbies: string[];
}


function App() {

  const [name, setName] = useState<string>("Student");
  const [studyHours, setStudyHours] = useState<number>(0);
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [ActivityScore, setScore] = useState<number>(0);
  const [user, setUser] = useState<UserProfile>({
    city: "Addis Ababa",
    hobbies: ["Reading"],

  });

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Personal Activity Tracker</h1>
      <section id="profile" style={{ marginBottom: '20px' }}>
        <h2>Profile</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Study Hours:</strong> {studyHours}</p>
        <p><strong>Status:</strong> {isOnline ? "Online" : "Offline"}</p>
        <button onClick={() => setName(name === "Student" ? "Alex" : "Student")}>Toggle Name</button>
        <button onClick={() => setStudyHours(studyHours + 1)}>Add Study Hour</button>
        <button onClick={() => setIsOnline(!isOnline)}>Toggle Online Status</button>
      </section>

      <section id="activity-score" style={{ marginBottom: '20px' }}>
        <h2>Activity Score</h2>
        <p><strong>Score:</strong> {ActivityScore}</p>
        <button onClick={() => setScore((prevScore) => prevScore + 1)}>+1 increment</button>
        <button onClick={() => setScore((prevScore) => prevScore - 1)}>-1 decrement</button>
        <button onClick={() => setScore((prevScore) => prevScore + 5)}>Increase by 5</button>
        <button onClick={() => setScore(0)}>Reset Score</button>
      </section>
      <section id="user-profile">
        <h2>User Profile</h2>
        <p><strong>City:</strong> {user.city}</p>
        <ul>
          {user.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <button onClick={() => setUser({ ...user, city: "Hawassa"})}>Change City</button>
        <button onClick={() => setUser({ ...user, hobbies: [...user.hobbies, "Coding"] })}>Add Hobby</button> 
      </section>

    </div>
  );
}

export default App;