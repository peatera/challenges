var fs = require('fs');
var source = [
  '01-responsive-web-design/applied-accessibility.json',
  '01-responsive-web-design/applied-visual-design.json',
  '01-responsive-web-design/basic-css.json',
  '01-responsive-web-design/basic-html-and-html5.json',
  '01-responsive-web-design/css-flexbox.json',
  '01-responsive-web-design/css-grid.json',
  '01-responsive-web-design/responsive-web-design-projects.json',
  '01-responsive-web-design/responsive-web-design.json',

  '02-javascript-algorithms-and-data-structures/basic-algorithm-scripting.json',
  '02-javascript-algorithms-and-data-structures/basic-data-structures.json',
  '02-javascript-algorithms-and-data-structures/basic-javascript.json',
  '02-javascript-algorithms-and-data-structures/debugging.json',
  '02-javascript-algorithms-and-data-structures/es6.json',
  '02-javascript-algorithms-and-data-structures/functional-programming.json',
  '02-javascript-algorithms-and-data-structures/intermediate-algorithm-scripting.json',
  '02-javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects.json',
  '02-javascript-algorithms-and-data-structures/object-oriented-programming.json',
  '02-javascript-algorithms-and-data-structures/regular-expressions.json',

  '03-front-end-libraries/bootstrap.json',
  '03-front-end-libraries/front-end-libraries-projects.json',
  '03-front-end-libraries/jquery.json',
  '03-front-end-libraries/react-and-redux.json',
  '03-front-end-libraries/react.json',
  '03-front-end-libraries/redux.json',
  '03-front-end-libraries/sass.json',

  '04-data-visualization/data-visualization-projects.json',
  '04-data-visualization/data-visualization-with-d3.json',
  '04-data-visualization/json-apis-and-ajax.json',

  '05-apis-and-microservices/apis-and-microservices-projects.json',
  '05-apis-and-microservices/basic-node-and-express.json',
  '05-apis-and-microservices/managing-packages-with-npm.json',
  '05-apis-and-microservices/mongodb-and-mongoose.json',

  '06-information-security-and-quality-assurance/advanced-express-tools.json',
  '06-information-security-and-quality-assurance/helmetjs.json',
  '06-information-security-and-quality-assurance/quality-assurance-and-information-security-projects.json',
  '06-information-security-and-quality-assurance/testing-with-chai.json',

  '08-coding-interview-prep/algorithms.json',
  '08-coding-interview-prep/data-structures.json',
  '08-coding-interview-prep/project-euler.json',
  '08-coding-interview-prep/rosetta-code.json',
  '08-coding-interview-prep/take-home-projects.json',

  '09-certificates/apis-and-microservices-certificate.json',
  '09-certificates/data-visualization-certificate.json',
  '09-certificates/front-end-libraries-certificate.json',
  '09-certificates/information-security-and-quality-assurance-certificate.json',
  '09-certificates/javascript-algorithms-and-data-structures-certificate.json',
  '09-certificates/legacy-back-end-certificate.json',
  '09-certificates/legacy-data-visualization-certificate.json',
  '09-certificates/legacy-front-end-certificate.json',
  '09-certificates/responsive-web-design-certificate.json'
];
for(var j=0;j<source.length;j++){
  var res = fs.readFileSync(source[j],'utf-8')
  var out = JSON.parse(res);
  var challenges = out.challenges;
  for(var i=0;i<challenges.length;i++){
    delete challenges[i].translations;
  }
  //由于JSON.stringify默认会自动压缩文件，不利于翻译，所以必须添加参数2，表示缩进为2个空格。
  var input = JSON.stringify(out,null,2);
  fs.writeFileSync(source[j],input)
}