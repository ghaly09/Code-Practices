#rataan matriks
n,r,c=input().split()
for i in range(int(n)):
    s=0
    for j in range(int(r)):
        m=input().split()
        for k in range(int(c)):
            s+=int(m[k])
    s/=(int(r)*int(c))
    print("Rataan matriks ke-"+str(i+1)+": %.2f"%s)