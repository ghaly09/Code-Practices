# -*- coding: utf-8 -*-
"""
Created on Mon Nov 26 15:19:36 2018

@author: Rachmat Ghaly
"""
h = int(input())
n = list(map(int, input(). split()))
v = list(map(str, n))
number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

for i in range(0,11):
    z = v.count(number[i])
    z = z*"|"
    if number[i] != '10':
        print(" %s" % number[i] + "  %s" % z)
    else:
        print(number[i] + "  %s" % z)
