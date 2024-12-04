#include <iostream>
#include <vector>
using namespace std;

int howSum(int target, vector<int> arr){
  for(int i = 0 ; i< arr.size(); i++){
    cout << arr[i] << " ";
  }
  return 0 ;
}

int main(){
  vector<int> arr = {2,3};
  arr[2] = 3;
  arr[3] = 3;
  int target = 7;
  howSum(target, arr);
  return 0;
}
