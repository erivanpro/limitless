import json
L = [ 4, 6.0, "TOTO", ["SOLEIL", 99,-3.14]]
print(L)
var = json.dumps(L)
print ("JSON : ",var)
print(type(var))
newL = json.loads(var)
print(newL)
print(type(newL))
