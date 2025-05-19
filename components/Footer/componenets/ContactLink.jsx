import React from 'react';
import FooterCTAButton from './FooterCTAButton';

const ContactLink = () => {
  return (
    <div className="grid gap-[16px] justify-center">
      <div className="grid gap-[16px] text-center">
        <h1 className="text-[40px] font-bold">Do you want to contact me?</h1>
        <p className="text-[18px] leading-[180%]">
          Let's set up a meeting, talk and see what we can create together.
        </p>
      </div>
      <FooterCTAButton />
    </div>
  );
};

export default ContactLink;
