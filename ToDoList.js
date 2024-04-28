class TodoItem {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }
    toggleComplete() {
        this.completed = !this.completed
    }

    describe() {
        return `${this.description} (Completed: ${this.completed})`
    }
}

class TodoList{
    constructor() {
        this.item = [];
    }
    
    addItem(description) {
        const newItem = new TodoItem(description);
        this.item.push(newItem);
        return newItem;
    }

    completeItem(index) {
        if (index >= 0 && index < this.item.length) {
            this.item[index].toggleComplete();
        }
    }

    listItems() {
        return this.item.map(item => item.describe()).join('\n');
    }
}

const myTodoList = new TodoList();

myTodoList.addItem("Learn JavaScript");
myTodoList.addItem("Read a book");
myTodoList.addItem("Go for a run");

console.log("All Todo Items:");
console.log(myTodoList.listItems());

// Mark the first item as completed
myTodoList.completeItem(0);

console.log("\nUpdated Todo Items:");
console.log(myTodoList.listItems())
