#include <bits/stdc++.h>
using namespace std;
priority_queue<int, vector<int>, greater<int> > pq; //오름차순
//priority_queue<int, vector<int>, less<int> > pq; // 내림차순
int main(){
    pq.push(5);
    pq.push(4);
    pq.push(3);
    pq.push(2);
    pq.push(1);
    cout << pq.top() << "\n";
    return 0;
}
/*
1 
*/
