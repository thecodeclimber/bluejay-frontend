import React from "react";
import { bool } from "prop-types";
import ContentLoader from "react-content-loader";

const ProductLoader = (props) => {
  const { isHorizontal } = props;
  if (isHorizontal) {
    return (
      <div className="border border-dark border-opacity-10 rounded">
        <ContentLoader
          speed={2}
          width={"100%"}
          height={120}
          viewBox="0 0 950 120"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="10" y="10" rx="3" ry="3" width="50" height="15" />
          <rect x="100" y="40" rx="3" ry="3" width="100" height="13" />
          <rect x="580" y="40" rx="3" ry="3" width="160" height="40" />
          <rect x="760" y="40" rx="3" ry="3" width="160" height="40" />
          <rect x="100" y="70" rx="3" ry="3" width="300" height="20" />
          <rect x="10" y="40" rx="3" ry="3" width="60" height="60" />
        </ContentLoader>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="border border-dark border-opacity-10 rounded">
        <ContentLoader
          speed={2}
          width={"100%"}
          height={460}
          viewBox="0 0 287 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="28" y="30" rx="3" ry="3" width="50" height="15" />
          <rect x="225" y="20" rx="3" ry="3" width="35" height="35" />
          <rect x="50" y="90" rx="3" ry="3" width="180" height="200" />
          <rect x="28" y="330" rx="3" ry="3" width="230" height="20" />
          <rect x="28" y="370" rx="3" ry="3" width="70" height="20" />
          <rect x="109" y="370" rx="3" ry="3" width="70" height="20" />
          <rect x="190" y="370" rx="3" ry="3" width="70" height="20" />
          <rect x="28" y="410" rx="3" ry="3" width="230" height="20" />
        </ContentLoader>
      </div>
    </div>
  );
};

ProductLoader.defaultProps = {
  isHorizontal: false,
};

ProductLoader.propTypes = {
  isHorizontal: bool,
};

export default ProductLoader;
