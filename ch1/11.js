const mp = new Map() 
mp.set('a', 1)
mp.set('b', 2)
mp.set('c', 3)
const st = new Set() 
st.add(1)
st.add(2)
st.add(3) 
for(let a of mp) console.log(a)
for(let a of st) console.log(a) 
/* 
a, b, c 
[ 'a', 1 ]
[ 'b', 2 ]
[ 'c', 3 ]
1
2
3

분명히 다른 자료 구조인 set과 map임에도 똑같은 for a of b라는 
이터레이터 프로토콜을 통해 순회하는 것을 볼 수 있습니다.
 * 이터레이터 프로토콜 :  이터러블한 객체들을 순회할 때 쓰이는 규칙
 * 이터러블한 객체 : 반복 가능한 객체로 배열을 일반화한 객체
*/
