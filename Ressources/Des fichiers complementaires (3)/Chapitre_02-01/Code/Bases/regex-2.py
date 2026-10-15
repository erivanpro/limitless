import re

def print_res(res, regex, source):
    if res :
        print(f"{regex} - '{source}' : True")
    else :
        print(f"{regex} - '{source}' : False")

txt_1 = "pi = 3.14"
txt_2 = "Le nombre pi=3.14 est Irrationnel."

regex_1 ="^pi"
a1 = re.search(regex_1, txt_1)
a2 = re.search(regex_1, txt_2)
print_res(a1, regex_1, txt_1) 
print_res(a2, regex_1, txt_2) 

regex_2 = "nnel\.$"
b1 = re.search(regex_2, txt_1)
b2 = re.search(regex_2, txt_2)
print_res(b1, regex_2, txt_1) 
print_res(b2, regex_2, txt_2) 

regex_3 = "[A-Z]"
c1 = re.search(regex_3, txt_1)
c2 = re.search(regex_3, txt_2)
print_res(c1, regex_3, txt_1) 
print_res(c2, regex_3, txt_2) 

regex_4 = "[0-9]"
d1 = re.search(regex_4, txt_1)
d2 = re.search(regex_4, txt_2)
print_res(d1, regex_4, txt_1) 
print_res(d2, regex_4, txt_2) 









    
