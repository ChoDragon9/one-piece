class TrieNode {
  constructor() {
    this.children = {}
    this.endOfWord = false
  }
  changeEnd(endOfWord) {
    this.endOfWord = endOfWord
  }
  addChild(key) {
    this.children[key] = new TrieNode()
  }
  getChild(key) {
    return this.children[key]
  }
  removeChild(key) {
    delete this.children[key]
  }
  hasChild(key) {
    return !!this.getChild(key)
  }
  hasChildren() {
    return !!Object.keys(this.children).length
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }
  insert(word) {
    let current = this.root
    Array.from(word).forEach(ch => {
      if (!current.hasChild(ch)) {
        current.addChild(ch)
      }
      current = current.getChild(ch)
    })
    current.changeEnd(true)
  }
  search(word) {
    let current = this.root
    Array.from(word).forEach(ch => {
      if (current.hasChild(ch)) {
        current = current.getChild(ch)
      } else {
        return false
      }
    })
    return current.endOfWord
  }
  delete(word) {
    this.deleteRecursively(this.root, word, 0)
  }
  deleteRecursively(current, word, index) {
    if (index === word.length) {
      if (!current.endOfWord) {
        return false
      }
      current.changeEnd(false)
      return !current.hasChildren()
    }
    const ch = word[index]
    if (!current.hasChild(ch)) {
      return false
    }
    const shouldDeleteCurrentNode = this.deleteRecursively(
      current.getChild(ch),
      word,
      index + 1
    )
    if (shouldDeleteCurrentNode) {
      current.removeChild(ch)
      return !current.hasChildren()
    }
    return false
  }
}

const trie = new Trie()
trie.insert('sammie')
trie.insert('simran')
console.log(trie.search('simran') === true)
trie.delete('sammie')
trie.delete('simran')
console.log(trie.search('sammie') === false)
console.log(trie.search('simran') === false)
