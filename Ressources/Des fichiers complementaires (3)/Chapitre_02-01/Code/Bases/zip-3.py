from itertools import zip_longest
list1 = [1,2]
list2 = ['a','b','c','d','e']
list1_list2 = list(zip_longest(list1,list2, fillvalue='X'))
print(f"list1={list1}")
print(f"list2={list2}")
print(f"list1_list2={list1_list2}")