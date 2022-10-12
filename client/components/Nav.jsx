import React from 'react';

export default function HelloWorld(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className='row d-flex'>
          <div className='col-3'>
        <a className="navbar-brand" href="#">Library</a>
          </div>
          <form className="d-flex col-9">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </>
  );
}
