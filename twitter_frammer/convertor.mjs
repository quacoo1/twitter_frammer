import {svg2png} from 'svg-png-converter'

const fs = require('fs');

let s = await svg2png({ 
  input: `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="632pt" height="91pt" viewBox="0.00 0.00 631.61 91.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 112)">
    <polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-112 58,-112 58,4 -4,4"/>
    <ellipse fill="none" stroke="#000000" cx="27" cy="-90" rx="27" ry="18"/>
    <text text-anchor="middle" x="27" y="-85.8" font-family="Times,serif" font-size="14.00" fill="#000000">a</text>
  </g>
</svg>
`.trim(), 
  encoding: 'dataURL', 
  format: 'jpeg',
  width: 100,
  height: 100,
  multiplier: .7,
  quality: .5
})


fs.writeFileSync("tmp25.jpg", s)