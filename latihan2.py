from math import gcd
x = int(input())
a = []
for i in range(x):
    i = int(input())
    a.append(i)

lcm = 1
for i in a:
    lcm = lcm*i//gcd(lcm, i)
print(lcm)