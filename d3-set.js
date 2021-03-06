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

var data = [
  { x: 0, y: 30 },
  { x: 50, y: 20 },
  { x: 100, y: 40 },
  { x: 150, y: 80 },
  { x: 200, y: 95 }
]

var line = d3.svg.line()
  .x((d)=> d.x)
  .y((d)=> 100 - d.y)
  .interpolate("basis")

d3.select('#line')
  .append("path")
  .attr('stroke-width', 2)
  .attr('d', line(data))