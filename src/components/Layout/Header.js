import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LogOut, User, Calendar, Users, BarChart3 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { user, logout, isAdmin } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: BarChart3, adminOnly: false },
    { name: 'Patients', href: '/patients', icon: Users, adminOnly: true },
    { name: 'Appointments', href: '/appointments', icon: Calendar, adminOnly: true },
    { name: 'Calendar', href: '/calendar', icon: Calendar, adminOnly: true },
  ];

  const filteredNavigation = navigation.filter(item => !item.adminOnly || isAdmin);

  return (
    <header className="border-bottom bg-white shadow-sm">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-2">
          <div className="d-flex align-items-center">
            <h1 className="h4 mb-0 fw-bold text-primary">DentalCare Pro</h1>

            {/* Desktop nav */}
            <nav className="d-none d-md-flex ms-4 gap-3">
              {filteredNavigation.map(item => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`d-flex align-items-center px-3 py-2 rounded text-decoration-none transition ${
                      isActive
                        ? 'text-primary bg-primary bg-opacity-10'
                        : 'text-dark text-opacity-75 hover-bg-light'
                    }`}
                  >
                    <Icon size={16} className="me-2" />
                    <span className="small fw-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-2">
              <User size={20} className="text-secondary" />
              <span className="small fw-medium text-dark">{user?.name}</span>
              <span className="badge bg-secondary text-capitalize">
                {user?.role === 'admin' ? 'Dentist' : 'Patient'}
              </span>
            </div>
            <button
              onClick={logout}
              className="btn btn-sm btn-outline-danger d-flex align-items-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="d-md-none border-top">
        <div className="container-fluid py-2">
          {filteredNavigation.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`d-flex align-items-center px-3 py-2 rounded text-decoration-none transition ${
                  isActive
                    ? 'text-primary bg-primary bg-opacity-10'
                    : 'text-dark text-opacity-75 hover-bg-light'
                }`}
              >
                <Icon size={16} className="me-2" />
                <span className="small fw-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
