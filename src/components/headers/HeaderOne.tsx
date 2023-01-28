import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import DarkMode from '../darkmode/DarkMode';
import Logo from '../Logo/Logo';
import SearchForm from './SearchForm';
import AccountMenu from './AccountMenu';
import MobileHeader from './MobileHeader';
import MobileMenu from './MobileMenu';
import PagesDropdown from './PagesDropdown';

export default function Header01() {
  const [isVisible, setIsVisible] = useState(false);

  // window resize
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        setIsVisible(false);
      }
    });
  });

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-0 z-20 w-full backdrop-blur transition-colors">
        <div className="flex items-center px-6 py-6 xl:px-24 ">
          <Link href="/">
            <Logo />
          </Link>
          <SearchForm />

          <div className="dark:bg-brand-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
            <nav className="navbar w-full">
              <ul className="flex flex-col lg:flex-row">
                <li className="group">
                  <Link href="/">
                    <button className="text-brand-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                      Home
                    </button>
                  </Link>
                </li>

                <PagesDropdown />

                <li className="group">
                  <Link href="/explore">
                    <button className="text-brand-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                      Explore
                    </button>
                  </Link>
                </li>

                <li className="group">
                  <Link href="/create">
                    <button className="text-brand-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                      Create
                    </button>
                  </Link>
                </li>
                {/* <li className="group py-0.5">
                  <ConnectButton />
                </li> */}
              </ul>
            </nav>

            <div className="ml-8 hidden items-center lg:flex xl:ml-12 w-full">
              <ConnectButton />
              <AccountMenu />
              <DarkMode />
            </div>
          </div>
          <MobileHeader toggleHandler={handleToggle} />
        </div>
      </header>

      <MobileMenu isVisible={isVisible} toggleHandler={handleToggle} />
    </>
  );
}
