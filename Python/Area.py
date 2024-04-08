A, B, C = float(input()), float(input()), float(input())
triangulo = (A*C)/2
circulo = 3.14159 * C**2
trapezio = ((A + B)*C)/2
quadrado = B**2
retangulo = A * B

print(f"TRIANGULO: {triangulo:.3f}\nCIRCULO: {circulo:.3f}\n" +
      f"TRAPEZIO: {trapezio:.3f}\nQUADRADO: {quadrado:.3f}\n" +
      f"RETANGULO: {retangulo:.3f}")