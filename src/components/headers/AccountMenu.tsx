import Link from 'next/link';

const AccountMenu = () => {
  return (
    <div className="group relative">
      <button className="dropdown-toggle border-brand-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          className="fill-brand-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
        </svg>
      </button>

      <div className="dark:bg-brand-800 group-hover:opacity-100 group-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full absolute grid !translate-y-4 py-4 px-2 shadow-2xl  invisible opacity-0 rounded-md">
        <div>
          <button className="font-display text-brand-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white">
            <span>0x7erwersr3wc..</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="dark:fill-brand-300 fill-brand-500 ml-auto mb-px h-4 w-4"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z" />
            </svg>
          </button>
        </div>
        <div className="dark:border-brand-600 border-brand-100 mx-5 mb-6 rounded-lg border p-4">
          <span className="dark:text-brand-200 text-sm font-medium tracking-tight">Balance</span>
          <div className="flex items-center">
            <svg className="icon icon-ETH -ml-1 mr-1 h-[1.125rem] w-[1.125rem]">
              <use xlinkHref="/images/icons/icons.svg#icon-ETH" />
            </svg>
            <span className="text-green text-lg font-bold">100 ETH</span>
          </div>
        </div>

        <Link
          href="/my-profile"
          className="dark:hover:bg-brand-600 hover:text-accent focus:text-accent hover:bg-brand-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="fill-brand-700 h-4 w-4 transition-colors dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
          </svg>
          <span className="font-display text-brand-700 mt-1 text-sm dark:text-white">
            My Profile
          </span>
        </Link>

        <Link
          href="#!"
          className="dark:hover:bg-brand-600 hover:text-accent focus:text-accent hover:bg-brand-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="fill-brand-700 h-4 w-4 transition-colors dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <span className="font-display text-brand-700 mt-1 text-sm dark:text-white">
            Edit Profile
          </span>
        </Link>

        <Link
          href="#!"
          className="dark:hover:bg-brand-600 hover:text-accent focus:text-accent hover:bg-brand-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="fill-brand-700 h-4 w-4 transition-colors dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z" />
          </svg>
          <span className="font-display text-brand-700 mt-1 text-sm dark:text-white">Sign out</span>
        </Link>
      </div>
    </div>
  );
};

export default AccountMenu;
