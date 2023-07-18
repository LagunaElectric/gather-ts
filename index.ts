import { API_KEY } from "./api-key"
import { Game, WireObject } from "@gathertown/gather-game-client"
global.WebSocket = require("isomorphic-ws")

// replace with your spaceId, that you can edit
const SPACE_ID = "your\\SpaceId"
const MAP_ID = "your-map-id"

const game = new Game(SPACE_ID, () => Promise.resolve({ apiKey: API_KEY }))
game.connect()
game.subscribeToConnection((connected) => console.log("connected?", connected))


const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))


const run = () => {
  game.subscribeToEvent(
    "playerMoves",
    (_data, _context) => {
      console.log('Data: ', _data)
      console.log('Context: ', _context)
    },
  )
}

run()
