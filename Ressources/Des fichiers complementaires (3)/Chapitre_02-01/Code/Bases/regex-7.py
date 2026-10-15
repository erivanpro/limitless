import re

txt = "abc...[AAA], [1980],[Descartes] et [Covid-2 : 2020]...xyz"
print(f"txt={txt}")

#regex = re.compile("\[.*\]")
regex = re.compile("\[.*?\]")
res = regex.findall(txt)
print(f"res={res}")






 








    
