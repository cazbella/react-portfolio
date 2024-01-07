import React from 'react';

function Header({ title }) {
  return (
    <div className="container-fluid">
      <div className="p-5 mb-4 bg-body-tertiary rounded-3 work-header" id="page-title">
        <h2 className="display-5 fw-bold">{title}</h2>
      </div>
    </div>
  );
}

export default Header;
