        import React from 'react';
        import './App.css' ;
       
        

        function Nav() {
        return (
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Trip planner </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Restaurants</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Experiences</a>
        </li>

        </ul>
        <form className="form-inline my-2 my-lg-0">
        <input className="" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info my-2 my-sm-1" type="submit">search</button>
        </form>
    </div>
    </nav>
    
        );
        }

        export default Nav;
