
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Sidebar from './components/Sidebar';
// // import UserManagement from './components/UserManagement';
// // import Partner from './partner/partner';
// // import Report from './Report/Report';
// // import Home from './Home/Home';
// // import SignUp from './SignUp/SignUp';
// // import Login from './Login/Login';  // Fixed import

// // const App = () => {
// //   return (
    
// //     <Router>
// //       <div style={{ display: 'flex' }}>
// //         <Sidebar />
// //         <Routes>
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/signup" element={<SignUp />} />
// //           <Route path="/Home" element={<Home />} />
// //           <Route path="/" element={<UserManagement />} />
// //           <Route path="/UserManagement" element={<UserManagement />} />
// //           <Route path="/partner" element={<Partner />} />
// //           <Route path="/Report" element={<Report />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;


// // // import React from 'react';
// // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // import Sidebar from './components/Sidebar';
// // // import UserManagement from './components/UserManagement';
// // // import Partner from './partner/partner';
// // // import Report from './Report/Report';
// // // import Home from './Home/Home';
// // // import SignUp from './SignUp/SignUp';
// // // import Login from './Login/Login';

// // // const App = () => {
// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         {/* Auth pages without sidebar */}
// // //         <Route path="/login" element={<Login />} />
// // //         <Route path="/signup" element={<SignUp />} />
        
// // //         {/* All other pages with sidebar */}
// // //         <Route element={
// // //           <div style={{ display: 'flex' }}>
// // //             <Sidebar />
// // //             <Routes>
// // //               <Route path="/Home" element={<Home />} />
// // //               <Route path="/" element={<UserManagement />} />
// // //               <Route path="/UserManagement" element={<UserManagement />} />
// // //               <Route path="/partner" element={<Partner />} />
// // //               <Route path="/Report" element={<Report />} />
// // //             </Routes>
// // //           </div>
// // //         } />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // };

// // // export default App;



// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LayoutWithSidebar from './components/LayoutWithSidebar';
// import UserManagement from './components/UserManagement';
// import Partner from './partner/partner';
// import Report from './Report/Report';
// import Home from './Home/Home';
// import SignUp from './SignUp/SignUp';
// import Login from './Login/Login';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public routes (no sidebar) */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
        

//         {/* Protected routes (with sidebar) */}
//         <Route element={<LayoutWithSidebar />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/UserManagement" element={<UserManagement />} />
//           <Route path="/partner" element={<Partner />} />
//           <Route path="/report" element={<Report />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;





import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import LayoutWithSidebar from './components/LayoutWithSidebar';
import Partner from './partner/partner';
import Report from './Report/Report';
import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import UserManagement from './components/UserManagement';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('user');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  const [auth, setAuth] = useState(!!localStorage.getItem('user'));

  useEffect(() => {
    const handleStorage = () => {
      setAuth(!!localStorage.getItem('user'));
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <LayoutWithSidebar />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="UserManagement" element={<UserManagement />} />
          <Route path="partner" element={<Partner />} />
          <Route path="report" element={<Report />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
