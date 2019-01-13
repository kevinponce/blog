var poopDiScoop = require('poopy-di-scoop').default;
var pds = new poopDiScoop({
  rootDir: './'
});
(async function () {
  await pds.load();
  console.log(Object.keys(pds.components))
}());
