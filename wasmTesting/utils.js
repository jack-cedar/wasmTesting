async function getModule(url)
{
    let obj = await fetch(url)
 
    let instance  =
    await obj.arrayBuffer()
    .then(src => WebAssembly.instantiate(src))
    return instance
}