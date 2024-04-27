"use strict";
var shoppinglist;
(function (shoppinglist) {
    let shoppingList = [
        { product: "Milk", amount: 2, date: "2023-04-01", comment: "For breakfast", toBuy: false, bought: true },
        { product: "Bread", amount: 1, date: "2023-04-02", comment: "glutenfree", toBuy: true, bought: false }
    ];
    function addItem(product, amount, date, comment, toBuy, bought) {
        let newItem = { product, amount, date, comment, toBuy, bought };
        shoppingList.push(newItem);
        console.log('Item added:', newItem);
    }
    function removeItem(index) {
        shoppingList.splice(index, 1);
        console.log('Item removed at index:', index);
    }
    document.addEventListener('DOMContentLoaded', () => {
        let addButton = document.getElementById('addButton');
        addButton.addEventListener('click', () => {
            let product = document.getElementById('product').value;
            let amount = parseInt(document.getElementById('amount').value, 10);
            let date = document.getElementById('date').value;
            let comment = document.getElementById('comments').value;
            let toBuy = document.getElementById('check1').checked;
            let bought = document.getElementById('check2').checked;
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
})(shoppinglist || (shoppinglist = {}));
//# sourceMappingURL=liste.js.map