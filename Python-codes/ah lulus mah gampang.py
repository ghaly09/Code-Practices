jum=int(input())
n=input().split(" ")
kel=float(input())
byk=0
ssum=0
for i in range(jum):
	if int(n[i])<kel: byk+=1
	ssum+=int(n[i])
print("%d dari %d siswa tidak lulus, rataan kelas %.1f" %(byk,jum,ssum/jum))
