import React from 'react';
import { MenuIcon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <header className={header}>
      <MenuIcon className="h-6 sm:hidden" />
      <h1 className={h1}>Project Owlfeather</h1>
    </header>
  )
};

const header = `
  col-span-12 
  p-4 
  bg-gradient-to-r 
  from-green-500 
  to-blue-500 
  flex 
  gap-4 
  border-b-8 
  border-black 
  border-opacity-30
`;

const h1 = `
  font-semibold 
  uppercase 
  tracking-wider
`;

export default Header;