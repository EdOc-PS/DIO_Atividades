#Operadores
#+. - , * , / , // (divisão por inteiro), ** (expoente), % (modulo)


saldo = input("Informe o saldo 1")
saldo2 = input("Informe o saldo 2")

print(saldo == saldo2)
print(saldo >= saldo2)
print(saldo != saldo2)

saldo3 = 500 #Atribuição simples
saldo3 += 200 #Atribuição add
print(saldo3)

# Possivel fazer com os demais operadores logicos

#Operador Logico E
print (saldo >= saldo2 and saldo2 == saldo3)

#Operador Logico OU
print (saldo >= saldo2 or saldo2 == saldo3)

#Operador Logico Negação
print (not saldo >= saldo2)

#Operador de Indentificação
print("Operador de Indentificação")
curso = "Sistema de Informação"
nome_curso = curso
saldo, limite = 200, 200

print(curso is nome_curso)
print(curso is not nome_curso)

print(saldo is limite)

#Operador de Associação
print("Operador de Associação")
supermecado = "Supermecado BH"
frutas = ["banana", "maça", "uva"]

print ("BH" in supermecado)
print("maça" in frutas)