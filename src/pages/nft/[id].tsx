import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import HeaderOne from '@/components/headers/HeaderOne';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Footer from '@/components/layout/Footer';
import NFTDetails from '@/components/nft/NFTDetails';

const Explore: NextPage = () => {
  return (
    <main>
      <NextSeo
        title="404 | NFT ARTCART - Making Digital Art Accessible to Everyone"
        description="Introducing our NFT ARTCART, where the world of NFT art meets the cutting-edge
        technology of blockchain and we are bringing the world's digital art to your
        screen."
      />
      <HeaderOne />
      <Breadcrumbs pageName="NFT Details" />
      <NFTDetails />
      <Footer />
    </main>
  );
};

export default Explore;
