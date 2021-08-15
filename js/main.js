document.getElementById("deposit-btn").addEventListener("click", function () {
    const getDepositAmount = parseFloat(
        document.getElementById("deposit-amount").value
    );
    if (typeof getDepositAmount == "number" && getDepositAmount > 0) {
        const prevDepositAmount = parseFloat(
            document.getElementById("total-deposit").innerText
        );
        const newDeposit = getDepositAmount + prevDepositAmount;
        const totalDeposit = (document.getElementById(
            "total-deposit"
        ).innerText = parseFloat(newDeposit));

        // Balance Update

        const presentBalance = parseFloat(
            document.getElementById("total-balance").innerText
        );
        const updatedBalance = (document.getElementById(
            "total-balance"
        ).innerText = parseFloat(presentBalance + getDepositAmount));

        document.getElementById("money-sound").play();

        document.getElementById("deposit-amount").value = "";
    }
});

// Withdraw

document.getElementById("withdraw-btn").addEventListener("click", function () {
    const getWithdrawAmount = parseFloat(
        document.getElementById("withdraw-amount").value
    );
    if (typeof getWithdrawAmount == "number" && getWithdrawAmount > 0) {
        const presentBalance = parseFloat(
            document.getElementById("total-balance").innerText
        );
        if (getWithdrawAmount < presentBalance) {
            const prevWithdrawAmount = parseFloat(
                document.getElementById("total-withdraw").innerText
            );
            const newWithdraw = getWithdrawAmount + prevWithdrawAmount;

            const totalWithdraw = (document.getElementById(
                "total-withdraw"
            ).innerText = newWithdraw);

            // Balance Update

            const updatedBalance = (document.getElementById(
                "total-balance"
            ).innerText = parseFloat(presentBalance - getWithdrawAmount));
            document.getElementById("money-sound").play();
            document.getElementById("withdraw-amount").value = "";
            document.getElementById("warning").classList.add("hidden");
        } else {
            document.getElementById("warning").classList.remove("hidden");
        }
    } else {
        const warning = (document.getElementById("warning").innerText =
            "please give a valid input");
        document.getElementById("warning").classList.remove("hidden");
    }
});
