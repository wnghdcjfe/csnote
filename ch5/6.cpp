#include <bits/stdc++.h>
using namespace std;
int main(){
    queue<int> q;
    for(int i = 0; i < 10; i++)q.push(i);
    while(q.size()){
        cout << q.front() << " ";  
        q.pop();
    }  
    return 0;
}
/* 
0 1 2 3 4 5 6 7 8 9
*/
