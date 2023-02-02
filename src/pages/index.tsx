import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import HeaderOne from '@/components/headers/HeaderOne';
import Footer from '@/components/layout/Footer';
import HeroOne from '@/components/hero/HeroOne';
import NotableCollections from '@/components/collections/NotableCollections';
import GetStarted from '@/components/getstarted/GetStarted';
import LiveAuction from '@/components/auctions/LiveAuction';
import HotCollections from '@/components/collections/HotCollections';
import CoverflowCarousel from '@/components/carousel/CoverflowCarousel';
import ExploreCollections from '@/components/collections/ExploreCollections';
import FeaturedArtists from '@/components/artist/FeaturedArtists';

const Home: NextPage = () => {
  return (
    <main>
      <NextSeo
        title="NFT ArtCart, the largest NFT marketplace"
        description="Introducing our NFT ARTCART, where the world of NFT art meets the cutting-edge
        technology of blockchain and we are bringing the world's digital art to your
        screen."
      />
      <HeaderOne />
      <HeroOne />
      <NotableCollections />
      <GetStarted />
      <LiveAuction />
      <HotCollections />
      <CoverflowCarousel />
      <ExploreCollections />
      <FeaturedArtists />
      <Footer />
    </main>
  );
};

export default Home;
