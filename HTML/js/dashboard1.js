Morris.Area({
    element: 'morris-area-chart2',
    data: [{
        period: '2014',
        SiteA: 0,
        SiteB: 0,

    }, {
        period: '2015',
        SiteA: 100,
        SiteB: 120,

    }, {
        period: '2016',
        SiteA: 80,
        SiteB: 60,

    }, {
        period: '2017',
        SiteA: 90,
        SiteB: 70,

    }, {
        period: '2018',
        SiteA: 180,
        SiteB: 150,

    }, {
        period: '2019',
        SiteA: 150,
        SiteB: 200,

    }, {
        period: '2020',
        SiteA: 350,
        SiteB: 250,


    }],
    xkey: 'period',
    ykeys: ['SiteA', 'SiteB'],
    labels: ['Site A', 'Site B'],
    pointSize: 0,
    fillOpacity: 0.7,
    pointStrokeColors: ['#ccc', '#cbb2ae'],
    behaveLikeLine: true,
    gridLineColor: '#e0e0e0',
    lineWidth: 0,
    smooth: false,
    hideHover: 'auto',
    lineColors: ['#ccc', '#cbb2ae'],
    resize: true

});

$(".counter").counterUp({
    delay: 100,
    time: 1200
});
