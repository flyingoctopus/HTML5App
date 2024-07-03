let students = [
    {name: "John", age: 20 },
    {name: "Jane", age: 22 },
    {name: "Jack", age: 21 }
];

// insert
students = [...students, {name: "Bob", age: 19 }];

// delete
students = students.filter(student => student.name !== "Jane");

console.log(students);


/////// linked lists

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append = (value) => {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log("list:",list);

// Example of a simple hash table using es6 syntax
class HashTable {
    constructor(size) {
        this.size = size;
        this.data = new Array();
    }

    _hash = (key) => {
        let hash = 0;
        for (let i=0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.size;
        }
        return hash;
 
    }

    set = (key, value) =>  {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    get = (key) => {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key)  {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
}

const hashTable = new HashTable(50);
hashTable.set('apple', 10);
hashTable.set("banana", 20);
console.log(hashTable.get("apple"));