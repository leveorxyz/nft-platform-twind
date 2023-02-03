import { Menu, Transition } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

interface Props {
  title: string;
  options: string[];
}

const Dropdown = ({ title, options }: Props) => {
  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <div>
        <Menu.Button className="flex w-full items-center font-display text-3xl gap-1 dark:text-accent">
          {title} <FaChevronDown />
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
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-brand-100 shadow-lg dark:bg-brand-900">
          <div className="px-1 py-1">
            {options.map((item) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <button
                    className={`hover:bg-brand-700 ${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
