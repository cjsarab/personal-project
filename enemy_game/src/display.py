from classes.player import Player

player_name = input("Enter your name? ")
player = Player(player_name, 30, 8)

print(f"Your name = " + {player.player_name})
print(f"Your health = " + {player.health})
print(f"Your strength = " + {player.strength})
print(f"Pick an enemy to fight (1), (2) or (3)? ")


