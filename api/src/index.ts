import createServer from "./server";

createServer().listen(3003, () => {
    console.log("Server running on port 3003");
})
