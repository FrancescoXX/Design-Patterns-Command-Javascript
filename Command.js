/** Command Pattern
 *  Behavioral Pattern
 */

//In this class, we store the value and the history of commands
class StoreCalculator {
  constructor() {
    this.value = 0;
    this.commands = [];
  }

  //Store the new value and Execute the specific Command
  storeAndExecute = (command) => {
    this.value = command.exec(this.value); //Store
    this.commands.push(command); //Execute
  }

  //Undo Command
  undoCommand = () => this.value = this.commands.pop().undo(this.value);
}

/** Command to add a value
 * @param {number} opValue value to add
 */
class AddOperation {
  constructor(opValue) {
    this.opValue = opValue;
  }
  exec = (val) => val + this.opValue;
  undo = (val) => val - this.opValue;
}

/** Command to subtract a value
 * @param {number} opValue value to subtract
 */
class SubOperation {
  constructor(opValue) {
    this.opValue = opValue;
  }
  exec = (val) => val - this.opValue;
  undo = (val) => val + this.opValue;
}

/** Command to multiply a value
 * @param {number} opValue value to multiply
 */
class MulOperation {
  constructor(opValue) {
    this.opValue = opValue;
  }
  exec = (val) => val * this.opValue;
  undo = (val) => val / this.opValue;
}

/**  Command to divide for a value
 * @param {number} opValue value to divide
 */
class DivOperation {
  constructor(opValue) {
    this.opValue = opValue;
  }
  exec = (val) => val / this.opValue;
  undo = (val) => val * this.opValue;
}

//MAIN

//Create a new Calculator
const store = new StoreCalculator();

store.storeAndExecute(new AddOperation(30)); //store.value = 30
store.storeAndExecute(new SubOperation(10)); //store.value = 20
store.storeAndExecute(new MulOperation(10)); //store.value = 200
store.storeAndExecute(new DivOperation(2));  //store.value = 100

store.undoCommand(); // UNDO: remove last operation. calculator value now is 100 again

console.log(store.value); //100