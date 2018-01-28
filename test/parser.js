const should = require('should');
const {parser} = require('../controller');

describe('Should parse', () => {
  it('Parsing', () => {
    const entrance = 
    `
    Session data: From 2018-01-28, 09:28:39 to 2018-01-28, 10:04:11
    Session: 00:35h
    XP Gain: 104,130
    XP/h: 149,990
    Loot: 6,757
    Supplies: 18,020
    Balance: -11,263
    Damage: 75,215
    Damage/h: 75,215
    Healing: 47,072
    Healing/h: 47,072
    Killed Monsters:
      78x bonebeast
      6x necromancer
      23x vicious squire
    Looted items:
      1x a great health potion
      1x a small diamond
      1797x a gold coin
      2x a small emerald
      1x a bone
      6x a plate armor
      1x a bone shield
      1x a green mushroom
      6x a bony tail
      1x a book of necromantic rituals`;
    
    const expectedResult = `00:35h;104,130;149,990;6,757;18,020;-11,263;75,215;75,215;47,072;47,072`;
    result = parser(entrance);

    should(result).equal(expectedResult);
  });
});