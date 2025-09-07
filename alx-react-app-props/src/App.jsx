import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ProfilePage from './components/ProfilePage';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage';
import UserContext from './UserContext'; // ✅ added import
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const userData = { fullName: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <div><WelcomeMessage /></div>
      <div><Header /></div>
      <div><MainContent /></div>
      <div><Footer /></div>

      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      <div>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <UserProfile name="John" age="30" bio="Loves Food" />
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
