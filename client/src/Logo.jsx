import React from 'react';
import logo from './assets/Discom_transparent.png';
import "./App.css";

export default function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo-image" />
    </div>
  );
}
