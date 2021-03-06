import React from 'react';


const AboutUs = ()=>(
    <div>
        <h2>Title about us</h2>
        <p>jQuery is a DOM manipulation library. It reads from and writes to the DOM. React uses a virtual 
            DOM (a JavaScript representation of the real DOM). React only 
            writes patch updates to the DOM, but never reads from it.

            It is not feasible to keep real DOM manipulations in sync with React's virtual DOM. Because of
            this, all jQuery functionality has been re-implemented in React.
        </p>
    </div>
)

export default AboutUs;