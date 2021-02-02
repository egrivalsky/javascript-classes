class Artist {
    constructor(name, age, genre, label) {
        //You will need to decide what the datatypes will have to be
        //(booleans, arrays, objects, strings, numbers)
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.label = label;
        this.albums = [];
        this.songs = [];
        this.image = '';
        this.instagram = null;
    }
    addAlbum(album) {
        this.albums.push(album);
        console.log(`This is another ${album} for ${this.name}`);
    }

    addSong(song) {
        this.songs.push(song);
        console.log(`This is another ${song} for ${this.name}`);
    }

    addImage(imageLink) {
        this.image = imageLink;
        }

    addIG(username) {
        this.instagram = username;
    }
}

//this is an instance of the artist class:
const drake = new Artist('Drake', '33', 'hip hop', 'cash money records');
const hozier = new Artist('Hozier', '99', 'rock', 'cash money records');

const mountainGoats = new Artist('The Mountain Goats', 'like 50', 'rock', 'merge records');
mountainGoats.addAlbum('The Sunset Tree');
mountainGoats.addAlbum('Beat the Champ');
mountainGoats.addSong('In Corolla');
mountainGoats.addSong("You're in Maya");
mountainGoats.addImage('https://lh3.googleusercontent.com/proxy/Gr4ypmTQ4vRObq3ur0wOM6d9mDUfqam1jbHKBfQHQnPYalCtf9_IeWr33I2bGPboLwfqlnd_CvrjJcOlKDzYTis1StocJ8mwPg1ol1tfvecGkADhYIJs8D-sL56dhLmU_C_1ixnmVDsNqrQ_pvTUGhz8uOewMikDpA');
mountainGoats.addIG('@mountaingoatsmusic');
console.log(mountainGoats);