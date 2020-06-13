//TASK # 1

var number = prompt("Enter your number");
document.write("Result:" + "<br>");


document.write(`The value  of a is:  ${number}`);
document.write("<br>");

document.write(".........................................");

document.write("<br><br>");


++number;
document.write(`The value  of ++a is:  ${number}`);
document.write("<br>");

document.write(`Now The value  of a is:  ${number}`);

document.write("<br><br>");



number++;
document.write(`The value  of a++ is:  ${number}`);
document.write("<br>");

document.write(`Now The value  of a is:  ${number}`);
document.write("<br><br>");



--number;
document.write(`The value  of --a is:  ${number}`);
document.write("<br>");

document.write(`Now The value  of a is:  ${number}`);
document.write("<br><br>");




number--;
document.write(`The value  of a-- is:  ${number}`);
document.write("<br>");

document.write(`Now The value  of a is:  ${number}`);
document.write("<br><br>");




//TASK # 2

var a = 2, b = 1, result;
result = --a - --b + ++b + b--;

document.write(` a is ${result}` + "<br>");



result = --a - --b;



document.write(` b is ${result}` + "<br>");




result = --a - --b + ++b;


document.write(`result is ${result}` + "<br>");




result = --a - --b + ++b + b--;

document.write(result + "<br>");



//TASK # 3


var username = prompt("Enter User Name");
document.write(username);



//TASK # 4-5


var x = prompt("Enter Your Table Number");
function multi(x = 5) 
{
    for (var y = 1; y <= 10; y++) {

        document.write(`${x}   *   ${y}   =   ${y * x}`);


}

}
multi();


//TASK # 6



<table border="1" style="text-align: center;">
    <thead>

        <th>Subject</th>
        <th>Total marks</th>
        <th>Obtained marks</th>
        <th>Percentage</th>



    </thead>

    <tr>
        <td>English</td>
        <td>100</td>
        <td id="1"></td>
        <td id="4"></td>





    </tr>
    <tr>

        <td>Math</td>
        <td>100</td>
        <td id="2"></td>
        <td id="5"></td>







    </tr><tr>

        <td>Urdu</td>
        <td>100</td>
        <td id="3"></td>
        <td id="6"></td>



    </tr>


</table>  


var english, math, urdu, result, totalmarks = 300, percentage;
english = parseInt(prompt("Enter english subject Marks"));

math = parseInt(prompt("Enter  math subject Marks"));

urdu = parseInt(prompt("Enter  urdu subject Marks"));

result = english + math + urdu;
percentage = parseFloat(result / totalmarks * 100);

document.getElementById("1").innerHTML = english;
document.getElementById("2").innerHTML = math;

document.getElementById("3").innerHTML = urdu;

document.getElementById("4").innerHTML = percentage + "%";
document.getElementById("5").innerHTML = percentage + "%";
document.getElementById("6").innerHTML = percentage + "%";
document.write("<br><br>");


document.write("Total Marks You Obtained" + " " + result + "<br>");
document.write("<br>");
document.write("Your Total Percentage is" + " " + percentage + "%" + "<br>");



