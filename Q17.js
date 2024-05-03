class BankAccount {
  constructor(accountNumber, initialBalance) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient funds";
    }
    this.balance -= amount;
    return this.balance;
  }
}

// Create instances of BankAccount
const account1 = new BankAccount("123456", 1000);
const account2 = new BankAccount("789012", 500);

// Deposit money
account1.deposit(500);
account2.deposit(100);

// Withdraw money
account1.withdraw(200);
account2.withdraw(300);

// Display balances
console.log("Account 1 balance:", account1.balance);
console.log("Account 2 balance:", account2.balance);