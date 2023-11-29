"use strict";
let teams=['Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets', 'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Detroit Pistons', 'Denver Nuggets', 'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'Los Angeles Clippers', 'Los Angeles Lakers', 'Memphis Grizzlies', 'Miami Heat', 'Minnesota Timberwolves', 'Milwaukee Bucks', 'New Orleans Pelicans', 'New York Knicks', 'Oklahoma City Thunder', 'Orlando Magic', 'Phoenix Suns', 'Philadelphia 76ers', 'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz', 'Washington Wizards'];
let overs=[42.5, 54.5, 37.5, 31.5, 37.5, 50.5, 43.5, 28.5, 52.5, 47.5, 31.5, 39.5, 45.5, 46.5, 46.5, 44.5, 44.5, 53.5, 44.5, 45.5, 44.5, 37.5, 51.5, 47.5, 27.5, 44.5, 28.5, 36.5, 35.5, 24.5];
let over_under=['Over', 'Over', 'Over', 'Under', 'Over', 'Over', 'Under', 'Under', 'Over', 'Over', 'Under', 'Over', 'Over', 'Under', 'Under', 'Over', 'Over', 'Over', 'Over', 'Over', 'Over', 'Over', 'Under', 'Over', 'Under', 'Over', 'Under', 'Under', 'Under', 'Under'];
let people=['Josh', 'Alan', 'Emil', 'Alan', 'Eric', 'Emil', 'Peter', 'Peter', 'Josh', 'Emil', 'Emil', 'Josh', 'Peter', 'Emil', 'Peter', 'Alan', 'Eric', 'Eric', 'Alan', 'Emil', 'Josh', 'Eric', 'Josh', 'Peter', 'Eric', 'Eric', 'Peter', 'Alan', 'Josh', 'Alan'];
let wins=[8, 13, 8, 5, 5, 9, 10, 2, 12, 8, 8, 9, 7, 10, 3, 10, 12, 12, 9, 9, 11, 12, 11, 12, 5, 9, 3, 8, 6, 3];
let losses=[8, 4, 8, 10, 13, 8, 6, 15, 6, 9, 6, 7, 9, 8, 13, 7, 4, 5, 9, 7, 5, 5, 6, 5, 12, 6, 14, 9, 11, 14];
let projected_wins=[41, 63, 41, 27, 23, 43, 51, 10, 55, 39, 47, 46, 36, 46, 15, 48, 62, 58, 41, 46, 56, 58, 53, 58, 24, 49, 14, 39, 29, 14];

//Existing Javascript code below
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