//TASK # 1
var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

for (var i = 0; i < 3; i++) {
    document.write(matrix[i] + "<br>");

}


//TASK # 2

for (var i = 1; i <= 10; i++) {
    document.write([i] + "<br>");

}



//TASK # 3

var table = prompt('Enter a number to show its multiplication table');
var len = prompt('Enter Length of table');

document.write(`Multiplication table of  ${table} ` + "<br><br>");
document.write(`Length  ${len} ` + "<br><br>");


//TASK # 4

for (var i = 1; i <= len; i++)
 {

    document.write(`${table}  * ${i}   =  ${table * i}` + "<br>");

 }


//TASK # 5

var fruits = ['Apple', 'Mango', 'Orange', 'Strawberry', 'Banana'];

for (var i = 0; i < fruits.length; i++) {

    document.write(`${fruits[i]} ` + "<br>");


}
document.write("<br>");


//TASK # 6

fruits.forEach((value, i) => {

    document.write(`Element at i ${i} is ${value}` + "<br>");

});


//TASK # 7

document.write(`Counting: ` + "<br><br><br>");
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


//TASK # 8

var arr3 = arr1.slice(0, 10).reverse();
document.write(`<br>`);






for (var i = 1; i <= arr1.length; i++) {

    document.write(`${i}` + ",");

}

document.write("<br><br>");


//TASK # 9
document.write(`Reverse Counting: ` + "<br><br>");

document.write(`${arr3}`);

document.write("<br><br>");



//TASK # 10
document.write(`Even: ` + "<br><br>");


for (var i = 0; i <= 20; i++) {

    if (i % 2 == 0) {
        document.write(`${i}` + " , ");

    }

}

document.write("<br><br>");

//TASK # 11
document.write(`Odd: ` + "<br><br>");

for (var i = 0; i <= 20; i++) {

    if (i % 2 == 1) {
        document.write(`${i}` + " , ");

    }

}


document.write("<br><br>");

//TASK # 12
document.write(`Series: ` + "<br><br>");


for (var i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        document.write(`${i}` + "k" + " ,");

    }

}

//TASK # 13
var Items = ['cake', 'apple pie', 'chips', 'patties'];

var input = prompt('Welcome to ABC Bakery, what do you want to order sir / mam ?').toLowerCase();
var index;


for (var i = 0; i < Items.length; i++) {

    index = Items.indexOf(Items[i]);


    if (input == "") {
        alert('Please Enter Your Item Name');
    }
    else {

        if (Items.includes(input)) {
            alert(`${input} Is Available at index ${index} in Our Bakery`);

        }

        else {
            alert(` We Are Sorry.${input}  Is not  Available in Our Bakery`);

        }
    }
}



//TASK # 14
var max_val = [24, 53, 78, 91, 12];
document.write('Array items: ' + max_val + "<br>");

var ar = Math.max.apply(null, max_val);
document.write('The Largest number is: ' + ar + "<br><br>");



document.write('Array items: ' + max_val + "<br>");


//TASK # 15
var a = Math.min.apply(null, max_val);
document.write('The Minimum number is: ' + a + "<br><br>");


//TASK # 16

for (var i = 5; i <= 100; i = i + 5) 
{
    document.write(i + " ,");
}








