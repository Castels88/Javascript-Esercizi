class BankAccount{
    conto = 0;
    constructor(parametro){
        this.conto = parametro;
    }
    deposit(parametro) {
        this.conto += parametro;
    }
    withdraw(parametro) {
        this.conto -= parametro;
    }
    view(){
        console.log(this.conto);
    }
}





const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();