/**
 * Created by Administrator on 2014/12/2.
 */
class FooBar {
  private fullName = "shawn wildernuth";
  showMe() {
    console.log(this.fullName);
  }
}

var foo = new FooBar();
foo.showMe();