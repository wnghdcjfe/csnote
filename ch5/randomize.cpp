#include<bits/stdc++.h> 
using namespace std;
  
void swap (int *a, int *b){
    int temp = *a;
    *a = *b;
    *b = temp;
}
  
void printArray (int arr[], int n){
    for (int i = 0; i < n; i++) cout << arr[i] << " "; 
    cout << "\n";
}
  
void randomize (int arr[], int n){ 
    // 프로그램 실행할 때 마다 다른 값이 나타나도록 seed를 주어야 함.  
    srand (time(NULL)); 
    for (int i = n - 1; i > 0; i--){ 
        int j = rand() % (i + 1); 
        swap(&arr[i], &arr[j]);
    }
}
  
int main(){
    int arr[] = {1, 2, 3, 4, 5, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);
    randomize (arr, n);
    printArray(arr, n);
    return 0;
} 