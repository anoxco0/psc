async function getUser(user){
    try {
        let responce  = await fetch(`https://api.github.com/users/${user}`)
        let data = await responce.json()
        return data
    }
    catch(error){
        console.log(error);
    }
}
export default getUser
