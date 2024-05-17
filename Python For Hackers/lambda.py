add_4 = lambda x : x + 4
print(add_4(4))

add = lambda x, y : x + y
print(add(10,4))

def addf(x, y):
    return x + y

print(addf(10, 4))

print((lambda x, y : x + y)(20, 4))

is_even = lambda x: x % 2 == 0
print(is_even(2))
print(is_even(3))

blocks = lambda x, y: [x[i:i+y] for i in range()]