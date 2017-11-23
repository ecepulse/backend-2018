/**
 * Created by rahul_ram on 11/22/17.
 */

var request = require("request");
var serverRoot = require("../server");

var uri = 'http://localhost:3000/';

describe("Test Root Endpoint", function () {
    describe("GET /", function () {
        it('status code 200 received', function () {
            request.get(uri, function (err, resp, body) {
                expect(resp.statusCode).toBe(200);
                serverRoot.closeServer();
                done();
            })
        })
    });
});