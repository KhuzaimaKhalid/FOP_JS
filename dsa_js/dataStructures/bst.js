class bst{
    Node = class{
        constructor(key){
            this.left = null
            this.right = null
            this.key = key
        }
    }

    constructor(){
        this.root = null
    }

    insert(root,key){
        if(root === null){
            root = new this.Node(key)
            return root
        }

        if(key < root.key){
            root.left = this.insert(root.left,key)
        } else if(key > root.key){
            root.right = this.insert(root.right,key)
        } 
            return root
        
    }

    search(root,key){
        if(root === null){
            return root
        }

        if(root.key === key){
            return root.key
        }
        
        if(root.key > key){
            return this.search(root.left,key)
        } else{
            return this.search(root.right,key)
        }
    }

    inorder(root){
        if(root !== null){
            this.inorder(root.left)
            console.log(" "+root.key)
            document.getElementById("in").textContent += root.key + " "
            this.inorder(root.right)
        }
    }

    preorder(root){
        if(root !== null){
            console.log(" "+root.key)
            document.getElementById("pre").textContent += root.key + " "
            this.preorder(root.left)     
            this.preorder(root.right)
        }
    }

    postorder(root){
        if(root !== null){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(" "+root.key)
            document.getElementById("post").textContent += root.key + " "
        }
    }

    max(root){
        if(root === null){
            return -1
        }
        let curr = root
        while(curr.left !== null){
            curr = curr.right
        }
        return curr.key
    }

    min(root){
        if(root === null){
            return -1
        }
        let curr = root
        while(curr.left !== null){
            curr = curr.left
        }
        return curr.key
    }

}

b = new bst()
console.log("Binary Search Tree")
b.root = b.insert(b.root,50)
b.root = b.insert(b.root,30)
b.root = b.insert(b.root,20)
b.root = b.insert(b.root,40)
b.root = b.insert(b.root,70)
b.root = b.insert(b.root,60)
b.root = b.insert(b.root,80)
console.log("inorder")
b.inorder(b.root)
console.log("postorder")
b.postorder(b.root)
console.log("preorder")
b.preorder(b.root)
console.log(b.search(b.root,40))
console.log(b.search(b.root,90))
console.log(b.min(b.root))
console.log(b.max(b.root))