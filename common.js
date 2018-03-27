;(function (common) {

    common.bytediffFormatter = bytediffFormatter;

    function bytediffFormatter(data) {
        var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
        return data.fileName + ' went from ' +
            (data.startSize / 1000).toFixed(2) + ' kB to ' + (data.endSize / 1000).toFixed(2) + ' kB' +
            ' and is ' + '%' + difference;
    }

    function formatPercent(num, precision) {
        return (num * 100).toFixed(precision);
    }

})(module.exports);