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

