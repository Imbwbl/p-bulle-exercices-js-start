//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  is_open = false
  #balance = 0;
  constructor() {
    this.#balance = 0;
  }

  open() {
    if (this.is_open == false)
      this.is_open = true
    else
      throw new ValueError()
  }

  close() {
    if (this.is_open == true) {
      this.#balance = 0;
      this.is_open = false
    }
    else
      throw new ValueError()
  }

  deposit(amount) {
    if (this.is_open === true && amount > 0)
      this.#balance += amount
    else
      throw new ValueError()
  }

  withdraw(amount) {
    if (this.is_open === true && this.#balance >= amount && amount > 0)
      this.#balance -= amount
    else
      throw new ValueError()
  }

  get balance() {
    if (this.is_open === true) 
      return this.#balance
    else
      throw new ValueError()
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}