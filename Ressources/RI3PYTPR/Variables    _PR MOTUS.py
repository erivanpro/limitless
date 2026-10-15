#JEU MOTUS
mot = "CHEVAL"

for tour in range(8) :
  player = input()
  player = player.upper()
  if len(player) != 6 :
    print("............")
  else :
    for i in range(6) :
      lettre_dumot = mot[i]
      lettre_player = player[i]
      # lettre bien placée
      if lettre_dumot == lettre_player :
        print(lettre_player + "# ",end='')
      else :
        # lettre présente dans le mot
        if mot.find(lettre_player) >= 0 :
          print(lettre_player + "? ",end='')
        else :
          # lettre non trouvée
          lettre = lettre_player.lower()
          print(lettre + " ",end='')
    print() # provoque un retour à la ligne
    if mot == player :
      print("GAGNE !!")
      exit()
