// import { useEffect, useRef } from "react";

// function Trailer() {
//   const coords = { x: 0, y: 0 };
//   const circles = useRef(null);
//   let circle;

//   circle = circles.current.children;
//   Array.from(circle).forEach( (elem) => {
//     elem.x = 0;
//     elem.y = 0;
//   });
//   useEffect(() => {
//     window.addEventListener("mousemove", function (e) {
//       coords.x = e.clientX;
//       coords.y = e.clientY;

//       circleTrail()
//     });

    
// }, []);

// function circleTrail () {
//     let x = coords.x;
//     let y = coords.y;

//     Array.from(circle).forEach((elem) => {
//       elem.style.left = x - 12 + "px";
//       elem.style.top = y - 12 + "px";

//       x += 10;
//       y += 10
//     });

// }
//   return (
//     <div ref={circles}>
//       <div className="h-6 w-6 bg-black absolute top-0 left-0 rounded-3xl"></div>
//       <div className="h-6 w-6 bg-black absolute top-0 left-0 rounded-3xl"></div>
//       <div className="h-6 w-6 bg-black absolute top-0 left-0 rounded-3xl"></div>
//       <div className="h-6 w-6 bg-black absolute top-0 left-0 rounded-3xl"></div>
//       <div className="h-6 w-6 bg-black absolute top-0 left-0 rounded-3xl"></div>
//       <div className="h-6 w-6 bg-black absolute top-0 left-0 rounded-3xl"></div>
//       <div className="h-6 w-6 bg-black absolute top-0 left-0 rounded-3xl"></div>
//       <div className="h-6 w-6 bg-black absolute top-0 left-0 rounded-3xl"></div>
//       <div className="h-6 w-6 bg-black absolute top-0 left-0 rounded-3xl"></div>
//       <div className="h-6 w-6 bg-black absolute top-0 left-0 rounded-3xl"></div>
//       <div className="h-6 w-6 bg-black absolute top-0 left-0 rounded-3xl"></div>
//       <div className="h-6 w-6 bg-black absolute top-0 left-0 rounded-3xl"></div>
//     </div>
//   );
// }

// export default Trailer;
