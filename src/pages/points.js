import React from "react";
import { Link } from "react-router-dom";

class points extends React.Component {


    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link class="navbar-brand"  to="/Home">Epic Fantasy League</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link"  to="/Home">Standings <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <div class="dropdown show">
                                    <div class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Teams
                                    </div>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <Link class="dropdown-item" to="/tommy">Tommy</Link>
                                        <Link class="dropdown-item" to="/patrick">Patrick</Link>
                                        <Link class="dropdown-item" to="/james">James</Link>
                                        <Link class="dropdown-item" to="/neptune">Neptune</Link>
                                        <Link class="dropdown-item" to="/dj">DJ</Link>
                                        <Link class="dropdown-item" to="/goose">Goose</Link>
                                        <Link class="dropdown-item" to="/al">Al</Link>
                                        <Link class="dropdown-item" to="/joe">Joe</Link>
                                        <Link class="dropdown-item" to="/steids">Steids</Link>
                                        <Link class="dropdown-item" to="/ben">Eres</Link>
                                    </div>
                                </div>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link"  to="/Login">Login</Link>
                            </li> */}
                            <li class="nav-item">
                                <Link class="nav-link"  to="/draft">Draft Results</Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link"  to="/points">Points System</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="card">
                    <div class="card-body text-center bg-light text-secondary">
                        Points System
                    </div>
                </div>
                {/* Starting my new tables here */}
                <div class="container pointsTable">
                    <div class="row">
                        <div class="col-12">
                            {/* Here is the table for the points system */}
                            <table class="table table-striped table-bordered table-hover text-center">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col-6">League</th>
                                        <th scope="col-6">Total Games</th>
                                        <th scope="col-6">EFL Points Per Win</th>
                                        <th scope="col-6">EFL Points Per Tie</th>
                                        <th scope="col-6">Possible Points</th>
                                    </tr>
                                </thead>
                                <tbody class="text-center">
                                    <tr>
                                        <th scope="row">EPL</th>
                                        <td>38</td>
                                        <td>4.25</td>
                                        <td>1</td>
                                        <td>161.5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">NFL</th>
                                        <td>17</td>
                                        <td>9.4</td>
                                        <td>2.35</td>
                                        <td>160</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">NBA</th>
                                        <td>82</td>
                                        <td>2</td>
                                        <td>-</td>
                                        <td>164</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">NHL</th>
                                        <td>82</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>164</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">MLB</th>
                                        <td>162</td>
                                        <td>1</td>
                                        <td>-</td>
                                        <td>162</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <div class="container pointsTable">
                    <div class="row">
                        <div class="col-12">
                            {/* Here is the table for the points system */}
                            <table class="table table-striped table-bordered table-hover text-center">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col-6">Standings</th>
                                        <th scope="col-6">Payout</th>
                                    </tr>
                                </thead>
                                <tbody class="text-center">
                                    <tr>
                                        <th scope="row">1st</th>
                                        <td>$750</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2nd</th>
                                        <td>$450</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3rd</th>
                                        <td>$150</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <body class="d-flex flex-column">
                    <div id="page-content">
                        <div class="container text-center">
                            <div class="row justify-content-center">
                                <div class="col-md-7">
                                    {/* Adding this custom footer I found online. Requires some fake text. Here it is below.  */}
                                    <h1 class="font-weight-light mt-4 text-white">Sticky Footer using Flexbox</h1>
                                    <p class="lead text-white-50">Use just two Bootstrap 4 utility classes and three custom CSS rules and you will have a flexbox enabled sticky footer for your website!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer id="sticky-footer" class="py-2 bg-dark text-white-50">
                        <div class="container text-center">
                            <small>Copyright &copy; Epic Fantasy League 2020</small>
                        </div>
                    </footer>
                </body>
            </div>
        )
    }
}

export default points;