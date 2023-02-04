import DarkMode from '../darkmode/DarkMode';
import AccountMenu from './AccountMenu';

interface Props {
  toggleHandler: () => void;
}

const MobileHeader = ({ toggleHandler }: Props) => {
  return (
    <div className="ml-auto flex lg:hidden">
      <AccountMenu />
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
