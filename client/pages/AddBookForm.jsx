import React from 'react';
import Nav from '../components/Nav';

export default function Home(props) {
  return (
    <>
    <div>
      <Nav />
    </div>
      <form className='top-spacing'>
        <div className="mb-3">
          <label className="form-label text-col">Book Name</label>
          <input className="form-control" aria-describedby="emailHelp"></input>
            <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <label className="form-label text-col">Author</label>
          <input className="form-control"></input>
        </div>
        <button type="submit" className="btn btn-primary add-col">Submit</button>
      </form>
    </>
  );
}
