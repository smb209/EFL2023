import React from "react";
import API from "../../utils/API";
import { golfHelper } from "../../middleware/helper";

class patrick extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        PatrickNBA: "",
        mavericks: "",
        pacers: "",
        thunder: "",
        // ravens: 140,
        // titans: 90,
        // jets: 70,
        // totalNFL: 300,
        // EPL HERE
        city: "",
        leeds: "",
        patEPL: "",
        // NHL HERE
        lightning: "",
        blues: "",
        pacers: "",
        totalNHL: "",
        // Golf here
        rahm: "",
        johnson: "",
        berger: "",
        champ: "",
        wolff: "",
        totalGolf: "",
        // MLB Here
        jays: 86,
        reds: 62,
        guardians: 92,
        totalMLB: 240
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresNHL();
        this.getScoresPGA();
        // this.getScoresMLB();
        this.getScoresNFL();
    }

    getScoresNFL = () => {
        var x = golfHelper();
        this.setState({ buccaneers: x.Buccaneers });
        this.setState({ jets: x.Jets });
        this.setState({ jaguars: x.Jaguars });
        var allNFL = (x.Buccaneers + x.Jets + x.Jaguars)
        this.setState({ totalNFL: allNFL });
    };

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
                var jaysWin;
                var redsWin;
                var guardiansWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    //jays
                    if (fullIndex[i].team.id === 36) {
                        jaysWin = fullIndex[i].games.win.total
                    }

                    //guardians
                    if (fullIndex[i].team.id === 9) {
                        guardiansWin = fullIndex[i].games.win.total
                    }

                    // reds
                    if (fullIndex[i].team.id === 8) {
                        redsWin = fullIndex[i].games.win.total
                    }

                }

                var allMLB = jaysWin + guardiansWin + redsWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ jays: jaysWin });
                this.setState({ guardians: guardiansWin });
                this.setState({ reds: redsWin });

            });
    };

    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 })
        this.setState({ johnson: x.Johnson });
        this.setState({ rahm: x.Rahm });
        this.setState({ berger: x.Berger });
        this.setState({ champ: x.Champ });
        this.setState({ wolff: x.Wolff });
        var allGolf = x.Rahm + x.Johnson + x.Berger + x.Champ + x.Wolff;
        this.setState({ totalGolf: allGolf });
    }


    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // Pacific
                var pacificResults = res.data.records[3].teamRecords;

                console.log(metroResults);
                var lightningWins;
                var lightningOTLS;
                var lightningTotal;
                var bluesWins;
                var bluesOTLS;
                var bluesTotal;
                var predatorsWins;
                var predatorsOTLS;
                var predatorsTotal;
                var allNHL;

                // Here is the blues/pacers for loop. 
                for (var i = 0; i < atlanticResults.length; i++) {

                    // lightning
                    if (atlanticResults[i].team.id === 14) {
                        lightningWins = atlanticResults[i].leagueRecord.wins;
                        lightningOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(lightningWins);
                        console.log(lightningOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // blues
                    if (centralResults[i].team.id === 19) {
                        bluesWins = centralResults[i].leagueRecord.wins;
                        bluesOTLS = centralResults[i].leagueRecord.ot;
                        console.log(bluesWins);
                        console.log(bluesOTLS);
                        console.log("this loop is running")
                    }
                }

                // Here is the loop for the lightning
                for (var i = 0; i < centralResults.length; i++) {

                    // lightning
                    if (centralResults[i].team.id === 18) {
                        predatorsWins = centralResults[i].leagueRecord.wins;
                        predatorsOTLS = centralResults[i].leagueRecord.ot;
                        console.log(predatorsWins);
                        console.log(predatorsOTLS);
                        console.log("this loop is running")
                    }
                }

                // blues total
                bluesTotal = (bluesWins * 2) + bluesOTLS;
                console.log(bluesTotal)

                // lightning total
                lightningTotal = (lightningWins * 2) + lightningOTLS;
                console.log(lightningTotal);

                // blues total
                predatorsTotal = (predatorsWins * 2) + predatorsOTLS;
                console.log(predatorsTotal);

                var allNHL = lightningTotal + bluesTotal + predatorsTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ lightning: lightningTotal });
                this.setState({ blues: bluesTotal });
                this.setState({ predators: predatorsTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                console.log(res.data.response[0].league.standings[0])
                var astonWin;
                var astonTie;
                var leedsWin;
                var leedsTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 66) {
                        astonWin = forLoopArray[i].all.win
                        astonTie = forLoopArray[i].all.draw
                    }

                    if (forLoopArray[i].team.id === 63) {
                        leedsWin = forLoopArray[i].all.win
                        leedsTie = forLoopArray[i].all.draw
                    }
                }

                var astonTotal = (astonWin * 4.25) + (astonTie);
                var leedsTotal = (leedsWin * 4.25) + (leedsTie);

                // Here is the final result
                var patrickPoints = astonTotal + leedsTotal;
                this.setState({ patrickEPL: patrickPoints });

                var astonTotal = (astonWin * 4.25) + (astonTie);
                var leedsTotal = (leedsWin * 4.25) + (leedsTie);

                // Here is the final result
                var patPoints = astonTotal + leedsTotal;
                this.setState({ aston: astonTotal });
                this.setState({ leeds: leedsTotal });
                this.setState({ eplTotal: patPoints });
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
                // console.log(res.data.api.standings);
                var mavericksWin = res.data.api.standings[26].win;
                var thunderWin = res.data.api.standings[19].win;
                var pacersWin = res.data.api.standings[8].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublemavericks = (mavericksWin * 2);
                var doublethunder = (thunderWin * 2);
                var doublepacers = (pacersWin * 2);

                const tempPatrickNBA = this.state.allNBA;

                tempPatrickNBA.push(mavericksWin);
                tempPatrickNBA.push(thunderWin);
                tempPatrickNBA.push(pacersWin);

                var PatrickDoubledScores = tempPatrickNBA.map(team => team * 2);

                var PatrickPoints = 0;

                for (var i = 0; i < PatrickDoubledScores.length; i++) {
                    PatrickPoints += PatrickDoubledScores[i];
                }
                console.log(PatrickPoints);
                this.setState({ PatrickNBA: PatrickPoints });
                this.setState({ mavericks: doublemavericks });
                this.setState({ pacers: doublepacers });
                this.setState({ thunder: doublethunder });
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
                        Patrick
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
                                        <th scope="row">38</th>
                                        <td className="mavs">Dallas Mavericks</td>
                                        <td>{this.state.mavericks}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">172</th>
                                        <td className="pacers">Indiana Pacers</td>
                                        <td>{this.state.pacers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">172</th>
                                        <td className="thunder">OKC Thunder</td>
                                        <td>{this.state.thunder}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.PatrickNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Here is NFL */}
                        <div class="container smallTable">
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
                                                <th scope="row">40</th>
                                                <td className="bucs">Tampa Bay Buccaneers</td>
                                                <td>{this.state.buccaneers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">176</th>
                                                <td className="jets">NY Jets</td>
                                                <td>{this.state.jets}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">183</th>
                                                <td className="jaguars">Jacksonville Jaguars</td>
                                                <td>{this.state.jaguars}</td>
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
                                                <th scope="row">57</th>
                                                <td className="astonV">Aston Villa</td>
                                                <td>{this.state.aston}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">96</th>
                                                <td className="leeds">Leeds</td>
                                                <td>{this.state.leeds}</td>
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
                                                <th scope="row">23</th>
                                                <td className="lightning">Tampa Bay Lightning</td>
                                                <td>{this.state.lightning}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">85</th>
                                                <td className="blues">St. Louis Blues</td>
                                                <td>{this.state.blues}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">111</th>
                                                <td className="predators">Nashville Predators</td>
                                                <td>{this.state.predators}</td>
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
                                                <th scope="row">72</th>
                                                <td className="blueJays">Toronto Blue Jays</td>
                                                <td>{this.state.jays}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">120</th>
                                                <td className="reds">Cincinnati Reds</td>
                                                <td>{this.state.reds}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">126</th>
                                                <td className="indians">Cleveland Guardians</td>
                                                <td>{this.state.guardians}</td>
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
                                                <th scope="row">5</th>
                                                <td className="senators">Jon Rahm</td>
                                                <td>{this.state.rahm}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">16</th>
                                                <td className="senators">Dustin Johnson</td>
                                                <td>{this.state.johnson}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">68</th>
                                                <td className="senators">Daniel Berger</td>
                                                <td>{this.state.berger}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">101</th>
                                                <td className="senators">Matthew Wolff</td>
                                                <td>{this.state.wolff}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">165</th>
                                                <td className="senators">Cameron Champ</td>
                                                <td>{this.state.champ}</td>
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

export default patrick;