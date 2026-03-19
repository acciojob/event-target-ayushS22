class EventTarget {
  constructor() {
    this.listeners = new Map(); // event -> Set of callbacks
  }

  addEventListener(event, callback) {
    // If event not present, create a new Set
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }

    // Add callback (Set prevents duplicates)
    this.listeners.get(event).add(callback);
  }

  removeEventListener(event, callback) {
    // If event exists, remove the callback
    if (this.listeners.has(event)) {
      this.listeners.get(event).delete(callback);
    }
  }

  dispatchEvent(event) {
    // If no listeners, do nothing
    if (!this.listeners.has(event)) return;

    // Call all callbacks
    for (let callback of this.listeners.get(event)) {
      callback();
    }
  }
}