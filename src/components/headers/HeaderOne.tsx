import { useEffect, useState } from 'react';
import Link from 'next/link';
import DarkMode from '../darkmode/DarkMode';
import Logo from '../Logo/Logo';
import SearchForm from './SearchForm';
import AccountMenu from './AccountMenu';
import MobileHeader from './MobileHeader';
import MobileMenu from './MobileMenu';

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
              </ul>
            </nav>

            <div className="ml-8 hidden items-center lg:flex xl:ml-12">
              <button className="border-brand-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="h-4 w-4 fill-brand-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                </svg>
              </button>
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
