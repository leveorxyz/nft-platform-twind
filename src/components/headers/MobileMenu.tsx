import Link from 'next/link';
import Logo from '../Logo/Logo';
import socialIcons from '@/data/footer/social_icons.json';

interface Props {
  isVisible: boolean;
  toggleHandler: () => void;
}

const MobileMenu = ({ isVisible, toggleHandler }: Props) => {
  return (
    <div
      className={`dark:bg-brand-800 fixed inset-0 z-20 ml-auto items-center bg-white lg:relative px-4 ${
        isVisible ? 'visible' : 'hidden'
      }`}
    >
      <div className="t-0 dark:bg-brand-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden">
        <Logo />
        <button
          className="border-brand-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
          onClick={toggleHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="fill-brand-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
          </svg>
        </button>
      </div>

      {/* Search Form */}
      <form action="search" className="relative mt-24 mb-8 w-full lg:hidden">
        <input
          type="search"
          className="text-brand-700 placeholder-brand-500 focus:ring-accent border-brand-100 w-full rounded-lg border py-3 px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
          placeholder="Search"
        />
        <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="fill-brand-500 h-4 w-4 dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
          </svg>
        </span>
      </form>

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
                Create NFT
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-10 w-full lg:hidden">
        <div className="bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
          MetaMask not available
        </div>
        <hr className="dark:bg-brand-600 bg-brand-100 my-5 h-px border-0" />
        <div className="flex items-center justify-center space-x-5">
          {socialIcons.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <svg className="icon group-hover:fill-accent fill-brand-300 h-5 w-5 dark:group-hover:fill-white">
                <use xlinkHref={`images/icons/icons.svg#icon-${item.icon}`} />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
