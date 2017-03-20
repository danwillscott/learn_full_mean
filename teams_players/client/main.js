/**
 * Created by danielscott on 3/17/17.
 */
let app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/players', {templateUrl: 'partials/player.html'})
        .when('/teams', {templateUrl: 'partials/team.html'})
        .when('/all', {templateUrl: 'partials/join.html'})
        .when('/', {templateUrl: 'partials/home.html'})
        .otherwise({redirectTo: '/'})
});

app.factory('gameFactory',[function () {
    let factory = {};
    // returning players && teams
    factory.getPlayers = function () { return allPlayers; };
    factory.getTeams = function () {return allTeams};


    // Methods for factory
    factory.addTeam = function (team) {
        team.id = guid();
        team.players = [];
        allTeams.push(team);
    };

    factory.leaveTeam = function (player, team) {
        let teamLocation = allTeams.indexOf(team);
        allTeams[teamLocation].players.splice(allTeams[teamLocation].players.indexOf(player), 1);
    };

    factory.newPlayer = function (playerObj) {
        if(playerObj.name > ''){
            playerObj.id = guid();
            allPlayers.push(playerObj)
        }
    };

    factory.deletePlayer = function (playerObj) {
        for(let i = 0; i < allTeams.length; i += 1){
            if(allTeams[i].players.length > 0){
                if(allTeams[i].players.indexOf(playerObj) > -1)
                    allTeams[i].players.splice(allTeams[i].players.indexOf(playerObj), 1);
            }
        }
        allPlayers.splice(allPlayers.indexOf(playerObj), 1)
    };

    factory.deleteTeam = function (teamObj) {
        allTeams.splice(allTeams.indexOf(teamObj), 1);
    };

    factory.newTeam = function (teamObj) {
        console.log(teamObj);
        if(teamObj){
            if(teamObj.team && teamObj.player){
                teamObj.id = guid();
                let teamIndex = allTeams.indexOf(teamObj.team);
                console.log(teamIndex);
                if(allTeams[teamIndex].players.indexOf(teamObj.player) > -1 ){
                    return false;
                } else {
                    allTeams[teamIndex].players.push(teamObj.player);
                    return true;
                }
            }
        }
    };

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    // Return the factory Object
    return factory;
}]);

// Player Controller
app.controller('playerController', ['gameFactory',function (gameFactory) {
    this.players = gameFactory.getPlayers();
    this.player = {};

    this.newPlayer = function (playerObj) {
        gameFactory.newPlayer(playerObj);
        this.player = {}
    };

    this.removePlayer = function (playerObj) {
        gameFactory.deletePlayer(playerObj);
    };

}]);

// Team Controller
app.controller('teamController', ['gameFactory',function (gameFactory) {
    this.teams = gameFactory.getTeams();
    this.team = {};

    this.newTeam = function (teamObj) {
        gameFactory.addTeam(teamObj);
        this.team = {};
    };

    this.removeTeam = function (teamObj) {
        gameFactory.deleteTeam(teamObj);
    }
}]);

// Join Controller
app.controller('joinController', ['gameFactory',function (gameFactory) {
    this.selectValue = {};
    this.teams = gameFactory.getTeams();
    this.players = gameFactory.getPlayers();
    this.test = "this is a test";
    this.joinError;

    this.newJoin = function (joined) {
        let didJoin = gameFactory.newTeam(joined);
        if(didJoin){
            this.joinError = 'Play Has Joined The Team!'
        } else {
            this.joinError = 'Player Already On Team!'
        }
    };

    this.leaveTeam = function(player, team){
        gameFactory.leaveTeam(player,team);
    };
}]);
















// Random Team Data
let allTeams = [
    {
        "id": "58cc8c138d6bfd06d2bb1bbf",
        "teamName": "Gambrills Nguyen's ",
        "players": []
    },
    {
        "id": "58cc8c13b91c3358f8bff6ba",
        "teamName": "Brule Fernandez's ",
        "players": []
    },
    {
        "id": "58cc8c135f565c879efc5325",
        "teamName": "Vicksburg Blackburn's ",
        "players": []
    },
    {
        "id": "58cc8c13efd6ae147323ead5",
        "teamName": "Dixie Hoover's ",
        "players": []
    },
    {
        "id": "58cc8c1385ae5fec5960d4a8",
        "teamName": "Windsor Hernandez's ",
        "players": []
    },
    {
        "id": "58cc8c13ce1c9d6c27f5dc4a",
        "teamName": "Broadlands Buck's ",
        "players": []
    },
    {
        "id": "58cc8c13e2bfc191393a28ea",
        "teamName": "Iola Castro's ",
        "players": []
    },
    {
        "id": "58cc8c13464bd1fb37b66b08",
        "teamName": "Rivers Valencia's ",
        "players": []
    },
    {
        "id": "58cc8c13ca4d92416914c4c7",
        "teamName": "Rivera Sullivan's ",
        "players": []
    },
    {
        "id": "58cc8c1395af837a8d07a1fb",
        "teamName": "Kraemer Graves's ",
        "players": []
    },
    {
        "id": "58cc8c135146f61ad63c9254",
        "teamName": "Edmund Watkins's ",
        "players": []
    },
    {
        "id": "58cc8c13a9d814af5b185f5f",
        "teamName": "Frystown Armstrong's ",
        "players": []
    },
    {
        "id": "58cc8c1353d9cfc1cc02e4c6",
        "teamName": "Cartwright Frederick's ",
        "players": []
    },
    {
        "id": "58cc8c1380e47608bfef37ad",
        "teamName": "Talpa Graham's ",
        "players": []
    },
    {
        "id": "58cc8c13cbd36c4263941b62",
        "teamName": "Bluffview Gilliam's ",
        "players": []
    },
    {
        "id": "58cc8c1341fffff9671c3434",
        "teamName": "Cannondale Nelson's ",
        "players": []
    },
    {
        "id": "58cc8c138f631ac1d71a762a",
        "teamName": "Warsaw Harmon's ",
        "players": []
    },
    {
        "id": "58cc8c13ed6e5f0b77259b0d",
        "teamName": "Crawfordsville Salinas's ",
        "players": []
    },
    {
        "id": "58cc8c13a6ae65e717e82246",
        "teamName": "Fairforest Weaver's ",
        "players": []
    },
    {
        "id": "58cc8c1378b3bf002cc1a7c6",
        "teamName": "Goldfield Barnett's ",
        "players": []
    }
];

// Random Player Data

let allPlayers =[
    {
        "id": "58cc8ba924b7d06212401f7f",
        "name": "Yvette Miller"
    },
    {
        "id": "58cc8ba927dfa88fb2329bfe",
        "name": "Conway Lindsey"
    },
    {
        "id": "58cc8ba9a3a580f0c8b5a240",
        "name": "Patsy Rodgers"
    },
    {
        "id": "58cc8ba9033180dd8df12954",
        "name": "Norman Hardin"
    },
    {
        "id": "58cc8ba94703fddecaadccca",
        "name": "Constance Ashley"
    },
    {
        "id": "58cc8ba98a6cddebd4e03f88",
        "name": "Jarvis Roth"
    },
    {
        "id": "58cc8ba9f735d53c01d96158",
        "name": "Mccray Stevens"
    },
    {
        "id": "58cc8ba944b8c22b797361fa",
        "name": "Jennings Collins"
    },
    {
        "id": "58cc8ba928ab9d11ee757286",
        "name": "Simone Petersen"
    },
    {
        "id": "58cc8ba98dafdaa6eb40f631",
        "name": "Brewer Crawford"
    },
    {
        "id": "58cc8ba976abb9452fae2b77",
        "name": "Jeri Wilkerson"
    },
    {
        "id": "58cc8ba93621bd19a51d4555",
        "name": "Fernandez Barrera"
    },
    {
        "id": "58cc8ba9d9f2a960a404feca",
        "name": "Griffith Owens"
    },
    {
        "id": "58cc8ba971ba35ed6d81cafb",
        "name": "Spencer Williams"
    },
    {
        "id": "58cc8ba91b0a6a01a8dea444",
        "name": "Sheppard Silva"
    },
    {
        "id": "58cc8ba92fe86b5d9caa4c37",
        "name": "Jill Osborn"
    },
    {
        "id": "58cc8ba9477971a8daf8a1c4",
        "name": "Lucy Stafford"
    },
    {
        "id": "58cc8ba92f49e9461d42e89d",
        "name": "Holly Johns"
    },
    {
        "id": "58cc8ba918f823be7556c763",
        "name": "Lea Richardson"
    },
    {
        "id": "58cc8ba9f33c3fa6c4d4ee6a",
        "name": "Wall Nielsen"
    }
];

