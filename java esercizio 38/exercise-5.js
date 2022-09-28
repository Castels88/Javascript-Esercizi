class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class BankAccountVip extends BankAccount {
amount = 1000;
interesse = 1.03;
constructor(initialAmount) {
  super(initialAmount);
}
deposit(amount) {
  if (amount >= this.amount) {
    super.deposit(amount * this.interesse);
      } else {
            super.deposit(amount);
      }
    }  
}




const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();
