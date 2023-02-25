
function createCalculator(base) {

    const initialBase = base;

  return {
    add: function (value) {
      if (typeof value === 'number' && value >= 0) {
        base += value;
      }
    },
    sub: function (value) {
      if (typeof value === 'number' && value >= 0) {
        base -= value;
      }
    },
    set: function (value) {
      if (typeof value === 'number') {
        base = value;
      }
    },
    get: function () {
      return base;
    },
    reset: function () {
       base = initialBase;
    }
  };
}

const calculator = createCalculator(100);

calculator.add(10); // 110 - это текущее значение base
calculator.add(10);
calculator.sub(20);

calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add('qwe'); // NaN и значение 40 не менять

console.log(calculator.get()) // 40

calculator.reset();
console.log(calculator.get()) // 100
