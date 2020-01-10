const Employee = require("./employee");

class Janitor extends Employee {
    constructor(name, id, email, task) {
        super(name, id, email)
        this.task = task;
    }

    getRole() {
        return "Janitor";
    }

    getTask() {
        return this.task;
    }

    generateJanitorHTML(data) {
        return `<div class="card employee-card col-12 col-md-4">
        <div class="card-header">
            <h2 class="card-title">${this.name}</h2>
            <h3 class="card-title"><i class="fas fa-trash-alt mr-2"></i>${this.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">Favorite Task: ${this.task}</li>
            </ul>
        </div>
    </div>`
    }

}

module.exports = Janitor;