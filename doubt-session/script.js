class Account {
    constructor(){
        this.balance = 0
        this.number = 65465465465465
    }

    widthdraw(amount) {
        
        this.balance -= amount

        return this.balance

    }
}


class SavingsAccount extends Account{
    constructor(){
        super()
        this.limit = 3
    }


    widthdraw(amount) {

        if (this.limit != 0) {
            this.balance -= amount
            this.limit--
            return this.balance
        }



    }

    // resetLimit()
}




const savingAcc = new SavingsAccount()

console.log("Widthawing amount")
savingAcc.widthdraw()
savingAcc.deposit()


