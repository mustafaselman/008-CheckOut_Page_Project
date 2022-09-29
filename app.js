
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
            const quantity = e.target.nextElementSibling ;
            const productTotal = e.target.parentElement.nextElementSibling.nextElementSibling.childNodes[ 1 ];
            
            decreaseProductTotal(productTotal,quantity);
            decrease(quantity);

        } else if (e.target.className.includes("buttonIncrease"))
        {
            const productTotal = e.target.parentElement.nextElementSibling.nextElementSibling.childNodes[ 1 ]
            const quantity = e.target.previousElementSibling;
            increaseProductTotal(productTotal,quantity);
            increase(quantity)
            
            
        } if (e.target.className.includes("remove"))
        {
            const remove = e.target;
            const productTotal = e.target.nextElementSibling.childNodes[ 1 ];
            removeFunction(remove, productTotal);
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