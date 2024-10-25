class An{

  static String invert(String a){
    String[] arr = a.split("");
    for(int i = 0;i<arr.length;i++){
      arr[i] = (arr[i].equals("0")) ? "1":"0";
    }
    return String.join("",arr);
  }
  public static void main(String[] args) {
    System.out.println(invert("1001"));
  }
}
