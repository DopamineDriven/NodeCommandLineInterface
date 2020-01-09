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

}

module.exports = Janitor;