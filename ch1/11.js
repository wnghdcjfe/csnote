const mp = new Map(); 
mp.set('a', 1);
mp.set('b', 2);
mp.set('c', 3);
const st = new Set(); 
st.add(1);
st.add(2);
st.add(3); 
for(let a of mp) console.log(a)
for(let a of st) console.log(a) 
/*
[ 'a', 1 ]
[ 'b', 2 ]
[ 'c', 3 ]
1
2
3
*/
