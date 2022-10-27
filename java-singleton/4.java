public class Singleton {

    private static Singleton instance = null;

    static {
        instance = new Singleton();
    }

    private Singleton() {
        
    }

    public static Singleton getInstance() {
        return instance;
    }
}