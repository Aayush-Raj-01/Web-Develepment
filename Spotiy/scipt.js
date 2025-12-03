async function getSongs() {
    // Step 1: Get the HTML from server
    const response = await fetch("http://127.0.0.1:5500/songs/");
    const html = await response.text();
    
    // Step 2: Put HTML in a div so we can search it
    const div = document.createElement("div");
    div.innerHTML = html;
    
    // Step 3: Get all links
    const allLinks = div.getElementsByTagName("a");
    
    // Step 4: Find only MP3 files
    const songs = [];
    for (let i = 0; i < allLinks.length; i++) {
        const link = allLinks[i];
        const url = link.href;
        
        if (url.endsWith(".mp3")) {
            songs.push(url);
        }
    }
    
    // Step 5: Return the list of songs
    return songs;
}
async function main(){
    // Call the functio[]
    let songs = getSongs()
    console.log(songs)

    // play the first song  
    var audio = new Audio(songs[0]);
    audio.play();

    audio.addEventListener("loadeddata",() => {
        let duration = audio.duration;
        console.log(duration)
    });

}

main()