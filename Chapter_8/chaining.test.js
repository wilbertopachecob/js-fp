const chaining = require("./chaining");

describe("chaining - ", () => {
  it("should allow void methods to chain", () => {
    class Counter {
      constructor(value = 0) {
        this.value = value;
      }
      increment() {
        this.value += 1;
      }
      add(n) {
        this.value += n;
        return this.value;
      }
      getValue() {
        return this.value;
      }
    }

    const counter = chaining(new Counter(1));
    counter.increment().increment();
    expect(counter.getValue()).toBe(3);
  });

  it("should return non-undefined method results", () => {
    class Counter {
      constructor(value = 0) {
        this.value = value;
      }
      add(n) {
        this.value += n;
        return this.value;
      }
    }

    const counter = chaining(new Counter(2));
    expect(counter.add(3)).toBe(5);
  });
});
