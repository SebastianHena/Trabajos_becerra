// VARIABLE DECLARATION PER ARTICLE TO GET THE BTN NUMBERS
//ART1
let one = document.getElementById('b1');
let two = document.getElementById('b2');
let trhee = document.getElementById('b3');
//ART2
let four = document.getElementById('b4');
let five = document.getElementById('b5');
let six = document.getElementById('b6');
//ART3
let seven = document.getElementById('b7');
let eight = document.getElementById('b8');
let nine = document.getElementById('b9');
//ART4
let minus = document.getElementById('menos');
let zero = document.getElementById('b0');
let pluz = document.getElementById('mas');
//ART5
let total = document.getElementById('b');
let hide = document.getElementById('hide');

let screen = document.getElementById('screen');

//FUNCTION TO GET THE BTN ONE AND PUT IT IN SCREEN
one.addEventListener('click', function(){
    screen = document.getElementById('screen');
    screen.value = screen.value+1;
 
});
//FUNCTION TO GET THE BTN TWO AND PUT IT IN SCREEN
two.addEventListener('click', function(){
    screen = document.getElementById('screen');
    screen.value = screen.value + 2;
 
});
//FUNCTION TO GET THE BTN TRHEE AND PUT IT IN SCREEN
trhee.addEventListener('click', function(){
    screen = document.getElementById('screen');
    screen.value = screen.value + 3;
 
});
//FUNCTION TO GET THE BTN FOUR AND PUT IT IN SCREEN
four.addEventListener('click', function(){
    screen = document.getElementById('screen');
    screen.value = screen.value + 4;
 
});
//FUNCTION TO GET THE BTN FIVE AND PUT IT IN SCREEN
five.addEventListener('click', function(){
    screen = document.getElementById('screen');
    screen.value = screen.value + 5;
 
});
//FUNCTION TO GET THE BTN SIX AND PUT IT IN SCREEN
six.addEventListener('click', function(){
    screen = document.getElementById('screen');
    screen.value = screen.value + 6;
 
});
//FUNCTION TO GET THE BTN SEVEN AND PUT IT IN SCREEN
seven.addEventListener('click', function(){
    screen = document.getElementById('screen');
    screen.value = screen.value + 7;
 
});
//FUNCTION TO GET THE BTN EIGHT AND PUT IT IN SCREEN
eight.addEventListener('click', function(){
    screen = document.getElementById('screen');
    screen.value = screen.value + 8;
 
});
//FUNCTION TO GET THE BTN NINE AND PUT IT IN SCREEN
nine.addEventListener('click', function(){
    screen = document.getElementById('screen');
    screen.value = screen.value + 9;
 
});
//FUNCTION TO GET THE BTN ZERO AND PUT IT IN SCREEN
zero.addEventListener('click', function(){
    screen = document.getElementById('screen');
    
    if(screen.value != 0 ){
        screen.value = screen.value += 0;
    }
});
//FUNCTION TO DO THE PLUZ BETWEEN TWO NUMBERS
pluz.addEventListener('click', function(){
    let operation = document.getElementById('operation');
    operation.value = 1;

    screen = document.getElementById('screen');
    hide = document.getElementById('hide');
    hide.value = screen.value;
    screen.value = ' '; 
});
//FUNCTION TO DO THE MINUS BETWEEN TWO NUMBERS
minus.addEventListener('click', function(){
    let operation = document.getElementById('operation');
    operation.value = 2;

    screen = document.getElementById('screen');
    hide = document.getElementById('hide');
    hide.value = screen.value;
    screen.value = ' '; 
});
/*
//Total with if()
total.addEventListener('click', function(){
    // CALL THE HIDE ELEMENT CALLED OPERATION OPERATION TO DO THE PLUZ AND MINUS USING AN IF
    let operation = document.getElementById('operation');
    
    if(operation.value =='1'){

        hide = document.getElementById('hide');
        screen = document.getElementById('screen');
        
        pluz = parseInt(hide.value) + parseInt(screen.value);
        
        screen.value = pluz;  
    }if(operation.value =='2'){

        hide = document.getElementById('hide');
        screen = document.getElementById('screen');
        
        minus = parseInt(hide.value) - parseInt(screen.value);
        
        screen.value = minus;
    }
});// end total with if
*/

//total with switch
total.addEventListener('click', function(){
    // CALL THE HIDE ELEMENT CALLED OPERATION TO DO THE PLUZ AND MINUS USING A SWITCH
    let operation = document.getElementById('operation');
    hide = document.getElementById('hide');
    screen = document.getElementById('screen');
    switch(operation.value){
        case '1':
            pluz = parseInt(hide.value) + parseInt(screen.value);
            screen.value = pluz;
        break

        case '2':
            minus = parseInt(hide.value) - parseInt(screen.value);
            screen.value = minus;
    }
});//end total with switch