function searchtext(arr,txt) {
var d = txt.split(" ");
var a = 0;
  for(var i=0; i<d.length; i++) {
  if (arr.search(d[i])!==-1) {
      a++
      
      }
  }
      return a;
}
