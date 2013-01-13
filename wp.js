

(function() {

    if (window.console == undefined) {
        alert("window.console object is undefined.");
        return;
    }

    if (window.performance == undefined) {
        console.error('performance object is undefined');
        return;
    }    

    function pad_right(str, pad_length) {
        if (str.length >= pad_length)
            return str;
        else
            return str + (new Array(pad_length - str.length)).join(' ');
    }

    var evts = [];

    for (var evt in performance.timing) {
        if (performance.timing[evt] > 0)
            evts.push([evt, performance.timing[evt]]);
    }

    evts.sort(function(a, b) {
        return a[1] - b[1];
    });

    for (var i=1; i<evts.length; i++) {
        console.log(pad_right(evts[i-1][0], 30) + ' -> ' + pad_right(evts[i][0], 30) + ' :  ' + (evts[i][1]-evts[i-1][1]));
    }

})();
