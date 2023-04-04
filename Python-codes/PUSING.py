IPK = float(input())
LamaStudi = float(int(input())/12)
NilaiC = int(input())
NilaiD = int(input())
KuliahUlang = input()
Sanksi = input()

if IPK > 3.5:
    if NilaiD == 0 and Sanksi == "N" :
        if LamaStudi <= 5 and NilaiC <= 1 and KuliahUlang == "N" :
            print("Cum Laude")
        else:
            print("Sangat Memuaskan")
    else:
        print("Memuaskan")
elif 2.75 < IPK <= 3.5:
    if LamaStudi <= 5 and NilaiD == 0 and Sanksi == "N" :
        print("Sangat Memuaskan")
    else:
        print("Memuaskan")
elif 2.00 <= IPK <= 2.75 :
    print("Memuaskan")



