import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => { 
    return (
       <div>
       <div>
          <NavLink to="/first">First</NavLink>
       </div>
       <div>
       <div>
          <NavLink to="/common">Common</NavLink>
       </div>
       <div>
          <NavLink to="/merged">Merged</NavLink>
       </div>
       </div>
       </div>
    );
}

export default Navigation;
