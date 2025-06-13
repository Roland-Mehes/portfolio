import React from 'react';
import Link from 'next/link';

const FooterCTAButton = () => {
  return (
    <div className="flex items-center justify-center">
      <Link href="/contact">
        <span className="custom-button">Send email</span>
      </Link>
    </div>
  );
};

export default FooterCTAButton;
