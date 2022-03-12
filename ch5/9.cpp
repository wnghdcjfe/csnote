#include <bits/stdc++.h>
using namespace std;
int main(){
    map<string, int> _map;
    _map["큰돌"]++;
    _map["큰돌"]++;
    for(auto c : _map){
        cout << c.first << " : " << c.second <<"\n";
    }
    return 0;
}
/*
큰돌 : 2
*/
