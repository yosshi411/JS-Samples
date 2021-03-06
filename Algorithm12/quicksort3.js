function quicksort(a, l, r){
    if (r > l){
        var v = a[r]
        var [i, j] = [l - 1, r]
        while (true){
            i += 1; while (a[i] < v) i += 1
            j -= 1; while (a[j] > v) j -= 1
            if (j <= i) break;
            [a[i], a[j]] = [a[j], a[i]]
        }
        [a[i], a[r]] = [a[r], a[i]]
        quicksort(a, l, i - 1)
        quicksort(a, i + 1, r)
    }
}

function work(){
    var a  = []
    var i, t1, t2
    var N = 10000
    for (i = 0; i < N; i++) a[i] = Math.random()
    t1 = new Date()
    quicksort(a, 0, N - 1)
    t2 = new Date()
    puts(a[0]  + " : " + a[N / 2] + " : " + a[N - 1]);
    for (i = 0; i < N - 1; i++){
        if (a[i] > a[i + 1])
            puts("NG")
    }
    puts("Time = " + (t2 - t1) + " ms");
}

work()
