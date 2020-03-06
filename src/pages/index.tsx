import React, { FC } from 'react';

import { Layout } from '@components/layout';
import { SEO } from '@components/seo';

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-4xl">
      🚀 Coming soon
    </h1>

    <p className="my-2">We&apos;re working hard to create a site that shows off our awesome work and some of our happy customers.</p>
    <p className="my-2">As soon as it&apos;s ready we&apos;ll share it with you and the rest of the world</p>
  </Layout>
);

export default IndexPage;
