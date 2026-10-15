list_1 = [1,28,True,"Python",64,False,"Langage C",12,"Pascal",10]
print("list_1 = ",list_1)
print(f"Le nombre d'éléments dans la liste list_1 est : {len(list_1)}")

item0 = list_1[0]
item1 = list_1[-1]

print(f'item0 = {item0}')
print(f'item1 = {item1}')

list_1[1] = "json"
list_1[6] = "C++"
print("list_1 = ",list_1)

list_2 = list_1 +[1,2,3]
print("list_2 = ",list_2)

print(list_1[11])