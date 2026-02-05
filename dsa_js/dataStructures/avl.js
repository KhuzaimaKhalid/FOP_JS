class AVL{
    Node = class{
        constructor(k){
            this.left = null
            this.right = null
            this.key = k
            this.height = 1
        }
    }

    height(N){
        if(N === null){
            return 0
        }
        return N.height
    }

    getBalance(N){
        if(N === null){
            return 0
        }
        return this.height(N.left) - this.height(N.right)
    }

    rightRotate(y){
        let x = y.left
        let T2 = x.right

        x.right = y
        y.left = T2

        y.height = 1 + Math.max(this.height(y.left),this.height(y.right))
        x.height = 1 + Math.max(this.height(x.left), this.height(x.right))

        return x
    }

    leftRotate(x){
        let y = x.right
        let T2 = y.left

        y.left = x
        x.right = T2

        x.height = 1 + Math.max(this.height(x.left), this.height(x.right))
        y.height = 1 + Math.max(this.height(y.left),this.height(y.right))

        return y
    }

    insert(node,key){
        if(node === null){
            return new this.Node(key)
        }

        if(key < node.key){
            node.left = this.insert(node.left,key)
        } else if(key > node.key){
            node.right = this.insert(node.right,key)
        } else{
            return node
        }

        node.height = 1 + Math.max(this.height(node.left), this.height(node.right))
        let balance = this.getBalance(node)

        // left left case
        if(balance > 1 && node.left !== null && key < node.left.key){
            return this.rightRotate(node)
        }

        // right right case
        if(balance < -1 && node.right !== null && key > node.right.key){
            return this.leftRotate(node)
        }

        // left right case
        if(balance > 1 && node.left !== null && key > node.left.key){
            node.left = this.leftRotate(node.left)
            return this.rightRotate(node)
        }

        // right left case
        if(balance < -1 && node.right !== null && key < node.right.key){
            node.right = this.rightRotate(node.right)
            return this.leftRotate(node)
        }

        return node
    }

    inorder(root){
        if(root !== null){
            this.inorder(root.left)
            console.log(" "+root.key)
            document.getElementById("ina").textContent += root.key + " "
            this.inorder(root.right)
        }
    }

    preorder(root){
        if(root !== null){
            console.log(" "+root.key)
            document.getElementById("prea").textContent += root.key + " "
            this.preorder(root.left)     
            this.preorder(root.right)
        }
    }

    postorder(root){
        if(root !== null){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(" "+root.key)
            document.getElementById("posta").textContent += root.key + " "
        }
    }
}

a = new AVL()
a.root = null
console.log("AVL Trees")
a.root = a.insert(a.root,10)
a.root = a.insert(a.root,20)
a.root = a.insert(a.root,30)
a.root = a.insert(a.root,40)
a.root = a.insert(a.root,50)
a.root = a.insert(a.root,25)
console.log("inorder")
a.inorder(a.root)
console.log("postorder")
a.postorder(a.root)
console.log("preorder")
a.preorder(a.root)