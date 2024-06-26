import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function SubpageLayout() {
  return (
    <div>
       <nav>
          <Link to="/">Back</Link>
       </nav>
       <Outlet />
    </div>
  );
}

export default SubpageLayout;