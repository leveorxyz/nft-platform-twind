import { motion } from 'framer-motion';

interface Props {
  name: string;
  avatar: string;
  cover: string;
}

const ArtistCard = ({ name, avatar, cover }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 5 }}
      className="dark:bg-brand-700 dark:border-brand-700 border-brand-200 rounded-lg border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg cursor-pointer"
    >
      <div className="relative">
        <img
          src={cover}
          alt="item 1"
          className="h-32 w-full rounded-lg object-cover"
          loading="lazy"
        />
        <img
          src={avatar}
          alt="owner"
          className="h-12 w-12 rounded-full absolute -bottom-5 left-[50%] translate-x-[-50%]"
        />
      </div>

      <div className="flex flex-col justify-center gap-3">
        <a className="font-display hover:text-accent dark:hover:text-accent text-brand-700 mt-8 block text-center dark:text-white">
          {name}
        </a>

        <button className="border border-accent px-5 py-1 rounded-full hover:bg-accent-dark hover:text-white">
          Follow
        </button>
      </div>
    </motion.div>
  );
};

export default ArtistCard;
