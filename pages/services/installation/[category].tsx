import Head from 'next/head';
import { Layout } from '../../../components/layout/layout';
import InstallationServiceHeaderSection
  from '../../../components/landing/services/installation/installation-service-header-section';
import InstallationServiceContentSection
  from '../../../components/landing/services/installation/installation-service-content-section';
import GenericServiceDetail from '../../../components/landing/services/installation/generic-service-detail';
import { installationServices } from '../../../core/data/installation-services';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import smoothScrollTo from '../../../components/ui-kit/services/smooth-scroll-to';

interface Props {
  category: string;
}

export default function InstallationServiceCategoryPage({ category }: Props) {
  const router = useRouter();
  const [data, setData] = useState(null as any);
  useEffect(() => {
    smoothScrollTo('content_root', 300);
  }, [router.asPath]);
  useEffect(() => {
    Object.keys(installationServices).find((key: string) => {
      if ((installationServices as any)[key].name === category) {
        setData((installationServices as any)[key]);
        return true;
      } else {
        return false;
      }
    });
  }, [category]);
  return (
    <>
      <Head>
        <title>J & D Landscaping</title>
        <meta name="description" content="J & D Landscaping" />
      </Head>
      <Layout>
        <InstallationServiceHeaderSection />
        {
          (() => {
            if (category === 'pavers-vs-concrete') {
              return <></>;
            } else if (category === 'inlay-and-borders') {
              return <></>;
            } else {
              return (
                data ? (
                  <InstallationServiceContentSection>
                    <GenericServiceDetail title={data.title}
                                          description={data.description}
                                          moreLink={data.moreLink}
                                          name={data.name}
                                          count={data.count} />
                  </InstallationServiceContentSection>
                ) : ''
              )
            }
          })()
        }
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query }: any) {
  const category = query.category as string;
  return {
    props: { category }
  };
}
