# Encoder et décrypter un code
print("Entrez le nom à coder : ")
nom = input()
nom = nom.upper()

SECRET = ""

for i in range(len(nom)):
  ascii = ord(nom[i])
  code = ascii + 3
  if code > ord('Z') :
      code -= 26
  SECRET += chr(code)

print("CODE : ",SECRET)

print("\n----------")

print("Entrez le nom à décoder : ")
nom = input()
nom = nom.upper()

DECODE = ""

for i in range(len(nom)):
  ascii = ord(nom[i])
  code = ascii - 3
  if code < ord('A') :
      code += 26
  DECODE += chr(code)

print("EN CLAIR : ",DECODE)
