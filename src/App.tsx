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
  const [newHobbyInput, setNewHobbyInput] = useState<string>("");

  const updateScore = (amount: number) => {
    setScore((prevScore) => {
      const nextScore = prevScore + amount;
      //  "do not go below zero" logic 
      return nextScore < 0 ? 0 : nextScore;
    });
  };

  const handleAddHobby = () => {
    const trimmedHobby = newHobbyInput.trim();

    // 1. Check if empty
    if (trimmedHobby === "") return;

    // 2. Check for duplicates (case-insensitive)
    const isDuplicate = user.hobbies.some(
      (h) => h.toLowerCase() === trimmedHobby.toLowerCase()
    );

    if (isDuplicate) {
      alert("This hobby is already in the list!");
      return;
    }

    // 3. Update state
    setUser({ ...user, hobbies: [...user.hobbies, trimmedHobby] });
    setNewHobbyInput("");
  };

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
        {/* Feedback messages */}
  {ActivityScore === 0 && <p style={{ color: 'red' }}>Score cannot go below zero.</p>}
  {ActivityScore >= 5 && <p style={{ color: 'green' }}>Bravo! you got a high score.</p>}
         <p><strong>Score:</strong> {ActivityScore}</p>
        <button onClick={() => updateScore(1)}>+1</button>

        <button onClick={() => updateScore(-1)}>-1</button>

        <button onClick={() => updateScore(5)}>+5</button>
       

        {/* <button onClick={() => setScore((prevScore) => prevScore + 1)}>+1 increment</button>
        <button onClick={() => setScore((prevScore) => prevScore - 1)}>-1 decrement</button>
        <button onClick={() => setScore((prevScore) => prevScore + 5)}>Increase by 5</button> */}
        <button onClick={() => setScore(0)}>Reset Score</button> 
      </section>
      <section id="user-profile">
        <h2>User Profile</h2>
        <p><strong>City:</strong> {user.city}</p>
        <ul>
         <p><strong>Hobbies:</strong></p>
          {user.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <button onClick={() => setUser({ ...user, city: "Hawassa" })}>Change City</button>
        <button disabled={newHobbyInput.trim() === ""} onClick={() => { handleAddHobby() }}>
          Add Hobby
        </button>

        <input
          type="text"
          placeholder="Enter new hobby"
          value={newHobbyInput}
          onChange={(e) => setNewHobbyInput(e.target.value)}
        />

      </section>

    </div>
  );
}

export default App;