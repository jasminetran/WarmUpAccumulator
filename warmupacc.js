
var birds = ['hawk', 'shrike', 'kestral', 'hawk', 'sparrow', 'bluejay', 'robin', 'sparrow', 'hawk', 'kestral', 'hawk', 'shrike', 'kestral', 'hawk', 'sparrow', 'bluejay', 'robin', 'sparrow', 'hawk', 'kestral', 'hawk', 'shrike', 'kestral', 'hawk', 'sparrow', 'bluejay', 'robin', 'sparrow', 'hawk', 'kestral', 'sparrow'];

function countInstances(arr,name) {
 let total = 0;
 for (var i=0; i <arr.length; i++) {
  if(arr[i] === name){
    total++;
   }
 }
 return total;
}
countInstances(birds, "sparrow");
