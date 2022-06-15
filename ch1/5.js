class Latte {
    constructor() {
        this.name = "latte"
    }
}
class Espresso {
    constructor() {
        this.name = "Espresso"
    }
} 

class LatteFactory {
    static createCoffee() {
        return new Latte()
    }
}
class EspressoFactory {
    static createCoffee() {
        return new Espresso()
    }
}
const factoryList = { LatteFactory, EspressoFactory } 
 
class CoffeeFactory {
    static createCoffee(type) {
        const factory = factoryList[type]
        return factory.createCoffee()
    }
}   
const main = () => {
    // 라떼 커피를 주문한다.  
    const coffee = CoffeeFactory.createCoffee("LatteFactory")  
    // 커피 이름을 부른다.  
    console.log(coffee.name) // latte
}
main()
/*
CoffeeFactory라는 상위 클래스가 중요한 뼈대를 결정하고 하위 클래스인 LatteFactory
가 구체적인 내용을 결정하고 있습니다. 
참고로 이는 의존성 주입이라고도 볼 수 있습니다. 
CoffeeFactory에서 LatteFactory의 인스턴스를 생성하는 것이 아닌 
LatteFactory에서 생성한 인스턴스를 CoffeeFactory에 주입하고 있기 때문이죠.

또한, CoffeeFactory를 보면 static으로 createCoffee() 정적 메서드를 정의한 것을 알
수 있는데, 정적 메서드를 쓰면 클래스의 인스턴스 없이 호출이 가능하여 메모리를 절약
할 수 있고 개별 인스턴스에 묶이지 않으며 클래스 내의 함수를 정의할 수 있는 장점이 있
습니다. 
*/