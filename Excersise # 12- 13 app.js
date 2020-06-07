var numbr1 = prompt('Enter your number');
                var numbr2 = prompt('Enter your number ');

                if (numbr1 >= numbr2 && numbr1 === numbr2) 
                {
                    alert('Number first is Greater then Second Number'+" "+numbr1);
                }

                else
                {

                        alert('Number first is less then Second Number' + " " + numbr2);

                }


                var character =prompt('Enter your String');
                if (character == character.toUpperCase()) 
                {
                    alert('Your Enter String in Upper Case'+" "+character);
                }
                else
                {
                    alert('Your Enter String in lower Case' + " " + character);

                }

                    function vowel_count(str1) {
                            var vowel_list = 'aeiouAEIOU';
                            var vcount = 0;

                            for (var x = 0; x < str1.length; x++) 
                            {
                                if (vowel_list.indexOf(str1[x]) !== -1)
                                 {
                                    vcount += 1;

                                }


                            }
                            return vcount;
                        }

                        alert(vowel_count("The quick brown fox"));


                    var number = prompt('Enter your number');
                    var sign = number > 0 ? 1 : number ==0 ? 0 : 1;  
                    if (sign ==1)
                    {
                         alert('Number is Positive'+" "+sign); 
                    }

                    else
                    {
                         alert('Number is Negative' + " " + sign); 

                    }



                     var password = prompt('Enter your Password');
                     if (password =='' )
                      {
                         alert('Plaese Enter Your Password');
                     }
                     else if(password == '123')
                     {
                         alert('Correct!');

                     }
                     else
                     {
                         alert('Incorrect Password ');

                     }


                     var geeting;
                     var hour= 13;
                     if (hour < 18 )
                     {
                         greeting ="Good Day";
                         alert(greeting);

                     }
                     else
                     {
                         greeting = "Good Evening";
                         alert(greeting);


                     }


















