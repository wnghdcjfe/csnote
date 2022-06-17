#include <bits/stdc++.h>
using namespace std;
int v[10];
int main(){
    unordered_map<string, int> umap; 
    
    umap["test1"] = 4;
    umap["test2"] = 10;

    for(auto element : umap){
        cout << element.first << " :: " << element.second << '\n';
    }  
    cout << umap["test1"] << "\n";  
    return 0;
}
/*
test5 :: 5
test1 :: 4
not found..
5
2
1
*/
