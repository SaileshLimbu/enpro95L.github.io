class BankAccount{
    #name;
    #deposit;

    static accountInfoList = [];
    
    constructor(){
        this.#name = null;
        this.#deposit = null;
    }

    createAccount(name, deposit){
        this.#name = name;
        this.#deposit = deposit;
    }

    static addAccountInfo(account){
        BankAccount.accountInfoList.push(account);
    }

    getName(){
        return this.#name;
    }

    getDeposit(){
        return this.#deposit;
    }
}

function createAccount(){
    var account = new BankAccount();
    var aname = document.getElementById("name").value;
    var deposit = document.getElementById("deposit").value;

    account.createAccount(aname, deposit);
    BankAccount.addAccountInfo(account);
    displayAllAccount();
}

function displayAllAccount(){
    var output = "";
    for(var i=0;i<BankAccount.accountInfoList.length;i++){
        var account = BankAccount.accountInfoList[i];
        output = (output == "" ? output : output + "\n") + "Account Name: " + account.getName() + " Balance: " + account.getDeposit();
    }
    document.getElementById("output").value = output;
}

document.onload = function(){
    displayAllAccount();
}