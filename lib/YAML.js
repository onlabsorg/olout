
const YAML = require("js-yaml");

exports.dump = function (obj) {
    var yamlString = YAML.safeDump(obj, {indent:2, noCompatModel:true});

    //remove quotes from object keys
    yamlString = yamlString.replace(/^(\s*)'(.+)':(.*)$/mg, (match, spaces, key, rest) => `${spaces}${key}:${rest}`);

    return yamlString;
}

exports.load = function (str) {
    return YAML.safeLoad(str);
}
