a = input()
n = int(a.replace("!", ""))

def faktorial(n):
    if n == 0:
        a = 1
    if n > 0:
        a = n * faktorial(n-1)
    return a
c = faktorial(n)
print(c)
