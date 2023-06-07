import React from "react";
import API from "../../utils/API";
import { golfHelper } from "../../middleware/helper";

class joe extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arcardinals here. Each person's array will include three NBA teams. 
        allNBA: [],
        joeNBA: "",
        clippers: "",
        grizzlies: "",
        pelicans: "",
        // colts: 70,
        // videvils: 100,
        // raiders: 70,
        // totalNFL: 240,
        // EPL HERE
        liverpool: "",
        aston: "",
        joeEPL: "",
        // NHL Here
        knights: "",
        devils: "",
        senators: "",
        // Golf here
        dechambeau: "",
        finau: "",
        simpson: "",
        scott: "",
        vanRooyen: "",
        totalGolf: "",
        // MLB Here
        cardinals: "",
        mariners: "",
        mariners: "",
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
        this.setState({ seahawks: x.Seahawks });
        this.setState({ bengals: x.Bengals });
        this.setState({ raiders: x.Raiders });
        var allNFL = (x.Seahawks + x.Bengals + x.Raiders)
        this.setState({ totalNFL: allNFL });
    };

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
                var cardinalsWin;
                var marinersWin;
                var whiteSoxWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // cardinals
                    if (fullIndex[i].team.id === 33) {
                        cardinalsWin = fullIndex[i].games.win.total
                    }

                    // mariners
                    if (fullIndex[i].team.id === 32) {
                        marinersWin = fullIndex[i].games.win.total
                    }

                    // whiteSox
                    if (fullIndex[i].team.id === 7) {
                        whiteSoxWin = fullIndex[i].games.win.total
                    }

                }
               
                var allMLB = cardinalsWin + whiteSoxWin + marinersWin;
                this.setState({ totalMLB: allMLB });
                this.setState({ cardinals: cardinalsWin });
                this.setState({ whiteSox: whiteSoxWin });
                this.setState({ mariners: marinersWin });

            });
    };

    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 })
        this.setState({ finau: x.Finau });
        this.setState({ dechambeau: x.Dechambeau });
        this.setState({ simpson: x.Simpson });
        this.setState({ scott: x.Scott });
        this.setState({ vanRooyen: x.VanRooyen });
        var allGolf = x.VanRooyen + x.Finau + x.Dechambeau + x.Scott + x.Simpson;
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
                var knightsWins;
                var knightsOTLS;
                var knightsTotal;
                var devilsWins;
                var devilsOTLS;
                var devilsTotal;
                var senatorsWins;
                var senatorsOTLS;
                var senatorsTotal;
                var allNHL;

                // Here is the knights loop. 
                for (var i = 0; i < pacificResults.length; i++) {
                    // knights
                    if (pacificResults[i].team.id === 54) {
                        knightsWins = pacificResults[i].leagueRecord.wins;
                        knightsOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(knightsWins);
                        console.log(knightsOTLS);
                        console.log("this loop is running")
                    }
                }

                // Here is the loop for the devils
                for (var i = 0; i < metroResults.length; i++) {

                    // devils
                    if (metroResults[i].team.id === 1) {
                        devilsWins = metroResults[i].leagueRecord.wins;
                        devilsOTLS = metroResults[i].leagueRecord.ot;
                        console.log(devilsWins);
                        console.log(devilsOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < atlanticResults.length; i++) {

                    // red wings
                    if (atlanticResults[i].team.id === 9) {
                        senatorsWins = atlanticResults[i].leagueRecord.wins;
                        senatorsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(senatorsWins);
                        console.log(senatorsOTLS);
                        console.log("this loop is running")
                    }

                }

                // knights total
                knightsTotal = (knightsWins * 2) + knightsOTLS;
                console.log(knightsTotal);

                // devils total
                devilsTotal = (devilsWins * 2) + devilsOTLS;
                console.log(devilsTotal)

                // senators total
                senatorsTotal = (senatorsWins * 2) + senatorsOTLS;
                console.log(senatorsTotal);

                var allNHL = knightsTotal + devilsTotal + senatorsTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ knights: knightsTotal });
                this.setState({ devils: devilsTotal });
                this.setState({ senators: senatorsTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                console.log(res.data.response[0].league.standings[0])
                var evertonWin;
                var evertonTie;
                var tottenhamWin;
                var tottenhamTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 45) {
                        evertonWin = forLoopArray[i].all.win
                        evertonTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + evertonWin);
                        console.log("here are the ties" + evertonTie);
                    }

                    if (forLoopArray[i].team.id === 47) {
                        tottenhamWin = forLoopArray[i].all.win
                        tottenhamTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + tottenhamWin);
                        console.log("here are the ties" + tottenhamTie);
                    }
                }

                var evertonTotal = (evertonWin * 4.25) + (evertonTie);
                var tottenhamTotal = (tottenhamWin * 4.25) + (tottenhamTie);

                // Here is the final result
                var joePoints = evertonTotal + tottenhamTotal;
                this.setState({ joeEPL: joePoints });
                this.setState({ everton: evertonTotal });
                this.setState({ tottenham: tottenhamTotal });
                this.setState({ eplTotal: joePoints });

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
                var clippersWin = res.data.api.standings[23].win;
                var grizzliesWin = res.data.api.standings[25].win;
                var pelicansWin = res.data.api.standings[27].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doubleclippers = (clippersWin * 2);
                var doublegrizzlies = (grizzliesWin * 2);
                var doublepelicans = (pelicansWin * 2);

                const tempjoeNBA = this.state.allNBA;

                tempjoeNBA.push(clippersWin);
                tempjoeNBA.push(grizzliesWin);
                tempjoeNBA.push(pelicansWin);

                var joeDoubledScores = tempjoeNBA.map(team => team * 2);

                var joePoints = 0;

                for (var i = 0; i < joeDoubledScores.length; i++) {
                    joePoints += joeDoubledScores[i];
                }
                console.log(joePoints);
                this.setState({ joeNBA: joePoints });
                this.setState({ clippers: doubleclippers });
                this.setState({ grizzlies: doublegrizzlies });
                this.setState({ pelicans: doublepelicans });
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
                                        <a class="dropdown-item" href="tommy">Tommy</a>
                                        <a class="dropdown-item" href="patrick">Patrick</a>
                                        <a class="dropdown-item" href="james">James</a>
                                        <a class="dropdown-item" href="neptune">Neptune</a>
                                        <a class="dropdown-item" href="dj">DJ</a>
                                        <a class="dropdown-item" href="goose">Goose</a>
                                        <a class="dropdown-item" href="al">Al</a>
                                        <a class="dropdown-item" href="joe">Joe</a>
                                        <a class="dropdown-item" href="steids">Steids</a>
                                        <a class="dropdown-item" href="ben">Eres</a>
                                    </div>
                                </div>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="/Login">Login</a>
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
                        Joe
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
                                        <th scope="row">15</th>
                                        <td className="clippers">LA Clippers</td>
                                        <td>{this.state.clippers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">26</th>
                                        <td className="grizzlies">Memphis Grizzlies</td>
                                        <td>{this.state.grizzlies}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">48</th>
                                        <td className="pelicans">NO Pelicans</td>
                                        <td>{this.state.pelicans}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.joeNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="container smallTable">
                            {/* Here is NFL */}
                            <div class="row">
                                <div class="col">
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">NFL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">50</th>
                                                <td className="seahawks">Seattle Seahawks</td>
                                                <td>{this.state.seahawks}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">103</th>
                                                <td className="bengals">Cincinnati Bengals</td>
                                                <td>{this.state.bengals}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">128</th>
                                                <td className="raiders">Las Vegas Raiders</td>
                                                <td>{this.state.raiders}</td>
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

                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
                                    {/* Here is EPL */}
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">EPL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">35</th>
                                                <td className="everton">Everton</td>
                                                <td>{this.state.everton}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td className="tottenham">Tottenham</td>
                                                <td>{this.state.tottenham}</td>
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
                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
                                    {/* Here is NFL */}
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">NHL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">74</th>
                                                <td className="knights">Vegas Knights</td>
                                                <td>{this.state.knights}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">127</th>
                                                <td className="devils">New Jersey Devils</td>
                                                <td>{this.state.devils}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">134</th>
                                                <td className="senators">Ottawa Senators</td>
                                                <td>{this.state.senators}</td>
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
                                                <th scope="row">53</th>
                                                <td className="cardinals">St. Louis Cardinals</td>
                                                <td>{this.state.cardinals}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">87</th>
                                                <td className="whiteSox">Chicago White Sox</td>
                                                <td>{this.state.mariners}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">67</th>
                                                <td className="mariners">Seattle Mariners</td>
                                                <td>{this.state.mariners}</td>
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
                                                <th scope="row">14</th>
                                                <td className="senators">Bryson Dechambeau</td>
                                                <td>{this.state.dechambeau}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">51</th>
                                                <td className="senators">Tony Finau</td>
                                                <td>{this.state.finau}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">88</th>
                                                <td className="senators">Webb Simpson</td>
                                                <td>{this.state.simpson}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">175</th>
                                                <td className="senators">Adam Scott</td>
                                                <td>{this.state.scott}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">186</th>
                                                <td className="senators">Erik Van Rooyen</td>
                                                <td>{this.state.vanRooyen}</td>
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

export default joe;