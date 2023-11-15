import { lazy, Suspense } from 'react';
import { CFO } from '../../assets/index';
import Spinner from '../Home/Spinner/loader_spin';
import Home from './Template/Home';

//lazy load components
const LazyAbout = lazy(() => import('./Template/About'));
const LazyFeatures = lazy(() => import('./Template/Features'));

const Hero = () => {
  let pageNamespace = 'cfo';
  const homeData = CFO.find((section) => section.id === 'home');
  const analyticsData = CFO.find((section) => section.id === 'analytics');
  const featureData = CFO.find((section) => section.id === 'features');
  return (
    <>
      <Home homeData={homeData} pageNamespace={pageNamespace} />
      <Suspense fallback={<Spinner />}>
        <LazyAbout analyticsData={analyticsData} style='CFO' pageNamespace={pageNamespace} />
        <LazyFeatures featureData={featureData} style='CFO' pageNamespace={pageNamespace} />
      </Suspense>
    </>
  );
};

export default Hero;
