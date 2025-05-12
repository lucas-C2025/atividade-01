function verificaTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      return 'none';
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
      return 'none';
    }
    if (a === b && b === c) {
      return 'equilateral';
    } else if (a === b || a === c || b === c) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  console.log(verificaTriangulo(2, 2, 2)); 