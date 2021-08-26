import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Icon from '../ui-kit/icon';

const menuItems = [
  { label: 'About Us', route: '/about' },
  { label: 'Why Choose Us', route: '/why-choose-us' },
  { label: 'Idea Board', route: '/idea-board' },
  { label: 'Services', route: '/services' },
  { label: 'Patio Packages', route: '/patio-packages' },
  { label: 'Contact Us', route: '/contact' },
];

interface Props {
  isSticky: boolean;
}

export function Navbar({ isSticky }: Props) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className={'top-0 left-0 right-0 z-40' + (isSticky ? ' fixed shadow-outer' : ' absolute')}>
      <nav className={'flex justify-start  z-40' + (isSticky ? ' p-15 bg-white' : ' bg-opacity-100 pt-60 pb-40 px-15')}>
        <div className="container mx-auto flex justify-between xl:justify-start items-center">
          <Link href="/">
            <a className="py-5 mr-15">
              <Image src="/assets/images/logo.svg" width={isSticky ? 136 : 193} height={isSticky ? 49 : 69} alt="J & D Landscaping"/>
            </a>
          </Link>
          <button className="xl:hidden px-10" onClick={() => setNavbarOpen(!navbarOpen)}>
            <Image src={isSticky ? '/assets/images/icons/menu-black.svg' : '/assets/images/icons/menu.svg'} width={27}
                   height={25} alt="Menu"/>
          </button>
          <div className={
            "fixed xl:relative duration-300 transition-all xl:transition-none h-screen xl:h-auto xl:flex flex-col xl:flex-row xl:flex-grow w-full md:w-365 bg-primary xl:bg-opacity-0 top-0 ml-0 xl:ml-50 px-20 xl:px-0 justify-start xl:justify-end items-start xl:items-center drop-shadow-lg" +
            (navbarOpen ? " left-0 ease-out-in" : " -left-800 xl:left-0 ease-in-out")
          }>
            <div className="flex w-full xl:hidden justify-between pt-70 pb-30">
              <Link href="/">
                <a className="flex xl:hidden items-center">
                  <Image src="/assets/images/logo.svg" height={44} width={152} alt="J & D Landscaping"/>
                </a>
              </Link>
              <button className="px-10" onClick={() => setNavbarOpen(false)}>
                <Icon name="close" color="white" size={25}/>
              </button>
            </div>
            <ul className="flex flex-col xl:flex-row font-medium text-white text-16 xl:text-13 pl-30 xl:pl-0">
              <li className="p-15 nav-link block lg:hidden">
                <Link href={process.env.loginPageUrl || 'http://localhost:4200'} passHref>
                  <a className="relative xl:px-25 xl:py-10">Login</a>
                </Link>
              </li>
              {menuItems.map((menuItem, i) => (
                <li key={i} className={'p-15 nav-link font-medium relative' + (isSticky ? ' xl:text-light-500' : ' text-white')}>
                  <Link href={menuItem.route}>
                    <a className="whitespace-nowrap">{menuItem.label}</a>
                  </Link>
                </li>
              ))}
              <li className="nav-link hidden xl:flex items-center">
                <Link href="https://estimate.jdlandscaping.net/request-estimate/step-1" passHref>
                  <button className="btn btn-primary btn-md ml-10">Request Estimate</button>
                </Link>
              </li>
              {
                isSticky &&
                  <li className="nav-link hidden xl:flex items-center">
                    <Link href={process.env.loginPageUrl || 'http://localhost:4200'} passHref>
                      <button className="btn btn-warning btn-md ml-20">Log in</button>
                    </Link>
                  </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.defaultProps = {
  isSticky: true
}
