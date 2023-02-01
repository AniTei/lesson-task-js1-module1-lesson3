const product = {
    name: "Fancy PAncy Product",
    price: 9999,
    onSale: true,
};

const container2 = document.querySelector (".container")

console.log (container2);

let lookForPrice = "no price found :("

if (product.price) {
    lookForPrice = product.price;
}

let lookForSale = "none";

if (product.onSale) {
    lookForSale = "underline";
}

container2.innerHTML = `<p style="text-decoration: ${lookForSale}"">Name of product: ${product.name}</p>
<p>Price of product: ${lookForPrice}</p>`



// so i think i understood the styling, then value of the styling can be set to refer to somethin else, so state some style in the tag you want to style, and refer to a variable for weatehr to style it and how?


// Gave up on the otehr file, when they sked me to colour a value depending on false tru :(

/* `product.html` links to `product.js`. 

OK  Display each property of the object in `product.js` using HTML.

OK  Provide a default value for the `price` property if it is missing.

If the product is on sale, underline the name.

Change the properties in the object to test your code.
 */

//jeg klarte det! men måtte se på fasit, hvis jeg klarer det på array uten hjelp nå er det veldig bra
//what i think I did
// 1. make a default, that "is like neutral" , basically "the default". what to fall back on, "do this unless told otherwise"
// 2. making the default means declearing a variable with let, and chooseing a stylevalue, that fits being default
// 3. make an if statement if (arrayname.property) {defaultvariable = "stylevalue for when the property is true";}
// 4. Now apply the style to the html-element. <tag style="text-decoration: ${defaultvariable}>