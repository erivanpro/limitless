import re

txt = "x=48.85 et y=2.35"

regex = re.compile("([0-9]+)\.([0-9]+)")
res = regex.findall(txt)

print(txt)
for n1,n2 in res:
    print(f"n1={n1}; n2={n2}")



 








    
