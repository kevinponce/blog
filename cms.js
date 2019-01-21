var poopDiScoopCms = require('poopy-di-scoop-cms').default;
var pdsc = new poopDiScoopCms({
  rootDir: './',
  githubName: 'blog',
  port: 9090
});
pdsc.run();
