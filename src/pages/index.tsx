import { FunctionComponent } from 'preact';

import { HelloWorld } from '@components/HelloWorld';
import { Layout } from '@components/Layout';

const IndexPage: FunctionComponent = () => (
  <Layout>
    <HelloWorld />
  </Layout>
);

export default IndexPage;
