            var number = prompt("Enter your number");
            document.write("Result:"+"<br>");


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



            var a=2, b=1,result;
            result = --a - --b + ++b + b--;

            document.write(` a is ${result}`+ "<br>");



            result = --a - --b ;



            document.write(` b is ${result}` + "<br>");




            result = --a - --b + ++b;


            document.write(`result is ${result}` + "<br>");




            result = --a - --b + ++b + b--;

            document.write(result+"<br>");



            var username = prompt("Enter User Name");
            document.write(username);



             var x = prompt("Enter Your Table Number");
             function  multi(x=5)
             {
                for (var y = 1; y <= 10; y++)
                 {

                     document.write(`${x}   *   ${y}   =   ${y * x}`);


                 }

             }
             multi();



            var english, math, urdu,result,totalmarks=300,percentage;
            english= parseInt(prompt("Enter english subject Marks"));

            math = parseInt(prompt("Enter  math subject Marks"));

            urdu = parseInt(prompt("Enter  urdu subject Marks"));

            result =  english+math+urdu;
            percentage = parseFloat(result/totalmarks*100);

            document.getElementById("1").innerHTML=english;
            document.getElementById("2").innerHTML = math;

            document.getElementById("3").innerHTML = urdu;

            document.getElementById("4").innerHTML = percentage + "%";
            document.getElementById("5").innerHTML = percentage + "%";
            document.getElementById("6").innerHTML = percentage + "%";
            document.write("<br><br>");


            document.write("Total Marks You Obtained"+" "+result+"<br>");
            document.write("<br>");
            document.write("Your Total Percentage is" + " " + percentage+"%" + "<br>");



