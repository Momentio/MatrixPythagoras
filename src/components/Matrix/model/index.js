import GlobalModel from "global-model";

export default (parrentPath = "", name = "matrix") => {
    return new GlobalModel(
        parrentPath,
        name,
        [
            "11111",
            "2",
            "3",
            "4",
            "5",
            "",
            "7",
            "8",
            "99",
        ],
    );
};