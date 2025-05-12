function calculadora(n1, n2, operador) {
    if (operador === '+') {
      return n1 + n2;
    } else if (operador === '-') {
      return n1 - n2;
    } else if (operador === '*') {
      return n1 * n2;
    } else if (operador === '/') {
      return n1 / n2;
    }
  }
  
  // Exemplos de uso:
  console.log(calculadora(1, 1, '+'));