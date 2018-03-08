import React from 'react'

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Notes</a>

                <div className="collapse navbar-collapse">
                <form className="form-inline my-2 my-lg-0 ml-auto">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => this.props.searchNote(e.target.value) } />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={(e) => {e.preventDefault(); this.props.loadSamples()}} >Load Samples</button>
                </form>
                </div>
            </nav>
        )
    }
}

export default Navbar
