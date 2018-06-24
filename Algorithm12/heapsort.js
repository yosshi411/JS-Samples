heap = []
function parent(i){return Math.floor((i - 1) / 2)}
function child1(i){return 2 * i + 1}
function child2(i){return 2 * i + 2}
function exchange(i, j){
   var temp = heap[i]
   heap[i] = heap[j]
   heap[j] = temp
}

function add_element(ele){
  heap.push(ele)
  n = heap.length - 1
  while (n > 0) {
    if (heap[parent(n)] > heap[n]){
      exchange(parent(n), n)
      n = parent(n)
    } else {
      break
    }
  }
}

function delete_element(){
  var ret = heap[0]
  var n = heap.length - 1
  exchange(0, n)
  heap.length = n
  n = 0
  while (child1(n) < heap.length){
    if (child2(n) >= heap.length){
       if (heap[child1(n)] < heap[n])
          exchange(n, child1(n))
       break
    } else if (heap[child1(n)] > heap[n] &&
        heap[child2(n)] > heap[n]) break
    if (heap[child1(n)] < heap[child2(n)]){
       exchange(n, child1(n))
       n = child1(n)
    } else {
       exchange(n, child2(n))
       n = child2(n)
    }
  }
  return ret
}

function heap_sort(lst){
  heap = []
  for (var i = 0; i < lst.length; i++)
   add_element(lst[i])
  var ans = []
  while (heap.length > 0){
    ans.push(delete_element())
  }
  return ans
}

lst = []
for (var i = 0; i < 10000; i++)
  lst.push(Math.random())
t1 = new Date()
ans = heap_sort(lst)
t2 = new Date()
puts(ans[0] + ":" + ans[lst.length - 1])
puts("time = " + (t2 -t1) + " ms")
