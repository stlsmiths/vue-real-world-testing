import axios from "axios";
import {events as expEvents} from '../mocks/test-db.json'

describe('Smoke tests for Mock Service Worker', () => {

  it("request /event works", async () => {
    const result = await axios.get("/event");
    expect(result.data).toStrictEqual( {...expEvents[0]} );
  });

  it("request /events works", async () => {
    const result = await axios.get("/events");
    // console.log(result.data);
    expect(result.data).toHaveLength( expEvents.length );
    expect(result.data[2]).toStrictEqual( {...expEvents[2]} );
  });

  it("request /nothing returns expected error", async () => {
    try {
      const result = await axios.get("/nothing")
      console.log('try results=', result)
      expect(true).toBeTruthy();
    } catch (errResp) {
      expect(errResp.response.status).toBe(403);
      expect(errResp.response.data).toEqual({errorMessage: 'Path /nothing not found'});
    }
  });
})
