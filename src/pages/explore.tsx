import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import HeaderOne from '@/components/headers/HeaderOne';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ExploreTabs from '@/components/collections/ExploreTabs';
import ExploreCard from '@/components/cards/ExploreCard';
import exploreData from '@/data/exploreData.json';
import Footer from '@/components/layout/Footer';

const Explore: NextPage = () => {
  return (
    <main>
      <NextSeo
        title="Explore | NFT ARTCART - Making Digital Art Accessible to Everyone"
        description="Introducing our NFT ARTCART, where the world of NFT art meets the cutting-edge
        technology of blockchain and we are bringing the world's digital art to your
        screen."
      />
      <HeaderOne />
      <Breadcrumbs pageName="explore NFTs" />
      <div className="container pt-10">
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
        <div className="flex justify-center mt-10">
          <button className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-md py-3 px-8 text-center font-semibold text-white transition-all">
            Load More
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Explore;
