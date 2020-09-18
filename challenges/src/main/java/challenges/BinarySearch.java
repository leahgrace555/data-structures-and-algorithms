package challenges;

public class BinarySearch {
    public int binarySearch(int[] arrayToSearch, int searchKey){
        int low = 0;
        int high = arrayToSearch.length - 1;

        if(searchKey<arrayToSearch[low] || searchKey>arrayToSearch[high]){
            return -1; //this returns if the search key is not between the min and max values of the array
        }
        System.out.println(low);
        System.out.println(high);
        while(low <= high) {
            int middle = low + (high -1) /2;

            if(searchKey == arrayToSearch[middle]){
                System.out.println(middle);
                return middle;
            }

            if(arrayToSearch[middle] < searchKey) {
                low = middle + 1;
            } else {
                high = middle - 1;
            }
        }
        return -1;
    }
}

//Code Review Notes:

//public class BinarySearch {
    //public static void main(String[] args){
//        int[] numbs = new int[]{1,2,3,4,5,6}
   // }
