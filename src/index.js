const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    const letters = [];
    for (let i = 0; i < expr.split('').length; i += 10) {
    	letters.push(expr.split('').slice(i, i + 10));
    }
  	return letters
      .map(i => i.join(''))
      .map(i => i === "**********" 
      	? " " 
        :  String(Number(i))
        		.replaceAll('11', "-")
            .replaceAll('10', ".")
          )
      .map(i => MORSE_TABLE[i] || " ")
      .join('')
  		
}

module.exports = {
    decode
}