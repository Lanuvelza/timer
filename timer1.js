const timers = process.argv.splice(2);

timers.sort(function(a,b) { 
  return a - b;
}); 

const beeper = function(arr) {

  if (arr.length > 0) {
    
    for (let time of arr) {
      if (!isNaN(Number(time)) && Number(time) > 0) {
        
        setTimeout(() => {
          console.log(time);
          process.stdout.write('\x07');
      
        }, time * 1000);
      }
    }
  }
};

beeper(timers);