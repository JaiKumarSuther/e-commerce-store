import React, { useState } from 'react';
import './Header.css';

const Header = ({ data, category, setCategory }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function clickHandler(title) {
    setCategory(title);
    setShowDropdown(false);
    setShowMobileMenu(false);
  }

  function handleMouseEnter(title) {
    if (title === 'Clothing') {
      setShowDropdown(true);
    }
  }

  function handleMouseLeave() {
    setShowDropdown(false);
  }

  const clothingItems = data.filter(item => item.title === "men's clothing" || item.title === "women's clothing");
  const otherItems = data.filter(item => item.title !== "men's clothing" && item.title !== "women's clothing");

  return (
    <header className="header">
      <div className="mobile-header">
        <div className="hamburger-menu" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          &#9776;
        </div>
        <div className="logo">
          E-COMMERCE STORE
        </div>
      </div>

      <div className="nav-items">
        <div
          className="nav-item"
          style={{
            color: category === 'all' ? '#8be9fd' : 'white',
          }}
          onClick={() => clickHandler('all')}
        >
          All
        </div>
        <div
          className="nav-item"
          style={{
            color: ['men\'s clothing', 'women\'s clothing'].includes(category) ? '#8be9fd' : 'white',
          }}
          onMouseEnter={() => handleMouseEnter('Clothing')}
          onMouseLeave={handleMouseLeave}
        >
          Clothing
          {showDropdown && (
            <div className="dropdown">
              {clothingItems.map(item => (
                <div
                  key={item.id}
                  className="dropdown-item"
                  onClick={() => clickHandler(item.title)}
                >
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                </div>
              ))}
            </div>
          )}
        </div>
        {otherItems.filter(item => item.title !== 'all').map((item) => (
          <div
            key={item.id}
            className="nav-item"
            style={{
              color: item.title === category ? '#8be9fd' : 'white',
            }}
            onClick={() => clickHandler(item.title)}
          >
            {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
          </div>
        ))}
      </div>

      {showMobileMenu && (
        <div className="mobile-nav-items">
          <div
            className="mobile-nav-item"
            onClick={() => clickHandler('all')}
          >
            All
          </div>
          <div
            className="mobile-nav-item"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Clothing
            {showDropdown && (
              <div className="mobile-dropdown">
                {clothingItems.map(item => (
                  <div
                    key={item.id}
                    className="mobile-dropdown-item"
                    onClick={() => clickHandler(item.title)}
                  >
                    {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                  </div>
                ))}
              </div>
            )}
          </div>
          {otherItems.filter(item => item.title !== 'all').map((item) => (
            <div
              key={item.id}
              className="mobile-nav-item"
              onClick={() => clickHandler(item.title)}
            >
              {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
