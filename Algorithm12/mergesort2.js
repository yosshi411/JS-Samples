function merge(lst1, lst2){
  var lst = []
  while (true){
    if (lst1.length == 0) return lst.concat(lst2)
    else if (lst2.length == 0) return lst.concat(lst1)
    if (lst1[0] < lst2[0]) lst.push(lst1.shift())
    else lst.push(lst2.shift())
  }
}

function msort(lst){
  var n = lst.length   
  if (n < 2) return lst
  else {
    var n2 = Math.floor(n / 2)
    return merge(
        msort(lst.slice(0, n2)), msort(lst.slice(n2, n)))
  }
}

lst = []
for (var i = 0; i < 10000; i++)
   lst.push(Math.random())
t1 = new Date()
res = msort(lst)
t2 = new Date()
puts((t2 - t1) + "ms")
puts(res[0] + ":" + res[5000] + ":" + res[9999])

