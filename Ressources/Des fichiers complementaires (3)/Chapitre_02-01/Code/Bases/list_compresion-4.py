list_1 = [1,2,3,4,5,6,7,8,9,10]
print(f"list_1={list_1}")

list_2 = [x*2 if (x%2)==0 else x*3 for x in list_1]
print(f"list_2={list_2}")

 