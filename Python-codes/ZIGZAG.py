n = int(input())
b = []
for i in range(n):
    a = list(map(int, input(). split()))
    b.append(a)
perintah = str(input())

for j in range(n):
    if perintah == FR:
        if R in perintah:
            print(b[j*2][-1], end='')
        if F in perintah:
            print(b[j+1][0], end='')
