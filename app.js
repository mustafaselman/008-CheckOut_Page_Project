let buttonDecrease1 = document.querySelector("#buttonDecrease1");
let buttonDecrease2 = document.querySelector("#buttonDecrease2");
let buttonDecrease3 = document.querySelector("#buttonDecrease3");
let quantity1 = document.querySelector("#quantity1");
let quantity2 = document.querySelector("#quantity2");
let quantity3 = document.querySelector("#quantity3");
let buttonIncrease1 = document.querySelector("#buttonIncrease1");
let buttonIncrease2 = document.querySelector("#buttonIncrease2");
let buttonIncrease3 = document.querySelector("#buttonIncrease3");
let remove1 = document.querySelector("#remove1");
let remove2 = document.querySelector("#remove2");
let remove3 = document.querySelector("#remove3");
let productTotal1 = document.querySelector("#productTotal1");
let productTotal2 = document.querySelector("#productTotal2");
let productTotal3 = document.querySelector("#productTotal3");
let subtotal = document.querySelector("#subtotal");
let tax = document.querySelector("#tax");
let total = document.querySelector("#total");
let container = document.querySelector(".container");

eventListeners();
function eventListeners(e)
{

    container.addEventListener("click", (e) =>
    {
        if (e.target.className.includes("buttonDecrease"))
        {
            console.log(e.target.className);
            console.log(
                e.target.parentElement.nextElementSibling.nextElementSibling.childNodes[ 1 ]
            );
            console.log(e.target.nextElementSibling);
            decreaseProductTotal(
                e.target.parentElement.nextElementSibling.nextElementSibling.childNodes[ 1 ],
                e.target.nextElementSibling
            );
            decrease(e.target.nextElementSibling);
        } else if (e.target.className.includes("buttonIncrease"))
        {
            console.log(
                e.target.parentElement.nextElementSibling.nextElementSibling.childNodes[ 1 ],
                e.target.previousElementSibling
            )
            increaseProductTotal(
                e.target.parentElement.nextElementSibling.nextElementSibling.childNodes[ 1 ],
                e.target.previousElementSibling
            );
            increase(e.target.previousElementSibling)
        } else if (e.target.className.includes("remove"))
        {
            console.log(e.target, e.target.nextElementSibling.childNodes[ 1 ])
            removeFunction(e.target, e.target.nextElementSibling.childNodes[ 1 ]);
            subtotalFunction();
            taxFunction();
            totalFunction();


        }

    });
}

function decrease(quantity)
{
    if (Number(quantity.innerText) > 1)
    {
        quantity.innerText = Number(quantity.innerText) - 1;
    }
}

function increase(quantity)
{
    quantity.innerText = Number(quantity.innerText) + 1;
}

function decreaseProductTotal(productTotal, quantity)
{
    if (Number(quantity.innerText) > 1)
    {
        let price = Number(productTotal.innerText) / Number(quantity.innerText) * (
            Number(quantity.innerText) - 1
        );
        productTotal.innerText = price.toFixed(2);

    }
    subtotalFunction();
    taxFunction();
    totalFunction();
}

function increaseProductTotal(productTotal, quantity)
{
    let price = Number(productTotal.innerText) / Number(quantity.innerText) * (
        Number(quantity.innerText) + 1
    );
    productTotal.innerText = price.toFixed(2);
    subtotalFunction();
    taxFunction();
    totalFunction();
}

function subtotalFunction()
{
    let price = Number(productTotal1.innerText) + Number(productTotal2.innerText) +
        Number(productTotal3.innerText)
    subtotal.innerText = price.toFixed(2);
}

function taxFunction()
{
    let price = Number(subtotal.innerText) * 0.18;
    tax.innerText = price.toFixed(2);
}

function totalFunction()
{
    let price = Number(subtotal.innerText) + Number(tax.innerText) + 15;
    total.innerText = price.toFixed(2);
}

function removeFunction(remove, productTotal)
{
    remove
        .parentElement
        .parentElement
        .remove();
    productTotal.innerText = 0;
}