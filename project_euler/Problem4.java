import java.util.*;

class Problem4 {
    public static void main(String[] args) {
        System.out.println(findLargestPalindrome());
    }

    static int findLargestPalindrome() {
        ArrayList<Integer> palindromes = new ArrayList<Integer>();
        for(int i = 999; i > 99; i--){
            for(int j = 999; j > 99; j--){
                int currentNumber = i * j;
                if(isPalindrome(currentNumber)){
                    palindromes.add(currentNumber);
                }
            }
        }
        return getMaxFromList(palindromes);
    }

    static int getMaxFromList(ArrayList list) {
        int max = 0;
        for(int i = 0; i < list.size(); i++){
            if((int) list.get(i) > max)
                max = (int) list.get(i);
        }
        return max;
    }

    static boolean isPalindrome(int number) {
        if(Integer.toString(number).equals(reverseString(Integer.toString(number))))
            return true;
        return false;
    }

    static String reverseString(String str) {
        String newString = "";
        for(int i = str.length() - 1; i >= 0; i--) {
            newString += str.charAt(i);
        }
        return newString;
    }

}