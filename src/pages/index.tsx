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
        description="NFT ArtCart is the world's first and largest web3 marketplace for NFTs and crypto collectibles. Browse, create, buy, sell, and auction NFTs using OpenSea today."
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
