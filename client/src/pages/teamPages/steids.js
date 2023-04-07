import React from "react";
import API from "../../utils/API";
import { golfHelper } from "../../middleware/helper";

class steids extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arpadres here. Each person's array will include three NBA teams. 
        allNBA: [],
        steidsNBA: "",
        nuggets: "",
        kings: "",
        spurs: "",
        // browns: 60,
        // steelers: 80,
        // buccaneers: 70,
        // totalNFL: 210,
        // EPL Teams Here
        manU: "",
        watford: "",
        steidsEPL: "",
        // NHL
        oilers: "",
        panthers: "",
        leafs: "",
        totalNHL: "",
        // Golf here
        english: "",
        burns: "",
        conners: "",
        kokrak: "",
        kim: "",
        totalGolf: "",
        // MLB Here
        padres: "",
        pirates: "",
        marlins: "",
        totalMLB: ""
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresNHL();
        this.getScoresPGA();
        this.getScoresMLB();
        this.getScoresNFL();
    };

    getScoresNFL = () => {
        var x = golfHelper();
        this.setState({ panthers: x.Panthers });
        this.setState({ bears: x.Bears });
        this.setState({ ravens: x.Ravens });
        var allNFL = (x.Panthers + x.Bears + x.Ravens)
        this.setState({ totalNFL: allNFL });
    }

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
                // Steids MLB 
                var padresWin;
                var marlinsWin;
                var piratesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // padres
                    if (fullIndex[i].team.id === 30) {
                        padresWin = fullIndex[i].games.win.total
                    }

                    //marlins
                    if (fullIndex[i].team.id === 19) {
                        marlinsWin = fullIndex[i].games.win.total
                    }

                    // pirates
                    if (fullIndex[i].team.id === 28) {
                        piratesWin = fullIndex[i].games.win.total
                    }

                }

                var allMLB = padresWin + marlinsWin + piratesWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ padres: padresWin });
                this.setState({ marlins: marlinsWin });
                this.setState({ pirates: piratesWin });

            });
    };

    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 })
        this.setState({ burns: x.Burns });
        this.setState({ english: x.English });
        this.setState({ conners: x.Conners });
        this.setState({ kokrak: x.Kokrak });
        this.setState({ kim: x.Kim });
        var allGolf = x.Kim + x.Burns + x.English + x.Kokrak + x.Conners;
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
                // Pacific
                var pacificResults = res.data.records[3].teamRecords;

                console.log(atlanticResults)
                var oilersWins;
                var oilersOTLS;
                var oilersTotal;
                var leafsWins;
                var leafsOTLS;
                var leafsTotal;
                var panthersWins;
                var panthersOTLS;
                var panthersTotal;
                var allNHL;

                // Here is the oilers for loop. 
                for (var i = 0; i < pacificResults.length; i++) {

                    if (pacificResults[i].team.id === 22) {
                        oilersWins = pacificResults[i].leagueRecord.wins;
                        oilersOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(oilersWins);
                        console.log(oilersOTLS);
                        console.log("this loop is running")
                    }

                }

                for (var i = 0; i < atlanticResults.length; i++) {
                    // panthers
                    if (atlanticResults[i].team.id === 10) {
                        leafsWins = atlanticResults[i].leagueRecord.wins;
                        leafsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(leafsWins);
                        console.log(leafsOTLS);
                        console.log("this loop is running")
                    }
                }

                // Here is the loop for the panthers
                for (var i = 0; i < atlanticResults.length; i++) {

                    // oilers
                    if (atlanticResults[i].team.id === 13) {
                        panthersWins = atlanticResults[i].leagueRecord.wins;
                        panthersOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(panthersWins);
                        console.log(panthersOTLS);
                        console.log("this loop is running")
                    }
                }

                // oilers total
                oilersTotal = (oilersWins * 2) + oilersOTLS;
                console.log(oilersTotal);

                // leafs total
                leafsTotal = (leafsWins * 2) + leafsOTLS;
                console.log(leafsTotal)

                // panthers total
                panthersTotal = (panthersWins * 2) + panthersOTLS;
                console.log(panthersTotal);

                var allNHL = oilersTotal + panthersTotal + leafsTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ oilers: oilersTotal });
                this.setState({ panthers: panthersTotal });
                this.setState({ leafs: leafsTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                console.log(res.data.response[0].league.standings[0])
                // Steids EPL here
                var manUWin;
                var manUTie;
                var fulhamWin;
                var fulhamTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 33) {
                        manUWin = forLoopArray[i].all.win
                        manUTie = forLoopArray[i].all.draw
                    }

                    if (forLoopArray[i].team.id === 36) {
                        fulhamWin = forLoopArray[i].all.win
                        fulhamTie = forLoopArray[i].all.draw
                    }
                }

                var manUTotal = (manUWin * 4.25) + (manUTie);
                var fulhamTotal = (fulhamWin * 4.25) + (fulhamTie);

                // Here is the final result
                var steidsPoints = manUTotal + fulhamTotal;
                this.setState({ steidsEPL: steidsPoints });

                var manUTotal = (manUWin * 4.25) + (manUTie);
                var fulhamTotal = (fulhamWin * 4.25) + (fulhamTie);

                // Here is the final result
                var steidsPoints = manUTotal + fulhamTotal;
                this.setState({ manU: manUTotal });
                this.setState({ fulham: fulhamTotal });
                this.setState({ eplTotal: steidsPoints });

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
                var nuggetsWin = res.data.api.standings[15].win;
                var kingsWin = res.data.api.standings[20].win;
                var spursWin = res.data.api.standings[28].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublenuggets = (nuggetsWin * 2);
                var doublekings = (kingsWin * 2);
                var doublespurs = (spursWin * 2);

                const tempsteidsNBA = this.state.allNBA;

                tempsteidsNBA.push(nuggetsWin);
                tempsteidsNBA.push(kingsWin);
                tempsteidsNBA.push(spursWin);

                var steidsDoubledScores = tempsteidsNBA.map(team => team * 2);

                var steidsPoints = 0;

                for (var i = 0; i < steidsDoubledScores.length; i++) {
                    steidsPoints += steidsDoubledScores[i];
                }
                // console.log(steidsPoints);
                this.setState({ steidsNBA: steidsPoints });
                this.setState({ nuggets: doublenuggets });
                this.setState({ kings: doublekings });
                this.setState({ spurs: doublespurs });
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
                        Steids
                    </div>
                </div>
                {/* Starting my new table here */}
                <div class="container smallTable">
                    <div class="row">
                        {/* Here is NBA */}
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
                                        <th scope="row">22</th>
                                        <td className="nuggets">Denver Nuggets</td>
                                        <td>{this.state.nuggets}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">80</th>
                                        <td className="kings">Sacramento Kings</td>
                                        <td>{this.state.kings}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">161</th>
                                        <td className="spurs">San Antonio Spurs</td>
                                        <td>{this.state.spurs}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.steidsNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Here is NFL */}
                        {/* <div class="container smallTable">
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
                                                <th scope="row">26</th>
                                                <td className="ravens">Baltimore Ravens</td>
                                                <td>{this.state.ravens}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">117</th>
                                                <td className="bears">Chicago Bears</td>
                                                <td>{this.state.bears}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">127</th>
                                                <td className="panthers">Carolina Panthers</td>
                                                <td>{this.state.panthers}</td>
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
                        </div> */}


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
                                                <th scope="row">17</th>
                                                <td className="manU">Manchester United</td>
                                                <td>{this.state.manU}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">105</th>
                                                <td className="fulham">Fulham</td>
                                                <td>{this.state.fulham}</td>
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
                                                <th scope="row">41</th>
                                                <td className="leafs">Toronto Maple Leafs</td>
                                                <td>{this.state.leafs}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">60</th>
                                                <td className="oilers">Edmonton Oilers</td>
                                                <td>{this.state.oilers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">61</th>
                                                <td className="panthers">Carolina Panthers</td>
                                                <td>{this.state.panthers}</td>
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
                                                <th scope="row">39</th>
                                                <td className="padres">San Diego Padres</td>
                                                <td>{this.state.padres}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">171</th>
                                                <td className="pirates">Pittsburgh Pirates</td>
                                                <td>{this.state.pirates}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">136</th>
                                                <td className="marlins">Miami Marlins</td>
                                                <td>{this.state.marlins}</td>
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
                                                <th scope="row">48</th>
                                                <td className="senators">Harris English</td>
                                                <td>{this.state.english}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">74</th>
                                                <td className="senators">Sam Burns</td>
                                                <td>{this.state.burns}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">87</th>
                                                <td className="senators">Corey Conners</td>
                                                <td>{this.state.conners}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">134</th>
                                                <td className="senators">Jason Kokrak</td>
                                                <td>{this.state.kokrak}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">168</th>
                                                <td className="senators">Si Woo Kim</td>
                                                <td>{this.state.kim}</td>
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

export default steids;