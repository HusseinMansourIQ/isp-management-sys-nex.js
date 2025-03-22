'use client';
import { useEffect, useState } from 'react';

export default function Home({searchParams}) {

    const [elapsedTime, setElapsedTime] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [quote, setQuote] = useState('');
    const [goals, setGoals] = useState([]);
    const [goalInput, setGoalInput] = useState('');
    let timer;
  
    const quotes = [
      "التحدي الحقيقي هو الاستمرار.",
      "لا تستسلم، فالنجاح قريب.",
      "كل يوم هو فرصة جديدة للتقدم.",
      "اصنع المستقبل الذي تحلم به."
    ];
  
    useEffect(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);
  
    useEffect(() => {
      if (timerRunning) {
        timer = setInterval(() => {
          setElapsedTime(prevTime => prevTime + 1000);
        }, 1000);
      } else {
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    }, [timerRunning]);
  
    const formatTime = (time) => {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / (1000 * 60)) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };
  
    const addGoal = () => {
      if (goalInput.trim() !== '') {
        setGoals([...goals, goalInput]);
        setGoalInput('');
      }
    };
  
   return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center p-4">
      <nav className="w-full bg-teal-500 p-4 flex justify-between shadow-md fixed top-0 left-0 z-50">
        <h1 className="text-xl font-bold text-gray-900">Study with Me</h1>
        <ul className="flex space-x-4">
          <li><a href="lod.html" className="hover:text-gray-900">جدول مهام</a></li>
          <li><a href="sabora.html" className="hover:text-gray-900">سبورة</a></li>
          <li><a href="goal.html" className="hover:text-gray-900">ترفيه</a></li>
          <li><a href="مكان دخول الملازم.html" className="hover:text-gray-900">ملازم</a></li>
        </ul>
      </nav>
      <div className="mt-16 max-w-md p-6 bg-gray-700 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold">مرحبًا بك في Study with Me</h1>
        <div className="mt-4 text-lg">{quote}</div>
        <div className="mt-4 text-3xl">{formatTime(elapsedTime)}</div>
        <div className="mt-4">
          <button onClick={() => setTimerRunning(true)} className="bg-yellow-400 px-4 py-2 m-2 rounded">بدء</button>
          <button onClick={() => setTimerRunning(false)} className="bg-red-400 px-4 py-2 m-2 rounded">إيقاف</button>
          <button onClick={() => { setElapsedTime(0); setTimerRunning(false); }} className="bg-gray-500 px-4 py-2 m-2 rounded">إعادة ضبط</button>
        </div>
      </div>
      <div className="mt-6 bg-teal-600 p-4 rounded-lg text-center max-w-md w-full">
        <h2 className="text-xl font-semibold">طريقة بومودورو</h2>
        <p className="mt-2">اختر المهمة، ضبط المؤقت لمدة 25 دقيقة، اعمل بتركيز، خذ استراحة لمدة 5 دقائق، وكرر!</p>
        <input
          type="text"
          value={goalInput}
          onChange={(e) => setGoalInput(e.target.value)}
          className="w-full p-2 mt-4 rounded text-gray-900"
          placeholder="اكتب هدفك هنا..."
        />
        <button onClick={addGoal} className="bg-yellow-400 px-4 py-2 mt-2 rounded">إضافة هدف</button>
        <ul className="mt-4">
          {goals.map((goal, index) => (
            <li key={index} className="bg-gray-500 mt-2 p-2 rounded">{goal}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
