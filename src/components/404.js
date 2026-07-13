import { Helmet } from "react-helmet-async";

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Nasser Hussein</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="nf-container">
        <div className="nf-copy nf-center-xy">
          <p className="nf-text">404, page not found.</p>
          <div className="nf-span">
            <span className="nf-handle"></span>
            <span className="nf-handle"></span>
            <span className="nf-handle"></span>
          </div>
        </div>
      </div>
    </>
  );
};
