/*
let is going to be (letshit)
const is going to be (setshit)
equals is going to be (be)

identifier too for variable

we also need numbers and basic operators (+ - * /)

and so much more!

eg.
letshit times be 5 * (5 - 2)
screen.shit(times)

_________________________

We want to translate this into an array to be read by the parser
[] 
*/

const TokenType = {
  Number: "Number",
  Identifier: "Identifier",
  Equals: "Equals",
  OpenParen: "OpenParen",
  CloseParen: "CloseParen",
  BinaryOperators: "BinaryOperators",
  Let: "Let",
  Const: "Const",
};

/**
 * @typedef {Object} Token
 * @property {string} value
 * @property {string} type
 */

/**
 * Tokenizes the given source string.
 * @param {string} sourceCode - The source string to tokenize.
 * @returns {Token[]} An array of tokens.
 */

export function tokenize(sourceCode){
  const tokens = [];
  const src = sourceCode.split("");

  while(src.length > 0) {
    if(src[0] == '(') {
        
    }
  }

  return tokens;
}
