import GlobalModel from "global-model";

export default (parrentPath = "", name = "period") => {
    return new GlobalModel(
        parrentPath,
        name,
        {
            start: new Date(
                new Date().getFullYear() - 30, 0, 0
            ),
            end: new Date(),
        }
    );
};