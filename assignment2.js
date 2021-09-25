function createTable() {
    var numberOfRows = document.getElementById('numberofrows').value;

    var numberOfCols = document.getElementById('numberofcols').value;

    var tableHeader = '<table border="1">\n';
    var tableBody = '';

    for (var i = 1; i < numberOfRows; i++) {
        tableBody = tableBody + '<tr>';
        for (var j = 1; j < numberOfCols; j++) {
            tableBody = tableBody + '<td>';
            tableBody = tableBody + '' + i + ',' + j;
            tableBody = tableBody + '</td>'
        }
        tableBody = tableBody + '</tr>\n';
    }
    var tableFooter = '</table>';

    document.getElementById('result').innerHTML = tableHeader + tableBody + tableFooter;

}


