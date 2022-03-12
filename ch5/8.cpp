#include <bits/stdc++.h>
using namespace std;
int v[10];
int main(){
    unordered_map<string, int> umap;
    //이렇게 넣기도 가능하고
    umap.insert({"test1", 1});
    //이렇게 넣을 수도 있습니다.
    umap.emplace("test5", 5);
    //또한 이렇게 변경도 가능, 추가할 수도 있습니다. 아래를 권장합니다.
    umap["test1"] = 4;

    for(auto element : umap){
        cout << element.first << " :: " << element.second << '\n';
    }
    //map의 find메소드는 찾지 못하면 end() 이터레이터를 반환합니다.
    auto search = umap.find("test4");
    if(search != umap.end()){
        cout << "found :" << search -> first << " " << (*search).second << '\n';
    }else{
        cout << "not found.." << '\n';
    }
    //이런식으로 바로 int형을 증가시킬 수 있습니다.
    umap["test1"]++;
    cout << umap["test1"] << "\n";

    cout <<umap.size() <<"\n";
    umap.erase("test1");
    cout <<umap.size() <<"\n";

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
