public class HELLO{
  public static void main(String[] args) {
    System.out.println(hi("hey"));
  }
  public String hi(String a){
    String b = "yo";
    b = b + a;
    return b;
  }
}



import java.text.SimpleDateFormat;
import java.util.Date;

class Solution {
    public void a() {
        SimpleDateFormat format1 = new SimpleDateFormat ( "yyyyMMddHHmmssSSS");
        SimpleDateFormat format2 = new SimpleDateFormat("MMM dd, yyyy K:mm:ss a");
        
        System.out.println(String.valueOf(format1.format(System.currentTimeMillis())));
        System.out.println(format2.format(System.currentTimeMillis()));
    }
}
