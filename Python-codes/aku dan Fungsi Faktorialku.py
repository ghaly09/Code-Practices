def fact(n):
	has=1
	for i in range(2,n+1): 
		has*=i
	return has

'''
#Cara lain:
import math
def fact(n):
	return math.factorial(n)
'''

bil=int(input())
print(fact(bil))
