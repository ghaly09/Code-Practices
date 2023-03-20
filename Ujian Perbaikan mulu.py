jum=int(input())
nil=input().split()
lus,bai=map(int,input().split())
byk=0
for i in nil:
	if int(i)>=lus and int(i)<=bai: byk+=1
print(byk," dari ",jum," (",int(round(byk/jum*100,0)),"%) siswa bisa ikut ujian perbaikan",sep="")