import HeaderOne from '@/components/headers/HeaderOne';
import Footer from '@/components/layout/Footer';
import HeroOne from '@/components/hero/HeroOne';
import Carousel from '@/components/carousel/Carousel';
import GetStarted from '@/components/getstarted/GetStarted';
import LiveAuction from '@/components/auctions/LiveAuction';
import HotCollections from '@/components/collections/HotCollections';
import CoverflowCarousel from '@/components/carousel/CoverflowCarousel';
import ExploreCollections from '@/components/collections/ExploreCollections';

export default function Home() {
  return (
    <>
      <HeaderOne />
      <HeroOne />
      <Carousel />
      <GetStarted />
      <LiveAuction />
      <HotCollections />
      <CoverflowCarousel />
      <ExploreCollections />
      <Footer />
    </>
  );
}
