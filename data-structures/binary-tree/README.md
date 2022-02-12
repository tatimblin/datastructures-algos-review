# Binary Tree

## Methods

### Insert

`insert(value: string | number): Node`
`insertNode(node: Node, newNode: Node): Node`

Add a node to the tree with specific value

### Contains

`contains(value: string | number, node: Node = this.root): boolean`

Checks if tree contains a specific value

### Remove

`remove(value: string | number, node: Node = this.root): boolean`

Find and remove a node by its value, return a boolean if found or not

### Reset

`reset()`

Resets to an empty tree

### Populate

`populate(values: string[] | number[])`

Inserts each value in an array
