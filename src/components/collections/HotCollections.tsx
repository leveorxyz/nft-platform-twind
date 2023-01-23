import { motion } from 'framer-motion';
import CollectionItem from './CollectionItem';
import collections from '@/data/collections.json';
import Dropdown from '../common/Dropdown';

const LiveAuction = () => {
  return (
    <motion.div className="dark:bg-brand-800 relative py-20">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <h5 className="font-display text-brand-700  text-3xl dark:text-white">
              Hot Collections in
            </h5>
            <Dropdown
              title="Last 7 Days"
              options={['Last 7 Days', 'Last 24 Hours', 'Last 30 Days']}
            />
          </div>
          <a href="#!" className="text-md font-medium text-accent dark:text-brand-200">
            View All
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center"
        >
          {collections.map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LiveAuction;
