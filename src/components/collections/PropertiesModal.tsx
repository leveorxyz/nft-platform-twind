import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaTimes } from 'react-icons/fa';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const PropertiesModal = ({ isOpen, onClose }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 dark:bg-brand-700">
                <div className="border-b border-brand-500 pb-5">
                  <div className="flex justify-between border-b border-b-brand-500 pb-4">
                    <h3 className="text-lg">Add Properties</h3>
                    <FaTimes
                      className="h-6 w-6 dark:fill-white cursor-pointer hover:fill-red"
                      aria-hidden="true"
                      onClick={onClose}
                    />
                  </div>
                  <p className="my-4 text-md text-brand-300">
                    Item Properties Show Up Underneath Your Item, Are Clickable, And Can Be Filtered
                    In Your Collection&apos;s sidebar.
                  </p>
                  <div className="relative my-3 flex items-center">
                    <button className="dark:bg-brand-700 dark:border-brand-600 hover:bg-brand-100 border-brand-100 bg-brand-50 flex h-12 w-12 shrink-0 items-center justify-center self-end rounded-l-lg border border-r-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-brand-500 dark:fill-brand-300 h-6 w-6"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                      </svg>
                    </button>

                    <div className="flex-1">
                      <label className="font-display text-brand-700 mb-3 block text-base font-semibold dark:text-white">
                        Type
                      </label>
                      <input
                        type="text"
                        className="dark:bg-brand-700 px-4 dark:border-brand-600 focus:ring-accent border-brand-100 dark:placeholder-brand-300 h-12 w-full border border-r-0 focus:ring-inset dark:text-white"
                        placeholder="Character"
                      />
                    </div>

                    <div className="flex-1">
                      <label className="font-display text-brand-700 mb-3 block text-base font-semibold dark:text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        className="dark:bg-brand-700 px-4 dark:border-brand-600 focus:ring-accent border-brand-100 dark:placeholder-brand-300 h-12 w-full rounded-r-lg border focus:ring-inset dark:text-white"
                        placeholder="Male"
                      />
                    </div>
                  </div>

                  <button className="hover:bg-accent border-accent text-accent mt-2 rounded-full border-2 py-2 px-8 text-center text-sm font-semibold transition-all hover:text-white">
                    Add More
                  </button>
                </div>

                <button
                  type="button"
                  className="bg-accent shadow-accent-volume hover:bg-accent-dark  w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all mt-5"
                >
                  Save
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PropertiesModal;
