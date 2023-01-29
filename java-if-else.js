var name='Rafsan';

if(name == "faruk"){
    console.log("this is faruk");
}
else if (name == 'Rafsan'){
    console.log('this is Rafsan');
}
else{
    console.log('kono tai na');
}

var num4 = 50;
if(num4 == 50){
    console.log('this is 50');
}
else if (num4 == 70){
    console.log('this is 70');
}

var num4 = 50;
var num5=39;

if(num4 == 50 && num5 == 39){

if(num4 == 50 || num5 == 39){
    console.log('this is 50');
}
else if (num4 == 70 && num5 == 100){
    console.log('this is 70');
}
else{
    console.log('Kono tai hoy ni');
}

var num7 =100;

if(num7 >100){
    console.log('this is bigger then 100');
}
else if ( num7 < 100){
    console.log('this is samller then 100');
}
else{
    console.log('this is equal 100');
}

// ********Konta boro ba choto*****

var num11 = 150;
var num12 = 700;
var num13 = 900;

if (num11 > num12 && num11> num13){
    console.log('tahole num11 sob thke boro');
}
else if(num12 > num13){
    console.log('tahole num12 sob theke boro hobe');
}
else{
    console.log('thahole to num13 i sob theke boro hobe');
}


// ****Odd & Even*********
//** */ if ( num66 % 2 == 0){***

var num66 =100;
if ( num66 % 2 != 0){
    console.log('this is odd number');
}
else{
    console.log('this is even number');
}
//  Grading system**********************

 * 0--32.........F
 * 33--39........D
 * 40--49........c
 * 50--59........B-
 * 60--69........B
 * 70--79........A-
 * 80-100........A+

var result = 99;

if(result > 100){
  console.log("Is that possible? !! How!!");
 }else if( result <= 100 && result >= 0){

    if (result >= 0 && result < 33){
        console.log('Grade ........F');
    }
    else if( result >32 && result < 40 ){
        console.log('Grade .........D');
    }
    else if( result >39 && result < 50 ){
        console.log('Grade .........C');
    }
    else if( result >49 && result < 60 ){
        console.log('Grade .........B-');
    }
    else if( result >59 && result < 70 ){
        console.log('Grade .........B');
    }
    else if( result >69 && result < 80 ){
        console.log('Grade .........A-');
    }
    else if( result >79 && result < 100 ){
        console.log('Grade .........A+');
    }

  }
else{
    console.log("0 thekeo kom piachen naki bro");
  }




