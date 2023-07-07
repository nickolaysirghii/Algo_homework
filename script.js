const twoBig = (mass) => {

let big1 ;
let index1 ;
let big2;

mass.forEach((elem , idx) => {
if(big1 === undefined){
    big1 = elem;
    indes = idx;
  }else{
    if(elem > big1){
      big1 = elem;
      index1 = idx;
    }
  }
});

mass.forEach((elem) => {
  if(big2 === undefined){
      big2 = elem;
    }else{
      if(elem > big2 || 
        elem !== massiv.indexOf(index1 - 1) || 
        elem !== massiv.indexOf(index1) || 
        elem !== massiv.indexOf(index1 + 1)){
        big2 = elem;
      }
    }
  });

const result = big1 + big2;
console.log(result);

};

const massiv = [1,2,3,4,10,9,3,6];

twoBig(massiv);