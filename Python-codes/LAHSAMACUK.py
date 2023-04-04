kata = str(input())

for i in range(len(kata)) :
    if kata[i] == kata[-i - 1]:
        hasil = "SAMA"
    else:
        hasil = 'TIDAK SAMA'
print(hasil)
