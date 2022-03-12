class Person {

    public void eat(String a) {
        System.out.println("I eat " + a);
    }

    public void eat(String a, String b) {
        System.out.println("I eat " + a + " and " + b);
    }
}

public class CalculateArea {

    public static void main(String[] args) {
        Person a = new Person();
        a.eat("apple");
        a.eat("tomato", "phodo");
    }
}
/*
I eat apple
I eat tomato and phodo
*/
