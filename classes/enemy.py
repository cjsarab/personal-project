class Enemy:

    def __init__(self, name, health, strength):
        self.name = name
        self.health = health
        self.strength = strength

    def attack_player(self, weapon, player):
        attack_strength = round(weapon.strength * self.strength)
        attack_strength = attack_strength // 2
        player.health -= attack_strength

    def heal(self):
        self.health += 1

    def increase_strength(self):
        self.strength += 1

    def strong_attack_player(self, weapon, player):
        attack_strength = round(weapon.strength * self.strength * 1.5)
        attack_strength = attack_strength // 2
        player.health -= attack_strength
        self.strength -= 1

