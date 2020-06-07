var city = prompt('Enter Your City Name');
            if (city="karachi")
            {


            document.write(`Welcome to the city of light ${city} `);

            }


            var gender = prompt('Enter Your Gender');
                if (gender == "male") {


                    document.write('Good Morning Sir');

                }

                else if(gender == "female")
                 {


                        document.write(`Good Morning Ma'am.`);

                }


            var road_color = prompt('Enter Color');
                if (road_color=="red")
                 {
                     document.getElementById('1').innerHTML= road_color;
                }

                else if(road_color == "yellow")
                {
                     document.getElementById('2').innerHTML =  road_color;

                }

                 else if (road_color == "green") {
                    document.getElementById('3').innerHTML =  road_color;

                }


            var fuel = prompt('Enter Fuel');
            if (fuel < 0.25)

            {

                document.write('Please refill the fuel in your car');

            }

            else
            {
                document.write('ok');

            }


            var a=4;
            var b =82;
            var c=12;

            if (++a==5)
             {
               alert('given condition for variable a is true'); 
            }

             if (b++ == 83) {
                    alert('given condition for variable b is true');
                }

                 if (c++ == 13) {
                        alert('condition 1  is true');
                    }

                      if (c== 13) {
                            alert('condition 2  is true');
                        }
                          if (++c < 14) {
                                alert('condition 3  is true');
                            }

                             if (c == 14) {
                                    alert('condition 4  is true');
                                }



                 var material_coast = 20000;
                 var labour_coast = 2000;
                 var totalcoast = material_coast + labour_coast;

                 if (totalcoast==labour_coast+material_coast)
                 {
                     alert('The Coast equal');

                 }

                 if (true) 
                 {
                     alert('true');
                 }

                  if (false) {
                        alert('false');
                    }

                if ('car' < 'cat ')
                {
                    alert('car is smaller than cat');
                }


                document.write('Marks Sheet'+ '<br><br>');
                var totalmarks = 300;
                markobt = 199;
                perc= markobt/ totalmarks*100;
                var grade =perc;

                document.write(`Total marks: ${totalmarks}` + '<br>');
                document.write(`Obtained marks: ${markobt}` + '<br>');

                document.write(`Percentage: ${perc}` + '<br>');

                if (perc > 80) 
                {
                document.write(`Grade is : A+` + '<br>');
                document.write('Excellent'+'<br>');


                }

                 if (perc > 70) 
                 {

                  document.write(`Grade is : A` + '<br>');
                  document.write('Good' + '<br>');




                    }

                     if (perc > 60) 
                     {

                         document.write(`Grade is : B` + '<br>');
                        document.write('you need to improve' + '<br>');



                        } if (perc <= 60) 
                        {

                            document.write(`Fail` + '<br>');
                            document.write('Sorry' + '<br>');



                            }



                    var number = prompt('Enter Your Number');
                    var guess_number = [1,2,3,4,5,6,7,8,9,10];

                    if (number ==guess_number) 
                    {
                        alert('Bingo! Correct answer');
                    }
                    else if(++number == guess_number)
                    {
                        alert('Close enough to correct answer');

                    }


                    var numb = 5;
                    if (numb%3)
                     {
                        alert('can be divide');
                    }
                    else
                    {
                        alert('cant divide');


                    }


                    var input_numb = prompt('Enter your number');

                    if (input_numb%2==0) 
                    {
                        alert('Number is even'+" "+input_numb);
                    }

                    else
                    {
                        alert('Number is odd' +" "+ input_numb);

                    }


                    var t= prompt('Enter temperature');
                    if (t > 40)
                    {
                        alert('it is to hot outside');
                    }

                     else if (t > 30) 
                     {
                            alert('the weather today is normal');
                     }

                   else if (t > 20) {
                        alert('today weather is cool');
                    }
                   else if (t > 10) {
                        alert('OMG! Today Weather is so Cool ');
                    }





                var firstnumb=3;
                var secondnumb=5;

                if (firstnumb  +  secondnumb)
                 {
                    alert('Result is:'+ " " + (firstnumb + secondnumb));
                }

                else if (firstnumb - secondnumb)
                  {
                        alert('Result is:' + " " + (firstnumb - secondnumb));
                  }

                 else  if (firstnumb * secondnumb) {
                        alert('Result is:' + " " + (firstnumb * secondnumb));
                    }

                   else  if (firstnumb / secondnumb) {
                            alert('Result is:' + " " + (firstnumb / secondnumb));
                        }

