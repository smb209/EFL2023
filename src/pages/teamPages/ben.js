import React from "react";
import API from "../../utils/API";
import { golfHelper } from "../../middleware/helper";
import { Link } from "react-router-dom";

// This page is now for Mark Eres. 

class ben extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA armets here. Each person's array will include three NBA teams. 
        allNBA: [],
        benNBA: "",
        nets: "",
        lakers: "",
        hornets: "",
        // eagles: 90,
        // cowboys: 80,
        // redskins: 30,
        // totalNFL: 200,
        // EPL
        tottenham: "",
        bournemouth: "",
        benEPL: "",
        // NHL 
        penguins: "",
        caps: "",
        kraken: "",
        totalNHL: "",
        // Golf here
        reed: "",
        fitzpatrick: "",
        hatton: "",
        fowler: "",
        cantlay: "",
        totalGolf: "",
        // MLB Here
        mets: "",
        nationals: "",
        angels: "",
        totalMLB: ""
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresNHL();
        this.getScoresPGA();
        this.getScoresMLB();
        this.getScoresNFL();
    }

    getScoresNFL = () => {
        var x = golfHelper();
        this.setState({ cowboys: x.Cowboys });
        this.setState({ chargers: x.Chargers });
        this.setState({ commanders: x.Commanders });
        var allNFL = (x.Cowboys + x.Chargers + x.Commanders)
        this.setState({ totalNFL: allNFL });
    };

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                var fullIndex = res.data.response[0];
                console.log(res.data.response[0]);
                // Eres Here 
                var metsWin;
                var angelsWin;
                var nationalsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // mets
                    if (fullIndex[i].team.id === 24) {
                        metsWin = fullIndex[i].games.win.total
                    }
                    // angels
                    if (fullIndex[i].team.id === 17) {
                        angelsWin = fullIndex[i].games.win.total
                    }

                    // nationals
                    if (fullIndex[i].team.id === 37) {
                        nationalsWin = fullIndex[i].games.win.total
                    }
                }
                var allMLB = metsWin + angelsWin + nationalsWin;
                this.setState({ totalMLB: allMLB });
                this.setState({ mets: metsWin });
                this.setState({ angels: angelsWin });
                this.setState({ nationals: nationalsWin });
            });
    };


    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 })
        this.setState({ fitzpatrick: x.Fitzpatrick });
        this.setState({ reed: x.Reed });
        this.setState({ hatton: x.Hatton });
        this.setState({ fowler: x.Fowler });
        this.setState({ cantlay: x.Cantlay });
        var allGolf = x.Cantlay + x.Fitzpatrick + x.Reed + x.Fowler + x.Hatton;
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
                // central
                var pacificResults = res.data.records[3].teamRecords;

                console.log(metroResults);

                var penguinsWins;
                var penguinsOTLS;
                var penguinsTotal;
                var capsWins;
                var capsOTLS;
                var capsTotal;
                var krakenWins;
                var krakenOTLS;
                var krakenTotal;
                var allNHL;

                // Here is the penguins loop. 
                for (var i = 0; i < metroResults.length; i++) {
                    // penguins
                    if (metroResults[i].team.id === 5) {
                        penguinsWins = metroResults[i].leagueRecord.wins;
                        penguinsOTLS = metroResults[i].leagueRecord.ot;
                        console.log(penguinsWins);
                        console.log(penguinsOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < pacificResults.length; i++) {

                    // kraken
                    if (pacificResults[i].team.id === 55) {
                        krakenWins = pacificResults[i].leagueRecord.wins;
                        krakenOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(krakenWins);
                        console.log(krakenOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < metroResults.length; i++) {

                    // caps
                    if (metroResults[i].team.id === 15) {
                        capsWins = metroResults[i].leagueRecord.wins;
                        capsOTLS = metroResults[i].leagueRecord.ot;
                        console.log(capsWins);
                        console.log(capsOTLS);
                        console.log("this loop is running")
                    }
                }

                // penguins total
                penguinsTotal = (penguinsWins * 2) + penguinsOTLS;
                console.log(penguinsTotal);

                // caps total
                capsTotal = (capsWins * 2) + capsOTLS;
                console.log(capsTotal)

                // kraken total
                krakenTotal = (krakenWins * 2) + krakenOTLS;
                console.log(krakenTotal);

                var allNHL = penguinsTotal + capsTotal + krakenTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ penguins: penguinsTotal });
                this.setState({ caps: capsTotal });
                this.setState({ kraken: krakenTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                // Mark Eres EPL here
                var chelseaWin;
                var chelseaTie;
                var bournemouthWin;
                var bournemouthTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 49) {
                        chelseaWin = forLoopArray[i].all.win
                        chelseaTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + chelseaWin);
                        console.log("here are the ties" + chelseaTie);
                    }

                    if (forLoopArray[i].team.id === 35) {
                        bournemouthWin = forLoopArray[i].all.win
                        bournemouthTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + bournemouthWin);
                        console.log("here are the ties" + bournemouthTie);
                    }
                }

                var chelseaTotal = (chelseaWin * 4.25) + (chelseaTie);
                var bournemouthTotal = (bournemouthWin * 4.25) + (bournemouthTie);


                // Here is the final result
                var eresPoints = chelseaTotal + bournemouthTotal;
                this.setState({ chelsea: chelseaTotal });
                this.setState({ bournemouth: bournemouthTotal });
                this.setState({ eplTotal: eresPoints });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // HERE ARE NBA TEAMS FOR TOMMY. 
                // console.log(res);
                console.log(res.data.api.standings);
                var netsWin = res.data.api.standings[3].win;
                var lakersWin = res.data.api.standings[24].win;
                var hornetsWin = res.data.api.standings[14].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublenets = (netsWin * 2);
                var doublelakers = (lakersWin * 2);
                var doublehornets = (hornetsWin * 2);

                const tempbenNBA = this.state.allNBA;

                tempbenNBA.push(netsWin);
                tempbenNBA.push(lakersWin);
                tempbenNBA.push(hornetsWin);

                var benDoubledScores = tempbenNBA.map(team => team * 2);

                var benPoints = 0;

                for (var i = 0; i < benDoubledScores.length; i++) {
                    benPoints += benDoubledScores[i];
                }
                console.log(benPoints);
                this.setState({ benNBA: benPoints });
                this.setState({ nets: doublenets });
                this.setState({ lakers: doublelakers });
                this.setState({ hornets: doublehornets });
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div class="text-center">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="/Home">Epic Fantasy League</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/Home">Standings <span class="sr-only">(current)</span></a>
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
                                <a class="nav-link" href="/draft">Draft Results</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/points">Points System</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="card">
                    <div class="card-body text-center bg-light text-secondary">
                        Eres
                    </div>
                </div>
                {/* Starting my new table here */}
                <div class="container smallTable">
                    <div class="row">
                        <div class="col">
                            <table class="table table-striped table-bordered table-hover">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col-6">Draft Pick</th>
                                        <th scope="col-6">NBA Team</th>
                                        <th scope="col-6">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">29</th>
                                        <td className="nets">Brooklyn Nets</td>
                                        <td>{this.state.nets}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">47</th>
                                        <td className="lakers">LA Lakers</td>
                                        <td>{this.state.lakers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">92</th>
                                        <td className="hornets">Charlotte Hornets</td>
                                        <td>{this.state.hornets}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.benNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="container">
                            <div class="row">
                                {/* Here is NFL */}
                                <div class="col">
                                    <table class="table table-striped table-bordered table-hover smallTable">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">NFL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">45</th>
                                                <td className="cowboys">Dallas Cowboys</td>
                                                <td>{this.state.cowboys}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">56</th>
                                                <td className="chargers">LA Chargers</td>
                                                <td>{this.state.chargers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">106</th>
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
                                    <table class="table table-striped table-bordered table-hover smallTable">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">EPL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">10</th>
                                                <td className="chelsea">Chelsea</td>
                                                <td>{this.state.chelsea}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">181</th>
                                                <td className="bournemouth">Bournemouth</td>
                                                <td>{this.state.bournemouth}</td>
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
                                    <table class="table table-striped table-bordered table-hover smallTable">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">NHL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">64</th>
                                                <td className="penguins">Pittsburgh Penguins</td>
                                                <td>{this.state.penguins}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">89</th>
                                                <td className="capitals">Washington Capitals</td>
                                                <td>{this.state.caps}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">151</th>
                                                <td className="mariners">Seattle Kraken</td>
                                                <td>{this.state.kraken}</td>
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
                                                <th scope="row">77</th>
                                                <td className="mets">New York Mets</td>
                                                <td>{this.state.mets}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">174</th>
                                                <td className="nationals">Washington Nationals</td>
                                                <td>{this.state.nationals}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">114</th>
                                                <td className="angels">Anaheim Angels</td>
                                                <td>{this.state.angels}</td>
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
                                                <th scope="row">20</th>
                                                <td className="senators">Patrick Cantlay</td>
                                                <td>{this.state.cantlay}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">68</th>
                                                <td className="senators">Patrick Reed</td>
                                                <td>{this.state.reed}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">124</th>
                                                <td className="senators">Matthew Fitzpatrick</td>
                                                <td>{this.state.fitzpatrick}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">137</th>
                                                <td className="senators">Tyrell Hatton</td>
                                                <td>{this.state.hatton}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">153</th>
                                                <td className="senators">Rickie Fowler</td>
                                                <td>{this.state.fowler}</td>
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

export default ben;