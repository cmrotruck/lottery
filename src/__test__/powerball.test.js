import { GetPowerballDrawings } from "../lib/pb";
//const { GetPowerballDrawings } = require("../lib/powerball");

test("Gets all draws from api", async () => {
  var results = await GetPowerballDrawings();
  console.log(results);
  expect(results.status).toBe("success");
});
