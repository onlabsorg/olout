/**
 *  Address plugin
 *  Returns the address of a jspm module
 */
exports.translate = function(load) {
  load.metadata.format = 'cjs';
  return `module.exports = "${load.address}";`;
}
