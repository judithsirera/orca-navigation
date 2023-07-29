import PageLayout from 'containers/PageLayout';
import Map from 'elements/Map';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Map height="full" markers={{}} />
    </PageLayout>
  );
};

export default Home;
