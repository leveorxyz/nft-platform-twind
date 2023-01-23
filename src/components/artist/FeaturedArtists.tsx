import { motion } from 'framer-motion';
import ArtistCard from '../cards/ArtistCard';
import artists from '@/data/artists.json';

const FeaturedArtists = () => {
  return (
    <motion.div className="dark:bg-brand-900 relative py-20">
      <div className="container">
        <div className="flex justify-between mb-10">
          <h5 className="font-display text-brand-700  text-3xl dark:text-white">
            Featured Artists
          </h5>
          <a href="#!" className="text-md font-medium text-accent dark:text-brand-200">
            View All
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-center"
        >
          {artists.map((item) => (
            <ArtistCard key={item.id} {...item} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedArtists;
