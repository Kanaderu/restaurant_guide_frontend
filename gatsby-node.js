const fetch = require(`node-fetch`);
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest
}) => {
  // get data from GitHub API at build time
  const result = await fetch(
    `https://csd-restaurants.herokuapp.com/restaurants/?format=json`
  );
  const resultData = await result.json();
  // create node for build time data example in the docs
  createNode({
    listings: resultData,
    // required fields
    id: `c42877f8-27d1-410d-bad8-fe01d3544ceb`,
    parent: null,
    children: [],
    internal: {
      type: `restaurants`,
      contentDigest: createContentDigest(resultData)
    }
  });
};

// necessary to get gatsby build to run properly
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /(mapbox-gl)\.js$/,
      loader: "null-loader",
    });
  }
};
