def fact(n):
	has=1
	for i in range(2,n+1): 
		has*=i
	return has

tip,n,r=input().split()
n=int(n)
r=int(r)
if r>n: 
    print(0)
elif tip=="C":
    print(fact(n)//(fact(r)*fact(n-r)))
else: 
    print(fact(n)//fact(n-r))
'''
#Cara lain
import math
if r>n: 
    print(0)
elif tip=="C":
    print(int(math.factorial(n)/(math.factorial(r)*math.factorial(n-r))))
else: 
    print(int(math.factorial(n)/math.factorial(n-r)))
'''
