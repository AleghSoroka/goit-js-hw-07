class Storage {
    #items;

    constructor(items) { 
        this.#items = items;
    }
    getItems() { 
        return this.#items;
    }
    addItem(newItem) { 
        this.#items.push(newItem);
    }
    
    removeItem(itemToRemove) { 
        if (this.#items.includes(itemToRemove)) {
            const indexToRemove = this.#items.indexOf(itemToRemove);
            this.#items.splice(indexToRemove, 1);
        }
        else {
            return alert (`Item ${itemToRemove} doesn't exist`);
        };
    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

