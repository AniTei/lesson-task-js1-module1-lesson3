const products = [
    {
        name: "Fancy Product",
        price: 40,
        soldOut: true,
    },
    {
        name: "Another  very good Product",
        soldOut: false,
    },
    {
        name: "Cheap Product",
        price: 10,
        soldOut: true,
    },
];

const divContainer = document.querySelector(".container");

console.log(divContainer);

let divContent = "";

for (let i = 0; i < products.length; i++) {

/*     products[i].name.style.color = "red";
 */
    /* if (products[i].soldOut === false) {
        products[i].name.style.color = "green";
    } */

    let price = "absolutely no";

    if (products[i].price) {
        price = products[i].price;
    }

    let outOfStock = "red";

    if (products[i].soldOut === false) {
        outOfStock = "green";
    }






    divContent += `<p style=" color: ${outOfStock}"> ${products[i].name}.  </p>
    <p>-This product costs ${price} money.</p>`;

    console.log(divContent);
}

//Now we can assign the loop to be the property of the element we made into a selector at first

divContainer.innerHTML = divContent;



//FRA PRODUCT.JS jeg klarte det! men måtte se på fasit, hvis jeg klarer det på array uten hjelp nå er det veldig bra
//what i think I did
// 1. make a default, that "is like neutral" , basically "the default". what to fall back on, "do this unless told otherwise"
// 2. making the default means declearing a variable with let, and chooseing a stylevalue, that fits being default
// 3. make an if statement if (arrayname.property) {defaultvariable = "stylevalue for when the property is true";}
// 4. Now apply the style to the html-element. <tag style="text-decoration: ${defaultvariable}>

// JEG KLARTE DET HER OG, VED Å SE PÅ FASITEN TIL PRODUCT.JS! DET MÅ JO VÆRE GANSKE BRA! NÅ ER JEG SLITEN 


// This was so complicated! what i did:
// 1. make the element a valid selector (log it to see you get the element you wanted)
// 2. create a loop, going through the array. for(let i = 0; i < nameofarray.length; i++) {the code you want to loop, this could be a consolelog of the first property to see that it loops right}
// 3. add a new variable before the loop, this variable is an empty string, and will make the content changeable depending on the input from the propertyvalue.
// 4. use this new variable inside the loop, variablename = variablename + "tag" + your content(? think this would be better with backticks, but will get there i think) + "tag".;
// 5. if you console log the variable just usen inside the loop, the console will show how it goes through each of the index enties, increasing one at the time.
// 6. now we can connect the variablename we used for the element in the indexfile, with the code we put in the loop(that is connected to teh array)

// dvs We are trying to connect the array to the indexfile, and we are also telling it to do the same operation one time for each item in the array of objects.

// 7. the contents of the variable = variable can be written in backticks.
// 8. "variable = variable" can be shortened to "variable +="
// 9. More html can be added to the content of the loop, gjerne refering to the properties in the array

//Creating a default value for when a property is missing
// 1. inside the loop, before the html content, let keyword and newvariablename = "whatever you want the default to bw (in quotes!)
// 2. if (refer to the arrayname[i].property) {newvariablename = arrayname[i].property}. Now the default is to show the text you put in a sting, if it vcant find the property you asked i to find.
// 3. Lastly, put the newvariablename inside the html sting in the loop, so it knows to look for the default AND look for the property

//If the product is sold out, display its name in red otherwise display it in green.
// jeg tenker dette inni hodet mitt: soldout = true = red, soldout = false = green
//HOW TO I SPPLY COLOUR TO AN OTHER VALUE/PROPERTY, DEPENDING ON BOOLEAN






/* divContainer.innerHTML = `<p> this is a test for object 0</p>

<p>This product is called ${products[0].name}</p>
<p>It costs ${products[0].price} money</p>
<p>It is ${products[0].soldOut} that it is sold out!</p>`; */






// the content that shows up on the page insnt changing lines, all one long line?
// it shows up on diff lines in the console, go look in the video from lesson 1.3?
// IT IS BECAUSE ITS BEEN PUT A FLEX ON THE CLASS!!!! OMG...

