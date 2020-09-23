package dataStructures.linkedList;

//need to create a LinkedList.Node class that has properties for the value stored in the LinkedList.Node and pointer to next LinkedList.Node

// In the linkedList class, include a head property

// define a method called insert that takes any value as an argument and adds a new node with that value to the head of the list

// define a method called includes that takes any value as an argument and returns a boolean if that value exists as a node

// define a method called toString that returns a string of all the values in the linked list
//format: "{ a } -> { b } -> { c } -> NULL


import java.util.ArrayList;

public class LinkedList {

    //need instance variables head and tail. these are "pointers"
    public Node head = null;
   public Node tail = null;

    //new add method:
    public void addToFront(int newValue) { //head first insertion
        Node newNode = new Node(newValue);
        if(this.head == null){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        System.out.println(newNode.value);
    }

    public void addToEnd(int newValue) {

        Node newNode = new Node(newValue);
        if(this.head == null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
        }
    }

    public void addBefore(int value, int newValue) {
        Node newNode = new Node (newValue);

        Node pointer = head;

        for(int i = 1; ; i++){
            if(pointer == null){
                break;
            }
            if(i == value) {

                newNode.next = pointer.next;
                pointer.next = newNode;

                break;
            }
            pointer = pointer.next;
        }
    }

    public void addAfter(int value, int newValue) {
        Node newNode = new Node (newValue);

        Node pointer = head;

        for(int i = 1; ; i++){
            if(pointer == null){
                break;
            }
            if(i-1 == value) {

                newNode.next = pointer.next;
                pointer.next = newNode;

                break;
            }
            pointer = pointer.next;
        }
    }

    public int removeFromEnd() throws Exception {
        try {
            if (this.head == null) {
                throw new Exception("there is no thing to remove");
            } else {
                int thingToReturn = this.tail.value;
                Node twoFromEnd = this.head;
                while (twoFromEnd.next.next != null) {
                    twoFromEnd = twoFromEnd.next;
                }
                twoFromEnd.next = null;
                this.tail = twoFromEnd;

                return thingToReturn;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    public int valueFromKth(int kthPlace) throws Exception{
        Node current = head;
        ArrayList<Integer> complete = new ArrayList<>();

        if (current.next !=null )
            do {
                complete.add(current.value);
                current = current.next;
            } while(current !=null);

            if (kthPlace > complete.size()) {
                throw new Exception("Exception: kth place not in LinkedList");
            }
            System.out.println(complete);
            return complete.get(complete.size() - kthPlace);
    }
//
//    public String toString() {
//        return toString(this.head);
//    }

    public String toString(Node current) {
        if (current ==null) {
            return "null";
        }
        return String.format("{%d} -> %s ", current.value, toString(current.next));
    }




    Node root;
    int size;

    public LinkedList() {
        root = null;
        size = 0;
    }

}

class Node {
    int value;
    Node next;

    //protected variables can only be accessed internally in the app
    public Node(int value) {

        this.value = value;
        this.next = null;
    }
}


