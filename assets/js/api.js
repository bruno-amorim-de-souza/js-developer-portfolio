

async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/bruno-amorim-de-souza/js-developer-portfolio/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}

