import { FunctionComponent } from 'preact';

import { useLocalization } from '@utils';
import { HelloWorld } from '@components/HelloWorld';
import { Layout } from '@components/Layout';

const IndexPage: FunctionComponent = () => (
  <Layout
    title={useLocalization({
      en: 'Vladimir Lewandowski',
      ru: 'Владимир Левандовский',
    })}
  >
    <HelloWorld />
  </Layout>
);

export default IndexPage;
