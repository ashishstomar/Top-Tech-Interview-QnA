/*
📌 Problem: LRU Cache (Least Recently Used)
---------------------------------------------
Design a data structure that supports:
1. get(key)   → Return the value of the key if it exists, otherwise -1.
2. put(key, value) → Insert or update the key with value.
   - When the cache reaches capacity, evict the least recently used key.

Constraints:
- O(1) time complexity for both get and put.
- Capacity is fixed.

---------------------------------------------
🧠 Key Idea:
- Need O(1) lookup → use a Map (HashMap).
- Need O(1) update of "recently used order" → use a Doubly Linked List.
   - Head = most recently used
   - Tail = least recently used
   - On get/put → move accessed node to head
   - On overflow → remove tail

---------------------------------------------
✅ Data Structure:
- HashMap (key → node in DLL).
- Doubly Linked List:
   - Each node has { key, value, prev, next }.
   - Head (dummy) & Tail (dummy) to simplify insert/delete.

---------------------------------------------
*/

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    // Dummy head & tail
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Helper: remove a node
  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // Helper: insert at head (MRU position)
  _insert(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  // Get value, move to head
  get(key) {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);
    this._remove(node);
    this._insert(node);
    return node.value;
  }

  // Put key/value
  put(key, value) {
    // If exists, remove old node
    if (this.map.has(key)) {
      this._remove(this.map.get(key));
    }

    // Insert new node
    const node = new Node(key, value);
    this._insert(node);
    this.map.set(key, node);

    // Evict LRU if over capacity
    if (this.map.size > this.capacity) {
      let lru = this.tail.prev; // last real node
      this._remove(lru);
      this.map.delete(lru.key);
    }
  }
}

// 🔍 Example Run
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3); // evicts key 2
console.log(cache.get(2)); // -1
cache.put(4, 4); // evicts key 1
console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4
