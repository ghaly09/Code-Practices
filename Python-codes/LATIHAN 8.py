a, b = map(int, input(). split(" "))
x = 0
y = 0
for i in range(a, b+1):
    if i % 2 != 0:
        y += i
        x += 1
print(y//x)
