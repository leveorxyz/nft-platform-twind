import Link from 'next/link';
import Logo from '../Logo/Logo';
import menu from '@/data/footer/menu.json';
import socialIcons from '@/data/footer/social_icons.json';

const Footer = () => {
  return (
    <footer className="dark:bg-brand-900 page-footer bg-white">
      <div className="container">
        <div className="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
          <div className="col-span-3 md:col-span-4">
            <Link href="/" className="mb-6 inline-block">
              <Logo />
            </Link>

            <p className="dark:text-brand-300 mb-12">
              The world&apos;s largest digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, sell, and discover exclusive digital items.
            </p>

            <div className="flex space-x-5">
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

          {menu.map((item) => (
            <div className="col-span-full sm:col-span-3 md:col-span-2" key={item.id}>
              <h3 className="font-display text-brand-700 mb-6 text-sm dark:text-white">
                {item.title}
              </h3>
              <ul className="dark:text-brand-300 flex flex-col space-y-1">
                {item.list.map((item) => {
                  const { id, href, text } = item;
                  return (
                    <li key={id}>
                      <Link href={href} className="hover:text-accent dark:hover:text-white">
                        {text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-b border-brand-500" />

        <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
          <span className="dark:text-brand-400 text-sm">
            <span>&copy; {new Date().getFullYear()} </span>
            <a className="hover:text-accent dark:hover:text-white"> Leveor</a> <span></span>
          </span>

          <ul className="dark:text-brand-400 flex flex-wrap space-x-4 text-sm">
            <li>
              <a className="hover:text-accent dark:hover:text-white">Terms and conditions</a>
            </li>
            <li>
              <a className="hover:text-accent dark:hover:text-white">Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
