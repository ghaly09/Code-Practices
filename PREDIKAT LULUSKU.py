IPK = float(input())
LS = float(input())
NC = int(input())
ND = int(input())
KU = input()
Sa = input()

if IPK > 3.5 :
    if LS <= 5 and NC <= 1 and ND == 0 and KU == "N" and Sa == "N" :
        print("Cum Laude")
    else:
        print("Sangat Memuaskan")
elif 2.75 < IPK <= 3.5 :
    if LS <= 5 and ND == 0 and Sa == "N" :
        print("Sangat Memuaskan")
    else:
        print("Memuaskan")
elif 2.00 <= IPK <= 2.75 :
    print("Memuaskan")
