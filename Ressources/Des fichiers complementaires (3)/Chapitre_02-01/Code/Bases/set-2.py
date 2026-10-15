A={1,2,3,4,5,6}
B={4,5,6,7,8,9}

print(f"A = {A}")
print(f"B = {B}")

union=A|B 
#union = A.union(B)
print(f"A | B = {union}") 

inter = A&B
#inter = A.intersection(B) 
print(f"A & B = {inter}") 

diff_A_B = A-B 
#diff_A_B = A.difference(B) 
print(f"A - B = {diff_A_B}") 

sym_diff = A^B 
#sym_diff = A.symmetric_difference(B)  
print(f"A ^ B = {sym_diff}")
 


 