import { Tab } from '@headlessui/react';
import Activities from './tabs/Activities';
import Details from './tabs/Details';
import Offer from './tabs/Offer';
import PriceHistory from './tabs/PriceHistory';
import Properties from './tabs/Properties';

const tabs = [
  { name: 'Offers', icon: 'offers', panel: <Offer /> },
  { name: 'Properties', icon: 'properties', panel: <Properties /> },
  { name: 'Details', icon: 'details', panel: <Details /> },
  { name: 'Activities', icon: 'activity', panel: <Activities /> },
  { name: 'Price History', icon: 'price', panel: <PriceHistory /> },
];

const NFTTabs = () => {
  return (
    <div className="mt-10 md:mt-0">
      <Tab.Group>
        <Tab.List className="space-x-4">
          {tabs.map((tab) => (
            <Tab key={tab.name}>
              {({ selected }) => (
                <button
                  className={`px-3 py-2 font-medium text-md cursor-pointer capitalize ${
                    selected
                      ? 'border-b-2 border-accent text-indigo-700'
                      : 'text-brand-300 hover:text-brand-700 dark:hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <svg className="icon mr-1 h-5 w-5 fill-current">
                      <use xlinkHref={`/images/icons/icons.svg#icon-${tab.icon}`}></use>
                    </svg>{' '}
                    {tab.name}
                  </span>
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-1">
          {tabs.map((tab) => (
            <Tab.Panel key={tab.name} id={tab.name}>
              {tab.panel}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default NFTTabs;
