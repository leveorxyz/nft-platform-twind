import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const PagesDropdown = () => {
  return (
    <Menu as="li" className="group">
      <div>
        <Menu.Button className="text-brand-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
          Pages
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-brand-100 shadow-lg px-5 py-5 dark:bg-brand-800">
          <div className="p-1">
            {pages.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <Link
                    href={item.link}
                    className={`dark:hover:bg-brand-600  hover:bg-brand-50 flex items-center rounded-xl px-5 py-2 transition-colors font-bold ${
                      active ? 'bg-violet-500 text-brand-900 dark:text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default PagesDropdown;

const pages = [
  { name: 'Explore', link: '/explore' },
  { name: 'NFT Details', link: '/nft/1' },
  { name: 'Stats', link: '/stats' },
  { name: 'Not Found', link: '/404' },
];
