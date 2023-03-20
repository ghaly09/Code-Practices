kata = str(input())
jumlahkarakter = 0
for i in kata:
    jumlahkarakter += 1
if jumlahkarakter > 2:
    if [kata[-1], kata[-2], kata[-3]] == ['g', 'n', 'i']:
        kata += 'ly'
        print(kata)
    else:
        kata += "ing"
        print(kata)
elif jumlahkarakter < 3:
    print(kata)

