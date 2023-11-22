'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Mobile } from './Mobile';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { soon: false, name: 'Creon Pass', url: '/' },
    { soon: true, name: 'Token', url: '/about' },
    { soon: true, name: 'AI Revenue', url: '/shop' },
    { soon: true, name: 'AI Launchpad ', url: '/contact' },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    changeBackground();
  });
  return (
    <nav
      className={`flex  items-center fixed top-0 w-full z-20 ${
        scrolled ? 'bg-[#111] text-white shadow-md' : 'text-white'
      } transition-all`}
      aria-label='Navigation'
    >
      <header className=' w-[95%] lg:w-[85%] mx-auto py-6'>
        <div className='flex justify-between items-center w-full'>
          <Image src={Logo} style={{}} alt='logo' width={140} height={50} />
          <div className='flex items-center gap-4'>
            <ul className='hidden lg:flex gap-6'>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href='/' className='text-sm'>
                    {link.name}{' '}
                    {link.soon && (
                      <Badge className='text-[#AB23FF] text-[12px] relative -top-1'>
                        SOON
                      </Badge>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className='border-2 border-white text-white  bg-transparent'>
              Connect
            </Button>
            <div className='lg:hidden'>
              <Mobile />
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default NavigationBar;
