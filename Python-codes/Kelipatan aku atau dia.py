jum=int(input())
nil=input().split()
x,y=map(int,input().split())
byk=0
for i in nil:
	if int(i)%x==0 or int(i)%y==0: byk+=1
print(byk," dari ",jum," (",int(round(byk/jum*100,0)),"%) bilangan merupakan kelipatan ",x," atau ",y,sep="")