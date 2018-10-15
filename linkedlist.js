function Node(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}

function LinkedList() {
    this.first = null;
    this.last = null;
    this.length = 0;

    this.searchNodeByIndex = function(indx) {
        var currNode = this.first;
        if (indx < this.length / 2) {     // Start from the beginning
            for (var i = 1; i <= indx; i++) {
                currNode = currNode.next;
            }
        } else {    // Start from the end
            currNode = this.last;
            for (var i = this.length-2; i >= indx; i--) {
                currNode = currNode.prev;
            }
        }
        return currNode;
    }
    /* Add a node to the end */
    this.push = function(val) {
        var node = new Node(val);
        if (this.first == null && this.last == null) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            node.prev = this.last;
            this.last = node;
        }
        this.length++;
    }
    /* Delete a node from the end */
    this.pop = function() {
        if (this.first == this.last) {
            this.first = this.last = null;
        } else {
            this.last = this.last.prev;
            this.last.next = null;
        }
        this.length--;
    }
    /* Add a node to the beginning */
    this.unshift = function(val) {
        var node = new Node(val);
        if (this.first == null && this.last == null) {
            this.first = this.last = node;
        } else {
            node.next = this.first;
            this.first.prev = node;
            this.first = node;
        }
        this.length++;
    }
    /* Delete a node from the beginning */
    this.shift = function() {
        if (this.first == this.last) {
            this.first = this.last = null;
        } else {
            this.first.next.prev = null;
            this.first = this.first.next;
            this.length--;
        }
    }
    /* Add a node by index */
    this.addByIndex = function(index, val) {
        var node = new Node(val);
        var current;
        if (index >= 0 && index < this.length) {  // Index within length
            current = this.searchNodeByIndex(index);
            insertNode(node, current);
            this.length++;
        } else if (index >= this.length) {   // Index is more then LinkedList length
            while (index > this.length) {
                this.push(null);
            }
            this.push(val);
        } else {
            throw new Error('Index must be a positive nomber');
        }
    }
    /* Delete a node by index */
    this.deleteByIndex = function(index) {
        var current;
        if (index == 0) {   // Index of the first node
            this.shift();
        } else if (index > 0 && index < this.length - 1) {  // Index within length
            current = this.searchNodeByIndex(index);
            current.prev.next = current.next;
            current.next.prev = current.prev;
            this.length--;
        } else if (index == this.length - 1) {  // Index of the last node
            this.pop();
        } else {
            throw new Error('No such index');
        }
    }
    /* Replace a node value by index */
    this.replace = function(index, val) {
        var current = this.searchNodeByIndex(index);
        current.value = val;
    }
}

function insertNode(newNode, currNode) {
    newNode.next = currNode;
    newNode.prev = currNode.prev;
    currNode.prev.next = newNode;
    currNode.prev = newNode;
}


