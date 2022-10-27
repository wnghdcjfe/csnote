public class Singleton {

    private volatile Singleton instance;

    private Singleton() {
        
    }

    public Singleton getInstance() {
        if (instance == null) {  
            synchronized (Singleton.class) {
                if (instance == null) {  
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}