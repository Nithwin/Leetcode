#include <iostream>
#include <vector>
using namespace std;

int uniquePaths(int m, int n) {
    vector<vector<int>> arr(m + 1, vector(n + 1,0));
    arr[1][1] = 1;
    for(int i = 0; i<= m;i++){
      for(int j = 0; j <= n;j++){
        if(j + 1 <= m ) arr[i][j + 1] += arr[i][j];
        if(i + 1 <= n ) arr[i + 1][j] += arr[i][j];
      }
    }
    return arr[m][n];
}
int main(){
  cout << uniquePaths(3,3);
  return 0;
}

