public class Test {
    volatile boolean flag = true;

    public void test() {
        new Thread(()->{
                int cnt = 0;
                while (flag) {
                    cnt++;
                }
                System.out.println("Thread1 finished\n");
            }
        ).start();
        new Thread(()-> {
                try {
                    Thread.sleep(100);
                } catch (InterruptedException ignored) {
                    
                }
                System.out.println("flag to false");
                flag = false;
            }
        ).start();
    }

    public static void main(String[] args) {
        new Test().test();
    }
}