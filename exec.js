const exec = require("child_process");

(async () => {
    async function loader () {
        const child = exec.spawn("node", ["--experimental-repl-await", "--trace-warnings", "app.js"], {
            stdio: "inherit",
            shell: true,
            cwd: __dirname
        })

        child.on("close", async (code) => {
            if (code === 2) {
                await loader()
                return
            }
            process.exit(0)
        })
    }
    await loader()
})()
