"use strict;"

teams = ['Atlanta Hawks','Boston Celtics','Brooklyn Nets','Charlotte Hornets','Chicago Bulls','Cleveland Cavaliers','Dallas Mavericks','Detroit Pistons','Denver Nuggets','Golden State Warriors','Houston Rockets','Indiana Pacers','Los Angeles Clippers','Los Angeles Lakers','Memphis Grizzlies','Miami Heat','Minnesota Timberwolves','Milwaukee Bucks','New Orleans Pelicans','New York Knicks','Oklahoma City Thunder','Orlando Magic','Phoenix Suns','Philadelphia 76ers','Portland Trail Blazers','Sacramento Kings','San Antonio Spurs','Toronto Raptors','Utah Jazz','Washington Wizards'];
overs = [42.5, 54.5,37.5,31.5,37.5,50.5,43.5,28.5,52.5,47.5,31.5,39.5,45.5,46.5,46.5,44.5,44.5,53.5,44.5,45.5,44.5,37.5,51.5,47.5,27.5,44.5,28.5,36.5,35.5,24.5];
over_under = ['Over','Over','Over','Under','Over','Over','Under','Under','Over','Over','Under','Over','Over','Under','Under','Over','Over','Over','Over','Over','Over','Over','Under','Over','Under','Over','Under','Under','Under','Under'];
people = ['Josh','Alan','Emil','Alan','Eric','Emil','Peter','Peter','Josh','Emil','Emil','Josh','Peter','Emil','Peter','Alan','Eric','Eric','Alan','Emil','Josh','Eric','Josh','Peter','Eric','Eric','Peter','Alan','Josh','Alan'];
wins = [6, 11, 6, 4, 5, 8, 9, 2, 10, 7, 6, 8, 5, 9, 3, 9, 10, 10, 7, 8, 10, 9, 8, 10, 3, 8, 3, 6, 4, 2];
losses = [7, 3, 7, 9, 10, 6, 5, 13, 4, 8, 6, 5, 7, 6, 10, 5, 3, 4, 7, 6, 4, 5, 6, 4, 11, 5, 11, 8, 10, 11];
projected_wins = [38, 64, 38, 25, 27, 47, 53, 11, 59, 38, 41, 50, 34, 49, 19, 53, 63, 59, 41, 47, 59, 53, 47, 59, 18, 50, 18, 35, 23, 13];

let alan_text = '<h2>Alan</h2><table id="alan_table"><tr><th>Team</th><th>Over/Under</th><th>Selection</th><th>Wins</th><th>Losses</th><th>Projected Wins</th></tr>';
let emil_text = '<h2>Emil</h2><table id="alan_table"><tr><th>Team</th><th>Over/Under</th><th>Selection</th><th>Wins</th><th>Losses</th><th>Projected Wins</th></tr>';
let eric_text = '<h2>Eric</h2><table id="alan_table"><tr><th>Team</th><th>Over/Under</th><th>Selection</th><th>Wins</th><th>Losses</th><th>Projected Wins</th></tr>';
let josh_text = '<h2>Josh</h2><table id="alan_table"><tr><th>Team</th><th>Over/Under</th><th>Selection</th><th>Wins</th><th>Losses</th><th>Projected Wins</th></tr>';
let peter_text = '<h2>Peter</h2><table id="alan_table"><tr><th>Team</th><th>Over/Under</th><th>Selection</th><th>Wins</th><th>Losses</th><th>Projected Wins</th></tr>';

for (let i = 0; i < people.length; i++) {
    if (people[i] == "Alan"){
        if (over_under[i] == "Over" && projected_wins[i] > overs[i]){
            alan_text = alan_text.concat('<tr id="correct">');
        }
        else if (over_under[i] == "Under" && projected_wins[i] < overs[i]){
            alan_text = alan_text.concat('<tr id="correct">');
        }
        else{
            alan_text = alan_text.concat('<tr id="wrong">');
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
        }
        else if (over_under[i] == "Under" && projected_wins[i] < overs[i]){
            emil_text = emil_text.concat('<tr id="correct">');
        }
        else{
            emil_text = emil_text.concat('<tr id="wrong">');
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
        }
        else if (over_under[i] == "Under" && projected_wins[i] < overs[i]){
            eric_text = eric_text.concat('<tr id="correct">');
        }
        else{
            eric_text = eric_text.concat('<tr id="wrong">');
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
        }
        else if (over_under[i] == "Under" && projected_wins[i] < overs[i]){
            josh_text = josh_text.concat('<tr id="correct">');
        }
        else{
            josh_text = josh_text.concat('<tr id="wrong">');
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
        }
        else if (over_under[i] == "Under" && projected_wins[i] < overs[i]){
            peter_text = peter_text.concat('<tr id="correct">');
        }
        else{
            peter_text = peter_text.concat('<tr id="wrong">');
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