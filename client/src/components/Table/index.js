import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import API from "../../utils/API";
// import al from "../../pages/teamPages/al";
import { golfHelper } from "../../middleware/helper";

// This table is being used for the Home Page currently, but not for the My Teams page. I am going to create that table separately. 
class Table extends Component {

    //since we are extending class Table so we have to use super in order to override Component class constructor
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        tomNBA: "",
        patrickNBA: "",
        jamesNBA: "",
        neptuneNBA: "",
        djNBA: "",
        gooseNBA: "",
        alNBA: "",
        joeNBA: "",
        steidsNBA: "",
        benNBA: "",
        // Putting EPL arrays here. 
        allEPL: [],
        tomEPL: "",
        patEPL: "",
        jamesEPL: "",
        neptuneEPL: "",
        djEPL: "",
        gooseEPL: "",
        alEPL: "",
        joeEPL: "",
        steidsEPL: "",
        eresEPL: "",
        // Putting NFL results here, even though I actually don't need to dynamically render them right now.
        allNFL: [],
        tomNFL: "",
        patNFL: "",
        patFixedFootball: "",
        jamesNFL: "",
        neptuneNFL: "",
        djNFL: "",
        gooseNFL: "",
        alNFL: "",
        alFixedFootball: "",
        joeNFL: "",
        steidsNFL: "",
        eresNFL: "",
        // NHL Here: 
        tomNHL: "",
        patNHL: "",
        jamesNHL: "",
        neptuneNHL: "",
        djNHL: "",
        gooseNHL: "",
        alNHL: "",
        joeNHL: "",
        steidsNHL: "",
        eresNHL: "",
        // PGA Here:
        alPGA: "",
        tomPGA: "",
        patPGA: "",
        steidsPGA: "",
        neptunePGA: "",
        jamesPGA: "",
        joePGA: "",
        djPGA: "",
        eresPGA: "",
        goosePGA: "",
        // MLB
        // PGA Here:
        // alMLB: 195,
        // tomMLB: 268,
        // patMLB: 240,
        // steidsMLB: 240,
        // neptuneMLB: 204,
        // jamesMLB: 286,
        // joeMLB: 244,
        // djMLB: 237,
        // eresMLB: 258,
        // gooseMLB: 252,
        // Total Points here. 
        tomTotal: "",
        patTotal: "",
        jamesTotal: "",
        neptuneTotal: "",
        djTotal: "",
        gooseTotal: "",
        alTotal: "",
        joeTotal: "",
        steidsTotal: "",
        benTotal: "",
        // tomBonus: 200,
        // patBonus: 200,
        // gooseBonus: 220,
        // joeBonus: 190,
        // steidsBonus: 190,
        // neptuneBonus: 180,
        // alBonus: 220,
        // eresBonus: 200,
        // djBonus: 200,
        // jamesBonus: 200

    }

    datatablePage = () => {

        const data = {
            columns: [
                {
                    label: 'Team',
                    field: 'team',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'EPL',
                    field: 'epl',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'NFL',
                    field: 'nfl',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'NBA',
                    field: 'nba',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'PGA',
                    field: 'pga',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'NHL',
                    field: 'nhl',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'MLB',
                    field: 'mlb',
                    sort: 'asc',
                    width: 150
                },
                // {
                //     label: 'Bonus',
                //     field: 'bonus',
                //     sort: 'asc',
                //     width: 150
                // },
                {
                    label: 'Total',
                    field: 'total',
                    sort: 'asc',
                    width: 150
                }
            ],
            rows: [
                {
                    team: 'Tommy',
                    epl: this.state.tomEPL,
                    nfl: this.state.tomNFL,
                    pga: this.state.tomPGA,
                    nba: this.state.tomNBA,
                    nhl: this.state.tomNHL,
                    mlb: this.state.tomMLB,
                    bonus: this.state.tomBonus,
                    total: this.state.tomTotal
                },
                {
                    team: 'Pat/JP',
                    epl: this.state.patEPL,
                    nfl: this.state.patFixedFootball,
                    pga: this.state.patPGA,
                    nba: this.state.patrickNBA,
                    nhl: this.state.patNHL,
                    mlb: this.state.patMLB,
                    bonus: this.state.patBonus,
                    total: this.state.patTotal
                },
                {
                    team: 'James',
                    epl: this.state.jamesEPL,
                    nfl: this.state.jamesNFL,
                    pga: this.state.jamesPGA,
                    nba: this.state.jamesNBA,
                    nhl: this.state.jamesNHL,
                    mlb: this.state.jamesMLB,
                    bonus: this.state.jamesBonus,
                    total: this.state.jamesTotal
                },
                {
                    team: 'Goose',
                    epl: this.state.gooseEPL,
                    nfl: this.state.gooseNFL,
                    pga: this.state.goosePGA,
                    nba: this.state.gooseNBA,
                    nhl: this.state.gooseNHL,
                    mlb: this.state.gooseMLB,
                    bonus: this.state.gooseBonus,
                    total: this.state.gooseTotal
                },
                {
                    team: 'Neptune',
                    epl: this.state.neptuneEPL,
                    nfl: this.state.neptuneFixedFootball,
                    pga: this.state.neptunePGA,
                    nba: this.state.neptuneNBA,
                    nhl: this.state.neptuneNHL,
                    mlb: this.state.neptuneMLB,
                    bonus: this.state.neptuneBonus,
                    total: this.state.neptuneTotal
                },
                {
                    team: 'Joe',
                    epl: this.state.joeEPL,
                    nfl: this.state.joeNFL,
                    pga: this.state.joePGA,
                    nba: this.state.joeNBA,
                    nhl: this.state.joeNHL,
                    mlb: this.state.joeMLB,
                    bonus: this.state.joeBonus,
                    total: this.state.joeTotal
                },
                {
                    team: 'Eres',
                    epl: this.state.eresEPL,
                    nfl: this.state.eresNFL,
                    pga: this.state.eresPGA,
                    nba: this.state.benNBA,
                    nhl: this.state.eresNHL,
                    mlb: this.state.eresMLB,
                    bonus: this.state.eresBonus,
                    total: this.state.benTotal
                },
                {
                    team: 'DJ',
                    epl: this.state.djEPL,
                    nfl: this.state.djNFL,
                    pga: this.state.djPGA,
                    nba: this.state.djNBA,
                    nhl: this.state.djNHL,
                    mlb: this.state.djMLB,
                    bonus: this.state.djBonus,
                    total: this.state.djTotal
                },
                {
                    team: 'Steids',
                    epl: this.state.steidsEPL,
                    nfl: this.state.steidsFixedFootball,
                    pga: this.state.steidsPGA,
                    nba: this.state.steidsNBA,
                    nhl: this.state.steidsNHL,
                    mlb: this.state.steidsMLB,
                    bonus: this.state.steidsBonus,
                    total: this.state.steidsTotal
                },
                {
                    team: 'Al',
                    epl: this.state.alEPL,
                    nfl: this.state.alFixedFootball,
                    pga: this.state.alPGA,
                    nba: this.state.alNBA,
                    nhl: this.state.alNHL,
                    mlb: this.state.alMLB,
                    bonus: this.state.alBonus,
                    total: this.state.alTotal
                },

            ]
        };

        return (
            <MDBDataTable
                striped
                bordered
                small
                data={data}
                paging={false}
                searching={false}
            />
        );
    }

    componentDidMount() {
        // first we scrape. Inside the function, need to post to the Mongo DB. 
        this.getScoresNBA();
        // Now, once the updates have applied, we call the getteams. This will show updated results. I'm gonna freeze this for the time being so I don't make a million API calls. 
        this.getScoresEPL();
        // I'm gonna run this as a function even though these are just dead numbers at this point (since the NFL regular season ended)
        // this.getScoresNFL();
        // running NHL here
        this.getScoresNHL();
        // MLB Here 
        // this.getScoresMLB();
        this.getScoresPGA();

    };

    // Let's create a function to add up all the scores also. But, I need that to run at the end of all the other functions, otherwise I will just get a blank slate back. 

    totalScores = () => {

        // Totals for Tom 
        var tomTotalPoints =
            parseInt((this.state.tomNBA)) +
            parseInt((this.state.tomNHL)) +
            parseInt((this.state.tomPGA)) +
            // parseInt((this.state.tomNFL)) +
            parseInt((this.state.tomEPL))
            // parseInt((this.state.tomMLB)) +
            // Bonus
            // parseInt((this.state.tomBonus))
        this.setState({ tomTotal: tomTotalPoints });
        console.log(tomTotalPoints);

        // Totals for Pat 
        var patTotalPoints =
            parseInt((this.state.patrickNBA)) +
            parseInt((this.state.patNHL)) +
            parseInt((this.state.patPGA)) +
            // parseInt((this.state.patNFL)) +
            parseInt((this.state.patEPL)) 
            // parseInt((this.state.patMLB)) +
            // // Bonus
            // parseInt((this.state.patBonus))
        this.setState({ patTotal: patTotalPoints });

        // Totals for JAmes
        var jamesTotalPoints =
            parseInt((this.state.jamesNBA)) +
            parseInt((this.state.jamesNHL)) +
            parseInt((this.state.jamesPGA)) +
            // parseInt((this.state.jamesNFL)) +
            parseInt((this.state.jamesEPL)) 
            // parseInt((this.state.jamesMLB)) +
            // parseInt((this.state.jamesBonus))
        // Bonus
        this.setState({ jamesTotal: jamesTotalPoints });

        // Totals for Neptune
        var neptuneTotalPoints =
            parseInt((this.state.neptuneNBA)) +
            parseInt((this.state.neptuneNHL)) +
            parseInt((this.state.neptunePGA)) +
            // parseInt((this.state.neptuneNFL)) +
            parseInt((this.state.neptuneEPL)) 
            // parseInt((this.state.neptuneMLB)) +
            // // Bonus
            // parseInt((this.state.neptuneBonus))
        this.setState({ neptuneTotal: neptuneTotalPoints });

        // Totals for DJ
        var djTotalPoints =
            parseInt((this.state.djNBA)) +
            parseInt((this.state.djNHL)) +
            parseInt((this.state.djPGA)) +
            // parseInt((this.state.djNFL)) +
            parseInt((this.state.djEPL)) 
            // parseInt((this.state.djMLB)) +
            // // Bonus
            // parseInt((this.state.djBonus))
        this.setState({ djTotal: djTotalPoints });

        // Totals for Goose 
        var gooseTotalPoints =
            parseInt((this.state.gooseNBA)) +
            parseInt((this.state.gooseNHL)) +
            parseInt((this.state.goosePGA)) +
            // parseInt((this.state.gooseNFL)) +
            parseInt((this.state.gooseEPL)) 
            // parseInt((this.state.gooseMLB)) +
            // // Bonus
            // parseInt((this.state.gooseBonus))
        this.setState({ gooseTotal: gooseTotalPoints });

        // Totals for Al
        var alTotalPoints =
            parseInt((this.state.alNBA)) +
            parseInt((this.state.alNHL)) +
            parseInt((this.state.alPGA)) +
            // parseInt((this.state.alNFL)) +
            parseInt((this.state.alEPL)) 
            // parseInt((this.state.alMLB)) +
            // parseInt((this.state.alBonus))
        // Bonus
        this.setState({ alTotal: alTotalPoints });

        // Totals for Joe
        var joeTotalPoints =
            parseInt((this.state.joeNBA)) +
            parseInt((this.state.joeNHL)) +
            parseInt((this.state.joePGA)) +
            // parseInt((this.state.joeNFL)) +
            parseInt((this.state.joeEPL)) 
            // parseInt((this.state.joeMLB)) +
            // parseInt((this.state.joeBonus))
        this.setState({ joeTotal: joeTotalPoints });

        // Totals for Steids
        var steidsTotalPoints =
            parseInt((this.state.steidsNBA)) +
            parseInt((this.state.steidsNHL)) +
            parseInt((this.state.steidsPGA)) +
            // parseInt((this.state.steidsNFL)) +
            parseInt((this.state.steidsEPL)) 
            // parseInt((this.state.steidsMLB)) +
            // parseInt((this.state.steidsBonus))
        // Bonus
        this.setState({ steidsTotal: steidsTotalPoints });

        // Totals for Ben - now Mark Eres 
        var benTotalPoints =
            parseInt((this.state.eresNBA)) +
            parseInt((this.state.eresNHL)) +
            parseInt((this.state.eresPGA)) +
            // parseInt((this.state.eresNFL)) +
            parseInt((this.state.eresEPL)) 
            // parseInt((this.state.eresMLB)) +
            // parseInt((this.state.eresBonus))
        // Bonus
        this.setState({ benTotal: benTotalPoints });
    };

    // NFL Starting here. 

    getScoresNFL = () => {
        var x = golfHelper();
        // Tom
        var tomFootball = (x.Chiefs + x.Saints + x.Vikings)
        this.setState({ tomNFL: tomFootball });
        // Pat
        var patFootball = (x.Buccaneers + x.Jets + x.Jaguars)
        this.setState({ patNFL: patFootball });
        var patFootballFixed = parseInt((patFootball));
        this.setState({ patFixedFootball: patFootballFixed });
        // James
        var jamesFootball = (x.Rams + x.Browns + x.Steelers)
        this.setState({ jamesNFL: jamesFootball });
        // Neptune
        var neptuneFootball = (x.Colts + x.Cardinals + x.Patriots)
        this.setState({ neptuneNFL: neptuneFootball });
        var neptuneFootballFixed = parseInt((neptuneFootball));
        this.setState({ neptuneFixedFootball: neptuneFootballFixed })
        // DJ
        var djFootball = (x.Packers + x.Titans + x.Falcons)
        this.setState({ djNFL: djFootball });
        // Goose
        var gooseFootball = (x.Bills + x.Eagles + x.Giants)
        this.setState({ gooseNFL: gooseFootball });
        // AL
        var alFootball = (x.FortyNiners + x.Broncos + x.Dolphins)
        this.setState({ alNFL: alFootball });
        var alFootballFixed = parseInt((alFootball));
        this.setState({ alFixedFootball: alFootballFixed })
        // Joe
        var joeFootball = (x.Seahawks + x.Bengals + x.Raiders)
        this.setState({ joeNFL: joeFootball });
        // Steids
        var steidsFootball = (x.Panthers + x.Bears + x.Ravens)
        this.setState({ steidsNFL: steidsFootball });
        var steidsFootballFixed = parseInt((steidsFootball));
        this.setState({ steidsFixedFootball: steidsFootballFixed })
        // Eres 
        var eresFootball = (x.Cowboys + x.Chargers + x.Commanders)
        this.setState({ eresNFL: eresFootball });
    };

    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 });
        // Al
        var alGolf = (x.Rahm + x.Morikawa + x.Conners + x.Harman + x.Davis).toFixed(0);
        // No score removed.
        this.setState({ alPGA: alGolf });
        // Tom
        var tomGolf = (x.Finau + x.Fitzpatrick + x.Kim + x.Bradley + x.McNealy).toFixed(0);
        // Henley removed for lowest score. 
        this.setState({ tomPGA: tomGolf });
        // Goose
        var gooseGolf = (x.Hovland + x.Im + x.Pereira + x.Power + x.Grillo).toFixed(0);
        // Oosthuizen removed for lowest score
        this.setState({ goosePGA: gooseGolf });
        // James
        var jamesGolf = (x.Burns + x.Horschel + x.Hatton + x.Fleetwood + x.Wise).toFixed(0);
        // Na removed for lowest score
        this.setState({ jamesPGA: jamesGolf });
        // Joe
        var joeGolf = (x.Hoge + x.Hughes + x.Putnam + x.Day + x.Griffin).toFixed(0);
        // Bryson removed for lowest score
        this.setState({ joePGA: joeGolf });
        // Neptune
        var neptuneGolf = (x.Scheffler + x.Schauffele + x.Cantlay + x.Woods + x.Herbert).toFixed(0);
        // Ancer removed for lowest score
        this.setState({ neptunePGA: neptuneGolf });
        // Patrick
        var patGolf = (x.Thomas + x.Zalatoris + x.Young + x.Theegala + x.Riley).toFixed(0);
        // Dustin Johnson removed for lowest score
        this.setState({ patPGA: patGolf });
        // Steids
        var steidsGolf = (x.Homa + x.Berger + x.Straka + x.Henley + x.Fowler).toFixed(0);
        // Harris English removed for lowest Score
        this.setState({ steidsPGA: steidsGolf });
        // DJ
        var djGolf = (x.English + x.SiWoo + x.Scott + x.Champ + x.Rose).toFixed(0);
        // Sergio removed for lowest score
        this.setState({ djPGA: djGolf });
        // Eres
        var eresGolf = (x.Mcilroy + x.Spieth + x.Matsuyama + x.Lowry + x.Simpson).toFixed(0);
        // Fowler removed for lowest score
        this.setState({ eresPGA: eresGolf });

    }

    // Adding MLB here. 

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];

                // Patrick here. 
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
                this.setState({ patMLB: allMLB });

                // Al here 
                var athleticsWin;
                var tigersWin;
                var marlinsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // athletics
                    if (fullIndex[i].team.id === 26) {
                        athleticsWin = fullIndex[i].games.win.total
                    }

                    //marlins
                    if (fullIndex[i].team.id === 19) {
                        marlinsWin = fullIndex[i].games.win.total
                    }

                    // tigers
                    if (fullIndex[i].team.id === 12) {
                        tigersWin = fullIndex[i].games.win.total
                    }

                }
                var alTotal = athleticsWin + marlinsWin + tigersWin;
                this.setState({ alMLB: alTotal });

                // Eres Here 
                var yankeesWin;
                var giantsWin;
                var redSoxWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // yankees
                    if (fullIndex[i].team.id === 25) {
                        yankeesWin = fullIndex[i].games.win.total
                    }

                    // redSox
                    if (fullIndex[i].team.id === 5) {
                        redSoxWin = fullIndex[i].games.win.total
                    }

                    // giants
                    if (fullIndex[i].team.id === 31) {
                        giantsWin = fullIndex[i].games.win.total
                    }

                }

                var eresTotal = yankeesWin + redSoxWin + giantsWin;
                this.setState({ eresMLB: eresTotal });

                // DJ here
                var brewersWin;
                var rockiesWin;
                var oriolesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    //brewers
                    if (fullIndex[i].team.id === 20) {
                        brewersWin = fullIndex[i].games.win.total
                    }

                    // orioles
                    if (fullIndex[i].team.id === 4) {
                        oriolesWin = fullIndex[i].games.win.total
                    }

                    // rockies
                    if (fullIndex[i].team.id === 10) {
                        rockiesWin = fullIndex[i].games.win.total
                    }

                }
                var djTotal = brewersWin + oriolesWin + rockiesWin;
                this.setState({ djMLB: djTotal });

                // Goose MLB 
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
                var gooseTotal = angelsWin + twinsWin + metsWin;
                this.setState({ gooseMLB: gooseTotal });

                // James MLB here
                var astrosWin;
                var cardinalsWin;
                var philliesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // astros
                    if (fullIndex[i].team.id === 15) {
                        astrosWin = fullIndex[i].games.win.total
                    }

                    // phillies
                    if (fullIndex[i].team.id === 27) {
                        philliesWin = fullIndex[i].games.win.total
                    }

                    // cardinals
                    if (fullIndex[i].team.id === 33) {
                        cardinalsWin = fullIndex[i].games.win.total
                    }

                }
                var jamesTotal = astrosWin + philliesWin + cardinalsWin;
                this.setState({ jamesMLB: jamesTotal });

                // Joe MLB 
                var padresWin;
                var marinersWin;
                var royalsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // padres
                    if (fullIndex[i].team.id === 30) {
                        padresWin = fullIndex[i].games.win.total
                    }

                    // royals
                    if (fullIndex[i].team.id === 16) {
                        royalsWin = fullIndex[i].games.win.total
                    }

                    // mariners
                    if (fullIndex[i].team.id === 32) {
                        marinersWin = fullIndex[i].games.win.total
                    }

                }
                var joeTotal = padresWin + royalsWin + marinersWin;
                this.setState({ joeMLB: joeTotal });

                // Neptune MLB 
                var cubsWin;
                var rangersWin;
                var piratesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // cubs
                    if (fullIndex[i].team.id === 6) {
                        cubsWin = fullIndex[i].games.win.total
                    }

                    // pirates
                    if (fullIndex[i].team.id === 28) {
                        piratesWin = fullIndex[i].games.win.total
                    }

                    // rangers
                    if (fullIndex[i].team.id === 35) {
                        rangersWin = fullIndex[i].games.win.total
                    }

                }
                var neptuneTotal = cubsWin + piratesWin + rangersWin;
                this.setState({ neptuneMLB: neptuneTotal });

                // Steids MLB 
                var dodgersWin;
                var nationalsWin;
                var dBacksWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // dodgers
                    if (fullIndex[i].team.id === 18) {
                        dodgersWin = fullIndex[i].games.win.total
                    }

                    // dBacks
                    if (fullIndex[i].team.id === 2) {
                        dBacksWin = fullIndex[i].games.win.total
                    }

                    // nationals
                    if (fullIndex[i].team.id === 37) {
                        nationalsWin = fullIndex[i].games.win.total
                    }

                }
                var steidsTotal = dodgersWin + dBacksWin + nationalsWin;
                this.setState({ steidsMLB: steidsTotal });

                // Tommy MLB 
                var raysWin;
                var whiteSoxWin;
                var bravesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // rays
                    if (fullIndex[i].team.id === 34) {
                        raysWin = fullIndex[i].games.win.total
                    }

                    // braves
                    if (fullIndex[i].team.id === 3) {
                        bravesWin = fullIndex[i].games.win.total
                    }

                    // whiteSox
                    if (fullIndex[i].team.id === 7) {
                        whiteSoxWin = fullIndex[i].games.win.total
                    }

                }
                var totalTom = raysWin + bravesWin + whiteSoxWin;
                this.setState({ tomMLB: totalTom });
            });
    };

    // Going to put NHL Here
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
                var alNHL;

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

                var totalAlNHL = wildTotal + islandersTotal + jetsTotal

                // Eres NHL 

                var pensWins;
                var pensOTLS;
                var pensTotal;
                var capsWins;
                var capsOTLS;
                var capsTotal;
                var krakenWins;
                var krakenOTLS;
                var krakenTotal;
                var allNHL;

                // Here is the pens loop. 
                for (var i = 0; i < metroResults.length; i++) {
                    // pens
                    if (metroResults[i].team.id === 5) {
                        pensWins = metroResults[i].leagueRecord.wins;
                        pensOTLS = metroResults[i].leagueRecord.ot;
                        console.log(pensWins);
                        console.log(pensOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

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

                // pens total
                pensTotal = (pensWins * 2) + pensOTLS;
                console.log(pensTotal);

                // caps total
                capsTotal = (capsWins * 2) + capsOTLS;
                console.log(capsTotal)

                // kraken total
                krakenTotal = (krakenWins * 2) + krakenOTLS;
                console.log(krakenTotal);

                var totalEresNHL = pensTotal + capsTotal + krakenTotal;

                // Start of DJ NHL

                var avalancheWins;
                var avalancheOTLS;
                var avalancheTotal;
                var flamesWins;
                var flamesOTLS;
                var flamesTotal;
                var kingsWins;
                var kingsOTLS;
                var kingsTotal;
                var allNHL;

                // Here is the avalanche loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // avalanche
                    if (centralResults[i].team.id === 21) {
                        avalancheWins = centralResults[i].leagueRecord.wins;
                        avalancheOTLS = centralResults[i].leagueRecord.ot;
                        console.log(avalancheWins);
                        console.log(avalancheOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < pacificResults.length; i++) {

                    // kings
                    if (pacificResults[i].team.id === 26) {
                        kingsWins = pacificResults[i].leagueRecord.wins;
                        kingsOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(kingsWins);
                        console.log(kingsOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < pacificResults.length; i++) {

                    // flames
                    if (pacificResults[i].team.id === 20) {
                        flamesWins = pacificResults[i].leagueRecord.wins;
                        flamesOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(flamesWins);
                        console.log(flamesOTLS);
                        console.log("this loop is running")
                    }
                }

                // flames total
                flamesTotal = (flamesWins * 2) + flamesOTLS;
                console.log(flamesTotal)

                // kings total
                kingsTotal = (kingsWins * 2) + kingsOTLS;
                console.log(kingsTotal);

                // avalanche total
                avalancheTotal = (avalancheWins * 2) + avalancheOTLS;
                console.log(avalancheTotal);

                var totaldjNHL = avalancheTotal + flamesTotal + kingsTotal

                // Goose NHL here

                var bruinsWins;
                var bruinsOTLS;
                var bruinsTotal;
                var redWingsWins;
                var redWingsOTLS;
                var redWingsTotal;
                var blackhawksWins;
                var blackhawksOTLS;
                var blackhawksTotal;
                var allNHL;

                // Here is the bruins and redWings loop. 
                for (var i = 0; i < atlanticResults.length; i++) {
                    // bruins
                    if (atlanticResults[i].team.id === 6) {
                        bruinsWins = atlanticResults[i].leagueRecord.wins;
                        bruinsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(bruinsWins);
                        console.log(bruinsOTLS);
                        console.log("this loop is running")
                    }

                    // redWings
                    if (atlanticResults[i].team.id === 17) {
                        redWingsWins = atlanticResults[i].leagueRecord.wins;
                        redWingsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(redWingsWins);
                        console.log(redWingsOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // blackhawks
                    if (centralResults[i].team.id === 16) {
                        blackhawksWins = centralResults[i].leagueRecord.wins;
                        blackhawksOTLS = centralResults[i].leagueRecord.ot;
                        console.log(blackhawksWins);
                        console.log(blackhawksOTLS);
                        console.log("this loop is running")
                    }
                }

                // bruins total
                bruinsTotal = (bruinsWins * 2) + bruinsOTLS;
                console.log(bruinsTotal);

                // redWings total
                redWingsTotal = (redWingsWins * 2) + redWingsOTLS;
                console.log(redWingsTotal)

                // blackhawks total
                blackhawksTotal = (blackhawksWins * 2) + blackhawksOTLS;
                console.log(blackhawksTotal);

                var totalGooseNHL = bruinsTotal + redWingsTotal + blackhawksTotal

                // James NHL here

                var canesWins;
                var canesOTLS;
                var canesTotal;
                var rangersWins;
                var rangersOTLS;
                var rangersTotal;
                var canucksWins;
                var canucksOTLS;
                var canucksTotal;
                var allNHL;

                // Here is the canes loop. 
                for (var i = 0; i < metroResults.length; i++) {
                    // canes
                    if (metroResults[i].team.id === 12) {
                        canesWins = metroResults[i].leagueRecord.wins;
                        canesOTLS = metroResults[i].leagueRecord.ot;
                        console.log(canesWins);
                        console.log(canesOTLS);
                        console.log("this loop is running")
                    }
                }


                // Here is the loop for the rangers
                for (var i = 0; i < metroResults.length; i++) {

                    // rangers
                    if (metroResults[i].team.id === 3) {
                        rangersWins = metroResults[i].leagueRecord.wins;
                        rangersOTLS = metroResults[i].leagueRecord.ot;
                        console.log(rangersWins);
                        console.log(rangersOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < pacificResults.length; i++) {

                    // canucks
                    if (pacificResults[i].team.id === 23) {
                        canucksWins = pacificResults[i].leagueRecord.wins;
                        canucksOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(canucksWins);
                        console.log(canucksOTLS);
                        console.log("this loop is running")
                    }
                }

                // rangers total
                rangersTotal = (rangersWins * 2) + rangersOTLS;
                console.log(rangersTotal)

                // canucks total
                canucksTotal = (canucksWins * 2) + canucksOTLS;
                console.log(canucksTotal);

                // canes total
                canesTotal = (canesWins * 2) + canesOTLS;
                console.log(canesTotal);

                var totalJamesNHL = canesTotal + rangersTotal + canucksTotal

                // Joe NHL here

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

                var totalJoeNHL = knightsTotal + devilsTotal + senatorsTotal

                // Neptune NHL 

                var starsWins;
                var starsOTLS;
                var starsTotal;
                var flyersWins;
                var flyersOTLS;
                var flyersTotal;
                var sabresWins;
                var sabresOTLS;
                var sabresTotal;
                var allNHL;

                // Here is the stars loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // stars
                    if (centralResults[i].team.id === 25) {
                        starsWins = centralResults[i].leagueRecord.wins;
                        starsOTLS = centralResults[i].leagueRecord.ot;
                        console.log(starsWins);
                        console.log(starsOTLS);
                        console.log("this loop is running")
                    }

                }

                // Here is the loop for the sabres
                for (var i = 0; i < atlanticResults.length; i++) {

                    // sabres
                    if (atlanticResults[i].team.id === 7) {
                        sabresWins = atlanticResults[i].leagueRecord.wins;
                        sabresOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(sabresWins);
                        console.log(sabresOTLS);
                        console.log("this loop is running")
                    }
                }

                // Here is the loop for the flyers
                for (var i = 0; i < metroResults.length; i++) {

                    // flyers
                    if (metroResults[i].team.id === 4) {
                        flyersWins = metroResults[i].leagueRecord.wins;
                        flyersOTLS = metroResults[i].leagueRecord.ot;
                        console.log(flyersWins);
                        console.log(flyersOTLS);
                        console.log("this loop is running")
                    }
                }

                // flyers total
                flyersTotal = (flyersWins * 2) + flyersOTLS;
                console.log(flyersTotal);

                // stars total
                starsTotal = (starsWins * 2) + starsOTLS;
                console.log(starsTotal);

                // flyers total
                sabresTotal = (sabresWins * 2) + sabresOTLS;
                console.log(sabresTotal);

                var totalNeptuneNHL = starsTotal + flyersTotal + sabresTotal

                // Patrick NHL 

                var lightningWins;
                var lightningOTLS;
                var lightningTotal;
                var bluesWins;
                var bluesOTLS;
                var bluesTotal;
                var predsWins;
                var predsOTLS;
                var predsTotal;
                var allNHL;

                // Here is the blues/kings for loop. 
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

                // Here is the loop for the preds
                for (var i = 0; i < centralResults.length; i++) {

                    // lightning
                    if (centralResults[i].team.id === 18) {
                        predsWins = centralResults[i].leagueRecord.wins;
                        predsOTLS = centralResults[i].leagueRecord.ot;
                        console.log(predsWins);
                        console.log(predsOTLS);
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
                predsTotal = (predsWins * 2) + predsOTLS;
                console.log(predsTotal);

                var totalPatNHL = lightningTotal + bluesTotal + predsTotal

                // Steids NHL 

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
                    // leafs
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

                    // panthers
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

                var totalSteidsNHL = oilersTotal + panthersTotal + leafsTotal

                // Tom NHL here 

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
                        console.log(blueJacketsWins);
                        console.log(blueJacketsOTLS);
                        console.log("this loop is running")
                    }
                }
                // BlueJackets total
                blueJacketsTotal = (blueJacketsWins * 2) + blueJacketsOTLS;
                console.log(blueJacketsTotal)

                // Here is the loop for the coyotes.
                for (var i = 0; i < centralResults.length; i++) {

                    // coyotes
                    if (centralResults[i].team.id === 53) {
                        coyotesWins = centralResults[i].leagueRecord.wins;
                        coyotesOTLS = centralResults[i].leagueRecord.ot;
                        console.log(coyotesWins);
                        console.log(coyotesOTLS);
                        console.log("this loop is running")
                    }
                }

                // Here is the Canadians for loop. 
                for (var i = 0; i < metroResults.length; i++) {

                    // canadiens
                    if (atlanticResults[i].team.id === 8) {
                        canadiansWins = atlanticResults[i].leagueRecord.wins;
                        canadiansOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(canadiansWins);
                        console.log(canadiansOTLS);
                        console.log("this loop is running")
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

                var totalTomNHL = blueJacketsTotal + canadiansTotal + coyotesTotal


                this.setState({ alNHL: totalAlNHL });
                this.setState({ eresNHL: totalEresNHL });
                this.setState({ djNHL: totaldjNHL });
                this.setState({ gooseNHL: totalGooseNHL });
                this.setState({ jamesNHL: totalJamesNHL });
                this.setState({ joeNHL: totalJoeNHL });
                this.setState({ neptuneNHL: totalNeptuneNHL });
                this.setState({ patNHL: totalPatNHL });
                this.setState({ steidsNHL: totalSteidsNHL });
                this.setState({ tomNHL: totalTomNHL });

                // and now I need to run the totalscore function to grab all of these inputs. 
                this.totalScores();
            })
            .catch(error => {
                console.log(error)
            });
    }

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                // HERE ARE EPL TEAMS FOR TOMMY.
                //  liverpool
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

                // HERE ARE EPL TEAMS FOR Patrick. 
                //   Starting Patrick EPL Here 
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

                // Patrick EPL here
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
                        //then so something
                        //return something here
                        console.log("here are the wins" + astonWin);
                        console.log("here are the ties" + astonTie);
                    }

                    if (forLoopArray[i].team.id === 63) {
                        leedsWin = forLoopArray[i].all.win
                        leedsTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + leedsWin);
                        console.log("here are the ties" + leedsTie);
                    }
                }

                var astonTotal = (astonWin * 4.25) + (astonTie);
                var leedsTotal = (leedsWin * 4.25) + (leedsTie);

                // Here is the final result
                var patPoints = astonTotal + leedsTotal;
                this.setState({ patEPL: patPoints });

                //   Starting Neptune EPL Here 
                var newcastleWin;
                var newcastleTie;
                var wolvesWin;
                var wolvesTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 34) {
                        newcastleWin = forLoopArray[i].all.win
                        newcastleTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + newcastleWin);
                        console.log("here are the ties" + newcastleTie);
                    }

                    if (forLoopArray[i].team.id === 39) {
                        wolvesWin = forLoopArray[i].all.win
                        wolvesTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + wolvesWin);
                        console.log("here are the ties" + wolvesTie);
                    }
                }

                var newcastleTotal = (newcastleWin * 4.25) + (newcastleTie);
                var wolvesTotal = (wolvesWin * 4.25) + (wolvesTie);

                // Here is the final result
                var neptunePoints = newcastleTotal + wolvesTotal;
                this.setState({ neptuneEPL: neptunePoints });

                // Joe EPL here

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

                // James EPL here
                var manCityWin;
                var manCityTie;
                var brentfordWin;
                var brentfordTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 50) {
                        manCityWin = forLoopArray[i].all.win
                        manCityTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + manCityWin);
                        console.log("here are the ties" + manCityTie);
                    }

                    if (forLoopArray[i].team.id === 55) {
                        brentfordWin = forLoopArray[i].all.win
                        brentfordTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + brentfordWin);
                        console.log("here are the ties" + brentfordTie);
                    }
                }

                var manCityTotal = (manCityWin * 4.25) + (manCityTie);
                var brentfordTotal = (brentfordWin * 4.25) + (brentfordTie);

                // Here is the final result
                var jamesPoints = manCityTotal + brentfordTotal;
                this.setState({ jamesEPL: jamesPoints });

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
                var goosePoints = arsenalTotal + crystalPalaceTotal;
                this.setState({ gooseEPL: goosePoints });

                // HERE ARE EPL TEAMS FOR DJ. 
                var leicesterWin;
                var leicesterTie;
                var southhamptonWin;
                var southhamptonTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 46) {
                        leicesterWin = forLoopArray[i].all.win
                        leicesterTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + leicesterWin);
                        console.log("here are the ties" + leicesterTie);
                    }

                    if (forLoopArray[i].team.id === 41) {
                        southhamptonWin = forLoopArray[i].all.win
                        southhamptonTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + southhamptonWin);
                        console.log("here are the ties" + southhamptonTie);
                    }
                }

                var leicesterTotal = (leicesterWin * 4.25) + (leicesterTie);
                var southhamptonTotal = (southhamptonWin * 4.25) + (southhamptonTie);

                // Here is the final result
                var djPoints = leicesterTotal + southhamptonTotal;
                this.setState({ djEPL: djPoints });

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
                this.setState({ eresEPL: eresPoints });

                // Al EPL here
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
                this.setState({ alEPL: alPoints });

                // And now I need to run the totalscores function so that it can get logged. 
                this.totalScores();

            })
            .catch(error => {
                console.log(error)
            });
    }

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // HERE ARE NBA TEAMS FOR TOMMY. 
                console.log(res.data.api.standings)
                var hawksWin = res.data.api.standings[11].win;
                var bullsWin = res.data.api.standings[7].win;
                var pistonsWin = res.data.api.standings[9].win;

                const tempTomNBA = this.state.allNBA;

                tempTomNBA.push(hawksWin);
                tempTomNBA.push(bullsWin);
                tempTomNBA.push(pistonsWin);

                var tomDoubledScores = tempTomNBA.map(team => team * 2);

                var TomPoints = 0;

                for (var i = 0; i < tomDoubledScores.length; i++) {
                    TomPoints += tomDoubledScores[i];
                }
                // console.log(TomPoints);
                this.setState({ tomNBA: TomPoints });

                // PATRICK
                var mavsWin = res.data.api.standings[26].win;
                var pacersWin = res.data.api.standings[8].win;
                var thunderWin = res.data.api.standings[17].win;

                const tempPatrickNBA = [];

                tempPatrickNBA.push(mavsWin);
                tempPatrickNBA.push(pacersWin);
                tempPatrickNBA.push(thunderWin);

                var patDoubledScores = tempPatrickNBA.map(team => team * 2);

                var PatrickPoints = 0;

                for (var i = 0; i < patDoubledScores.length; i++) {
                    PatrickPoints += patDoubledScores[i];
                }
                // console.log(PatrickPoints);
                this.setState({ patrickNBA: PatrickPoints });

                // James
                var sunsWin = res.data.api.standings[22].win;
                var raptorsWin = res.data.api.standings[4].win;
                var rocketsWin = res.data.api.standings[29].win;

                const tempJamesNBA = [];

                tempJamesNBA.push(sunsWin);
                tempJamesNBA.push(raptorsWin);
                tempJamesNBA.push(rocketsWin);

                var jamesDoubledScores = tempJamesNBA.map(team => team * 2);

                var jamesPoints = 0;

                for (var i = 0; i < jamesDoubledScores.length; i++) {
                    jamesPoints += jamesDoubledScores[i];
                }
                // console.log(jamesPoints);
                this.setState({ jamesNBA: jamesPoints });

                // Neptune
                var bucksWin = res.data.api.standings[5].win;
                var sixersWin = res.data.api.standings[1].win;
                var cavsWin = res.data.api.standings[6].win;

                const tempNeptuneNBA = [];

                tempNeptuneNBA.push(bucksWin);
                tempNeptuneNBA.push(sixersWin);
                tempNeptuneNBA.push(cavsWin);

                var NeptuneDoubledScores = tempNeptuneNBA.map(team => team * 2);

                var NeptunePoints = 0;

                for (var i = 0; i < NeptuneDoubledScores.length; i++) {
                    NeptunePoints += NeptuneDoubledScores[i];
                }
                // console.log(NeptunePoints);
                this.setState({ neptuneNBA: NeptunePoints });

                // DJ
                var heatWin = res.data.api.standings[10].win;
                var blazersWin = res.data.api.standings[19].win;
                var magicWin = res.data.api.standings[13].win;

                const tempdjNBA = [];

                tempdjNBA.push(heatWin);
                tempdjNBA.push(blazersWin);
                tempdjNBA.push(magicWin);

                var DJDoubledScores = tempdjNBA.map(team => team * 2);

                var DJPoints = 0;

                for (var i = 0; i < DJDoubledScores.length; i++) {
                    DJPoints += DJDoubledScores[i];
                }
                // console.log(DJPoints);
                this.setState({ djNBA: DJPoints });

                // Goose
                var celticsWin = res.data.api.standings[0].win;
                var tWolvesWin = res.data.api.standings[16].win;
                var knicksWin = res.data.api.standings[3].win;

                const tempGooseNBA = [];

                tempGooseNBA.push(celticsWin);
                tempGooseNBA.push(tWolvesWin);
                tempGooseNBA.push(knicksWin);

                var GooseDoubledScores = tempGooseNBA.map(team => team * 2);

                var GoosePoints = 0;

                for (var i = 0; i < GooseDoubledScores.length; i++) {
                    GoosePoints += GooseDoubledScores[i];
                }
                // console.log(GoosePoints);
                this.setState({ gooseNBA: GoosePoints });

                // Al
                var warriorsWin = res.data.api.standings[23].win;
                var wizardsWin = res.data.api.standings[12].win;
                var jazzWin = res.data.api.standings[18].win;

                const tempAlNBA = [];

                tempAlNBA.push(warriorsWin);
                tempAlNBA.push(wizardsWin);
                tempAlNBA.push(jazzWin);

                var AlDoubledScores = tempAlNBA.map(team => team * 2);

                var AlPoints = 0;

                for (var i = 0; i < AlDoubledScores.length; i++) {
                    AlPoints += AlDoubledScores[i];
                }
                // console.log(AlPoints);
                this.setState({ alNBA: AlPoints });

                // Joe
                var clippersWin = res.data.api.standings[21].win;
                var grizzliesWin = res.data.api.standings[25].win;
                var pelicansWin = res.data.api.standings[27].win;

                const tempjoeNBA = [];

                tempjoeNBA.push(clippersWin);
                tempjoeNBA.push(grizzliesWin);
                tempjoeNBA.push(pelicansWin);

                var JoeDoubledScores = tempjoeNBA.map(team => team * 2);

                var JoePoints = 0;

                for (var i = 0; i < JoeDoubledScores.length; i++) {
                    JoePoints += JoeDoubledScores[i];
                }
                // console.log(JoePoints);
                this.setState({ joeNBA: JoePoints });

                // Steids
                var nuggetsWin = res.data.api.standings[15].win;
                var kingsWin = res.data.api.standings[20].win;
                var spursWin = res.data.api.standings[28].win;

                const tempsteidsNBA = [];

                tempsteidsNBA.push(nuggetsWin);
                tempsteidsNBA.push(kingsWin);
                tempsteidsNBA.push(spursWin);

                var SteidsDoubledScores = tempsteidsNBA.map(team => team * 2);

                var SteidsPoints = 0;

                for (var i = 0; i < SteidsDoubledScores.length; i++) {
                    SteidsPoints += SteidsDoubledScores[i];
                }
                // console.log(SteidsPoints);
                this.setState({ steidsNBA: SteidsPoints });

                // Ben
                var netsWin = res.data.api.standings[2].win;
                var lakersWin = res.data.api.standings[24].win;
                var hornetsWin = res.data.api.standings[14].win;

                const tempbenNBA = [];

                tempbenNBA.push(netsWin);
                tempbenNBA.push(lakersWin);
                tempbenNBA.push(hornetsWin);

                var BenDoubledScores = tempbenNBA.map(team => team * 2);

                var BenPoints = 0;

                for (var i = 0; i < BenDoubledScores.length; i++) {
                    BenPoints += BenDoubledScores[i];
                }
                // console.log(BenPoints);
                this.setState({ benNBA: BenPoints });
                this.totalScores();
            })
            .catch(error => {
                console.log(error)
            });
    }


    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.

        return (

            <div>
                {this.datatablePage()}
            </div>
        )
    }
}

// Let's export the table.
export default Table; 
