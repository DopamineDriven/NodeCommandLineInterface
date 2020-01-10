const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }

  generateInternHTML(data) {
    return `<div class="card employee-card col-12 col-md-4">
    <div class="card-header">
        <h2 class="card-title"aa>${this.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${this.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">School: ${this.school}</li>
        </ul>
    </div>
</div>`
  }
};

module.exports = Intern;
