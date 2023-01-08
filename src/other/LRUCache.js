class Node {
  constructor(key, value) {
      this.key = key;
      this.value = value;
      this.prev = null;
      this.next = null;
  }
}

class LRUCache {

  /**
   * @param {number} capacity
   */
  constructor(capacity) {
      this.capacity = capacity;
      this.cache = {};
      this.cacheSize = 0;
      this.head = null;
      this.tail = null;
  };

  /** 
   * @param {number} key
   * @return {number}
   */
  get(key) {
      let node = this.cache[key];
      if (!node) {
          return -1;
      }
      if (node !== this.head) {
          this.removeItemFromList(node);
          this.addItemToHead(node);
      }
      return node.value;
  };

  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
      let node = this.cache[key];
      if (!node) {
          node = new Node(key, value);
          this.cache[key] = node;
      } else {
          node.value = value;
          if (node === this.head) {
              return null;
          }
          this.removeItemFromList(node);
      }
      this.addItemToHead(node);
      if (this.cacheSize > this.capacity) {
          delete this.cache[this.tail.key];
          this.removeItemFromList(this.tail);
      }
      return null;
  };

  removeItemFromList(node) {
      if (node.prev) {
          node.prev.next = node.next;
      }
      if (node.next) {
          node.next.prev = node.prev;
      }
      if (node === this.head) {
          this.head = node.next;
      }
      if (node === this.tail) {
          this.tail = node.prev;

      }
      node.prev = null;
      node.next = null;
      this.cacheSize--;
  }
  addItemToHead(node) {
      if (this.head) {
          node.next = this.head;
          this.head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
          this.tail = node;
      }
      this.cacheSize++;
  }
}

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

module.exports = LRUCache;
