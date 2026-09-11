
            function display(){
               console.log("Welcome to fun..");
            }
            display();
            function display1(name,age){
                console.log(name,age);
            }
            display1('gagan',20)

             function display2(name,age=25){
                console.log(name,age);
            }
            display2('gagan',20);

            let add = function(a,b){
                console.log("Sum:",a+b);
            }
            add(10,20);

            let greet = ()=>{
                console.log("Good morning");
            }
            greet();
            let add1 = (a,b)=>{
                console.log("Result is",a+b);
            }
            add1(20,30);
            let square = x => x*x;
            console.log(square(5));