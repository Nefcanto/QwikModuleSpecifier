export const onGet = async ({ json }) => {
    json(200, { hello: "world" });
};
