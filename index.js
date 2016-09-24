function sqRoot(number){
  if(typeof x !== 'number'){
      throw new Error('Wrong data type!');
    } else {
      var sum = 0;
      for (var i = 1; i <= number; i++){
        sum += math.sqrt(i);

      }
      return sum;
    }
};
    console.log(sqRoot(9));


module.exports = sqRoot;