import assert from 'assert';

import * as dotenv from 'dotenv';
import path from 'path';

import mock_server from './mocks/server.js';
import isPortReachable from 'is-port-reachable';

function testServer() {

    mock_server.listen(process.env.PORT);

    describe("mock Node.js server", function() {
        describe("reachability", function() {
            it("externally (via request)", async function() {
                let res = await isPortReachable(process.env.PORT, { host: process.env.HOST });
                assert.equal(res, true);
            })
            it("internally (via args)", function() {
                assert(mock_server._connectionKey.split("::::")[1] == process.env.PORT);
            })
        })
    })

    setTimeout(function() {mock_server.close()}, 1000);
}

let configPath = path.resolve("./server.env");
dotenv.config({path: configPath});

testServer();
