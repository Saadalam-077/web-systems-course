import React, { useState } from 'react';

const RegisterPage = ({ onRegister, onNavigate }) => {
  const [form, setForm] = useState({ studentName: '', studentNumber: '', sectionNumber: '101', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) { setError('Passwords do not match'); return; }
    if (form.studentNumber.length !== 8) { setError('Student number must be 8 digits'); return; }
    if (!onRegister(form)) { setError('Student number already exists'); return; }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 w-full max-w-md border border-slate-700">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-black text-xl">WS</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Register</h1>
          <p className="text-blue-300/70 font-arabic">تسجيل حساب جديد</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm">{error}</div>}
          
          <div>
            <label className="block text-slate-300 text-sm mb-2">Full Name</label>
            <input type="text" value={form.studentName} onChange={(e) => setForm({...form, studentName: e.target.value})} className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500" required />
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-2">Student Number (8 digits)</label>
            <input type="text" value={form.studentNumber} onChange={(e) => setForm({...form, studentNumber: e.target.value.replace(/\D/g, '').slice(0, 8)})} className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500" required />
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-2">Section</label>
            <select value={form.sectionNumber} onChange={(e) => setForm({...form, sectionNumber: e.target.value})} className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500">
              {[101,102,103,104,105,106,107,108].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-2">Password</label>
            <input type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500" required />
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-2">Confirm Password</label>
            <input type="password" value={form.confirmPassword} onChange={(e) => setForm({...form, confirmPassword: e.target.value})} className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500" required />
          </div>

          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg">Register</button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Already have an account? <button onClick={() => onNavigate('login')} className="text-blue-400 hover:underline">Login</button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
