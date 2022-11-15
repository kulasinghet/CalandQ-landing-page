// import Layout from '@layout/Layout';
// import FaqOne from '@components/faq/FaqOne';
// import Navbar from '@layout/Header/Navbar';
// import Footer from '@layout/Footer/Footer';
// import PricingOne from '@components/pricing/PricingOne';
// import FeatureOne from '@components/features/FeatureOne';
// import SupportOne from '@components/support/SupportOne';
// import IntegrationOne from '@components/integration/IntegrationOne';
// import TestimonialOne from '@components/testimonial/TestimonialOne';
// import WorkProcessOne from '@components/workprocess/WorkProcessOne';
// import HeroSectionOne from '@components/hero-section/HeroSectionOne';
// import FeatureImgContentOne from '@components/feature-img-content/FeatureImgContentOne';
//
// export default function Home() {
//   return (
//     <Layout>
//       <Navbar navDark />
//       <HeroSectionOne />
//       <FeatureOne />
//       <FeatureImgContentOne />
//       <TestimonialOne darkBg />
//       <WorkProcessOne />
//       <PricingOne header="true" />
//       <FaqOne />
//       <IntegrationOne />
//       <SupportOne />
//       <Footer footerGradient />
//     </Layout>
//   );
// }


import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import Promo from '@components/promo/Promo';
import Customer from '@components/customer/Customer';
import SupportOne from '@components/support/SupportOne';
import TestimonialTwo from '@components/testimonial/TestimonialTwo';
import WorkProcessOne from '@components/workprocess/WorkProcessOne';
import IntegrationTwo from '@components/integration/IntegrationTwo';
import HeroSectionFourth from '@components/hero-section/HeroSectionFourth';
import FeatureImgContentTwo from '@components/feature-img-content/FeatureImgContentTwo';
import FeatureImgContentThree from '@components/feature-img-content/FeatureImgContentThree';

const DesktopAppHome = () => {
	return (
		<Layout>
			<Navbar/>
			<HeroSectionFourth/>
			<Customer/>
			<Promo/>
			<FeatureImgContentTwo bgWhite/>
			<FeatureImgContentThree/>
			<WorkProcessOne/>
			<TestimonialTwo dark/>
			<IntegrationTwo/>
			<SupportOne className/>
			<Footer footerLight/>
		</Layout>
	);
};

export default DesktopAppHome;

