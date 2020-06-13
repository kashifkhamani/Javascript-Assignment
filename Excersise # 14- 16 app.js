

< select id="1" >

    <option id="2">

    </option>

</select >



//TASK # 1


//1
 var std_name = [];
//2
 var std_names = new ("");
//3
 var std = ["Kashif", "ali", "hazab"];

//4
 var std_roll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//5
 var std_bol = [true, false];

//6
 var students_mix = ["saad", 1, true];


 document.write('Qualificaton' + "<br><br><br>");

//7
  var Qualificaton = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.PHIL', 'PhD'];


 for (var i = 0; i < Qualificaton.length; i++) {

    document.write([i] + ") " + Qualificaton[i] + "<br>");

}


//TASK # 8


var students_names = []
var students_score = []
var Total_score = [500]

document.write("<br>")

students_names.push('kashif')
students_score.push(300)

students_names.push('ali')
students_score.push(400)

students_names.push('saad')
students_score.push(250)

var stdper1, stdper2, stdper3
stdper1 = students_score[0] / Total_score * 100;
stdper2 = students_score[1] / Total_score * 100;
stdper3 = students_score[2] / Total_score * 100;


document.write(`Score of michael is: ${students_score[0]} . Percentage: ${stdper1 + "%"} ` + "<br>");
document.write(`Score of john is: ${students_score[1]} . Percentage: ${stdper2 + "%"} ` + "<br>");
document.write(`Score of Tonny is: ${students_score[2]} . Percentage: ${stdper3 + "%"} ` + "<br>");



//TASK # 9

var color_name = ['Red', 'Green', 'Blue', 'White'];

for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}
document.write("<br>");


color_name.push('ali');


var addcolor = prompt('What Color Do You Want To Add At of the First i of Array');

color_name.unshift(addcolor);

for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}




document.write("<br>");


var addcolor = prompt('What Color Do You Want To Add  At of the End i of Array');

color_name.push(addcolor);

for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}





var addcolor = prompt('What Color Do You Want To Add  At of the End i of Array');

color_name.unshift('Magenta');
color_name.unshift('Silver');


for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}


color_name.unshift('Magenta');



color_name.shift('Silver');
document.write('After Delete First Color i is Remain' + "<br>");


for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}

document.write("<br>");



color_name.pop('Silver');
document.write('After Delete last Color i is Remain' + "<br>");


for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}


document.write("<br>");
var addcolor_i = prompt('Which i do you want add color');

color_name.splice(0, 4, addcolor_i);


for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}


document.write("<br>");
var addcolor_i = prompt('Which i do you want add color');

color_name.splice(addcolor_i);


for (var i = 0; i < color_name.length; i++) {
    document.write(color_name[i] + "<br>");

}



//TASK # 10

var std_score = [320, 230, 480, 120];


document.write(`Score of Students ${std_score}` + "<br>");
document.write(`Order of Score of Students ${std_score.sort()}`);



//TASK # 11

document.write(`Cities List:` + '<br>');
var city_list = ['Karachi', 'Lahore', 'Islamabad ', 'Quetta', 'Peshawar'];

document.write(`${city_list}` + '<br><br>');



document.write(`Select Cities List:` + '<br>');
var copy = city_list.slice(2, 4);

document.write(`${copy}` + '<br>');




//TASK # 12

document.write('Array:' + "<br>");

var arr = ["This", "is", "my", "cat"];
document.write(arr + "<br><br>");

document.write('String:' + "<br><br>");

document.write(`${arr.join(' ')}` + '<br>');


document.write('Devices:' + "<br>");

var arr = ["Keyboard", "mouse", "printer", "monitor"];
document.write(arr + "<br><br>");

for (var i = 0; i < arr.length; i++) {
    document.write("Out:" + "<br>");

    document.write(arr[i] + "<br>");


}


//TASK # 13

document.write('Devices:' + "<br>");

var arr = ["Keyboard", "mouse", "printer", "monitor"];
document.write(arr + "<br><br>");

for (var i = 0; i < arr.length; i++) 
{
    document.write("Out:" + "<br>");
    var sort = arr.sort();

    document.write(arr[i] + "<br>");


}

var mobile_name = ['Apple', 'Samsung', 'Nokia', 'Sony', 'Haier'];

document.getElementById('2').innerHTML = mobile_name






