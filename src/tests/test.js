import Character from '../js/app';


test('Hero get damage', () => {
    const hero = new Character("killer228", "swordman");
    Character.prototype.damage.call(hero, 40);
    expect(hero).toEqual({
        name: 'killer228',
        type: 'swordman',
        health: 76,
        attack: 10,
        defence: 40
    });
});

test('Hero died', () => {
    expect(() => {
      const hero = new Character("killer228", "swordman");
      Character.prototype.damage.call(hero, 500);
    }).toThrow();
});




