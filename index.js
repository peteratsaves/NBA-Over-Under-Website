"use strict";
let teams=['Atlanta Hawks*', 'Boston Celtics*', 'Brooklyn Nets', 'Charlotte Hornets', 'Chicago Bulls*', 'Cleveland Cavaliers*', 'Dallas Mavericks*', 'Detroit Pistons', 'Denver Nuggets*', 'Golden State Warriors*', 'Houston Rockets', 'Indiana Pacers*', 'Los Angeles Clippers*', 'Los Angeles Lakers*', 'Memphis Grizzlies', 'Miami Heat*', 'Minnesota Timberwolves*', 'Milwaukee Bucks*', 'New Orleans Pelicans*', 'New York Knicks*', 'Oklahoma City Thunder*', 'Orlando Magic*', 'Phoenix Suns*', 'Philadelphia 76ers*', 'Portland Trail Blazers', 'Sacramento Kings*', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz', 'Washington Wizards'];
let overs=[42.5, 54.5, 37.5, 31.5, 37.5, 50.5, 43.5, 28.5, 52.5, 47.5, 31.5, 39.5, 45.5, 46.5, 46.5, 44.5, 44.5, 53.5, 44.5, 45.5, 44.5, 37.5, 51.5, 47.5, 27.5, 44.5, 28.5, 36.5, 35.5, 24.5];
let over_under=['Over', 'Over', 'Over', 'Under', 'Over', 'Over', 'Under', 'Under', 'Over', 'Over', 'Under', 'Over', 'Over', 'Under', 'Under', 'Over', 'Over', 'Over', 'Over', 'Over', 'Over', 'Over', 'Under', 'Over', 'Under', 'Over', 'Under', 'Under', 'Under', 'Under'];
let people=['Josh', 'Alan', 'Emil', 'Alan', 'Eric', 'Emil', 'Peter', 'Peter', 'Josh', 'Emil', 'Emil', 'Josh', 'Peter', 'Emil', 'Peter', 'Alan', 'Eric', 'Eric', 'Alan', 'Emil', 'Josh', 'Eric', 'Josh', 'Peter', 'Eric', 'Eric', 'Peter', 'Alan', 'Josh', 'Alan'];
let wins=[36, 64, 32, 21, 39, 48, 50, 14, 57, 46, 41, 47, 51, 47, 27, 46, 56, 49, 49, 50, 57, 47, 49, 47, 21, 46, 22, 25, 31, 15];
let losses=[46, 18, 50, 61, 43, 34, 32, 68, 25, 36, 41, 35, 31, 35, 55, 36, 26, 33, 33, 32, 25, 35, 33, 35, 61, 36, 60, 57, 51, 67];
let projected_wins=[36, 64, 32, 21, 39, 48, 50, 14, 57, 46, 41, 47, 51, 47, 27, 46, 56, 49, 49, 50, 57, 47, 49, 47, 21, 46, 22, 25, 31, 15];

//Existing Javascript code below
let standings = '<h2>Standings</h2><table class="table table-bordered table-striped"><thead class="thead-dark"><tr><th>   </th><th>Person</th><th>W</th><th>L</th><th>Projected Win Differential</th></tr></thead><tbody>';

//Existing Javascript code below
let alan_text = '<h2>Alan</h2><table id="alan_table"><tr><th>Team</th><th>Over/Under</th><th>Selection</th><th>Wins</th><th>Losses</th><th>Projected Wins</th></tr>';
let emil_text = '<h2>Emil</h2><table id="alan_table"><tr><th>Team</th><th>Over/Under</th><th>Selection</th><th>Wins</th><th>Losses</th><th>Projected Wins</th></tr>';
let eric_text = '<h2>Eric</h2><table id="alan_table"><tr><th>Team</th><th>Over/Under</th><th>Selection</th><th>Wins</th><th>Losses</th><th>Projected Wins</th></tr>';
let josh_text = '<h2>Josh</h2><table id="alan_table"><tr><th>Team</th><th>Over/Under</th><th>Selection</th><th>Wins</th><th>Losses</th><th>Projected Wins</th></tr>';
let peter_text = '<h2>Peter</h2><table id="alan_table"><tr><th>Team</th><th>Over/Under</th><th>Selection</th><th>Wins</th><th>Losses</th><th>Projected Wins</th></tr>';

let standings_dict = {
    Alan: {
        name: "Alan",
        W: 0,
        L: 0,
        diff: 0
    },
    Eric: {
        name: "Eric",
        W: 0,
        L: 0,
        diff: 0
    },
    Peter: {
        name: "Peter",
        W: 0,
        L: 0,
        diff: 0
    },
    Emil: {
        name: "Emil",
        W: 0,
        L: 0,
        diff: 0
    },
    Josh: {
        name: "Josh",
        W: 0,
        L: 0,
        diff: 0
    }
}



for (let i = 0; i < people.length; i++) {
    if (people[i] == "Alan"){
        if (over_under[i] == "Over" && projected_wins[i] > overs[i]){
            alan_text = alan_text.concat('<tr id="correct">');
            standings_dict.Alan.W += 1
            standings_dict.Alan.diff += (projected_wins[i] - overs[i])

        }
        else if (over_under[i] == "Under" && projected_wins[i] < overs[i]){
            alan_text = alan_text.concat('<tr id="correct">');
            standings_dict.Alan.W += 1
            standings_dict.Alan.diff += -1*(projected_wins[i] - overs[i])
        }
        else{
            alan_text = alan_text.concat('<tr id="wrong">');
            standings_dict.Alan.L += 1
            standings_dict.Alan.diff += (projected_wins[i] - overs[i] > 0) ? -(projected_wins[i] - overs[i]) : (projected_wins[i] - overs[i]);
        }
        alan_text = alan_text.concat("<td>" + teams[i] + "</td>");
        alan_text = alan_text.concat("<td>" + overs[i] + "</td>");
        alan_text = alan_text.concat("<td>" + over_under[i] + "</td>");
        alan_text = alan_text.concat("<td>" + wins[i] + "</td>");
        alan_text = alan_text.concat("<td>" + losses[i] + "</td>");
        alan_text = alan_text.concat("<td>" + projected_wins[i] + "</td>");
        alan_text = alan_text.concat("</tr>");
    }
    else if (people[i] == "Emil"){
        if (over_under[i] == "Over" && projected_wins[i] > overs[i]){
            emil_text = emil_text.concat('<tr id="correct">');
            standings_dict.Emil.W += 1
            standings_dict.Emil.diff += (projected_wins[i] - overs[i])
        }
        else if (over_under[i] == "Under" && projected_wins[i] < overs[i]){
            emil_text = emil_text.concat('<tr id="correct">');
            standings_dict.Emil.W += 1
            standings_dict.Emil.diff += -1*(projected_wins[i] - overs[i])
        }
        else{
            emil_text = emil_text.concat('<tr id="wrong">');
            standings_dict.Emil.L += 1
            standings_dict.Emil.diff += (projected_wins[i] - overs[i] > 0) ? -(projected_wins[i] - overs[i]) : (projected_wins[i] - overs[i]);
        }
        emil_text = emil_text.concat("<td>" + teams[i] + "</td>");
        emil_text = emil_text.concat("<td>" + overs[i] + "</td>");
        emil_text = emil_text.concat("<td>" + over_under[i] + "</td>");
        emil_text = emil_text.concat("<td>" + wins[i] + "</td>");
        emil_text = emil_text.concat("<td>" + losses[i] + "</td>");
        emil_text = emil_text.concat("<td>" + projected_wins[i] + "</td>");
        emil_text = emil_text.concat("</tr>");
    }
    else if (people[i] == "Eric"){
        if (over_under[i] == "Over" && projected_wins[i] > overs[i]){
            eric_text = eric_text.concat('<tr id="correct">');
            standings_dict.Eric.W += 1
            standings_dict.Eric.diff += (projected_wins[i] - overs[i])
        }
        else if (over_under[i] == "Under" && projected_wins[i] < overs[i]){
            eric_text = eric_text.concat('<tr id="correct">');
            standings_dict.Eric.W += 1
            standings_dict.Eric.diff += -1*(projected_wins[i] - overs[i])
        }
        else{
            eric_text = eric_text.concat('<tr id="wrong">');
            standings_dict.Eric.L += 1
            standings_dict.Eric.diff += (projected_wins[i] - overs[i] > 0) ? -(projected_wins[i] - overs[i]) : (projected_wins[i] - overs[i]);

        }
        eric_text = eric_text.concat("<td>" + teams[i] + "</td>");
        eric_text = eric_text.concat("<td>" + overs[i] + "</td>");
        eric_text = eric_text.concat("<td>" + over_under[i] + "</td>");
        eric_text = eric_text.concat("<td>" + wins[i] + "</td>");
        eric_text = eric_text.concat("<td>" + losses[i] + "</td>");
        eric_text = eric_text.concat("<td>" + projected_wins[i] + "</td>");
        eric_text = eric_text.concat("</tr>");
    }
    else if (people[i] == "Josh"){
        if (over_under[i] == "Over" && projected_wins[i] > overs[i]){
            josh_text = josh_text.concat('<tr id="correct">');
            standings_dict.Josh.W += 1
            standings_dict.Josh.diff += (projected_wins[i] - overs[i])
        }
        else if (over_under[i] == "Under" && projected_wins[i] < overs[i]){
            josh_text = josh_text.concat('<tr id="correct">');
            standings_dict.Josh.W += 1
            standings_dict.Josh.diff += -1*(projected_wins[i] - overs[i])
        }
        else{
            josh_text = josh_text.concat('<tr id="wrong">');
            standings_dict.Josh.L += 1
            standings_dict.Josh.diff += (projected_wins[i] - overs[i] > 0) ? -(projected_wins[i] - overs[i]) : (projected_wins[i] - overs[i]);
        }
        josh_text = josh_text.concat("<td>" + teams[i] + "</td>");
        josh_text = josh_text.concat("<td>" + overs[i] + "</td>");
        josh_text = josh_text.concat("<td>" + over_under[i] + "</td>");
        josh_text = josh_text.concat("<td>" + wins[i] + "</td>");
        josh_text = josh_text.concat("<td>" + losses[i] + "</td>");
        josh_text = josh_text.concat("<td>" + projected_wins[i] + "</td>");
        josh_text = josh_text.concat("</tr>");
    }
    else{
        if (over_under[i] == "Over" && projected_wins[i] > overs[i]){
            peter_text = peter_text.concat('<tr id="correct">');
            standings_dict.Peter.W += 1
            standings_dict.Peter.diff += (projected_wins[i] - overs[i])
        }
        else if (over_under[i] == "Under" && projected_wins[i] < overs[i]){
            peter_text = peter_text.concat('<tr id="correct">');
            standings_dict.Peter.W += 1
            standings_dict.Peter.diff += -1*(projected_wins[i] - overs[i])
        }
        else{
            peter_text = peter_text.concat('<tr id="wrong">');
            standings_dict.Peter.L += 1
            standings_dict.Peter.diff += (projected_wins[i] - overs[i] > 0) ? -(projected_wins[i] - overs[i]) : (projected_wins[i] - overs[i]);
        }
        peter_text = peter_text.concat("<td>" + teams[i] + "</td>");
        peter_text = peter_text.concat("<td>" + overs[i] + "</td>");
        peter_text = peter_text.concat("<td>" + over_under[i] + "</td>");
        peter_text = peter_text.concat("<td>" + wins[i] + "</td>");
        peter_text = peter_text.concat("<td>" + losses[i] + "</td>");
        peter_text = peter_text.concat("<td>" + projected_wins[i] + "</td>");
        peter_text = peter_text.concat("</tr>");
    }
}

// update rank
let standingsArray = Object.entries(standings_dict);

standingsArray.sort((a, b) => b[1].W - a[1].W || b[1].diff - a[1].diff);

let rank = 1
let standingsRows = '';

standingsArray.forEach((entry, index) => {
  standingsRows += `<tr><td>${rank}</td><td>${standings_dict[entry[0]].name}</td><td>${standings_dict[entry[0]].W}</td><td>${standings_dict[entry[0]].L}</td><td>${standings_dict[entry[0]].diff}</td></tr>`;
  rank += 1;
});

standings += standingsRows + '</tbody></table>';
const myElement0 = document.getElementById("standings");
myElement0.innerHTML = standings;

alan_text = alan_text.concat("</table>");
const myElement1 = document.getElementById("alan");
myElement1.innerHTML = alan_text;
emil_text = emil_text.concat("</table>");
const myElement2 = document.getElementById("emil");
myElement2.innerHTML = emil_text;
eric_text = eric_text.concat("</table>");
const myElement3 = document.getElementById("eric");
myElement3.innerHTML = eric_text;
josh_text = josh_text.concat("</table>");
const myElement4 = document.getElementById("josh");
myElement4.innerHTML = josh_text;
peter_text = peter_text.concat("</table>");
const myElement5 = document.getElementById("peter");
myElement5.innerHTML = peter_text;

const d = new Date();
let day = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("last_updated").innerHTML = "Last updated: " + months[month] + ' ' + day + ', ' + year;