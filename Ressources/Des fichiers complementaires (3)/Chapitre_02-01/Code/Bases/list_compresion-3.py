list_1 = [1,2,3,4,5,6,7,8,9,10]
print(f"list_1={list_1}")


def Fibonacci(n):
    if (n == 0):
        return 0
    elif n==1:
        return 1
    else:
        return Fibonacci(n-1)+Fibonacci(n-2) 

list_2 = [Fibonacci(x) for x in list_1]
print(f"list_2={list_2}")


 