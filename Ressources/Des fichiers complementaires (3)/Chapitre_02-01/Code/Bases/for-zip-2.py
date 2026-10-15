list1 = [1,2,3,4,5]
list2 = [6,7,8,9,10]
for i, (v1,v2) in enumerate(zip(list1, list2)):
    print(f"{i}: {v1} + {v2} = {v1+v2}")
    