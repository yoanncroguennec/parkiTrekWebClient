// import LineChart from '@/app/components/common/ui/data-display/charts/lineChart';
// import React from 'react'

// export default function Data() {
//   return (
//              <LineChart
//                 data={data}
//                 onMouseMove={(state: MouseHandlerDataParam) => {
//                   if (timeout.current) {
//                     clearTimeout(timeout.current);
//                   }

//                   timeout.current = setTimeout(() => {
//                     if (typeof state.activeTooltipIndex === "number") {
//                       onHover(state.activeTooltipIndex);
//                     }
//                   }, 15);
//                 }}
//               >
//                 <defs>
//                   <linearGradient id="elevationFill" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#B4FF39" stopOpacity={0.45} />

//                     <stop offset="60%" stopColor="#8BFF6A" stopOpacity={0.12} />

//                     <stop offset="100%" stopColor="#8BFF6A" stopOpacity={0} />
//                   </linearGradient>

//                   <filter id="glow">
//                     <feGaussianBlur stdDeviation="5" result="blur" />

//                     <feMerge>
//                       <feMergeNode in="blur" />
//                       <feMergeNode in="SourceGraphic" />
//                     </feMerge>
//                   </filter>
//                 </defs>

//                 <CartesianGrid stroke="rgba(255,255,255,.04)" vertical={false} />

//                 <XAxis
//                   dataKey="dist"
//                   stroke="#808080"
//                   tickLine={false}
//                   axisLine={false}
//                   tickFormatter={(v) => `${v.toFixed(1)} km`}
//                 />

//                 <YAxis
//                   stroke="#808080"
//                   tickLine={false}
//                   axisLine={false}
//                   tickFormatter={(v) => `${v} m`}
//                 />

//                 <Tooltip
//                   contentStyle={{
//                     background: "rgba(15,15,15,.85)",

//                     border: "1px solid rgba(255,255,255,.08)",

//                     borderRadius: 24,

//                     backdropFilter: "blur(30px)",

//                     boxShadow: "0 25px 60px rgba(0,0,0,.45)",

//                     color: "#fff",
//                   }}
//                   labelFormatter={(v) => `${Number(v).toFixed(2)} km`}
//                   formatter={(value) => [
//                     `${Number(value).toFixed(1)} m`,
//                     "Altitude",
//                   ]}
//                 />

//                 <Area
//                   type="monotone"
//                   dataKey="ele"
//                   stroke="none"
//                   fill="url(#elevationFill)"
//                 />

//                 <Line
//                   type="monotone"
//                   dataKey="ele"
//                   stroke="#B4FF39"
//                   strokeWidth={3}
//                   filter="url(#glow)"
//                   dot={false}
//                 />

//                 {data[currentIndex] && (
//                   <ReferenceDot
//                     x={data[currentIndex].dist}
//                     y={data[currentIndex].ele}
//                     r={9}
//                     fill="#B4FF39"
//                     stroke="#fff"
//                     strokeWidth={3}
//                   />
//                 )}
//               </LineChart>
//   )
// }
