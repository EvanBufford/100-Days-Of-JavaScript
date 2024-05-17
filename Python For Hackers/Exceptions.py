print(1)

try:
    f = open("klalks")
except:
    print("the file does not exist.!")


try:
    f = open("askekd")
except FileNotFoundError:
    print("the file does not exist!")
except Exception as e:
    print(e)
finally:
    print("Hello future hacker!")

n = 100
if n == 0:
    raise Exception("n can't be 0!")
if type(n) is not int:
    raise Exception("n must be an int!")

print(1/n)

n = 30

assert(n != 0)
print(1/n)