# L'infiniment petit

val = 1

print("XX" + "0123456789" * 5)
for i in range(50):
  val = val / 2
  print("{0:51.50f}".format(val))
