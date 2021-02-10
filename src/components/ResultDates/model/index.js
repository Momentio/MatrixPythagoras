import GlobalModel from "global-model";

export default (parrentPath = "", name = "matrix") => {
    return new GlobalModel(
        parrentPath,
        name,
        [],
        [new Date()]
    );
};