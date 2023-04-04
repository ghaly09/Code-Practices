def maks(c):
    n=int(c[0])
    for i in range(1,len(c)):
        if int(c[i])>n: n=int(c[i])
    return n
 
def mini(c):
    n=int(c[0])
    for i in range(1,len(c)):
        if int(c[i])<n: n=int(c[i])
    return n    
 
def jum(c):
    has=0
    for i in range(len(c)):
        has+=int(c[i])
    return has
     
def rata(c):
    return jum(c)/len(c)
     
bil=input().split()
jen=input()

if jen=="MAX":
    print(maks(bil))
elif jen=="MIN":
    print(mini(bil))
elif jen=="SUM":
    print(jum(bil))
else:
    print("%.2f" %rata(bil))
'''
#Cara lain (menggunakan fungsi bawaan Python)
import statistics
if jen=="MAX":
    print(max(bil))
elif jen=="MIN":
    print(min(bil))
elif jen=="SUM":
	bil=[int(i) for i in bil]
	print(sum(bil))
else:
	bil=[int(i) for i in bil]
	print("%.2f" %statistics.mean(bil))
'''
