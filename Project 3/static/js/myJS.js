var vehicles = JSON.parse(test)

label = []
value = []

//Plot 1 vehicle by year

for (let i =0; i < vehicles.length; i++){
  row = vehicles[i]
  if (label.includes(row.datayear)) {
  }
  else {
    label.push(row.datayear)
    count=0
    for (let i =0; i < vehicles.length; i++){
      row2 = vehicles[i]
      if (row.datayear == row2.datayear){
        count += row2.numberofvehicles
      }
    }
    value.push(count)
  }};

let data = [{
  y: value,
  x: label,
  type: 'line'  
}]
var layout = {
  title: {text:"Total Vehicles by Year",font:{color:'#FFFFFF'}},
  autosize : false,
  height:500,
  width:1200,
  paper_bgcolor: '#2a3036',
  plot_bgcolor: '#2a3036',
  showlegned:true,
  xaxis: {color: '#FFFFFF',title:'Year'
  },
  yaxis:{color: '#FFFFFF'
  }};
Plotly.newPlot('plot',data,layout);

// Vehicle by county

function yearPlot2(dataset){
label = []
value = []
for (let i =0; i < vehicles.length; i++){
  row = vehicles[i]
  if (row.datayear == dataset){
    if (label.includes(row.county)) {
    }
    else {
      label.push(row.county)
      count=0
      for (let i =0; i < vehicles.length; i++){
        row2 = vehicles[i]
        if (row.county == row2.county && row2.datayear == dataset){
          count += row2.numberofvehicles
        }
      }
    value.push(count)
}}}};

  function init2() {
    yearPlot2(2022);
    data2 = [{
      x: label,
      y: value,
      type:'bar'}];
  
      var layout2 = {
        title: {text:"Total Vehicles by County",font:{color:'#FFFFFF'}},
        height:500,
        width:1200,
        autosize : false,
        paper_bgcolor: '#2a3036',
        plot_bgcolor: '#2a3036',
        showlegned:true,
        xaxis: {color: '#FFFFFF',title:'County'
        },
        yaxis:{color: '#FFFFFF'
        }};
  
    Plotly.newPlot("plot2", data2,layout2);
  }
  
 
init2();



//Fuel Type
function yearPlot3(dataset){

label = []
value = []
for (let i =0; i < vehicles.length; i++){
  row = vehicles[i]
  if (row.datayear == dataset){
    if (label.includes(row.fueltype)) {
    }
    else {
      label.push(row.fueltype)
      count=0
      for (let i =0; i < vehicles.length; i++){
        row2 = vehicles[i]
        if (row.fueltype == row2.fueltype && row2.datayear == dataset){
          count += row2.numberofvehicles
        }
      }
      value.push(count)
}}}};

function init3(){
  yearPlot3(2022)
  let data3 = [{
    values: value,
    labels: label,
    type: 'pie'  
  }]
  var layout3 = {
    title: {text:"Fuel Type of Vehicles",font:{color:'#FFFFFF'}},
    height:400,
    width:700,
    autosize : false,
    paper_bgcolor: '#2a3036',
    plot_bgcolor: '#2a3036',
    showlegend:true,
    legend:{font:{color: '#FFFFFF'}},
    xaxis: {color: '#FFFFFF'
    },
    yaxis:{color: '#FFFFFF'
    }};
  
  Plotly.newPlot('plot3',data3,layout3);
}
init3();

// Manufacturer

function year4plot4(dataset){
  label = []
  value = []
  for (let i =0; i < vehicles.length; i++){
    row = vehicles[i]
    if (row.datayear == dataset){
      if (label.includes(row.manufacturer)) {
      }
      else {
        label.push(row.manufacturer)
        count=0
        for (let i =0; i < vehicles.length; i++){
          row2 = vehicles[i]
          if (row.manufacturer == row2.manufacturer && row2.datayear == dataset){
            count += row2.numberofvehicles
          }
        }
        value.push(count)
  }}}};

function init4() {
  year4plot4(2022);
  data4 = [{
    x: label,
    y: value,
    type:'bar'}];

  var layout4 = {
  title: {text:"Total Vehicles by Manufacturer",font:{color:'#FFFFFF'}},
  height:500,
  width:1200,
  autosize : false,
  paper_bgcolor: '#2a3036',
  plot_bgcolor: '#2a3036',
  showlegned:true,
  xaxis: {color: '#FFFFFF',title:'Manufacturer'
  },
  yaxis:{color: '#FFFFFF'
  }};

  Plotly.newPlot("plot4", data4,layout4);
}
init4();

//Model
function yearPlot5(dataset){
  label = []
  value = []
  
  for (let i =0; i < vehicles.length; i++){
    row = vehicles[i]
    if (row.datayear == dataset) {
      if (label.includes(row.model)) {
      }
      else {
        label.push(row.model)
        count=0
        for (let i =0; i < vehicles.length; i++){
          row2 = vehicles[i]
          if (row.model == row2.model && row2.datayear == dataset){
            count += row2.numberofvehicles
          }
        }
      value.push(count)
  }}}};
  
  function init5(){
    yearPlot5(2022);
    let data5 = [{
      values: value,
      labels: label,
      type: 'pie'  
    }]
    var layout5 = {
      title: {text:"Models of Vehicles",font:{color:'#FFFFFF'}},
      height:400,
      width:700,
      autosize : false,
      paper_bgcolor: '#2a3036',
      plot_bgcolor: '#2a3036',
      legend:{font:{color: '#FFFFFF'}},
      showlegend:true,
    };
    Plotly.newPlot('plot5',data5,layout5);
    }
  init5();
// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  let dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  let x = [];
  let y = [];
  for (let j = 2010; j < 2023 ; j++){
    if (dataset == j) {
      year4plot4(j);
      x = label;
      y = value;
      Plotly.restyle("plot4", "x", [x]);
      Plotly.restyle("plot4", "y", [y]);
      yearPlot5(j);
      labels = label;
      values = value;
      Plotly.restyle("plot5", 'labels', [labels]);
      Plotly.restyle("plot5", 'values', [values]);
      yearPlot2(j);
      x = label;
      y = value;
      Plotly.restyle("plot2", "x", [x]);
      Plotly.restyle("plot2", "y", [y]);
      yearPlot3(j);
      labels = label;
      values = value;
      Plotly.restyle("plot3", 'labels', [labels]);
      Plotly.restyle("plot3", 'values', [values]);
    }
    };
}



