import { list } from 'postcss';
import React from 'react';

const Side = () => {
  return (
    <nav className={nav}>
      <ul className={ul}>
        <li className={li + selected}>Home</li>
        <li className={li}>Product</li>
        <li className={li}>Docs</li>
        <li className={li}>Company</li>
        <li className={li}>Contact</li>
      </ul>
    </nav>
  )
};

const nav = `
  hidden

  sm:block
  sm:col-span-12
  lg:col-span-3
`;

const ul = `
  flex
  gap-4
  bg-gray-800
  justify-evenly
  p-2

  lg:flex-col
  lg:my-6
  lg:rounded-md
  lg:ml-6
  lg:p-4

  2xl:bg-gray-900
`;

const li = `
  px-6
  py-2
  tracking-wider
  text-gray-200
  cursor-pointer
  w-full
  text-center
  text-sm
  gap-1

  hover:bg-white
  hover:bg-opacity-10
  hover:text-white
  rounded-full

  lg:text-left
  lg:text-lg

  2xl:text-green-300
  2xl:font-light
  `;

const selected = `
  bg-white
  bg-opacity-10
`;

export default Side;
