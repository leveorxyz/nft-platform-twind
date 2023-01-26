import { motion } from 'framer-motion';
import NFTCard from '../cards/NFTCard';
import auctions from '@/data/auctions.json';

const MoreCollections = () => {
  return (
    <motion.div className="py-20">
      <div className="container">
        <div className="flex justify-between mb-10">
          <h5 className="font-display capitalize text-brand-700  text-3xl dark:text-white">
            More From this Collection
          </h5>
          <a href="#!" className="text-md font-medium text-accent dark:text-brand-200">
            View Collection
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center"
        >
          {auctions.slice(0, 4).map((item) => (
            <NFTCard key={item.id} {...item} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MoreCollections;
