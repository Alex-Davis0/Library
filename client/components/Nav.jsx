import React from 'react';

export default function HelloWorld(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg">
      <div className="container">
        <div className='row d-flex space'>
          <div className='col-3'>
        <a className="navbar-brand nav-col" href="#">Library</a>
          </div>
          <form className="d-flex col-6">
            <input className="form-control me-2 bg-search text-col" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn nav-col fa-solid fa-magnifying-glass" type="submit"></button>
          </form>
        </div>
      </div>
    </nav>
    </>
  );
}
