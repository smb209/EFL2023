import React from "react";
import API from "../../utils/API";
import { golfHelper } from "../../middleware/helper";
// import { mlbHelper } from "../../middleware/mlb";

class tommy extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        tomNBA: "",
        hawks: "",
        bulls: "",
        pistons: "",
        // NFL Here
        // fourtyNiners: 130,
        // seahawks: 110,
        // patriots: 120,
        // totalNFL: 360,
        // Adding EPL Results Here:
        arsenal: "",
        wolves: "",
        eplTotal: "",
        // NHL States here 
        coyotes: "",
        blueJackets: "",
        canadians: "",
        totalNHL: "",
        // Golf here
        schauffele: "",
        niemann: "",
        mcnealy: "",
        henley: "",
        tringale: "",
        totalGolf: "",
        // MLB Here
        rays: "",
        dBacks: "",
        phillies: "",
        tomMLB: "",
    }

    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresNHL();
        this.getScoresEPL();
        this.getScoresPGA();
        this.getScoresMLB();
        this.getScoresNFL();
    }

    getScoresNFL = () => {
        var x = golfHelper();
        this.setState({ chiefs: x.Chiefs });
        this.setState({ saints: x.Saints });
        this.setState({ vikings: x.Vikings });
        var allNFL = (x.Chiefs + x.Saints + x.Vikings)
        this.setState({ totalNFL: allNFL });
    }

    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 })
        this.setState({ niemann: x.Niemann });
        this.setState({ schauffele: x.Schauffele });
        this.setState({ mcnealy: x.Mcnealy });
        this.setState({ henley: x.Henley });
        this.setState({ tringale: x.Tringale });
        var allGolf = x.Tringale + x.Niemann + x.Schauffele + x.Henley + x.Niemann;
        this.setState({ totalGolf: allGolf });
    }

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
                // Tommy MLB 
                var raysWin;
                var philliesWin;
                var dBacksWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // rays
                    if (fullIndex[i].team.id === 34) {
                        raysWin = fullIndex[i].games.win.total
                    }

                    // phillies
                    if (fullIndex[i].team.id === 27) {
                        philliesWin = fullIndex[i].games.win.total
                    }

                    // dBacks
                    if (fullIndex[i].team.id === 2) {
                        dBacksWin = fullIndex[i].games.win.total
                    }

                }
                var totalTom = raysWin + dBacksWin + philliesWin;
                this.setState({ tomMLB: totalTom });
                this.setState({ rays: raysWin });
                this.setState({ phillies: philliesWin });
                this.setState({ dBacks: dBacksWin });

            });
    };

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // Pacific
                var pacificResults = res.data.records[3].teamRecords;

                console.log(atlanticResults)
                var blueJacketsWins;
                var blueJacketsOTLS;
                var blueJacketsTotal;
                var coyotesWins;
                var coyotesOTLS;
                var coyotesTotal;
                var canadiansWins;
                var canadiansOTLS;
                var canadiansTotal;
                var totalNHL;

                // Here is the blueJackets for loop. 
                for (var i = 0; i < metroResults.length; i++) {

                    if (metroResults[i].team.id === 29) {
                        blueJacketsWins = metroResults[i].leagueRecord.wins;
                        blueJacketsOTLS = metroResults[i].leagueRecord.ot;
                        // console.log(blueJacketsWins);
                        // console.log(blueJacketsOTLS);
                        // console.log("this loop is running")
                    }
                }
                // coyotes total
                blueJacketsTotal = (blueJacketsWins * 2) + blueJacketsOTLS;
                console.log(blueJacketsTotal)

                // Here is the loop for the canadians and blueJackets, who are in the same division. 
                for (var i = 0; i < centralResults.length; i++) {

                    // coyotes
                    if (centralResults[i].team.id === 53) {
                        coyotesWins = centralResults[i].leagueRecord.wins;
                        coyotesOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(coyotesWins);
                        // console.log(coyotesOTLS);
                        // console.log("this loop is running")
                    }
                }

                // Here is the blueJackets for loop. 
                for (var i = 0; i < atlanticResults.length; i++) {

                    // canadians
                    if (atlanticResults[i].team.id === 8) {
                        canadiansWins = atlanticResults[i].leagueRecord.wins;
                        canadiansOTLS = atlanticResults[i].leagueRecord.ot;
                        // console.log(canadiansWins);
                        // console.log(canadiansOTLS);
                        // console.log("this loop is running")
                    }
                }
                // blueJackets total
                blueJacketsTotal = (blueJacketsWins * 2) + blueJacketsOTLS;
                console.log(blueJacketsTotal)

                // coyotes total
                coyotesTotal = (coyotesWins * 2) + coyotesOTLS;
                console.log(coyotesTotal);

                // canadians total
                canadiansTotal = (canadiansWins * 2) + canadiansOTLS;
                console.log(canadiansTotal);

                var allNHL = blueJacketsTotal + canadiansTotal + coyotesTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ blueJackets: blueJacketsTotal });
                this.setState({ canadians: canadiansTotal });
                this.setState({ coyotes: coyotesTotal });

            })
            .catch(error => {
                console.log(error)
            });
    }

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                // HERE ARE EPL TEAMS FOR TOMMY. 
                //  arsenal
                console.log(res.data.response[0].league.standings[0])
                var liverpoolWin;
                var liverpoolTie;
                var brightonWin;
                var brightonTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 40) {
                        liverpoolWin = forLoopArray[i].all.win
                        liverpoolTie = forLoopArray[i].all.draw
                    }

                    if (forLoopArray[i].team.id === 51) {
                        brightonWin = forLoopArray[i].all.win
                        brightonTie = forLoopArray[i].all.draw
                    }
                }

                var liverpoolTotal = (liverpoolWin * 4.25) + (liverpoolTie);
                var brightonTotal = (brightonWin * 4.25) + (brightonTie);

                // Here is the final result
                var tomPoints = liverpoolTotal + brightonTotal;
                this.setState({ tomEPL: tomPoints });
                var liverpoolTotal = (liverpoolWin * 4.25) + (liverpoolTie);
                var brightonTotal = (brightonWin * 4.25) + (brightonTie);

                // Here is the final result
                var tomPoints = liverpoolTotal + brightonTotal;
                this.setState({ liverpool: liverpoolTotal });
                this.setState({ brighton: brightonTotal });
                this.setState({ eplTotal: tomPoints });

                // And now I need to run the totalscores function so that it can get logged. 
                // this.totalScores();

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
                var hawksWin = res.data.api.standings[11].win;
                var bullsWin = res.data.api.standings[7].win;
                var pistonsWin = res.data.api.standings[9].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublehawks = (hawksWin * 2);
                var doublebulls = (bullsWin * 2);
                var doublepistons = (pistonsWin * 2);

                const tempTomNBA = this.state.allNBA;

                tempTomNBA.push(hawksWin);
                tempTomNBA.push(bullsWin);
                tempTomNBA.push(pistonsWin);

                var tomDoubledScores = tempTomNBA.map(team => team * 2);

                var TomPoints = 0;

                for (var i = 0; i < tomDoubledScores.length; i++) {
                    TomPoints += tomDoubledScores[i];
                }
                console.log(TomPoints);
                this.setState({ tomNBA: TomPoints });
                this.setState({ hawks: doublehawks });
                this.setState({ bulls: doublebulls });
                this.setState({ pistons: doublepistons });
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
                                <a class="nav-link" href="/Home">Standings</a>
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
                        Tommy
                    </div>
                </div>
                {/* Starting my new tables here */}
                <div class="container smallTable">
                    <div class="row">
                        <div class="col">
                            {/* Here is NBA */}
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
                                        <th scope="row">46</th>
                                        <td className="hawks">Atlanta Hawks</td>
                                        <td>{this.state.hawks}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">55</th>
                                        <td className="bulls">Chicago Bulls</td>
                                        <td>{this.state.bulls}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">109</th>
                                        <td className="pistons">Detroit Pistons</td>
                                        <td>{this.state.pistons}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.tomNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
                                    {/* Here is NFL */}
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
                                                <th scope="row">9</th>
                                                <td className="chiefs">Kansas City Chiefs</td>
                                                <td>{this.state.chiefs}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">76</th>
                                                <td className="saints">New Orleans Saints</td>
                                                <td>{this.state.saints}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">122</th>
                                                <td className="vikings">Minnesota Vikings</td>
                                                <td>{this.state.vikings}</td>
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
                                                <th scope="row">9</th>
                                                <td className="liverpool">Liverpool</td>
                                                <td>{this.state.liverpool}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">24</th>
                                                <td className="brighton">Brighton and Hove Albion</td>
                                                <td>{this.state.brighton}</td>
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
                                                <th scope="row">160</th>
                                                <td className="blueJackets">Columbus Blue Jackets</td>
                                                <td>{this.state.blueJackets}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">178</th>
                                                <td className="coyotes">Phoenix Coyotes</td>
                                                <td>{this.state.coyotes}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">184</th>
                                                <td className="canadiens">Montreal Canadians</td>
                                                <td>{this.state.canadians}</td>
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
                                                <th scope="row">76</th>
                                                <td className="phillies">Philadelphia Phillies</td>
                                                <td>{this.state.phillies}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">90</th>
                                                <td className="rays">Tampa Bay Rays</td>
                                                <td>{this.state.rays}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">112</th>
                                                <td className="diamondbacks">Arizona Diamondbacks</td>
                                                <td>{this.state.dBacks}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.tomMLB}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Golf Here */}

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
                                                <th scope="row">12</th>
                                                <td className="canadians">Xander Schauffele</td>
                                                <td>{this.state.schauffele}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">112</th>
                                                <td className="canadians">Joaquin Niemann</td>
                                                <td>{this.state.niemann}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">141</th>
                                                <td className="canadians">Maverick McNealy</td>
                                                <td>{this.state.mcnealy}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">163</th>
                                                <td className="canadians">Russell Henley</td>
                                                <td>{this.state.henley}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">178</th>
                                                <td className="canadians">Cameron Tringale</td>
                                                <td>{this.state.tringale}</td>
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

export default tommy;