import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ChatBot from './components/common/ChatBot';
import Home from './pages/Home';
import PatientDashboard from './pages/PatientDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AppointmentBooking from './pages/AppointmentBooking';
import MedicalReports from './pages/MedicalReports';
import VitalViews from './pages/VitalViews';
import NotFound from './pages/NotFound';
import MedicationReminder from './pages/MedicationReminder';
import Profile from './pages/Profile';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/patient-dashboard" element={<PatientDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/appointment-booking" element={<AppointmentBooking />} />
                <Route path="/medical-reports" element={<MedicalReports />} />
                <Route path="/vital-views" element={<VitalViews />} />
                <Route path="/medication-reminder" element={<MedicationReminder />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <ChatBot />
            <ToastContainer position="bottom-right" />
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;