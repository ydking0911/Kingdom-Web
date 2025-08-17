import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems, siteConfig } from '../config/navigation';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-60 backdrop-blur-md border-b-2 border-minecraft-yellow shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
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

          {/* Navigation - Takes up remaining space */}
          <nav className="flex items-center justify-center flex-1 mx-10 overflow-x-auto">
            {navigationItems.map((item, index) => (
              <div key={item.id} className="flex items-center flex-shrink-0">
                <Link
                  to={item.path}
                  className={`minecraft-nav-link gothic-text text-lg font-semibold px-10 py-3 transition-all duration-200 ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                >
                  {item.name}
                </Link>
                {/* Section Divider */}
                {index < navigationItems.length - 1 && (
                  <div className="w-px h-8 bg-minecraft-yellow bg-opacity-40 mx-5"></div>
                )}
              </div>
            ))}
          </nav>

          {/* Game Join Button */}
          <div className="flex items-center flex-shrink-0">
            <button className="minecraft-button text-base">
              게임 참여
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
