import type { NextPage } from 'next';
import HeaderOne from '@/components/headers/HeaderOne';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import TopCollection from '@/components/collections/TopCollection';
import Footer from '@/components/layout/Footer';

const Stats: NextPage = () => {
  return (
    <main>
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
