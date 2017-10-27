//Netflix episode binge 

//this code has been revised from the original and edited based on a stackoverflow question asking me to simplify the code 

//https://stackoverflow.com/a/46980084/8418632



const episodes = [
  { id: 's06e01', title: 'Pilot' },
  { id: 's06e02', title: 'Top Banana' },
  { id: 's06e03', title: 'Charity Drive' },
  { id: 's06e04', title: 'Visiting Ours' },
  { id: 's06e05', title: 'My Mother, the Car' },
  { id: 's06e06', title: 'In God We Trust' },
  { id: 's06e07', title: 'Storming the castle' },
  { id: 's06e08', title: 'Pier Pressure' },
  { id: 's06e09', title: 'Public Relations' },
];

const finaleEpisode = { id: 's06e10', title: 'Bringing Up Buster' };

const addToPlaylist = episodes.concat(finaleEpisode)


for (let i = 0; i < addToPlaylist.length; i++) {
    setTimeout(() => {
        // clears all characters printer on previous loop
        process.stdout.clearLine();

        // use \r at the end to return the cursor to the begining 
        process.stdout.write("You are Now Watching "  + addToPlaylist[i].id + ' ' + addToPlaylist[i].title + "\r");
    }, i * 2000);
}

setTimeout(function(){console.log('\x1Bc'); }, 21000);
