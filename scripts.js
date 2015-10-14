//states data chart
google.setOnLoadCallback(drawTable);

function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'MTG Rank');
    data.addRows([
        ['Utah', 18 ],
        ['Alaska',  1 ],
        ['Wyomying', 2 ],
        ['Idaho',  16 ],
        ['Colorado', 8 ],
        ['Washington', 4 ],
        ['Kentucky', 3 ],
        ['Oregon', 11 ],
        ['New Mexico', 10 ],
        ['West Virgina', 5 ],
        ['Indiana', 27 ],
        ['Kansas', 19 ],
        ['Maine', 7 ],
        ['Wisconsin', 9 ],
        ['Norht Dakota', 20 ],
        ['Michigan', 24 ],
        ['Iowa', 35 ],
        ['Oklahoma', 21 ],
        ['Arizona', 26 ],
        ['Rhode Island', 12 ],
        ['Missouri', 25 ],
        ['Nevada', 23 ],
        ['New Hampshire', 31 ],
        ['Montana', 29 ],
        ['Vermont', 34 ],
        ['Illinois', 37 ],
        ['Texas', 32 ],
        ['Pennsylvania', 14 ],
        ['Maryland', 6 ],
        ['Ohio', 30 ],
        ['Nebraska', 38 ],
        ['Hawaii', 15 ],
        ['Tennessee', 28 ],
        ['California', 42 ],
        ['Arkansas', 13 ],
        ['Minnesota', 39 ],
        ['South Dakota', 43 ],
        ['Delaware', 17 ],
        ['Connecticut', 22 ],
        ['New York', 36 ],
        ['Louisiana', 33 ],
        ['Flordia', 50 ],
        ['South Carolina', 41 ],
        ['Massachusetts', 44 ],
        ['North Carolina', 45 ],
        ['Virgina', 46 ],
        ['Alabama', 40 ],
        ['Georgia', 49 ],
        ['New Jersey', 48 ],
        ['Mississippi', 47 ]
    ]);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {width: '100%', height: '100%'});
}


//pie chart
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Gender', 'Percentage'],
        ['Male',     62],
        ['Female',    38]
    ]);

    var options = {
        title: 'Magic: The Gathering PlayerBase'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}