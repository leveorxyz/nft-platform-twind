import DarkMode from '../darkmode/DarkMode';

interface Props {
  toggleHandler: () => void;
}

const MobileHeader = ({ toggleHandler }: Props) => {
  return (
    <div className="ml-auto flex lg:hidden">
      <a
        className="border-brand-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
        aria-label="profile"
      >
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
      </a>

      <DarkMode />
      <button
        className="js-mobile-toggle border-brand-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
        aria-label="open mobile menu"
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
          <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
        </svg>
      </button>
    </div>
  );
};

export default MobileHeader;
