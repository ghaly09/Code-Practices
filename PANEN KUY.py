kali = int(input())
benih = list(map(int, input().split()))
hasil1 = 0
hasil2 = 0
hasil3 = 0
for i in range(0,kali):
    if  i <= 1:
        hasil1 += benih[i]
    elif i == 2 or i == 3:
        hasil = benih[i] * (70/100)
        hasil2 += hasil
    elif i >= 4:
        hasils = benih[i] * (50/100)
        hasil3 += hasils
print(hasil1+hasil2+hasil3)
