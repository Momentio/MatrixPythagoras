import GlobalModel from "global-model";

export default (parrentPath = "", name = "targetDate") => {
    return new GlobalModel(
        parrentPath,
        name,
        new Date(1952, 9, 6)
    );
};