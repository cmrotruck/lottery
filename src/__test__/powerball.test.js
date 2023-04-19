import { GetPowerballDrawings, GetLast10Draws } from "../lib/pb";
//const { GetPowerballDrawings } = require("../lib/powerball");

test("Gets all draws from api", async () => {
  var results = await GetPowerballDrawings();
  //console.log(results);
  expect(results.status).toBe("success");
});

test("Gets the last 10 draws from api", async () => {
  var results = await GetLast10Draws();
  //console.log(results);
  expect(results.status).toBe("success");
});
