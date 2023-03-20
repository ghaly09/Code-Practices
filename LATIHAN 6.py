a, b, c, d = map(float, input() .split(" "))
Na = (a*0.35 + b*0.35 + c*0.25 + d*0.05)
if (Na < 40):
    print("TIDAK LULUS")
else:
    print ("LULUS")