document.addEventListener("DOMContentLoaded", function () {
    let primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-primary")
        .trim();

    let labelColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-label")
        .trim();

    let fontFamily = getComputedStyle(document.documentElement)
        .getPropertyValue("--font-family")
        .trim();

    let defaultOptions = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            width: "100%",
            height: 200,
            offsetY: 18,
        },
        dataLabels: {
            enabled: false,
        },
    };

    // Line Chart Options
    let lineOptions = {
        ...defaultOptions,
        chart: {
            ...defaultOptions.chart,
            type: "area",
        },
        tooltip: {
            enabled: true,
            style: {
                fontFamily: fontFamily,
            },
            y: {
                formatter: (value) => `${value}k`,
            },
        },
        series: [
            {
                name: "Stocks",
                data: [15, 50, 18, 60, 30, 45],
            },
        ],
        colors: [primaryColor],
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                opacityFrom: 1,
                opacityTo: 0,
                stops: [0, 100],
                colorStops: [
                    {
                        offset: 0,
                        opacity: 0.2,
                        color: "#00427f",
                    },
                    {
                        offset: 100,
                        opacity: 0,
                        color: "#00427f",
                    },
                ],
            },
        },
        stroke: {
            colors: [primaryColor],
            lineCap: "round",
        },
        grid: {
            borderColor: "rgba(0, 0, 0, 0)",
            padding: {
                top: -10,
                right: 0,
                bottom: -8,
                left: 12,
            },
        },
        markers: {
            strokeColors: primaryColor,
        },
        yaxis: {
            show: false,
        },
        xaxis: {
            labels: {
                show: true,
                floating: true,
                style: {
                    colors: labelColor,
                    fontFamily: fontFamily,
                },
            },
            axisBorder: {
                show: false,
            },
            crosshairs: {
                show: false,
            },
            categories: ["Jan", "Mar", "May", "July", "Sept", "Nov"],
        },
    };

    // Bar Chart Options
    let barOptions = {
        ...defaultOptions,
        chart: {
            ...defaultOptions.chart,
            type: "bar",
        },
        tooltip: {
            enabled: true,
            style: {
                fontFamily: fontFamily,
            },
            y: {
                formatter: (value) => `${value}k`,
            },
        },
        series: [
            {
                name: "Stocks",
                data: [15, 50, 18, 60, 30, 45],
            },
        ],
        colors: [primaryColor],
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                opacityFrom: 1,
                opacityTo: 0,
                stops: [0, 100],
                colorStops: [
                    {
                        offset: 0,
                        opacity: 1,
                        color: "#00427f",
                    },
                    {
                        offset: 100,
                        opacity: 0,
                        color: "#00427f",
                    },
                ],
            },
        },
        stroke: {
            colors: [primaryColor],
            lineCap: "round",
        },
        grid: {
            borderColor: "rgba(0, 0, 0, 0)",
            padding: {
                top: -30,
                right: 0,
                bottom: -8,
                left: 12,
            },
        },
        markers: {
            strokeColors: primaryColor,
        },
        yaxis: {
            show: false,
        },
        xaxis: {
            labels: {
                show: true,
                floating: true,
                style: {
                    colors: labelColor,
                    fontFamily: fontFamily,
                },
            },
            axisBorder: {
                show: false,
            },
            crosshairs: {
                show: false,
            },
            categories: ["Jan", "Mar", "May", "July", "Sept", "Nov"],
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                horizontal: false,
            },
        },
    };

    // Doughnut Chart Options
    let doughnutOptions = {
        ...defaultOptions,
        chart: {
            ...defaultOptions.chart,
            type: "donut",
        },
        series: [44, 55, 41],
        labels: ["Apple", "Mango", "Orange"],
        colors: ['#00427f', '#262626', '#b4b4b4'],
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                opacityFrom: 1,
                opacityTo: .9,
                stops: [0, 100],
            },
        },
        tooltip: {
            enabled: true,
            style: {
                fontFamily: fontFamily,
            },
            y: {
                formatter: (value) => `${value}%`,
            },
        },
        stroke: {
            colors: ['#e7e7e7'],
            lineCap: "round",
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: "rgba(0, 0, 0, 0)",
            padding: {
                top: 0,
                right: -18,
                bottom: -8,
                left: -18,
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '55%'
                }
            }
        }
    };

    // Range Chart Options
    let rangeOptions = {
        ...defaultOptions,
        chart: {
            ...defaultOptions.chart,
            type: "rangeBar",
        },
        series: [
            {
                name: "Range",
                data: [
                    {
                        x: 'Category A',
                        y: [20, 50]
                    },
                    {
                        x: 'Category B',
                        y: [30, 70]
                    },
                    {
                        x: 'Category C',
                        y: [40, 60]
                    },
                    {
                        x: 'Category D',
                        y: [10, 40]
                    }
                ],
                
            },
        ],
        colors: [primaryColor],
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '50%',
                borderRadius: 5,
            },
        },
        xaxis: {
            labels: {
                show: true,
                style: {
                    colors: labelColor,
                    fontFamily: fontFamily,
                },
            },
            axisBorder: {
                show: false,
            },
            crosshairs: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
                style: {
                    colors: labelColor,
                    fontFamily: fontFamily,
                },
            },
        },
        grid: {
            borderColor: "rgba(0, 0, 0, 0)",
            padding: {
                top: -30,
                right: 0,
                bottom: -8,
                left: 12,
            },
        },
        tooltip: {
            enabled: true,
            style: {
                fontFamily: fontFamily,
            },
            y: {
                formatter: (value) => `${value}`,
            },
        },
    };

    // Render Line Chart
    let linechart = new ApexCharts(document.querySelector("#line-chart"), lineOptions);
    linechart.render();

    // Render Bar Chart
    let barchart = new ApexCharts(document.querySelector("#bar-chart"), barOptions);
    barchart.render();

    // Render Doughnut Chart
    let doughnutchart = new ApexCharts(document.querySelector("#doughnut-chart"), doughnutOptions);
    doughnutchart.render();

    // Render Range Chart
    let rangechart = new ApexCharts(document.querySelector("#range-chart"), rangeOptions);
    rangechart.render();
});
