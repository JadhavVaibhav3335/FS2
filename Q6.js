function that computes all permutations of the different suits and numbers, yielding each 
one by one. Also show all 52 cards? ♠.
➔def generate_cards():
 suits = ['♠', '♥', '♦', '♣']
 values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
 for suit in suits:
 for value in values:
 yield value + suit
for card in generate_cards():
 print(card)S