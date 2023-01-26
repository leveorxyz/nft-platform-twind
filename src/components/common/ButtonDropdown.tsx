import { Menu, Transition } from '@headlessui/react';

interface Props {
  title: string;
  options: string[];
  iconName?: string;
}

const ButtonDropdown = ({ title, options, iconName }: Props) => {
  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <div>
        <Menu.Button className="flex w-full capitalize text-sm items-center gap-2 dark:border-brand-600 dark:bg-brand-700 dark:hover:bg-accent hover:bg-accent border-brand-100 font-display text-brand-700  h-9  rounded-lg border bg-white px-4 font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white">
          {iconName && (
            <svg className="icon h-[.875rem] w-[.875rem] fill-white">
              <use xlinkHref={`/images/icons/icons.svg#icon-${iconName}`}></use>
            </svg>
          )}
          {title}
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
        <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right rounded-md text-white bg-brand-900 shadow-lg dark:bg-brand-700">
          <div className="px-3 py-5">
            {options.map((item) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <button
                    className={`dark:hover:bg-brand-600 flex justify-between capitalize hover:bg-brand-50 items-center rounded-xl px-5 py-2 transition-colors font-bold ${
                      active ? 'bg-violet-500 text-brand-900 dark:text-white' : 'text-gray-900'
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

export default ButtonDropdown;
