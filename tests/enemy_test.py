import unittest
from classes.enemy import Enemy 
from classes.player import Player
from classes.weapon import Weapon

class TestEnemy(unittest.TestCase):
    
    def setUp(self):
        self.enemy1 = Enemy("Weakling", 10, 2)
        self.enemy2 = Enemy("Midling", 20, 5)
        self.enemy3 = Enemy("Hard-Boi", 40, 15)

        self.player = Player("Mario", 30, 10)

        self.weapon1 = Weapon("Blade", "Dagger", 1.5)
        self.weapon2 = Weapon("Blade", "Sword", 5)
        self.weapon3 = Weapon("Firearm", "Pistol", 20)
        
    def test_enemy_has_name(self):
        self.assertEqual("Weakling", self.enemy1.name)

    def test_enemy_health_correct(self):
        self.assertEqual(10, self.enemy1.health)

    def test_enemy_strength_correct(self):
        self.assertEqual(2, self.enemy1.strength)

    def test_enemy_attacks_player(self):
        self.enemy1.attack_player(self.weapon1, self.player)
        self.assertEqual(29, self.player.health)

    def test_enemy_heal(self):
        self.enemy1.heal()
        self.assertEqual(11, self.enemy1.health)

    def test_increase_enemy_strength(self):
        self.enemy1.increase_strength()
        self.assertEqual(3, self.enemy1.strength)

    def test_strong_attack_player(self):
        self.enemy2.strong_attack_player(self.weapon2, self.player)
        self.assertEqual(11, self.player.health)
        self.assertEqual(4, self.enemy2.strength)


