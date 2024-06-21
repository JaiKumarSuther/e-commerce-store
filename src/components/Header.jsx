import React from 'react';
import './Header.css';

const Header = ({ data, category, setCategory }) => {
  function clickHandler(title) {
    setCategory(title);
  }

  return (
    <header className="header">
      <div className="logo">
        E-COMMERCE STORE
      </div>
      <div className="nav-items">
        {data.map((item) => (
          <div
            key={item.title}
            className="nav-item"
            style={{
              color: item.title === category ? '#8be9fd' : 'white',
            }}
            onClick={() => clickHandler(item.title)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
