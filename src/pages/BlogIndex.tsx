export type BlogTitle = {
    title: string,
    url: string,
    date: string,
    isProject: boolean,
    tech?: string[],
    imgSrc?: string,
    desc?: string,
    gh?: string,
}

export type Blog = {
    titleElem: BlogTitle
    markdown: string,
}

export const ProjectIndex: Blog[] = [
    {
        titleElem: {
            title: "Astrarium",
            url: "projects/astrarium",
            date: "2024",
            isProject: true,
            tech: ["typescript-original", "react-original", "threejs-original", "python-plain", "flask-original", "sqlalchemy-plain", "postgresql-plain", "firebase-plain", "docker-plain"],
            desc: "Helps astronomers discover objects in the night sky with a real-time AR & space modeling engine and share observations using a fully native social network.",
            imgSrc: "../assets/astrarium1.png",
        },
        markdown: require("./projects/astrarium.md"),
    },
    {
        titleElem: {
            title: "Training optical music recognition models on semantic-agnostic ground truth data",
            url: "projects/omr",
            date: "2023",
            isProject: true,
            tech: ["pytorch-plain", "python-plain"],
            desc: "Improving a state-of-the-art OMR model (transformer, CRNN) with a new lossless encoding for sheet music data which removes semantic information about the music, generalizable to all computer vision models.",
            gh: "https://github.com/hodori0719/e2e-pianoform",
            imgSrc: '../assets/omr.png',
        },
        markdown: require("./projects/omr.md"),
    },
    {
        titleElem: {
            title: "Eventi",
            url: "projects/eventi",
            date: "2022",
            isProject: true,
            tech: ["javascript-plain", "nodejs-plain",  "discordjs-plain", "mongoose-original", "mongodb-plain"],
            desc: "A Discord bot which expands the built-in events function for medium-sized communities.",
            gh: "https://github.com/hodori0719/Eventi"
        },
        markdown: require("./projects/eventi.md"),
    },
    {
        titleElem: {
            title: "AniEmbed",
            url: "projects/aniembed",
            date: "2022",
            isProject: true,
            tech: ["tensorflow-original", "python-plain", "jupyter-plain"],
            desc: "A neural-network based anime recommender/similarity analysis based on data from automated scraping and the MAL API.",
            imgSrc: "../assets/aniembed.png",
            gh: "https://github.com/hodori0719/aniembed"
        },
        markdown: require("./projects/aniembed.md"),
    },
    {
        titleElem: {
            title: "About this site",
            url: "about-this-site",
            date: "",
            isProject: true,
            tech: ["typescript-original", "react-original"],
            gh: "https://github.com/hodori0719/hodori0719.github.io/tree/gh-pages"
        },
        markdown: require("./About.md"),
    },
]

export const BlogIndex: Blog[] = [
    {
        titleElem: {
            title: "Implementing Camera Movement for AR Mobile Apps in Expo",
            url: "blog/implementing-camera-movement-for-ar-mobile-apps-in-expo",
            date: "April 17, 2024",
            isProject: false,
        },
        markdown: require("./writing/2.md"),
    },
]

export const MusicIndex: Blog[] = [
    {
        titleElem: {
            title: "Kiki's Delivery Service",
            desc: "9' — arranged for orchestra by June Yoo; original music by Joe Hisaishi",
            url: "music/work/kikis-delivery-service",
            date: "2025",
            isProject: false,
        },
        markdown: require("./music/kiki.md"),
    },
    {
        titleElem: {
            title: "Merry-Go-Round of Life (from Howl's Moving Castle)",
            desc: "6' — arranged for orchestra by June Yoo; original music by Joe Hisaishi",
            url: "music/work/merry-go-round-of-life",
            date: "2023",
            isProject: false,
        },
        markdown: require("./music/howls.md"),
    },
    {
        titleElem: {
            title: "My Neighbor Totoro and His Dream of Flight",
            desc: "7' — arranged for orchestra by June Yoo; original music by Joe Hisaishi",
            url: "music/work/totoro-wind-rises",
            date: "2024",
            isProject: false,
        },
        markdown: require("./music/totoro.md"),
    },
    {
        titleElem: {
            title: "A Town With an Ocean View (from Kiki's Delivery Service)",
            desc: "2' — arranged for string quartet by June Yoo; original music by Joe Hisaishi",
            url: "music/work/umi-no-mieru-machi",
            date: "2022",
            isProject: false,
        },
        markdown: require("./music/umi.md"),
    },
    {
        titleElem: {
            title: "The TikTok Medley",
            desc: "14' — arranged for orchestra by June Yoo & Kira Tang",
            url: "music/work/tiktok",
            date: "2024",
            isProject: false,
        },
        markdown: require("./music/tiktok.md"),
    },
    {
        titleElem: {
            title: "DPoponomenon",
            desc: "10' — arranged for orchestra by June Yoo; original music by Chappell Roan, Sabrina Carpenter, and Billie Eilish",
            url: "music/work/dpoponomenon",
            date: "2024",
            isProject: false,
        },
        markdown: require("./music/dpoponomenon.md"),
    },
    {
        titleElem: {
            title: "Genshin Impact: from Liyue to Sumeru",
            desc: "12' — arranged for orchestra by June Yoo; original music by Yu-Peng Chen & HOYO-MiX",
            url: "music/work/genshin",
            date: "2022",
            isProject: false,
        },
        markdown: require("./music/genshin.md"),
    },
    {
        titleElem: {
            title: "The Little Mermaid",
            desc: "20' + 1' — arranged for orchestra by June Yoo; original music by Alan Menken",
            url: "music/work/mermaid",
            date: "2023",
            isProject: false,
        },
        markdown: require("./music/mermaid.md"),
    },
    {
        titleElem: {
            title: "Le Festin (from Ratatouille)",
            desc: "3' — arranged for orchestra by June Yoo; original music by Michael Giacchino",
            url: "music/work/le-festin",
            date: "2024",
            isProject: false,
        },
        markdown: require("./music/le-festin.md"),
    },
    {
        titleElem: {
            title: "Bohemian Rhapsody",
            desc: "6' — arranged for mixed ensemble by June Yoo; original music by Queen",
            url: "music/work/bohemian-rhapsody",
            date: "2024",
            isProject: false,
        },
        markdown: require("./music/bohemian-rhapsody.md"),
    },
    {
        titleElem: {
            title: "Accumula Town & Aspertia City",
            desc: "7' — arranged for orchestra by June Yoo; original music by Shota Kageyama & Go Ichinose",
            url: "music/work/b2w2",
            date: "2020",
            isProject: false,
        },
        markdown: require("./music/b2w2.md"),
    },
    {
        titleElem: {
            title: "Minecraft, Suite for Orchestra",
            desc: "11' — arranged for orchestra by June Yoo; original music by C418",
            url: "music/work/minecraft",
            date: "2022",
            isProject: false,
        },
        markdown: require("./music/minecraft.md"),
    },
]
