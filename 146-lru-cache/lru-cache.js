/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {

    this.capacity = capacity;

    // key -> node
    this.map = new Map();

    // Dummy nodes
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
};


/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {

    // Key doesn't exist
    if (!this.map.has(key)) {
        return -1;
    }

    // Get node from Map
    let node = this.map.get(key);

    // Move node to front because it was recently used
    this.removeNode(node);
    this.addToFront(node);

    return node.value;
};


/**
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    // Key already exists
    if (this.map.has(key)) {

        let node = this.map.get(key);

        // Update value
        node.value = value;

        // Mark as recently used
        this.removeNode(node);
        this.addToFront(node);

        return;
    }

    // Cache is full
    if (this.map.size === this.capacity) {

        // Least recently used node
        let lruNode = this.tail.prev;

        // Remove from linked list
        this.removeNode(lruNode);

        // Remove from Map
        this.map.delete(lruNode.key);
    }

    // Create new node
    let newNode = new Node(key, value);

    // Store key -> node
    this.map.set(key, newNode);

    // New node becomes most recently used
    this.addToFront(newNode);
};


/**
 * Remove a node from the doubly linked list
 */
LRUCache.prototype.removeNode = function(node) {

    node.prev.next = node.next;
    node.next.prev = node.prev;
};


/**
 * Add a node immediately after head
 * This makes it the most recently used node
 */
LRUCache.prototype.addToFront = function(node) {

    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
};


/**
 * Node
 */
function Node(key, value) {
    this.key = key;
    this.value = value;

    this.prev = null;
    this.next = null;
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */