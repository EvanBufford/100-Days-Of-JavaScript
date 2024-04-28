print("Welcome to the coffee shop where we sell and refill coffee!")

beverage_choice = input("What could I get for you, a coffee or a latte? ")

if beverage_choice == "coffee":
    print("Excellent Choice!")
else:
    print("Alright a latte!")

cup = input("Is your cup empty? ")

def refill(cup):
    if cup == "empty":
        print("Here let me refill your cup!")
        cup = "full"
    else:
        print("I will let you finish your beverage before I refill it.")
    
refill(cup)