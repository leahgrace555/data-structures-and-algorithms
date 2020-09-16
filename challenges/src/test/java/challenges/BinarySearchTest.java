package challenges;

import org.junit.Test;
import static org.junit.Assert.*;

public class BinarySearchTest {
    @Test public void binarySearchTest(){
        int[] inputOne = {4,8,15,16,23,42};
        int searchKeyOne = 15;


        BinarySearch bananaSearch = new BinarySearch();
       int returnedIndex = bananaSearch.binarySearch(inputOne,searchKeyOne);
       assertTrue("we found the search key", returnedIndex==2 );
       assertFalse("this is NOT the search key", returnedIndex ==4);
    }
}
