from math import ceil
paku = int(input())
panjang = list(map(float, input().split()))
bawah, atas = map(float, input().split())
harga = int(input())
baru = []
total = 0
out = 0
for y in panjang:
    if y <= atas and y >= bawah:
        baru.append(y)
for i in panjang:
    if i in baru:
        total += i
    else:
        out +=i
total = ceil((total*100) / sum(panjang))
rugi = harga*out
total = str(total)
rugi = str(rugi)
print(total + "% "+"paku memenuhi standar,"+" kerugian "+rugi+" rupiah")
