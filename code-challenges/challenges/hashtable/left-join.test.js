'use strict';

const hashtable = require('./hashtable.js');
const hashTable = require('./hashtable.js');
const leftJoin = require('./left-join.js');

describe('testing challenge 33', () => {
    it('should do something', () => {
        let hash1 = new hashTable.hashTable(1024);
        let hash2 = new hashtable.hashTable(1024);
        hash1.add(hash1.get('fond'), 'enamored');
        hash1.add(hash1.get('wrath'), 'anger');
        hash1.add(hash1.get('diligent'), 'employed');
        hash1.add(hash1.get('outfit'), 'garb');
        hash1.add(hash1.get('guide'), 'usher');
        hash2.add(hash1.get('fond'), 'averse');
        hash2.add(hash1.get('wrath'), 'delight');
        hash2.add(hash1.get('diligent'), 'idle');
        hash2.add(hash1.get('guide'), 'follow');
        hash2.add(hash1.get('flow'), 'jam');
        
        let array = [
            ['fond', 'enamored', 'averse'],
            ['wrath', 'anger', 'delight'],
            ['diligent', 'employed', 'idle'],
            ['outfit', 'garb', 'NULL'],
            ['guide', 'usher', 'follow']
        ]
        expect(leftJoin(hash1, hash2)).toEqual(array)
    })
})

// describe('testing challenge 33', ()=> {
//   it('should contain all the keys in the first table', ()=> {

//     const table = new hashTable.hashTable()
//   })
// })



