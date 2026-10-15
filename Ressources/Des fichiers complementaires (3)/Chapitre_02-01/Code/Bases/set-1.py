 
set_1 = {True,False,1,2,2,'SET'}
print(f"Le type de set_1 est {type(set_1)}")
print(f"set_1 = {set_1}")

 
set_2 = {(1,2),(1,2),(1,2,3)}
print(f"set_2 = {set_2}") 

set_3 = set([6,7])
print(f"set_3 = {set_3}") 

set_3.update(set_1, {8,9})
print(f"set_3 = {set_3}") 

set_3.discard(8)
set_3.remove(9)
print(f"set_3 = {set_3}") 



