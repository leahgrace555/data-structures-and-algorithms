//package challenges;
//
//public class ArrayShift {
//    public static void main(String[] args){
//
//        int[] arr = new int[]{2,4,6,8};
//        int num = 5;
//        insertShiftArray(arr,num);
//
//    }
//
//    public static int[] insertShiftArray(int[] arr, int num){
//        int[] newArr = new int[arr.length + 1];
//
//        for (int i = 0; i < arr.length + 1; i++) {
//            if(i < arr.length - 1) {
//                newArr[i] = arr[i];
//            } else if (i == num) {
//                newArr[i] = num;
//            } else { newArr[i] = arr[i-1];
//            }
//            return newArr;
//        }
//        System.out.println("heyyy");
//        return newArr;
//    }
//
