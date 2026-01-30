import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LabLesson from './pages/LabLesson';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('webSystemsUser');
    if (saved) {
      setUser(JSON.parse(saved));
      setCurrentPage('home');
    }
  }, []);

  const handleLogin = (studentNumber, password) => {
    const users = JSON.parse(localStorage.getItem('webSystemsUsers') || '{}');
    if (users[studentNumber] && users[studentNumber].password === password) {
      setUser(users[studentNumber]);
      localStorage.setItem('webSystemsUser', JSON.stringify(users[studentNumber]));
      setCurrentPage('home');
      return true;
    }
    return false;
  };

  const handleRegister = (data) => {
    const users = JSON.parse(localStorage.getItem('webSystemsUsers') || '{}');
    if (users[data.studentNumber]) return false;
    const newUser = {
      ...data,
      progress: {},
      totalScore: 0,
      overallGrade: 'N/A',
      registeredAt: new Date().toISOString()
    };
    users[data.studentNumber] = newUser;
    localStorage.setItem('webSystemsUsers', JSON.stringify(users));
    setUser(newUser);
    localStorage.setItem('webSystemsUser', JSON.stringify(newUser));
    setCurrentPage('home');
    return true;
  };

  const handleLogout = () => {
    localStorage.removeItem('webSystemsUser');
    setUser(null);
    setCurrentPage('login');
  };

  const handleExerciseComplete = (labNum, score) => {
    const updated = { ...user };
    updated.progress[`lab${labNum}`] = { completed: true, score, attempts: (updated.progress[`lab${labNum}`]?.attempts || 0) + 1, completedAt: new Date().toISOString() };
    
    const scores = Object.values(updated.progress).filter(p => p.completed).map(p => p.score);
    updated.totalScore = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    
    const avg = updated.totalScore;
    updated.overallGrade = avg >= 90 ? 'A+' : avg >= 85 ? 'A' : avg >= 80 ? 'B+' : avg >= 75 ? 'B' : avg >= 70 ? 'C+' : avg >= 65 ? 'C' : avg >= 60 ? 'D+' : avg >= 50 ? 'D' : 'F';
    
    const users = JSON.parse(localStorage.getItem('webSystemsUsers') || '{}');
    users[user.studentNumber] = updated;
    localStorage.setItem('webSystemsUsers', JSON.stringify(users));
    localStorage.setItem('webSystemsUser', JSON.stringify(updated));
    setUser(updated);
  };

  const navigate = (page) => setCurrentPage(page);

  if (!user) {
    if (currentPage === 'register') return <RegisterPage onRegister={handleRegister} onNavigate={navigate} />;
    return <LoginPage onLogin={handleLogin} onNavigate={navigate} />;
  }

  if (currentPage === 'profile') return <ProfilePage user={user} onNavigate={navigate} onLogout={handleLogout} />;
  if (currentPage.startsWith('lab')) {
    const labNum = parseInt(currentPage.replace('lab', ''));
    return <LabLesson labNum={labNum} user={user} onNavigate={navigate} onExerciseComplete={handleExerciseComplete} />;
  }
  return <HomePage user={user} onNavigate={navigate} onLogout={handleLogout} />;
}

export default App;
