# ASCII ART
import matplotlib.image
img = matplotlib.image.imread('c:\\test\\test.png') # à changer !

hauteur = len(img)
largeur = len(img[0])

# on cherche le pas pour la réduction de l'image
maxSize = 60
pasX = (hauteur // maxSize + 1) # +1 pour être sûr <=60
pasY = (largeur // maxSize + 1)
pas = max(pasX,pasY)

ValMax = img.max()

for y in range(0,hauteur,pas) :
    for x in range(0,largeur,pas) :
        # RGB => [0,1]
        val =  img[y][x]
        val = sum(val) / len(val)
        val = val / ValMax

	    # [0,1] => ASCII
        niv = int(val*10)
        if niv > 9 :
            niv = 9

        ascii=["@", "#", "O", "o", "n", "=", "+", ':', '.', " "]
        car = ascii[niv]

        #affichage
        print(car+car,end="")

    print()
