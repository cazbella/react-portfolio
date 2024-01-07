import React from 'react';
import "./Header.css";

function Header({ title }) {
  return (
    <div className="container-fluid">
      <div className="mb-4 rounded-3 work-header" id="page-title">
        <h1 className="display-6 fw-bold" style={{ fontSize: '24px' }}>{title}</h1>
      </div>
    </div>
  );
}

export default Header;
