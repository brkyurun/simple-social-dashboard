import React, { useMemo, useEffect } from 'react';
import Layout from '@app/layouts/MainLayout';
import useTranslation from 'next-translate/useTranslation';
import Card from '@app/components/Card';

function Index(): JSX.Element {
  const { t } = useTranslation();
  const title = useMemo(() => t('home:title'), [t]);
  const description = useMemo(() => t('home:description'), [t]);

  useEffect(() => {
    const API_ENDPOINT =
      'https://api.twitter.com/2/users/1203419846840635394?user.fields=public_metrics';

    fetch(API_ENDPOINT, {
      method: 'GET',
      mode: 'no-cors',
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  });

  return (
    <Layout
      title={title}
      description={description}
    >
      <Card
        type="twitter"
        firstStatData="2412"
        secondStatData="2314"
      />
      <Card
        type="instagram"
        firstStatData="2412"
        secondStatData="2314"
      />
      <Card
        type="youtube"
        firstStatData="2412"
        secondStatData="2314"
      />
    </Layout>
  );
}

export default Index;
