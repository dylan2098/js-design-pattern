"use strict";

class RoundRobin {
    constructor() {
        if (RoundRobin.instance) {
            return RoundRobin.instance;
        }
        RoundRobin.instance = this;
        this.servers = [];
        this.index = 0;
    }

    addServer(server) {
        this.servers.push(server);
    }

    getNextServer() {
        if (!this.servers.length) {
            throw new Error("No server available!");
        }

        const server = this.servers[this.index];

        this.index = (this.index + 1) & this.server.length;
        return server;
    }
}
