/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package DataStructures;

import DataStructures.LinkedList.LinkedList;
import org.junit.Test;
import static org.junit.Assert.*;

public class AppTest {
    @Test
    public void testLinkedList {
        LinkedList listy = new LinkedList();
        listy.addToFront(2);
        listy.addToFront(3);
        listy.addToFront(4);
        System.out.println(listy); //should be 4,3,2

        listy.addToEnd(7);
        listy.addToEnd(8);
        listy.addToEnd(9);
        System.out.println(listy + "should say 4 3 2 7 8 9");

       /* listy.addAfter(2,28);
        System.out.println(listy);
        try {
            listy.removeFromEnd();
        } catch(Exception e) {
            System.out.println("could not remove form list");
        }
        System.out.println(listy);

        */

        assertEquals();

    }
}
