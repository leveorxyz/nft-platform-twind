import { motion } from 'framer-motion';
import ExploreTabs from './ExploreTabs';
import ExploreCard from '../cards/ExploreCard';
import exploreData from '@/data/exploreData.json';

const ExploreCollections = () => {
  return (
    <motion.div className="dark:bg-brand-800 relative py-20">
      <div className="container">
        <div className="flex justify-between mb-10">
          <h5 className="font-display text-brand-700  text-3xl dark:text-white">
            Explore Collection
          </h5>
          <a href="#!" className="text-md font-medium text-accent dark:text-brand-200">
            View All
          </a>
        </div>
        <ExploreTabs />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center"
        >
          {exploreData.map((item) => (
            <ExploreCard key={item.id} {...item} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExploreCollections;
