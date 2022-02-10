let test;
async function init() {
    test = await getModule("program.wasm")
    let out = test.instance.exports.helloWorld()
    console.log(out)
    document.getElementById("myDiv").innerHTML = out
}
init()
