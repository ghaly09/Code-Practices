#Histogram
b=[0,0,0,0,0,0,0,0,0,0,0]
n=int(input())
m=input().split()
for i in range(n):
    b[int(m[i])]+=1
for i in range(11):
    if i<10: print(" ",end="")
    print(i,"  ",sep='',end="")
    print("|"*b[i],end="")
    print()