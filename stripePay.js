window.onload = function() {
    // Your code, and code from Stripe's walkthrough goes here.
    var stripe = Stripe('pk_test_nHbbAEYUN1yjjvLjl33Drozr');

    document.getElementById("btn").addEventListener('click',
        function() {
            let numberInputs=document.getElementsByClassName("quantity");
            let items = [];
            for (i=0; i<numberInputs.length; i++){
                let item = {
                    sku: numberInputs[i].dataset.sku,
                    quantity: parseInt(numberInputs[i].value)
                }
                items.push(item)
            } 
            console.log(items);
            stripe.redirectToCheckout({
                items:items,
                successUrl: 'http://localhost:8000/success.html',
                cancelUrl: 'http://localhost:8000/cancel.html',
              }).then(function (result) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
                console.log(result.error.message) // ADD THIS LINE!
              });
        }
    );


  }