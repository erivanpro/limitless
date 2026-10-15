tuple_ = (1,2,True,"Fortran")

print(f"tuple_ = {tuple_}")
print(f"Le type de tuple_ est {type(tuple_)}")
t1=(1,2,3)
a,_,b = t1 
print(f"a={a} et b={b}")
t2=(1,2,3,4,5,6,7,8,9,10)
(v1,*r,v2) =t2
print(f"v1 = {v1}, r={r}, v2={v2}")
