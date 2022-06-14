import DocumentHead from "../components/DocumentHead";
import PageLiveRegion from "../components/PageLiveRegion";
import Header from "../components/Header";

const Expenses = props => {
  const {
    handleSkipLink,
    pageTitle,
    skipLinkVisible
  } = props;

  return (
    <>
      <DocumentHead pageTitle={pageTitle} />
      <PageLiveRegion pageTitle={pageTitle} />
      <Header handleSkipLink={handleSkipLink} skipLinkVisible={skipLinkVisible} />

      <main className="elastic-global-main" id="main">
        <h1>Expenses</h1>
        <a href="https://github.com">GitHub link to verify focus</a>
      </main>
    </>
  );
}

export default Expenses;
