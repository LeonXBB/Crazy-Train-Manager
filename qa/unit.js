import assert from 'assert';

import mock_server from './mocks/server.js';
import isPortReachable from 'is-port-reachable';

function testServer() {

    mock_server.listen(8080);

    describe("mock Node.js server", function() {
        describe("reachability", function() {
            it("externally (via request)", async function() {
                let res = await isPortReachable(8080, { host: "localhost" });
                assert.equal(res, true);
            })
            it("internally (via args)", function() {
                assert(mock_server._connectionKey.split("::::")[1] === "8080");
            })
        })
    })

    setTimeout(function() {mock_server.close()}, 1000);
}

testServer();
