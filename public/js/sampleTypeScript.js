/**
 * Created by Administrator on 2014/12/2.
 */
var FooBar = (function () {
    function FooBar() {
        this.fullName = "shawn wildernuth";
    }
    FooBar.prototype.showMe = function () {
        console.log(this.fullName);
    };
    return FooBar;
})();
var foo = new FooBar();
foo.showMe();
//# sourceMappingURL=sampleTypeScript.js.map