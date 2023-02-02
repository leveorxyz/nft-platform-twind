import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import HeaderOne from '@/components/headers/HeaderOne';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import TopCollection from '@/components/collections/TopCollection';
import Footer from '@/components/layout/Footer';

const Stats: NextPage = () => {
  return (
    <main>
      <NextSeo
        title="Stats | NFT ARTCART - Making Digital Art Accessible to Everyone"
        description="Introducing our NFT ARTCART, where the world of NFT art meets the cutting-edge
        technology of blockchain and we are bringing the world's digital art to your
        screen."
      />
      <HeaderOne />
      <Breadcrumbs pageName="Collection Stats" />
      <div className="container pt-10">
        <TopCollection />
      </div>
      <Footer />
    </main>
  );
};

export default Stats;
