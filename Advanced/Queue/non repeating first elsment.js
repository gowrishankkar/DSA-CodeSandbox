class Queue {
    constructor() {
      this.items = [];
      this.frontIndex = 0;
      this.backIndex = 0;
    }
    enqueue(item) {
      this.items[this.backIndex] = item;
      this.backIndex++;
    }
    dequeue() {
      const item = this.items[this.frontIndex];
      delete this.items[this.frontIndex];
      this.frontIndex++;
      return item;
    }
    peek() {
      // console.log('this.items', this.items)
      // console.log('this.frontIndex', this.frontIndex)
      return this.items[this.frontIndex];
    }
    printQueue() {
      return this.items;
    }
    getLength() {
      let count = 0;
      this.items.forEach((e) => {
        if (e) count++;
      });
      return count;
    }
  }
  
  function test(A) {
    let queue = new Queue(),
      ans = "";
  
    let obj = {};
    // queue.enqueue(A[0]);
    for (let i = 0; i < A.length; i++) {
      console.log("queue.peek();", queue.peek());
      obj[A[i]] ? obj[A[i]]++ : (obj[A[i]] = 1);
      while (queue.getLength() && obj[queue.peek()] > 1) {
        queue.dequeue();
  
      }
      if (obj[A[i]] === 1) queue.enqueue(A[i]);
      queue.getLength() ? (ans += queue.peek()) : (ans += "#");
    }
    return ans;
  }
  
  // console.log("test", test("abcabc"));
  
  console.log(
    "test",
    test("jyhrcwuengcbnuchctluxjgtxqtfvrebveewgasluuwooupcyxwgl")
  );
  