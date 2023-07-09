import {
    addNewPlayer,
    deletePlayer,
    getPlayer,
    getPlayerWithId,
    updatePlayer,
} from "../controllers/playerController";

const routes = (app) => {
    app.route("/players").get(getPlayer).post(addNewPlayer);
    app.route("/players/:PlayerId")
        .get(getPlayerWithId)
        .put(updatePlayer)
        .delete(deletePlayer);
};

export default routes;
