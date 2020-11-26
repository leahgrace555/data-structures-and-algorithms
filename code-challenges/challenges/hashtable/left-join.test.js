'use strict';

const hashtable = require('./hashtable.js');
const hashTable = require('./hashtable.js');
const leftJoin = require('./left-join.js');

describe('testing challenge 33', () => {
    it('should do something', () => {
        let hash1 = new hashTable.hashTable(1024);
        let hash2 = new hashtable.hashTable(1024);
        hash1.set('fond', 'enamored');
        hash1.set('wrath', 'anger');
        hash1.set('diligent', 'employed');
        hash1.set('outfit', 'garb');
        hash1.set('guide', 'usher');
        hash2.set('fond', 'averse');
        hash2.set('wrath', 'delight');
        hash2.set('diligent', 'idle');
        hash2.set('guide', 'follow');
        hash2.set('flow', 'jam');
        
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



