// /src/App.tsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import MainPage from './pages/MainPage';
// import EC2MonitorPage from './pages/EC2MonitorPage';
// import Header from './features/common/Header';
// import Footer from './features/common/Footer';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path='/login' element={<LoginPage />} />
//         {/* <Route path='/main' element={<MainPage />} /> */}
//         <Route path='/main' element={<MainPage />} />
//         <Route path='/ec2-monitor' element={<EC2MonitorPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js';
import MainPage from './pages/MainPage.js';
import EC2MonitorPage from './pages/EC2MonitorPage.js';
import Header from './features/common/Header.js';
import Footer from './features/common/Footer.js';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/ec2-monitor' element={<EC2MonitorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
