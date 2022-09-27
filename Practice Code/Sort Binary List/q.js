const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
var sortBinaryList = function (head) {
    let demo = head;
    let arr = []
    while (demo.next != null) {
        arr.push(demo.data);
        demo = demo.next;
    }
    arr.push(demo.data);
    arr.sort((a, b) => a - b);
    let newhead = new LinkedListNode(arr[0]);
    let temp = newhead;
    for (let i = 1; i < arr.length; i++) {
        let x = new LinkedListNode(arr[i]);
        temp.next = x;
        temp = temp.next;
    }

    return newhead;
};


