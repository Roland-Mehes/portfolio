import React from 'react';

const MainWrapper = ({ children }) => {
  return <div className="px-[16px] md:px-[64px] lg:px-[128px]">{children}</div>;
};

export default MainWrapper;
