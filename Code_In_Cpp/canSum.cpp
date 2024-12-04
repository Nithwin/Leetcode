#include <iostream>
#include <vector>
using namespace std;

bool canSum(int target, vector<int> arr){
  vector<bool> tmp(target + 1, 0);
  tmp[0] = 1;
  for(int i = 0; i <= target; i++){
    if(tmp[i]){
      for(auto num:arr){
        tmp[i + num] = 1;
      }
    }
  }
  return tmp[target];
}

int main(){
  vector<int> arr = {5,4,3};
  int target = 7;
  cout << canSum(target, arr);
  return 0;
}
