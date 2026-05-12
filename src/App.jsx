import React from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext.jsx';
import ProtectedRoute from '@/components/ProtectedRoute.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import MainLayout from '@/components/MainLayout.jsx';
import HomePage from '@/pages/HomePage.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import SignUpPage from '@/pages/SignUpPage.jsx';
import DashboardPage from '@/pages/DashboardPage.jsx';
import ProyekPage from '@/pages/ProyekPage.jsx';
import TugasPage from '@/pages/TugasPage.jsx';
import JadwalPage from '@/pages/JadwalPage.jsx';
import ProgresPage from '@/pages/ProgresPage.jsx';
import RisikoPage from '@/pages/RisikoPage.jsx';
import TimPage from '@/pages/TimPage.jsx';
import NotifikasiPage from '@/pages/NotifikasiPage.jsx';
import LaporanPage from '@/pages/LaporanPage.jsx';
import SettingsPage from '@/pages/SettingsPage.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          
          {/* Protected Routes */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="projects" element={<ProyekPage />} />
            <Route path="tasks" element={<TugasPage />} />
            <Route path="schedule" element={<JadwalPage />} />
            <Route path="progress" element={<ProgresPage />} />
            <Route path="risks" element={<RisikoPage />} />
            <Route path="team" element={<TimPage />} />
            <Route path="notifications" element={<NotifikasiPage />} />
            <Route path="reports" element={<LaporanPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;