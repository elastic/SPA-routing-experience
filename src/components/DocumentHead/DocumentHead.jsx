import { Helmet, HelmetProvider } from 'react-helmet-async';

const DocumentHead = props => {
  const { pageTitle } = props;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="We Say So Corporation knows things" />
      </Helmet>
    </HelmetProvider>
  );
}

export default DocumentHead;
