import re


txt = "YabbbYaaYbbY"
print(f"txt={txt}")

regex_1 = re.compile("a*b+")
res_1= regex_1.findall(txt)
print(f"res_1={res_1}")
 
regex_2 = re.compile("Ya?b")
res_2= regex_2.findall(txt)
print(f"res_2={res_2}")

    
