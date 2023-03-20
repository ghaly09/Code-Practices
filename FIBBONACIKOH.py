# -*- coding: utf-8 -*-
"""
Created on Sun Nov 18 17:29:27 2018

@author: Rachmat Ghaly
"""
v = int(input())
b = []
for i in range(v):
        f = int(input())
        b.append(f)
x = [1,1]
m = []
for i in b:
    for t in range(i):
        x.append(x[-1] + x[-2])
    m.append(x[i-1])
for y in m:
    print(y)