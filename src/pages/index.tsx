import HeaderOne from '@/components/headers/HeaderOne';
import Footer from '@/components/layout/Footer';
import HeroOne from '@/components/hero/HeroOne';
import Carousel from '@/components/carousel/Carousel';
import GetStarted from '@/components/getstarted/GetStarted';
import LiveAuction from '@/components/auctions/LiveAuction';

export default function Home() {
  return (
    <>
      <HeaderOne />
      <HeroOne />
      <Carousel />
      <GetStarted />
      <LiveAuction />
      <Footer />
    </>
  );
}
