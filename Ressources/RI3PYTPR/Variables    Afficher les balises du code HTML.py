#affichez les balises du code HTML

CodePageWeb = "<html><head><title>Mon Titre</title></head><body>Texte sur la page</body></html>"

print(CodePageWeb)

for i in range(len(CodePageWeb)):
  if CodePageWeb[i] == "<" :
    ifin = CodePageWeb.find(">", i)
    print(CodePageWeb[i+1:ifin])
