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

const noShowsMessage = ["Nothings booked...yet!", 
                        "Follow us to get updates when we book our next show", 
                        ":)"
                      ];

// #~#~#~#~#~#~#~#~#~#~#~# MERCH #~#~#~#~#~#~#~#~#~#~#~#
const merchShopURL = "https://missjune.bandcamp.com/merch";
const currentMerch = [
  {
    name : "MJ LP #2",
    details: "Special Edition Red Vinyl",
    imageURL : "/images/merch-images/test_merch.jpg",
    URL : "https://www.pornhub.com/",
    price : "$55.00 NZD"
  },
  {
    name : "MJ LP #2",
    details: "Vinyl (Black)",
    imageURL : "/images/merch-images/test_merch.jpg",
    URL : "https://www.pornhub.com/",
    price : "$50.00 NZD"
  },
  {
    name : "Bad Luck Party",
    details: "Special Edition Blue Vinyl",
    imageURL : "/images/merch-images/test_merch.jpg",
    URL : "https://www.pornhub.com/",
    price : "$55.00 NZD"
  },
  {
    name : "Bad Luck Party",
    details: "Vinyl (Black)",
    imageURL : "/images/merch-images/test_merch.jpg",
    URL : "https://www.pornhub.com/",
    price : "$50.00 NZD"
  },
  {
    name : "Best Girl / Twitch",
    details: "7\" Vinyl",
    imageURL : "/images/merch-images/test_merch.jpg",
    URL : "https://www.pornhub.com/",
    price : "$13.00 NZD"
  },
  {
    name : "Miss June",
    details: "Necklace",
    imageURL : "/images/merch-images/test_merch.jpg",
    URL : "https://www.pornhub.com/",
    price : "$20.00 NZD"
  },
  {
    name : "Christafari Pedal",
    details: "Analog Distortion",
    imageURL : "/images/merch-images/test_merch.jpg",
    URL : "https://www.pornhub.com/",
    price : "$180.00 NZD"
  },
  {
    name : "MLE",
    details: "T-Shirt",
    imageURL : "/images/merch-images/test_merch.jpg",
    URL : "https://www.pornhub.com/",
    price : "$40.00 NZD"
  },
  {
    name : "Miss June",
    details: "Poster 40 x 32cm",
    imageURL : "/images/merch-images/test_merch.jpg",
    URL : "https://www.pornhub.com/",
    price : "$25.00 NZD"
  },
];

const bandBiography = ["Miss June is what happens when angst matures. Raised in the embers of punk rock, Miss June harness jagged, noisy guitars filtered through the unrivalled stage presence of frontperson Annabel Liddell, unafraid, unapologetic and ready to wake up the music scene.",
                        "Described as \"some unholy union between Sonic Youth and Le Tigre\", the NZ four piece, completed by the music school alumni recruited by Liddell – guitarist Jun Park, bass player Chris Marshall and drummer Tom Leggett – has built a reputation for fierce, formidable and head-spinning live shows.",
                        "Miss June have caught the attention of acts like The Foo Fighters, Shellac, Wolf Alice, Idles and Die! Die! Die!, who have all eagerly harnessed their support on stage.",
                        "Combining elements of post-punk, no-wave and rock, Miss June hold close their DIY roots while creating a blistering, reckless sound full of melodic hooks and overdriven riffs that are at once immediately recognizable and yet entirely their own.",
                        "Miss June are fast growing into a force to be reckoned with. Miss June demand attention. There has never been a better time for Miss June to make noise. Get in now. Or miss out.",
];

export { videosToDisplay,
         merchShopURL,
         currentMerch, 
         upcomingShows, 
         noShowsMessage,
         albumCoverImageToDisplay,
         albumStreamURLAmazon,
         albumStreamURLSpotify,
         albumStreamURLAppleMusic,
         albumBuyLink,
         bandBiography
};