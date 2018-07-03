function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  //Create a place to hold counter value
    var sheepCounter = 0;
    //loop number of sheep in array
    for( var i = 0; i < arrayOfSheep.length; i++) {
      //if sheep value is equal to true add one
      if(arrayOfSheep[i]=== true) {
        sheepCounter++;
      }
    }
    //return number of sheep
    return sheepCounter;
}
