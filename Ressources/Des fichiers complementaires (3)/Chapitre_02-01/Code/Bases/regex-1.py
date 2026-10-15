import re

txt = "Le problème du voyageur de commerce est un exemple de problèmes NP-Difficiles, mais aussi, c'est un exemple de problèmes NP-Complets"

regex ="exemple"
res = re.search(regex, txt)

if res :
    print(f"La première occurrence du motif '{regex}' a été détectée entre l'indice {res.start()} et l'indice {res.end()-1}")
else :
    print(f"Le motif '{regex}' est absent dans '{txt}'")









    
