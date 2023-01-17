import { Outlet } from "react-router-dom";
import DocumentHead from "../components/DocumentHead/DocumentHead";
import PageLiveRegion from "../components/PageLiveRegion/PageLiveRegion";
import SkipLink from "../components/SkipLink/SkipLink";

const Template = props => {
  const { pageTitle } = props;

  return (
    <>
      <DocumentHead pageTitle={pageTitle} />
      <PageLiveRegion pageTitle={pageTitle} />
      <SkipLink />
      <Outlet />
    </>
  );
}

export default Template;
