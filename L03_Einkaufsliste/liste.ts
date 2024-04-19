namespace shoppinglist{   

    document.addEventListener("DOMContentLoaded", () => {

        let ProductI = document.getElementById("product");
        let AmountI = document.getElementById("amount");
        let DateI = document.getElementById("date");
        let CommentI = document.getElementById("comments");
        let CheckI = document.getElementById("check1");
        let Check2I = document.getElementById("check2");
    
        if (ProductI) {
            ProductI.addEventListener("input", () => {
                console.log("Product has been added");
            });
        }
    
        if (AmountI) {
            AmountI.addEventListener("change", () => {
                console.log("Amount has been changed");
            });
        }
    
        if (DateI) {
            DateI.addEventListener("change", () => {
                console.log("Date has been changed");
            });
        }
    
        if (CommentI) {
            CommentI.addEventListener("input", () => {
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

