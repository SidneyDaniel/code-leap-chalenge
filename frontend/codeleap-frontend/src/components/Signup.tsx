import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/userSlice';

const Signup: React.FC = () => {
  const [name, setName] = useState(''); 
  const dispatch = useAppDispatch();

  const handleSubmit = (e?: React.FormEvent | React.KeyboardEvent) => {
    e?.preventDefault();
    if (name.trim()) {
      dispatch(login(name.trim()));
    }
  };

  return (
    <div className="fixed inset-0 bg-codeleap-light-gray  flex items-center justify-center p-4">
      <section className="bg-white p-6 rounded-2xl shadow-sm w-full max-w-125">
        <h1 className="text-xl text-black font-bold mb-6">Welcome to CodeLeap network!</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-black">
              Please enter your username 
            </label>
            <input
              id="username"
              type="text"
              autoFocus
              placeholder="Your name please...."
              className="border text-black border-codeleap-border rounded-lg p-2 focus:ring-1 focus:ring-codeleap-blue outline-none transition-all duration-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!name.trim()}
              className="bg-codeleap-blue hover:bg-codeleap-dark-blue text-white px-8 py-1.5 rounded-lg font-bold transition-colors"
            >
              ENTER
            </button>
          </div>
        </form>

      </section>
    </div>
  );
};

export default Signup;