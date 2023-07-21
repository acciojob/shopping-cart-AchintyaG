 const addButton = document.getElementById("add");
        const itemNameInput = document.getElementById("item-name-input");
        const itemPriceInput = document.getElementById("item-price-input");
        const shoppingList = document.getElementById("shopping-list");
        const grandTotalElement = document.getElementById("total");
        let grandTotal = 0;

        addButton.addEventListener("click", () => {
            const itemName = itemNameInput.value.trim();
            const itemPrice = parseFloat(itemPriceInput.value);

            if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
                alert("Please enter a valid item name and price.");
                return;
            }

            // Clear input fields
            itemNameInput.value = "";
            itemPriceInput.value = "";

            // Update shopping list table
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td aria-role="cell">${itemName}</td>
                <td aria-role="cell">$${itemPrice.toFixed(2)}</td>
            `;
            shoppingList.appendChild(newRow);

            // Update grand total
            grandTotal += itemPrice;
            grandTotalElement.innerText = `Grand Total: $${grandTotal.toFixed(2)}`;
        });