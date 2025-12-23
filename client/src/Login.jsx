import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const send = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/user/login', { email, pass });
      localStorage.setItem('token', res.data);
      alert("Logged In");
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div className="p-10 border-t mt-10">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={send} className="flex flex-col gap-4 w-80">
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} className="border p-2" />
        <input placeholder="Password" type="password" onChange={e => setPass(e.target.value)} className="border p-2" />
        <button type="submit" className="bg-green-500 text-white p-2">Login</button>
      </form>
    </div>
  );
}

export default Login;