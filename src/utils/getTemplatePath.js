export default function getTemplatePath(filename) {
  const templatePath = eval(`let path = require('path');path.join(__dirname,'../',filename + '.html')`);
  return templatePath;
}
