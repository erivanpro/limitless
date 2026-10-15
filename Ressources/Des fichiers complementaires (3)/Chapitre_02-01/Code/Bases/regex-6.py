import re

def apply_regex(regex, txt):
    print(f"\nApplication de la regex \"{regex}\" sur \"{txt}\"")
    regex = re.compile(regex)    
    res = regex.finditer(txt)
    for e in res:
        print(f"e.group() = {e.group()}, e.start()={e.start()}, e.end()={e.end()}")


txt = "abcabcabcabcabc"
regex_1 = "(abc){2,5}"
apply_regex(regex_1, txt) 
regex_2 = "(abc){2,5}?"
apply_regex(regex_2, txt) 




 








    
