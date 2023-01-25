import type { NextPage } from 'next';
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
import Breadcrumbs from '@/components/common/Breadcrumbs';

const Explore: NextPage = () => {
  return (
    <main>
      <HeaderOne />
      <Breadcrumbs pageName="explore NFTs" />
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

export default Explore;
