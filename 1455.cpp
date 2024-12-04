#include <iostream>
#include <vector>
using namespace std;
vector<string> split(string sentence){
  string tmp = "";
  vector<string> arr;
  for(int i = 0 ; i < sentence.size(); i++){
    if(sentence[i] != ' '){
      tmp += sentence[i];
    }
    else{
      arr.push_back(tmp);
      tmp.clear();
    }
  }
  arr.push_back(tmp);
  tmp.clear();
  return arr;
}

int main(){
  string sentence = "i love eating burger";
  string searchWord = "burg";
  int count = -1;
  vector<string> arr = split(sentence);
  for(int i = 0; i < arr.size(); i++){
    int k = 0;
    int count = 0;
    for(char j : arr[i]){
      if(k < searchWord.size() && searchWord[k] == j){
        count++;
        k++;
      }
      else{
        break;
      }
    }
    cout << count << searchWord.size();
    if(count == searchWord.size() -1){
      count << i;
      break;
    }
  }
  cout << -1;
  return 0;
}
