    vector<vector<int>> arr(m + 1, vector(n + 1,0));
    arr[1][1] = 1;
    for(int i = 0;i<= m;i++){
      for(int j = 0; j <= n;j++){
        arr[i][j + 1] += arr[i][j];
        arr[i + 1][j] += arr[i][j];
      }
    }
    return arr[m][n];