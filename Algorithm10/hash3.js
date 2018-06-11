var strs = ["meijo", "university", "abc",
            "shiogama","yagoto", "ueda", "hara",
            "irinaka", "yagoto-nisseki", "kanayama"]

function h(s){
    var n = 0
    for (var i = 0; i < s.length; i++){
        n = (n * 234 + s.charCodeAt(i)) % 103
    }
    return n
}


function make_table(){
    var a = []
    for (var i = 0; i < strs.length; i++){
        var v = h(strs[i])
        a[v] = strs[i]
    }
    return a
}
puts(make_table())

var a = make_table()
function search(s){
    m = a[h(s)]
    if (m === undefined) puts(s + " is undefined")
    else puts(m)
}
search("irinaka")
search("foo")
