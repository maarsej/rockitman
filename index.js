const rocket = `
        |
       / \\
      / _ \\
     |.o '.|
     |'._.'|
     |     |
   ,'|  |  |\\\`.
  /  |  |  |  \\
  |,-'--|--'-.|
  
  `;

const rocket2 = `       !
       !
       ^
      / \\
     /___\\
    |=   =|
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
   /|##!##|\\
  / |##!##| \\
 /  |##!##|  \\
|  / ^ | ^ \\  |
| /  ( | )  \\ |
|/   ( | )   \\|
    ((   ))
   ((  :  ))
   ((  :  ))
    ((   ))
     (( ))
      ( )
       .
       .
       .`

const draw1 = function() {
    return rocket;
}
const draw2 = function() {
  return rocket2
}

draw= {
  small: draw1,
  large: draw2
}

module.exports = draw;