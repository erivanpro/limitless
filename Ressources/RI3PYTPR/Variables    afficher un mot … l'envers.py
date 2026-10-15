#affichez un mot à l'envers

mot = input()

for i in range(len(mot)) :
    index = len(mot) - i -1
    index = -1-i # calcul équivalent
    print(mot[index],end="")

>> ESCARGOT
>> TOGRACSE
