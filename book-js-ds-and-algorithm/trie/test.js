const {Trie} = require('./trie')
const {Trie: TrieOop} = require('./trie-oop')

const suit = (name, fn) => {
  console.group(name)
  fn()
  console.groupEnd(name)
}
suit('test', () => {
  suit('insert', () => {
    const trie = new Trie()
    const trieOop = new TrieOop()
    const words = ['sammie', 'simran']

    words.forEach(word => {
      trie.insert(word)
      trieOop.insert(word)
    })

    console.log(JSON.stringify(trie) === JSON.stringify(trieOop))
  })
})
