'use client';
import React from 'react';
import Modal from './ContactModal/Modal';
import { useState } from 'react';

const FooterCTAButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button onClick={(e) => handleOnClick(e)}>
          <span className="custom-button">Send email</span>
        </button>
      </div>
      <div>
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
};

export default FooterCTAButton;
