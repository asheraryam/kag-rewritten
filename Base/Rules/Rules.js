Engine.Import("Maps/MapLoader.js")

class Rules {
    constructor() {
        this.name = "Generic game mode"
        this.description = "No description provided."
    }

    Start() {
        
    }

    OnPlayerConnected(player) {

    }

    OnPlayerDisconnected(player) {

    }
}

Engine.Export(Rules)