#include <bits/stdc++.h>
using namespace std; 
//list는 캐시를 뜻함.
//hash는 들어왔을 때 
//해당 페이지가 있는지 없는지를 
//빠르게 체크해서 해당부분을 erase하는 역할을 함.
class LRUCache { 
    list<int> li;
    unordered_map<int, list<int>::iterator> hash;
    int csize;  
public:
    LRUCache(int);
    void refer(int);
    void display();
};
LRUCache::LRUCache(int n){
    csize = n;
}
void LRUCache::refer(int x){ 
    //해시에 들어오는 페이지에 해당하는 값이 없을 때
    if (hash.find(x) == hash.end()) { 
        if (li.size() == csize) { 
            // 가장 끝에 있는 것을 뽑아낸다. 
            // 이는 가장 오래된 것을 의미한다.
            int last = li.back(); 
            li.pop_back(); 
            hash.erase(last);
        }
    }else { 
        cout << "지웁니당! : " << distance(li.begin(), hash[x]) << "번째 " << *hash[x] << '\n';
        li.erase(hash[x]);
    } 
    // 해당 페이지를 참조할 때 
    // 가장 앞에 붙인다. 또한 이를 해시테이블에 저장한다.
    li.push_front(x);
    hash[x] = li.begin();
} 
void LRUCache::display(){
    for (auto it = li.begin(); it != li.end(); it++){
        cout << (*it) << " ";
    } 
    cout << "\n";
} 
int main(){
    LRUCache ca(3); 
    ca.refer(1);
    ca.display(); 
    ca.refer(3);
    ca.display();  
    ca.refer(0);
    ca.display(); 
    ca.refer(3);
    ca.display();  
    ca.refer(5);
    ca.display();  
    ca.refer(6);
    ca.display();  
    ca.refer(3);
    ca.display(); 
    return 0;
} 
/*
1
3 1
0 3 1
3 0 1
5 3 0
6 5 3
3 6 5
*/
