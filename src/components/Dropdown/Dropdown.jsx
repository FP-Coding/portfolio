import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, X } from 'phosphor-react';
import { string } from 'prop-types';

function Nav() {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div>
      <button
        className="md:hidden m-4"
        type="button"
        onClick={() => setIsHidden(!isHidden)}
      >
        <List size={32} weight="bold" />
      </button>
      <nav
        className={`md:hidden 
        ${isHidden ? 'flex' : 'hidden'} 
        flex-col 
        gap-3 
        fixed
        top-0
        left-0
        w-2/3
        p-4
        h-screen
        bg-purple-900`}
      >
        <ul className="md:hidden flex flex-col gap-4 m-4">
          <button type="button" onClick={() => setIsHidden(!isHidden)}>
            <X size={32} weight="bold" />
          </button>
          <li>
            <Link to="/quem-sou">QUEM SOU</Link>
          </li>
          <hr className="border" />

          <li>
            <Link to="/projetos">PROJETOS</Link>
          </li>
          <hr className="border" />
        </ul>
      </nav>
    </div>
  );
}

Nav.propTypes = {
  type: string
}.isRequired;

export default Nav;
