import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [org, setOrg] = useState('');

  const send = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/user/register', { name, email, pass, org });
      alert("User Created");
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div className="p-10">
      <form onSubmit={send} className="flex flex-col gap-4 w-80">
        <input placeholder="Name" onChange={e => setName(e.target.value)} className="border p-2" />
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} className="border p-2" />
        <input placeholder="Pass" type="password" onChange={e => setPass(e.target.value)} className="border p-2" />
        <input placeholder="Org" onChange={e => setOrg(e.target.value)} className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Register</button>
      </form>
    </div>
  );
}

export default Register;