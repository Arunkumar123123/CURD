// import React from 'react';

// function MouseEnterExample() {
//   // Function to handle mouse enter event
//   const handleMouseEnter = () => {
//     console.log('Mouse entered the component');
//     // Add your logic here
//   };

//   return (
//     <div onMouseEnter={handleMouseEnter}>
//       <h2>Hover over me!</h2>
//     </div>
//   );
// }

// export default MouseEnterExample;
// import React from 'react';

// function HoverExample({ handleHover }) {
//   return (
//     <ul>
//       <li onMouseEnter={() => handleHover("தொழில்நுட்ப செய்திகள்")}>தொழில்நுட்ப செய்திகள்</li>
//       <li onMouseEnter={() => handleHover("இதர விளையாட்டுகள்")}>இதர விளையாட்டுகள்</li>
//       <li onMouseEnter={() => handleHover("ஒலிம்பிக்ஸ்")}>ஒலிம்பிக்ஸ்</li>
//     </ul>
//   );
// }

// export default HoverExample;
import React, { useState } from 'react';
import { SkillsButton } from './SkillsBtnElements'

const Arun = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <div onMouseEnter={onHover} onMouseLeave={onHover} role="button" tabIndex='-3' >
      { hover ? "SKILLS" : <SkillsButton /> }
    </div>
  )
}

export default Arun;

