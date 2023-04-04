IPK, LS, NC, ND = map(float, ((input() .split(" "))))
KU = input("enter Y or N : ")
Sa = input("enter Y or N : ")

if IPK > 3.5 :
    if LS <= 5 and NC <= 1 and ND == 0 and KU == "N" and Sa == "N" :
        print("Cum Laude")
    elif ND == 0 and Sa == "N" :
        print("Sangat Memuaskan")
        if 2.75 < IPK <= 3.5 :
            if LS <= 5 and ND == 0 and Sa == "N" :
                print("Sangat Memuaskan")
elif 2.00 <= IPK <= 2.75 :
    print("Memuaskan")
