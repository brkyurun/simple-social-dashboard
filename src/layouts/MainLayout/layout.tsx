import React from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

export interface LayoutProps {
  children: JSX.Element | Array<JSX.Element>;
  title: string;
  description: string;
  canonical?: string | undefined;
}

function Layout({
  children,
  title,
  description,
  canonical,
}: LayoutProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <main className="ui-main">
      <Head>
        <meta
          charSet="UTF-8"
          key="charset"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <title>{t('common:title')}</title>
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          title,
          description,
          url: canonical,
          locale: t('common:locale'),
          site_name: t('common:site_name'),
        }}
      />
      <div className="my-7 mx-5 flex items-center justify-center gap-7">
        {children}
      </div>
    </main>
  );
}

export default Layout;
