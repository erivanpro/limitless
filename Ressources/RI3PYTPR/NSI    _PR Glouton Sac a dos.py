L = [ (10,9),(7,12),(1,2),(3,7),(2,5) ]
G = []
for paquet in L :
    gain, poids = paquet
    ratio = gain/poids
    G.append((ratio,gain,poids))

G.sort(reverse=True)
poidsrestant = 15

for paquet in G :
    r, gain,poids = paquet
    r = round(r,2)
    print("paquet ",gain, "€  ", poids, "kg  ", r, end="")

    if poids > poidsrestant :
        print(" REFUSE")
    else :
        print(" ACCEPTE")
        poidsrestant -= poids
        print("poids restant : ",poidsrestant,"kg")

