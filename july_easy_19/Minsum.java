import java.util.Arrays;

class Minsum {
    public static void main(String[] args) {
        System.out.println(minSum(new int[]{-7, 12, 18, -2, 9, 2, -18, -23}, 3, 8));
    }

    static int f(double y) {
        if(y >= 0) {
            return (int) Math.floor(y);
        }
        return (int) Math.ceil(y);
    }

    static int minSum(int[] arr, int x, int n) {
        System.out.println("arr: " + Arrays.toString(arr) + "\nx:" + x);

        int[] arrMap = new int[n];
        for(int i = 0; i < arr.length; i++) {
            arrMap[i] = (int) (f((double) arr[i] / (double) x) * (double)x);
        }

        System.out.println("mapped arr: " + Arrays.toString(arrMap));
        System.out.println("summed arr: " + sumArr(arrMap));
        return Math.min(sumArr(arr), sumArr(arrMap));
    }

    static int sumArr(int[] arr) {
        int sum = 0;
        for(int num : arr) {
            sum += num;
        }
        return sum;
    }
}