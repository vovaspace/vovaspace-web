import { FunctionComponent } from 'preact';

import { HelloWorld } from '@components/HelloWorld';
import { Layout } from '@components/Layout';

const IndexPage: FunctionComponent = () => (
  <Layout title="Владимир Левандовский">
    <HelloWorld />
  </Layout>
);

export default IndexPage;
