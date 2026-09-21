var options = {
  series: [{
    name: 'Last 6 days',
    data: [65, 45, 55, 48, 72, 80, 60, 52, 55, 45, 68, 75]
  }, {
    name: 'Last Week',
    data: [50, 35, 40, 60, 50, 45, 70, 40, 48, 60, 50, 55]
  }],
  chart: {
    type: 'bar',
    height: 220,
    toolbar: { show: false } 
  },
  colors: ['#5b73e8', '#e6ebf5'], 
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '40%',
      borderRadius: 3
    },
  },
  dataLabels: { enabled: false },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: { show: false }, 
  grid: { show: false },  
  legend: {
    position: 'bottom',
    horizontalAlign: 'left',
    markers: { radius: 12 }
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var options = {
  series: [40, 32, 28], 
  labels: ['Afternoon', 'Evening', 'Morning'],
  chart: {
    type: 'donut',
    height: 280
  },
  colors: ['#5b73e8', '#8297f6', '#c6d2fd'],
  stroke: {
    width: 0 
  },
  dataLabels: {
    enabled: false 
  },
  plotOptions: {
    pie: {
      donut: {
        size: '75%' 
      }
    }
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    markers: {
      radius: 12
    },
    itemMargin: {
      horizontal: 10,
      vertical: 5
    },
    formatter: function(seriesName, opts) {

      return [seriesName, " <br><b>" + opts.w.globals.series[opts.seriesIndex] + "%</b>"];
    }
  },
  tooltip: {
    custom: function({ series, seriesIndex, dataPointIndex, w }) {
   
      const times = ['1pm - 4pm', '5pm - 8pm', '6am - 11am'];
      const orders = ['1,890 orders', '1,510 orders', '1,320 orders'];
      
      return `
        <div style="background: #2d3154; color: #fff; padding: 10px 14px; border-radius: 8px; font-size: 12px;">
          <div style="font-weight: bold; margin-bottom: 2px;">${w.globals.labels[seriesIndex]}</div>
          <div style="color: #a0a5ba; font-size: 11px; margin-bottom: 6px;">${times[seriesIndex]}</div>
          <div style="font-weight: bold; font-size: 13px;">${orders[seriesIndex]}</div>
        </div>
      `;
    }
  }
};

var chart = new ApexCharts(document.querySelector("#donutChart"), options);
chart.render();


var ratingOptions = {
    series: [85, 85, 92], 
    chart: {
        height: 280,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 360,
            hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
            },
            dataLabels: {
                name: {
                    show: true,
                    fontSize: '12px',
                    fontFamily: 'Barlow Condensed, sans-serif',
                    color: '#8c8c8c',
                    offsetY: -5
                },
                value: {
                    show: true,
                    fontSize: '16px',
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 'bold',
                    color: '#1f1f1f',
                    offsetY: 5,
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            },
            track: {
                background: '#f2f4f8',
                strokeWidth: '97%',
                margin: 8, 
            }
        }
    },
    colors: ['#707be9', '#ff9f43', '#2bcbba'], 
    labels: ['Hygiene', 'Food Taste', 'Packaging'],
    legend: {
        show: true,
        floating: true,
        fontSize: '12px',
        position: 'left',
        offsetX: 0,
        offsetY: 15,
        labels: {
            useSeriesColors: true,
        },
        markers: {
            size: 0
        },
        formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%";
        },
        itemMargin: {
            vertical: 3
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                show: false
            }
        }
    }]
};

var ratingChart = new ApexCharts(document.querySelector("#ratingChart"), ratingOptions);
ratingChart.render();



var lineChartOptions = {
    series: [{
        name: 'Last 6 days',
        data: [25, 18, 42, 38, 25, 65]
    }, {
        name: 'Last Week',
        data: [40, 60, 30, 50, 40, 55]
    }],
    chart: {
        type: 'line',
        height: 180,
        toolbar: { show: false }
    },
    colors: ['#5b73e8', '#e6ebf5'], 
    stroke: {
        curve: 'smooth',
        width: [3, 2]
    },
    markers: {
        size: 0
    },
    xaxis: {
        categories: ['01', '02', '03', '04', '05', '06'],
        axisBorder: { show: false },
        axisTicks: { show: false }
    },
    yaxis: { show: false },
    grid: {
        show: true,
        borderColor: '#f1f1f1',
        strokeDashArray: 4,
        yaxis: { lines: { show: true } },
        xaxis: { lines: { show: false } }
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'left',
        markers: { radius: 12 }
    }
};

var lineChart = new ApexCharts(document.querySelector("#lineChart"), lineChartOptions);
lineChart.render();