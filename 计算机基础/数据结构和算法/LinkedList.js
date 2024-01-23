//创建一个节点类
class ListNode{
    constructor(value){
        this.value = value; //节点存储的值
        this.next = null; //指向下一个节点的指针

    }

}
//定义一个链表类
class LinkedList{
    constructor(){
        this.head = null;
    }

    //添加节点到链表末尾
    add(value){
        const newNode = new Location(value);
        if(this.head == null){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }
    // 打印链表的所有值
    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

list.print();  // 输出: 1 2 3