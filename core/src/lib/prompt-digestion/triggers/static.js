const DigestPipeline = require("..");

// Execute the main function to start the build process
const pipeline = new DigestPipeline(
  {
    staticFiles: {
      indexSitemap: true,
      postSitemap: true,
      pageSitemap: true,
      feedsSitemaps: true,
      atom: true,
      rss: true,
      ampStories: true,
    },
    finalPipe: { syncPublicFolder: true },
  },
  {},
  {},
  false,
  false
);
pipeline.run();