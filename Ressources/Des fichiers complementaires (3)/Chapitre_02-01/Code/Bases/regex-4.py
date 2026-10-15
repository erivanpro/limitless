import re


txt = "abaabbaaabbb"
print(f"txt={txt}")

regex_1 = re.compile("a{3}b{3}")
res_1= regex_1.findall(txt)
print(f"res_1={res_1}")


regex_2 = re.compile("a{2,3}b{2,3}")
res_2= regex_2.findall(txt)
print(f"res_2={res_2}")




    
