

let shipFactory = (size, positions) => {
 
    let positions = positions
    let segments = []
    let i = 0;

      while (i < size) {
        segments.push(positions[i]+'intact')
        i++
      }
    let isHit = false;
    let isSunk = false;

    function hit(position){
        segments[position] = 'hit';
        this.isHit = true
        if (segments.every(e => e == 'hit')){
            this.isSunk = true;
        }
    }

  
       
        
    
    return { positions, size, isHit, isSunk, hit };
  };
  

  module.exports = shipFactory

