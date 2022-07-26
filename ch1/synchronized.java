public class Champion {
	private String mHero;
	
	public static void main(String[] agrs) {
		Champion cp = new Champion();
		System.out.println("Test start!");
		new Thread(() -> {
			for (int i = 0; i<100; i++) {cp.mumu();}			
		}).start();
		
		new Thread(() -> {
			for (int i = 0; i<100; i++) {cp.izreal();}
		}).start();
		System.out.println("Test end!");
	}
	
	public synchronized void mumu() {
		mHero= "mumu";		
		try {
			long sleep = (long) (Math.random()*100);
			Thread.sleep(sleep);
			if ("mumu".equals(mHero) == false) {
				System.out.println("synchronization broken");
				System.exit(0);
			}
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public synchronized void izreal() {
		mHero = "izreal";		
		try {
			long sleep = (long) (Math.random()*100);
			Thread.sleep(sleep);
			if ("izreal".equals(mHero) == false) {
				System.out.println("synchronization broken");
				System.exit(0);
			}
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
} 