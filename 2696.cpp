#include <iostream>
#include <string>
using namespace std;

int main()
{
  string s = "ABFCACDB";
  while (s.find("AB") != string::npos || s.find("CD") != string::npos)
  {
    if (s.find("AB") != string::npos)
    {
      s = s.replace(s.find("AB"), 2, "");
    }
    if (s.find("CD") != string::npos)
    {
      s = s.replace(s.find("CD"), 2, "");
    }
  }
  return s.length();

  return 0;
}
