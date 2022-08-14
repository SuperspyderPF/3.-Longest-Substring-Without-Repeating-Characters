var lengthOfLongestSubstring = function(s) {
    if (!s || s === "") return 0;
    var shoot = 0;
    var solution = new Set();
    var true1 = 1;
    for (var i = 0; i < s.length; i++){
        if (solution.has(s[i])) {
            while (solution.has(s[i])){
                solution.delete(s[shoot++]);
            }
        }
        solution.add(s[i]);
        var len = (i - shoot) + 1;
        true1 = Math.max(true1, len);
    }
    return true1
};


