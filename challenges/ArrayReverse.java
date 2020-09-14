public class ArrayReverse {
  
  public static void main(String[] args){
    
  int[] forwardArray = new int[]{1,2,3,4};

      reverseArray(forwardArray);
      for(int i=0;i<forwardArray.length;i++){
        System.out.println(forwardArray[i]);
      }
}
    public static void reverseArray(int[] forwardArray){


        for(int i=0; i<forwardArray.length/2;i++){
          int temp = forwardArray[i];
          forwardArray[i] = forwardArray[forwardArray.length -i -1];
          forwardArray[forwardArray.length -i -1] = temp;
          
        }
    }

}