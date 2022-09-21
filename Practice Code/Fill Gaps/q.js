const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var fillGaps = function (head) {
    let start = head.data;
    let demo = head;
    while (demo.next != null) {
        // console.log(demo.data);
        demo = demo.next;
    }
    let end = demo.data;
    let newhead = new LinkedListNode(start);
    let demonewhead = newhead;
    for (let i = start + 1; i <= end; i++) {
        // console.log(demonewhead,"before")
        let newnode = new LinkedListNode(i);
        demonewhead.next = newnode;
        demonewhead = demonewhead.next;
        // console.log(demonewhead,"after")
    }
    // console.log("demo",demo.data)
    // console.log(start)
    return newhead
};
