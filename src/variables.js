const videosToDisplay = [
    "https://www.youtube.com/embed/RZg4YW95aGU", // Anomaly
    "https://www.youtube.com/embed/eblo1EKr8Kg", // Orchid
    "https://www.youtube.com/embed/v82rNqVLD68", // Enemies
    "https://www.youtube.com/embed/fUy-RDanfPA", // Best Girl
    "https://www.youtube.com/embed/oFRhIvIu-pg", // Twitch
    "https://www.youtube.com/embed/jywXa6sNX3w"  // Anxiety On Repeat
];

const albumCoverImageToDisplay = "/images/BLP_Album_Cover.jpg"; 
const albumStreamURLAmazon = "https://music.amazon.com/albums/B07SR7VY9B";
const albumStreamURLSpotify = "https://open.spotify.com/album/5dISG6rMmqwneX0eErsA9a";
const albumStreamURLAppleMusic = "https://music.apple.com/us/album/bad-luck-party/1467093347";
const albumBuyLink = "https://www.flyingnun.co.nz/products/miss-june-bad-luck-party-2019"

// #~#~#~#~#~#~#~#~#~#~#~# SHOWS #~#~#~#~#~#~#~#~#~#~#~#
// date format: YYYY-MM-DD
const upcomingShows = [
    {
        date : "2023-03-03", 
        venue : "Whammy Bar", 
        country : "New Zealand", 
        city : "Auckland",
        ticketURL : "https://www.undertheradar.co.nz/ticket/19531/Miss-June.utr",
        soldOut : true
    },
    {
        date : "2023-03-09", 
        venue : "San Fran", 
        country : "New Zealand", 
        city : "Wellington",
        ticketURL : "https://www.undertheradar.co.nz/ticket/19532/Miss-June.utr",
        soldOut : false
    },
    {
        date : "2023-03-11", 
        venue : "Outerfields Western Springs Park", 
        country : "New Zealand", 
        city : "Auckland",
        ticketURL : "www.google.com",
        soldOut : false
    },
    {
      date : "2023-10-13", 
      venue : "James Mum's House", 
      country : "New Zealand", 
      city : "Auckland",
      ticketURL : "https://www.undertheradar.co.nz/ticket/19531/Miss-June.utr",
      soldOut : true
    },
    {
        date : "2023-11-01", 
        venue : "Saddam's Hiding Place", 
        country : "طعمه جيد", 
        city : "المهبل",
        ticketURL : "https://www.undertheradar.co.nz/ticket/19532/Miss-June.utr",
        soldOut : true
    },
    {
        date : "2023-12-25", 
        venue : "The Gates Of Hell", 
        country : "Australia", 
        city : "Geelong",
        ticketURL : "www.google.com",
        soldOut : false
    }
];

// #~#~#~#~#~#~#~#~#~#~#~# MERCH #~#~#~#~#~#~#~#~#~#~#~#
const currentMerch = [
  {
    name : "Miss June T-Shirt",
    imageURL : "/images/test_merch.jpg",
    URL : "https://www.pornhub.com/"
  },
  {
    name : "Miss June T-Shirt",
    imageURL : "/images/test_merch.jpg",
    URL : "https://www.pornhub.com/"
  },
  {
    name : "Miss June T-Shirt",
    imageURL : "/images/test_merch.jpg",
    URL : "https://www.pornhub.com/"
  },
  {
    name : "Miss June T-Shirt",
    imageURL : "/images/test_merch.jpg",
    URL : "https://www.pornhub.com/"
  },
  {
    name : "Miss June T-Shirt",
    imageURL : "/images/test_merch.jpg",
    URL : "https://www.pornhub.com/"
  },
  {
    name : "Miss June T-Shirt",
    imageURL : "/images/test_merch.jpg",
    URL : "https://www.pornhub.com/"
  },
  {
    name : "Miss June T-Shirt",
    imageURL : "/images/test_merch.jpg",
    URL : "https://www.pornhub.com/"
  },
  {
    name : "Miss June T-Shirt",
    imageURL : "/images/test_merch.jpg",
    URL : "https://www.pornhub.com/"
  },
  {
    name : "Miss June T-Shirt",
    imageURL : "/images/test_merch.jpg",
    URL : "https://www.pornhub.com/"
  },
];

const bandBiography = "This is our band bio.";

export { videosToDisplay, 
         currentMerch, 
         upcomingShows, 
         albumCoverImageToDisplay,
         albumStreamURLAmazon,
         albumStreamURLSpotify,
         albumStreamURLAppleMusic,
         albumBuyLink,
         bandBiography
};