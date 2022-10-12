import unittest
from classes.player import Player
from classes.enemy import Enemy
from classes.weapon import Weapon

class TestPlayer(unittest.TestCase):
    
    def setUp(self):

        self.enemy1 = Enemy("Weakling", 10, 2)
        self.enemy2 = Enemy("Midling", 20, 5)
        self.enemy3 = Enemy("Hard-Boi", 40, 15)

        self.player = Player("Mario", 30, 10)

        self.weapon1 = Weapon("Blade", "Dagger", 1.5)
        self.weapon2 = Weapon("Blade", "Sword", 5)
        self.weapon3 = Weapon("Firearm", "Pistol", 20)

    def test_player_has_name(self):
        self.assertEqual("Mario", self.player.name)

    def test_player_has_health(self):
        self.assertEqual(30, self.player.health)

    def test_player_has_strength(self):
        self.assertEqual(10, self.player.strength)

    def test_player_attack_enemy(self):
        self.player.attack_enemy(self.player.strength, self.enemy2)
        self.assertEqual(13, self.enemy2.health)

    def test_player_heal(self):
        self.player.player_heal()
        self.assertEqual(33, self.player.health)

    def test_player_increase_strength(self):
        self.player.player_increase_strength()
        self.assertEqual(11, self.player.strength)

    def test_player_strong_attack_enemy(self):
        self.player.player_strong_attack_enemy(self.player.strength, self.enemy2)
        self.assertEqual(5, self.enemy2.health)
        self.assertEqual(8, self.player.strength)
