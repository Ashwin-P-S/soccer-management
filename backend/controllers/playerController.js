import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

const Player = mongoose.model("Player", PlayerSchema);

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);

    newPlayer.save().then((err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
};

export const getPlayer = (req, res) => {
    Player.find().then((err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
};

export const getPlayerWithId = (req, res) => {
    Player.findById(req.params.PlayerId).then((err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
};

export const updatePlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.PlayerId }, req.body, {
        new: true,
    }).then((err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
};

export const deletePlayer = (req, res) => {
    Player.findByIdAndRemove({ _id: req.params.PlayerId }).then((err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Successfully deleted the Player" });
    });
};
