import type { NextPage } from 'next';
import HeaderOne from '@/components/headers/HeaderOne';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Footer from '@/components/layout/Footer';
import NFTDetails from '@/components/nft/NFTDetails';

const Explore: NextPage = () => {
  return (
    <main>
      <HeaderOne />
      <Breadcrumbs pageName="NFT Details" />
      <NFTDetails />
      <Footer />
    </main>
  );
};

export default Explore;
