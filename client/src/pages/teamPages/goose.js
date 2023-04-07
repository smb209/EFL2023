import React from "react";
import API from "../../utils/API";
import { golfHelper } from "../../middleware/helper";

class goose extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arangels here. Each person's array will include three NBA teams. 
        allNBA: [],
        gooseNBA: "",
        celtics: "",
        timberwolves: "",
        knicks: "",
        // chiefs: 120,
        // panthers: 50,
        // bengals: 20,
        // totalNFL: 190,
        // EPL
        crystal: "",
        westham: "",
        gooseEPL: "",
        // NHL Here
        redWings: "",
        blackhawks: "",
        bruins: "",
        // Golf here
        thomas: "",
        hovland: "",
        oosthuizen: "",
        harman: "",
        grillo: "",
        totalGolf: "",
        // MLB Here
        angels: 73,
        mets: 101,
        twins: 78,
        totalMLB: 252

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
        this.setState({ bills: x.Bills });
        this.setState({ eagles: x.Eagles });
        this.setState({ giants: x.Giants });
        var allNFL = (x.Bills + x.Eagles + x.Giants)
        this.setState({ totalNFL: allNFL });
    };

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
                var angelsWin;
                var metsWin;
                var twinsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // angels
                    if (fullIndex[i].team.id === 17) {
                        angelsWin = fullIndex[i].games.win.total
                    }

                    // twins
                    if (fullIndex[i].team.id === 22) {
                        twinsWin = fullIndex[i].games.win.total
                    }

                    // mets
                    if (fullIndex[i].team.id === 24) {
                        metsWin = fullIndex[i].games.win.total
                    }

                }

                var allMLB = angelsWin + twinsWin + metsWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ angels: angelsWin });
                this.setState({ twins: twinsWin });
                this.setState({ mets: metsWin });

            });
    };

    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 })
        this.setState({ hovland: x.Hovland });
        this.setState({ thomas: x.Thomas });
        this.setState({ oosthuizen: x.Oosthuizen });
        this.setState({ harman: x.Harman });
        this.setState({ grillo: x.Grillo });
        var allGolf = x.Grillo + x.Hovland + x.Oosthuizen + x.Harman + x.Thomas;
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

                console.log(centralResults);
                var redWingsWins;
                var redWingsOTLS;
                var redWingsTotal;
                var blackhawksWins;
                var blackhawksOTLS;
                var blackhawksTotal;
                var bruinsWins;
                var bruinsOTLS;
                var bruinsTotal;
                var allNHL;

                // Here is the redWings and blackhawks loop. 
                for (var i = 0; i < atlanticResults.length; i++) {
                    // redWings
                    if (atlanticResults[i].team.id === 17) {
                        redWingsWins = atlanticResults[i].leagueRecord.wins;
                        redWingsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(redWingsWins);
                        console.log(redWingsOTLS);
                        console.log("this loop is running")
                    }

                    // blackhawks
                    if (centralResults[i].team.id === 16) {
                        blackhawksWins = centralResults[i].leagueRecord.wins;
                        blackhawksOTLS = centralResults[i].leagueRecord.ot;
                        console.log(blackhawksWins);
                        console.log(blackhawksOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < atlanticResults.length; i++) {

                    // bruins
                    if (atlanticResults[i].team.id === 6) {
                        bruinsWins = atlanticResults[i].leagueRecord.wins;
                        bruinsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(bruinsWins);
                        console.log(bruinsOTLS);
                        console.log("this loop is running")
                    }
                }

                // redWings total
                redWingsTotal = (redWingsWins * 2) + redWingsOTLS;
                console.log(redWingsTotal);

                // blackhawks total
                blackhawksTotal = (blackhawksWins * 2) + blackhawksOTLS;
                console.log(blackhawksTotal)

                // bruins total
                bruinsTotal = (bruinsWins * 2) + bruinsOTLS;
                console.log(bruinsTotal);

                var allNHL = redWingsTotal + blackhawksTotal + bruinsTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ redWings: redWingsTotal });
                this.setState({ blackhawks: blackhawksTotal });
                this.setState({ bruins: bruinsTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                // Goose EPL here
                var arsenalWin;
                var arsenalTie;
                var crystalPalaceWin;
                var crystalPalaceTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 42) {
                        arsenalWin = forLoopArray[i].all.win
                        arsenalTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + arsenalWin);
                        console.log("here are the ties" + arsenalTie);
                    }

                    if (forLoopArray[i].team.id === 52) {
                        crystalPalaceWin = forLoopArray[i].all.win
                        crystalPalaceTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + crystalPalaceWin);
                        console.log("here are the ties" + crystalPalaceTie);
                    }
                }

                var arsenalTotal = (arsenalWin * 4.25) + (arsenalTie);
                var crystalPalaceTotal = (crystalPalaceWin * 4.25) + (crystalPalaceTie);

                // Here is the final result
                var goosePoints = crystalPalaceTotal + arsenalTotal;
                this.setState({ crystal: crystalPalaceTotal });
                this.setState({ arsenal: arsenalTotal });
                this.setState({ eplTotal: goosePoints });

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
                var celticsWin = res.data.api.standings[0].win;
                var timberwolvesWin = res.data.api.standings[16].win;
                var knicksWin = res.data.api.standings[2].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doubleceltics = (celticsWin * 2);
                var doubletimberwolves = (timberwolvesWin * 2);
                var doubleKnicks = (knicksWin * 2);

                const tempGooseNBA = this.state.allNBA;

                tempGooseNBA.push(celticsWin);
                tempGooseNBA.push(timberwolvesWin);
                tempGooseNBA.push(knicksWin);

                var GooseDoubledScores = tempGooseNBA.map(team => team * 2);

                var GoosePoints = 0;

                for (var i = 0; i < GooseDoubledScores.length; i++) {
                    GoosePoints += GooseDoubledScores[i];
                }
                console.log(GoosePoints);
                this.setState({ gooseNBA: GoosePoints });
                this.setState({ celtics: doubleceltics });
                this.setState({ timberwolves: doubletimberwolves });
                this.setState({ knicks: doubleKnicks });
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
                        Goose
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
                                        <th scope="row">18</th>
                                        <td className="celtics">Boston Celtics</td>
                                        <td>{this.state.celtics}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">34</th>
                                        <td className="tWolves">Minnesota Timberwolves</td>
                                        <td>{this.state.timberwolves}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">70</th>
                                        <td className="knicks">New York Knicks</td>
                                        <td>{this.state.knicks}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.gooseNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Here is NFL */}
                        <div class="container">
                            <div class="row">
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
                                                <th scope="row">10</th>
                                                <td className="bills">Buffalo Bills</td>
                                                <td>{this.state.bills}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">114</th>
                                                <td className="eagles">Philadelphia Eagles</td>
                                                <td>{this.state.eagles}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">138</th>
                                                <td className="giants">New York Giants</td>
                                                <td>{this.state.giants}</td>
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
                                                <th scope="row">71</th>
                                                <td className="crystalP">Crystal Palace</td>
                                                <td>{this.state.crystal}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td className="arsenal">Arsenal</td>
                                                <td>{this.state.arsenal}</td>
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
                                                <th scope="row">82</th>
                                                <td className="bruins">Boston Bruins</td>
                                                <td>{this.state.bruins}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">119</th>
                                                <td className="redwings">Detroit Red Wings</td>
                                                <td>{this.state.redWings}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">158</th>
                                                <td className="blackhawks">Chicago Blackhawks</td>
                                                <td>{this.state.blackhawks}</td>
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
                                                <th scope="row">107</th>
                                                <td className="angels">Anaheim Angels</td>
                                                <td>{this.state.angels}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">123</th>
                                                <td className="mets">NY Mets</td>
                                                <td>{this.state.mets}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">150</th>
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
                                                <th scope="row">11</th>
                                                <td className="senators">Justin Thomas</td>
                                                <td>{this.state.thomas}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">29</th>
                                                <td className="senators">Viktor Hovland</td>
                                                <td>{this.state.hovland}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">54</th>
                                                <td className="senators">Louis Oosthuizen</td>
                                                <td>{this.state.oosthuizen}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">174</th>
                                                <td className="senators">Brian Harman</td>
                                                <td>{this.state.harman}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">181</th>
                                                <td className="senators">Emiliano Grillo</td>
                                                <td>{this.state.grillo}</td>
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

export default goose;