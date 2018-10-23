var app = new Vue({
  el: '#app',
  data: {
    firstName: "Sira",
    lastName: "Thiery",
    description: "Master student in Journalism and International Security at Sciences Po Paris.",
    photo: "https://pbs.twimg.com/profile_images/899285838516936704/nfeLD7he_400x400.jpg",
    twitter: "sirathierij",
    github: "sirathierij",
    mail: "sira.thierij@sciencespo.fr",
    experiences: [{
      dateBegin: "07/2018",
      dateEnd: "09/2018",
      name: "Deutsche Welle TV, Studio Washington, D.C.",
      title: "Videojournalist",
      description: "Creating TV reports in New Mexico, Kansas, Florida and Washington, D.C. as well as writing articles, producing webvideos and conducting research."
    }, {
      dateBegin: "05/2018",
      dateEnd: "06/2018",
      name: "Syria Direct, Amman, Jordan",
      title: "Videojournalist",
      description: "Creating a short documentary about Syrian refugees in Jordan as well as a video about Syria Direct which is used for fundraising activities."
    }, {
      dateBegin: "2016",
      dateEnd: "2017",
      name: "Schwarzkopf Foundation",
      title: "Seminar teacher",
      description: "Teaching high school students all over Germany about politics and the European Union, thereby boosting political participation."
    }],
    formations: [{
      dateBegin: "2017",
      dateEnd: "2019",
      name: "Joint Master in Journalism and International Security",
      university: "Sciences Po Paris"
    }, {
      dateBegin: "2013",
      dateEnd: "2017",
      name: "BSc in European Studies and Law",
      university: "Technical University of Twente"
    }],
    languages: ["English", "German", "French", "Dutch", "Arabic"],
    skills: ["Adobe Premiere Pro", "Adobe Audition"],
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})