import React from 'react';
import './UserOutput.css'; 


const userOutput = (props) => {

    return (
      <div className="UserOutput">
        <p>As you well know, {props.name}, age {props.age}, loves Boulder, Colorado.</p>
        <p>The Hesse Trailhead is the perfect starting point in Boulder County.</p>
      </div>
    )
};

export default userOutput;