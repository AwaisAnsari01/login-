document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalExpenseDisplay = document.getElementById('total-expense');

    let totalExpense = 0;

    // Function to update the total expense display
    function updateTotalExpense() {
        totalExpenseDisplay.textContent = totalExpense.toFixed(2);
    }

    // Function to create a new expense item
    function createExpenseItem(description, amount) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="expense-description">${description}: ${amount}</span>
            <button type="button" class="btn btn-outline-success edit-btn">Edit</button>
            <button type="button" class="btn btn-outline-danger delete-btn">Delete</button>
        `;
        expenseList.appendChild(li);

        // Update total expense
        totalExpense += parseFloat(amount);
        updateTotalExpense();

        // Add event listener to the delete button
        li.querySelector('.delete-btn').addEventListener('click', () => {
            expenseList.removeChild(li);
            totalExpense -= parseFloat(amount);
            updateTotalExpense();
        });

        // Add event listener to the edit button
        li.querySelector('.edit-btn').addEventListener('click', () => {
            const newDescription = prompt('Enter new description:', description);
            const newAmount = parseFloat(prompt('Enter new amount:', amount)).toFixed(2);
            if (newDescription && !isNaN(newAmount) && newAmount >= 0) {
                // Update the total expense
                totalExpense -= parseFloat(amount);
                totalExpense += parseFloat(newAmount);
                updateTotalExpense();

                // Update the display
                li.querySelector('.expense-description').textContent = `${newDescription}: $${newAmount}`;
                amount = newAmount; // Update local amount variable
            }
        });
    }

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value).toFixed(2);

        if (description && !isNaN(amount) && amount >= 0) {
            createExpenseItem(description, amount);
            form.reset();
        }
    });
});