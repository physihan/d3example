//
// ──────────────────────────────────────────────────────────── I ──────────
//   :::::: J U S T   C H A R T : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────
//

// d3.select('#chart')
// .selectAll('div')
// .data([10,20,30,40,50,60])
// .enter()
// .append('div')
// .style("height",(d)=>d+'px')

// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────

//
// ────────────────────────────────────────────────────── II ──────────
//   :::::: D 3 C O L O R : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

// const colorMap = d3.interpolateRgb(
//   d3.rgb('#d6e685'),
//   d3.rgb('#1e6823')
// )

// d3.select('#chart')
//   .selectAll("div")
//   .data([.2, .4, 0, 0, .13, .92])
//   .enter()
//   .append("div")
//   .style("background-color", (d)=> {
//     return d == 0 ? '#eee' : colorMap(d)
//   })

//
// ──────────────────────────────────────────────────────────── III ──────────
//   :::::: D R A W   L I N E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────
//

// var data = [
//   { x: 0, y: 30 },
//   { x: 50, y: 20 },
//   { x: 100, y: 40 },
//   { x: 150, y: 80 },
//   { x: 200, y: 95 }
// ]

// var line = d3.svg.line()
//   .x((d)=> d.x)
//   .y((d)=> 100 - d.y)
//   .interpolate("basis")

// d3.select('#line')
//   .append("path")
//   .attr('stroke-width', 2)
//   .attr('d', line(data))

//
// ──────────────────────────────────────────────── IV ──────────
//   :::::: B O D Y : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────
//
var dataset = [14, 46, 19, 63, 21, 29, 52, 2, 42, 92, 73, 36, 44, 22, 94, 89, 82, 51, 75, 80, 64, 37, 55, 97, 17, 77, 6, 32, 23, 45, 50]
var dataset1 = [69, 58, 96, 13, 54, 11, 56, 14, 72, 49, 82, 91, 75, 71, 0, 29, 89, 83, 55, 37, 51, 84, 67, 95, 48, 76, 7, 15, 25, 20, 87]
// var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ]
var w = 800,
  h = 200
var barPadding = 2
var mysvg = d3.select('body')
  .append('svg')
  .attr('width', w)
  .attr('height', h)
// const scale=d3.scale.linear()
mysvg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  // .attr('x', (d, i) => i * 21)
  .attr('x', function (d, i) {
    return i * (w / dataset.length)
  })
  .attr('y', d => h - d)
  .attr('width', w / dataset.length - barPadding)
  .attr('height', d => d)
  .attr('fill', 'teal')
  .on("mouseenter", (d,i)=>{return showtext(i)})


mysvg.selectAll('.second')//这里要避免重名，这里是选择这一类来应用
  .data(dataset1)
  .enter()
  .append('rect')
  .attr('class','second')
  .attr('x', (d, i) => i * w / dataset1.length)
  .attr('y', (d, i) => h - d - dataset[i])
  .attr('width', w / dataset.length - barPadding)
  .attr('height', d => d)
  .attr('fill', 'red')

mysvg.selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .text(d => d)
  .attr('x', function (d, i) {
    return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2
  })
  .attr('y', function (d) {
    return h - d
  })
  .attr('text-anchor', 'middle')
  .attr('opacity', 0)
function showtext( i){
  console.log(i)
console.log(document.getElementsByTagName('text')[i])
document.getElementsByTagName('text')[i].setAttribute('opacity',1)
  console.log(this)
}