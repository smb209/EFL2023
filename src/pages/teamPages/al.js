import React from "react";
import API from "../../utils/API";
import { golfHelper } from "../../middleware/helper";
import { Link } from "react-router-dom";

class al extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA aryankees here. Each person's array will include three NBA teams. 
        allNBA: [],
        alNBA: "",
        warriors: "",
        wizards: "",
        jazz: "",
        // dolphins: 50,
        // packers: 130,
        // bills: 100,
        // totalNFL: 280,
        // EPL
        westham: "",
        nottingham: "",
        alEPL: "",
        // NHL
        wild: "",
        islanders: "",
        jets: "",
        alNHL: "",
        totalNHL: "",
        // Golf here
        scheffler: "",
        smith: "",
        homa: "",
        peirera: "",
        gooch: "",
        totalGolf: "",
        // MLB Here
        yankees: "",
        tigers: "",
       twins: "",
        totalMLB: ""
    }

    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresNHL();
        this.getScoresPGA();
        this.getScoresMLB();
        // this.getScoresNFL();
    }

    getScoresNFL = () => {
        var x = golfHelper();
        this.setState({ browns: x.Browns });
        this.setState({ dolphins: x.Dolphins });
        this.setState({ commanders: x.Commanders });
        var allNFL = (x.Browns + x.Dolphins + x.Commanders)
        this.setState({ totalNFL: allNFL });
    };

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
                // Al here 
                var yankeesWin;
                var tigersWin;
                var twinsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // yankees
                    if (fullIndex[i].team.id === 25) {
                        yankeesWin = fullIndex[i].games.win.total
                    }

                    // twins
                    if (fullIndex[i].team.id === 22) {
                        twinsWin = fullIndex[i].games.win.total
                    }

                    // tigers
                    if (fullIndex[i].team.id === 12) {
                        tigersWin = fullIndex[i].games.win.total
                    }

                }
                var allMLB = yankeesWin + twinsWin + tigersWin

                this.setState({ totalMLB: allMLB });
                this.setState({ yankees: yankeesWin });
                this.setState({twins:twinsWin });
                this.setState({ tigers: tigersWin });

            });
    };

    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 })
        this.setState({ smith: x.Smith });
        this.setState({ scheffler: x.Scheffler });
        this.setState({ homa: x.Homa });
        this.setState({ peirera: x.Peirera });
        this.setState({ gooch: x.Gooch });
        var allGolf = x.Gooch + x.Smith + x.Scheffler + x.Peirera + x.Homa;
        this.setState({ totalGolf: allGolf });
    }

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // // central
                var pacificResults = res.data.records[3].teamRecords;

                // Al NHL here 
                var wildWins;
                var wildOTLS;
                var wildTotal;
                var islandersWins;
                var islandersOTLS;
                var islandersTotal;
                var jetsWins;
                var jetsOTLS;
                var jetsTotal;

                // Here is the wild loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // wild
                    if (centralResults[i].team.id === 30) {
                        wildWins = centralResults[i].leagueRecord.wins;
                        wildOTLS = centralResults[i].leagueRecord.ot;
                        console.log(wildWins);
                        console.log(wildOTLS);
                        console.log("this loop is running")
                    }

                    // jets
                    if (centralResults[i].team.id === 52) {
                        jetsWins = centralResults[i].leagueRecord.wins;
                        jetsOTLS = centralResults[i].leagueRecord.ot;
                        console.log(jetsWins);
                        console.log(jetsOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < metroResults.length; i++) {

                    // islanders
                    if (metroResults[i].team.id === 2) {
                        islandersWins = metroResults[i].leagueRecord.wins;
                        islandersOTLS = metroResults[i].leagueRecord.ot;
                        console.log(islandersWins);
                        console.log(islandersOTLS);
                        console.log("this loop is running")
                    }
                }

                // wild total
                wildTotal = (wildWins * 2) + wildOTLS;
                console.log(wildTotal);

                // islanders total
                islandersTotal = (islandersWins * 2) + islandersOTLS;
                console.log(islandersTotal)

                // jets total
                jetsTotal = (jetsWins * 2) + jetsOTLS;
                console.log(jetsTotal);

                var alNHL = wildTotal + islandersTotal + jetsTotal
                this.setState({ totalNHL: alNHL });
                this.setState({ wild: wildTotal });
                this.setState({ jets: jetsTotal });
                this.setState({ islanders: islandersTotal });
                
            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                console.log(res.data.response[0].league.standings[0])
                var westhamWin;
                var westhamTie;
                var nottinghamWin;
                var nottinghamTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 48) {
                        westhamWin = forLoopArray[i].all.win
                        westhamTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + westhamWin);
                        console.log("here are the ties" + westhamTie);
                    }

                    if (forLoopArray[i].team.id === 65) {
                        nottinghamWin = forLoopArray[i].all.win
                        nottinghamTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + nottinghamWin);
                        console.log("here are the ties" + nottinghamTie);
                    }
                }

                var westhamTotal = (westhamWin * 4.25) + (westhamTie);
                var nottinghamTotal = (nottinghamWin * 4.25) + (nottinghamTie);

                // Here is the final result
                var alPoints = westhamTotal + nottinghamTotal;
                this.setState({ westham: westhamTotal });
                this.setState({ nottingham: nottinghamTotal });
                this.setState({ eplTotal: alPoints });
            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // HERE ARE NBA TEAMS FOR AL
                // console.log(res);
                // console.log(res.data.api.standings);
                var warriorsWin = res.data.api.standings[22].win;
                var wizardsWin = res.data.api.standings[12].win;
                var jazzWin = res.data.api.standings[17].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublewarriors = (warriorsWin * 2);
                var doublewizards = (wizardsWin * 2);
                var doublejazz = (jazzWin * 2);

                const tempAlNBA = this.state.allNBA;

                tempAlNBA.push(warriorsWin);
                tempAlNBA.push(wizardsWin);
                tempAlNBA.push(jazzWin);

                var AlDoubledScores = tempAlNBA.map(team => team * 2);

                var AlPoints = 0;

                for (var i = 0; i < AlDoubledScores.length; i++) {
                    AlPoints += AlDoubledScores[i];
                }
                console.log(AlPoints);
                this.setState({ alNBA: AlPoints });
                this.setState({ warriors: doublewarriors });
                this.setState({ wizards: doublewizards });
                this.setState({ jazz: doublejazz });
            })
            .catch(error => {
                console.log(error)
            });
    }

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
                            <li class="nav-item active">
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
                            <li class="nav-item">
                                <Link class="nav-link"  to="/points">Points System</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="card">
                    <div class="card-body text-center bg-light text-secondary">
                        Al
                    </div>
                </div>
                {/* Starting my new table here */}
                <div class="container smallTable">
                    <div class="row">
                        <div class="col">
                            <table class="table table-striped table-bordered table-hover text-center ">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col-6">Draft Pick</th>
                                        <th scope="col-6">NBA Team</th>
                                        <th scope="col-6">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td className="warriors">Golden State Warriors</td>
                                        <td>{this.state.warriors}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">78</th>
                                        <td className="wiz">Washington Wizards</td>
                                        <td>{this.state.wizards}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">144</th>
                                        <td className="jazz">Utah Jazz</td>
                                        <td>{this.state.jazz}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.alNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="container">
                            <div class="row">
                                {/* Here is NFL */}
                                <div class="col">
                                    <table class="table table-striped table-bordered table-hover text-center smallTable">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">NFL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">36</th>
                                                <td className="browns">Cleveland Browns</td>
                                                <td>{this.state.browns}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">50</th>
                                                <td className="fins">Miami Dolphins</td>
                                                <td>{this.state.dolphins}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">157</th>
                                                <td className="redskins">Washington Commanders</td>
                                                <td>{this.state.commanders}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.totalNFL}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    {/* Here is EPL */}
                                    <table class="table table-striped table-bordered table-hover text-center smallTable">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-">Draft Pick</th>
                                                <th scope="col-6">EPL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">186</th>
                                                <td className="nottingham">Nottingham</td>
                                                <td>{this.state.nottingham}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">25</th>
                                                <td className="westHam">Westham United</td>
                                                <td>{this.state.westham}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.eplTotal}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Adding the NHL Table here */}
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    {/* Here is NFL */}
                                    <table class="table table-striped table-bordered table-hover text-center smallTable">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">NHL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">63</th>
                                                <td className="wild">Minnesota Wild</td>
                                                <td>{this.state.wild}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">88</th>
                                                <td className="islanders">New York Islanders</td>
                                                <td>{this.state.islanders}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">93</th>
                                                <td className="jets">Winnipeg Jets</td>
                                                <td>{this.state.jets}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.totalNHL}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* MLB Here */}

                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">MLB Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">14</th>
                                                <td className="yankees">NY Yankees</td>
                                                <td>{this.state.yankees}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">133</th>
                                                <td className="tigers">Detroit Tigers</td>
                                                <td>{this.state.tigers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">103</th>
                                                <td className="twins">Minnesota Twins</td>
                                                <td>{this.state.twins}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.totalMLB}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        {/* Adding Golf Here */}

                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">Golfer</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">44</th>
                                                <td className="senators">Scottie Scheffler</td>
                                                <td>{this.state.scheffler}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">66</th>
                                                <td className="senators">Cameron Smith</td>
                                                <td>{this.state.smith}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">110</th>
                                                <td className="senators">Max Homa</td>
                                                <td>{this.state.homa}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">169</th>
                                                <td className="senators">Mito Peirera</td>
                                                <td>{this.state.peirera}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">182</th>
                                                <td className="senators">Talor Gooch</td>
                                                <td>{this.state.gooch}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.totalGolf}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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

export default al;
