import Register from './Register';
import Login from './Login';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold p-10 text-blue-600">SaaS Task Manager</h1>
      <Register />
      <Login />
    </div>
  );
}

export default App;