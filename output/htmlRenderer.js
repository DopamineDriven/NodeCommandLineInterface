const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = employees => {
  const html = [];

  html.push(employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );
  html.push(employees
    .filter(employee => employee.getRole() === "Janitor")
    .map(janitor => renderJanitor(janitor))
  );

  return renderMain(html.join(""));

};

const renderManager = manager => {
  let template = manager.generateManagerHTML();
  return template;
};

const renderEngineer = engineer => {
  let template = engineer.generateEngineerHTML();
  return template;
};

const renderIntern = intern => {
  let template = intern.generateInternHTML();
  return template;
};

const renderJanitor = janitor => {
  let template = janitor.generateJanitorHTML();
  return template;
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;
