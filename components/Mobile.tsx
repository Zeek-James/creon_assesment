'use client';

import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Send, Slack, Twitter } from 'lucide-react';

export function Mobile() {
  const navLinks = [
    { soon: false, name: 'Cedron Link', url: '/' },
    { soon: true, name: 'Token', url: '/about' },
    { soon: true, name: 'AI Revenue', url: '/shop' },
    { soon: true, name: 'AI Launchpad ', url: '/contact' },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' className='bg-white text-black p-2'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <SheetHeader>
          <SheetTitle asChild>
            <div className=''>
              <Button className='border-2 border-white text-white  bg-transparent'>
                Connect
              </Button>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className='flex flex-col mt-8 gap-4'>
          <ul className='flex flex-col text-black gap-6'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href='/' className='text-sm text-white'>
                  {link.name}{' '}
                  {link.soon && (
                    <Badge className='text-[#AB23FF] text-[12px]'>SOON</Badge>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <SheetFooter className='mt-auto'>
          <div className='flex w-full gap-4 mt-auto bg-black'>
            <span className='border rounded-full border-white p-2'>
              <Send size={34} />
            </span>
            <span className='border rounded-full border-white p-2'>
              <Slack size={34} />
            </span>
            <span className='border rounded-full border-white p-2'>
              <Twitter size={34} />
            </span>
          </div>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
