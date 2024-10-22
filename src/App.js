import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ClientList from './components/ClientList';
import ClientCard from './components/ClientCards';
import NewClient from './components/NewClient';
import NewClientDetails from './components/NewClientDetails';
import ClientHistory from './components/ClientHistory';
import ClientListMain from './components/ClientsListMain';
import BroadcastServices from './components/BroadcastServices';
import ConversionServices from './components/ConversionServices';

import NewBroadcast from './components/NewBroadcast';
import NewBroadcastChat from './components/NewBroadcaseChat';
import LoginPage from './components/LoginPage';
import ResetPassword from './components/ResetPassword';


// This function will handle the conditional rendering based on the route
const AppContent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();  // Now, this will work because it's inside the Router context

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      setCollapsed(true); // Auto-collapse on mobile
    } else {
      setIsMobile(false);
      setCollapsed(false); // Expand by default on larger screens
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define routes where header and sidebar should not be shown
  const hideSidebarAndHeader = ['/login', '/reset-password'].includes(location.pathname);

  return (
    <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
      {!hideSidebarAndHeader && <Sidebar collapsed={collapsed} />}
      <Layout style={{ marginLeft: !hideSidebarAndHeader ? (collapsed ? (isMobile ? 80 : 80) : (isMobile ? 200 : 250)) : 0 }}>
        {!hideSidebarAndHeader && <Header collapsed={collapsed} toggleSidebar={toggleSidebar} />}
        <Routes>
          <Route path="/new-broadcast" element={<NewBroadcast />} />
          <Route path="/client-list" element={<ClientList />} />
          <Route path="/client-card" element={<ClientCard />} />
          <Route path="/new-client" element={<NewClient />} />
          <Route path="/new-client-details" element={<NewClientDetails />} />
          <Route path="/client-history" element={<ClientHistory />} />
          <Route path="/client-list-main" element={<ClientListMain />} />
          <Route path="/broadcast-services" element={<BroadcastServices />} />
          <Route path="/conversion" element={<ConversionServices />} />
          <Route path="/new-broadcast-chat" element={<NewBroadcastChat />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Layout>
    </Layout>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent /> {/* All routes and logic are inside the Router */}
    </Router>
  );
};

export default App;
