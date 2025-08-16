import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems, siteConfig } from '../config/navigation';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-black bg-opacity-80 backdrop-blur-sm border-b-2 border-minecraft-yellow shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/images/logo.png" 
                alt="Kingdom Online Logo" 
                className="w-16 h-16 object-cover rounded"
              />
              <span className="kingdom-title text-white text-xl hidden sm:block tracking-wider">
                {siteConfig.name}
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`minecraft-nav-link gothic-text ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Game Join Button */}
          <div className="flex items-center space-x-4">
            <button className="minecraft-button text-sm">
              게임 참여
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
