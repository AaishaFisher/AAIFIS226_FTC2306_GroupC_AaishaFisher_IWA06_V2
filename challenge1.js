const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const primaryValid = typeof primaryPhone === 'string' && !isNaN(primaryPhone); //false, 
const secondaryValid = typeof secondaryPhone === 'string' && !isNaN(secondaryPhone); //true, 

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid);
