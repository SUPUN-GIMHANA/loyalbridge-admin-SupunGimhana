


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       if (username && password) {
//         navigate('/Home');
//       } else {
//         setError('Please enter both username and password');
//         setIsLoading(false);
//       }
//     }, 1500);
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <div className="auth-header">
//           <h2 className="auth-title">Welcome Back</h2>
//           <p className="auth-subtitle">Please enter your credentials</p>
//         </div>
        
//         <form onSubmit={handleSubmit} className="auth-form">
//           <div className={`form-group ${username ? 'filled' : ''}`}>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <label htmlFor="username">Username</label>
//             <div className="underline"></div>
//           </div>
          
//           <div className={`form-group ${password ? 'filled' : ''}`}>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <label htmlFor="password">Password</label>
//             <div className="underline"></div>
//           </div>
          
//           {error && <div className="error-message animate-shake">{error}</div>}
          
//           <button 
//             type="submit" 
//             className={`auth-button ${isLoading ? 'loading' : ''}`}
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <span className="spinner"></span>
//             ) : (
//               'Login'
//             )}
//           </button>
//         </form>
        
//         <div className="auth-footer">
//           <p>Don't have an account? <a href="/signup" className="auth-link">Sign up</a></p>
//         </div>
        
//         <div className="floating-shapes">
//           <div className="shape circle"></div>
//           <div className="shape triangle"></div>
//           <div className="shape square"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate login success
    setTimeout(() => {
      if (username && password) {
        // Save user info to localStorage
        localStorage.setItem('user', JSON.stringify({ username }));
        navigate('/home');
      } else {
        setError('Please enter both username and password');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Please enter your credentials</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className={`form-group ${username ? 'filled' : ''}`}>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="username">Username</label>
            <div className="underline"></div>
          </div>

          <div className={`form-group ${password ? 'filled' : ''}`}>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <div className="underline"></div>
          </div>

          {error && <div className="error-message animate-shake">{error}</div>}

          <button
            type="submit"
            className={`auth-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? <span className="spinner"></span> : 'Login'}
          </button>
        </form>

        <div className="auth-footer">
          <p>Don't have an account? <a href="/signup" className="auth-link">Sign up</a></p>
        </div>

        <div className="floating-shapes">
          <div className="shape circle"></div>
          <div className="shape triangle"></div>
          <div className="shape square"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
