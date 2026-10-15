# Comptez les nombres à 2 chiffres contenant le chiffre 7

nb = 0

for i in range(10,99) :
  dizaine = i // 10
  unite = i - 10 * dizaine

  if dizaine == 7 or unite == 7 :
    nb = nb + 1

print("Réponse : ",nb)
