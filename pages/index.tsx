import RoutePlanningMap from 'Components/RoutePlanningMap';
import PageLayout from 'containers/PageLayout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <RoutePlanningMap />
    </PageLayout>
  );
};

export default Home;
