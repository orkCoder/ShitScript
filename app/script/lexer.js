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
    Assign: "Assign", // Adding Assign token type for '=' character
  };
  
  const KEYWORDS = {
      "let": TokenType.Let,
      "const": TokenType.Const
  };
  
  function token(value, type) {
    return {
      value: value,
      type: type,
    };
  }
  
  function isint(str) {
      const c = str.charCodeAt(0);
      return c >= '0'.charCodeAt(0) && c <= '9'.charCodeAt(0);
  }
  
  function isalpha(src) {
      const c = src.charCodeAt(0);
      return (c >= 'a'.charCodeAt(0) && c <= 'z'.charCodeAt(0)) ||
             (c >= 'A'.charCodeAt(0) && c <= 'Z'.charCodeAt(0));
  }
  
  function isskippable(str) {
      return str === ' ' || str === '\n' || str === '\t';
  }
  
  export function tokenize(sourceCode) {
    const tokens = [];
    let src = sourceCode.split("");
  
    while (src.length > 0) {
      if (src[0] === "(") {
        tokens.push(token(src.shift(), TokenType.OpenParen));
      } else if (src[0] === ")") {
        tokens.push(token(src.shift(), TokenType.CloseParen));
      } else if (src[0] === "+" || src[0] === "-" || src[0] === "*" || src[0] === "/") {
        tokens.push(token(src.shift(), TokenType.BinaryOperators));
      } else if (src[0] === "=") { // Check for '=' character
        tokens.push(token(src.shift(), TokenType.Assign)); // Push Assign token
      } else {
          if (isint(src[0])) {
              let num = '';
              while (src.length > 0 && isint(src[0])) {
                  num += src.shift();
              }
              tokens.push(token(num, TokenType.Number));
          } else if (isalpha(src[0])) {
              let ident = '';
              while (src.length > 0 && isalpha(src[0])) {
                  ident += src.shift();
              }
              const reserved = KEYWORDS[ident];
              if (reserved === undefined) {
                  tokens.push(token(ident, TokenType.Identifier));
              } else {
                  tokens.push(token(ident, reserved));
              }
          } else if (isskippable(src[0])) {
              src.shift();
          } else {
              console.log(`Unrecognized character found in source: ${src[0]}`);
              Deno.exit(1);
          }
      }
    }
  
    return tokens;
  }
  
  const source = await Deno.readTextFile('./text.txt');
  for (const token of tokenize(source)) {
      console.log(token);
  }
  