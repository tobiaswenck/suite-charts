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
          color: "#ffffff",
        },
        {
          offset: 100,
          opacity: 0,
          color: "#ffffff",
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
};

let linechart = new ApexCharts(document.querySelector(".line-chart-container"), lineOptions);

linechart.render();
