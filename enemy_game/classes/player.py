class Player:
    def __init__(self, name, health, strength):
        self.name = name
        self.health = health
        self.strength = strength

    def attack_enemy(self, attack_strength, enemy):
        attack_strength = round(self.strength * 0.7)
        enemy.health -= attack_strength

    def player_heal(self):
        self.health += 3

    def player_increase_strength(self):
        self.strength += 1

    def player_strong_attack_enemy(self, strength, enemy):
        attack_strength = round (self.strength * 1.5)
        enemy.health -= attack_strength
        self.strength -= 2