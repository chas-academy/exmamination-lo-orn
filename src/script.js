
const incomeArray = [];
const expenseArray = [];

const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");  
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const transactionList = document.getElementById("transactionList");
const balance = document.getElementById("balance");

function addTransaction() {
    if (!desc || isNaN(amount)) {
        alert("Fyll i både beskrivning och ett giltigt belopp.");
        return;
    }
    const desc = descInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const type = this.id === "incomeBtn" ? "income" : "expense";

    
    if (type === "income") {
        incomeArray.push({ desc, amount });
        incomeList.innerHTML += `<li class="income">${desc} - ${amount} kr </li>`;
    } else {
        expenseArray.push({ desc, amount });
        expenseList.innerHTML += `<li class="expense">${desc} - ${amount} kr </li>`;
    }
    descInput.value = "";
    amountInput.value = "";

    updateBalance();
}

function updateBalance() {  
    const totalIncome = incomeArray.reduce((sum, transaction) => sum + transaction.amount, 0);
    const totalExpense = expenseArray.reduce((sum, transaction) => sum + transaction.amount, 0);
    const balanceAmount = totalIncome - totalExpense;
    balance.innerHTML = `balance: ${balanceAmount}`;
}

incomeBtn.addEventListener("click", addTransaction);
expenseBtn.addEventListener("click", addTransaction);
