import React, { useMemo, useEffect, useState } from 'react';
import Layout from '@app/layouts/MainLayout';
import axios from 'axios';
import useTranslation from 'next-translate/useTranslation';
import Card from '@app/components/Card';

interface YTResponse {
  viewCount: string;
  subscriberCount: string;
}

function Index(): JSX.Element {
  const { t } = useTranslation();
  const title = useMemo(() => t('home:title'), [t]);
  const description = useMemo(() => t('home:description'), [t]);
  const [youTubeData, setYouTubeData] = useState<YTResponse>({
    viewCount: '0',
    subscriberCount: '0',
  });

  useEffect(() => {
    // console.log(youTubeData);
    // setYouTubeData((prevState) => {
    //   return { ...prevState, viewCount: '2' };
    // });
    const API_URL = 'https://www.googleapis.com/youtube/v3/channels';
    const USER_ID = 'UCPpe5wM6TOsoGvW2IsK143w';
    const API_KEY = 'AIzaSyBMlHVcwur1pNshKXlR2U9oqhLlrytYbQA';

    axios
      .get(`${API_URL}?part=statistics&id=${USER_ID}&key=${API_KEY}`)
      .then((res) => setYouTubeData(res.data.items[0].statistics))
      .catch((err) => console.error(err));
  }, [youTubeData.viewCount]);

  return (
    <Layout
      title={title}
      description={description}
    >
      <div className="flex h-screen w-screen items-center justify-center space-x-5 px-5">
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
          firstStatData={youTubeData.subscriberCount}
          secondStatData={youTubeData.viewCount}
        />
      </div>
    </Layout>
  );
}

export default Index;
