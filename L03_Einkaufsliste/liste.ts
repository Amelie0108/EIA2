namespace shoppinglist{   

    interface ShoppingItem {
        product: string;
        amount: number;
        date: string;
        comment: string;
        toBuy: boolean;
        bought: boolean;
    }

    let shoppingList: ShoppingItem[] = [
        { product: "Milk", amount: 2, date: "2023-04-01", comment: "For breakfast", toBuy: false, bought: true },
        { product: "Bread", amount: 1, date: "2023-04-02", comment: "glutenfree", toBuy: true, bought: false }
    ];

    function addItem(product: string, amount: number, date: string, comment: string, toBuy: boolean, bought: boolean): void {
        let newItem: ShoppingItem = { product, amount, date, comment, toBuy, bought };
        shoppingList.push(newItem);
        console.log('Item added:', newItem);
    }

    function removeItem(index: number): void {
        shoppingList.splice(index, 1);
        console.log('Item removed at index:', index);
    }

    document.addEventListener('DOMContentLoaded', () => {
        let addButton = document.getElementById('addButton') as HTMLButtonElement;

    addButton.addEventListener('click', () => {
        let product = (document.getElementById('product') as HTMLInputElement).value;
        let amount = parseInt((document.getElementById('amount') as HTMLInputElement).value, 10);
        let date = (document.getElementById('date') as HTMLInputElement).value;
        let comment = (document.getElementById('comments') as HTMLTextAreaElement).value;
        let toBuy = (document.getElementById('check1') as HTMLInputElement).checked;
        let bought = (document.getElementById('check2') as HTMLInputElement).checked;

        addItem(product, amount, date, comment, toBuy, bought);
    });
    });

    document.addEventListener("DOMContentLoaded", () => {

        let product = document.getElementById("product");
        let amount = document.getElementById("amount");
        let date = document.getElementById("date");
        let comment = document.getElementById("comments");
        let CheckI = document.getElementById("check1");
        let Check2I = document.getElementById("check2");
    

        if (product) {
            product.addEventListener("input", () => {
                console.log("Product has been added");
            });
        }
    
        if (amount) {
            amount.addEventListener("change", () => {
                console.log("Amount has been changed");
            });
        }
    
        if (date) {
            date.addEventListener("change", () => {
                console.log("Date has been changed");
            });
        }
    
        if (comment) {
            comment.addEventListener("input", () => {
                console.log("Comment has been added");
            });
        }
    
        if (CheckI) {
            CheckI.addEventListener("change", () => {
                console.log("Product should be purchased");
            });
        }
    
        if (Check2I) {
            Check2I.addEventListener("change", () => {
                console.log("Product has been purchased");
            });
        }
    });

    }

    