import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import HeaderOne from '@/components/headers/HeaderOne';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import UserProfile from '@/components/profile/UserProfile';
import Footer from '@/components/layout/Footer';

const MyProfile: NextPage = () => {
  return (
    <main>
      <NextSeo
        title="My Profile | NFT ARTCART - Making Digital Art Accessible to Everyone"
        description="Introducing our NFT ARTCART, where the world of NFT art meets the cutting-edge
        technology of blockchain and we are bringing the world's digital art to your
        screen."
      />
      <HeaderOne />
      <div className="relative">
        <Breadcrumbs pageName="My Profile" />
      </div>

      <div className="container pb-14">
        <UserProfile />
      </div>
      <Footer />
    </main>
  );
};

export default MyProfile;
