import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="container mx-auto">
      <h1 className='text-3xl my-2 '>Conditional Rendering</h1>
      {isLoggedIn ? (
        <div>
          <h2  className='text-xl font-semibold'>Welcome Back!</h2>
          <button className='bg-red-500 py-2 px-4 hover:bg-red-700 text-white font-semibold rounded-xl my-2' onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2 className='text-xl font-semibold'>Please Login</h2>
          <button className='bg-sky-500 py-2 px-4 hover:bg-sky-700 text-white font-semibold rounded-xl my-2' onClick={handleLogin}>Login</button>
        </div>
      )}
      <hr />
    </div>
  );
}

export default App;
