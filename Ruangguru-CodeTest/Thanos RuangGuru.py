
# Source code menggunakan Python
# By Rachmat Ghaly
penduduk = 0
a = [1]
thanos = [i*3 for i in range(1,26)]
for hari in range(1,51):
    if (hari in a) :
        penduduk += 1
        print(penduduk)
    elif (hari not in thanos):
        penduduk *= 3
        print(penduduk)
    elif hari in thanos:
        penduduk = penduduk//2
        print(penduduk)

