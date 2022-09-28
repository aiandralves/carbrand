const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            container: {
                padding: "2rem",
                center: true,
            },
            fontFamily: {
                text: ["Exo, sans-serif"]
            },
            colors: {
                primary: "rgb(218, 175, 4)",
                alt: "rgb(196, 157, 7)",
                text: "hsl(219, 8%, 75%)",
                title: "hsl(219, 8%, 95%)",
                secondary: "hsl(219, 4%, 55%)",
                body: "#18161a",
                container: "#1C1A1F",
                start: "hsl(158, 89%, 30%)",
                shape: "hsla(48, 98%, 44%, .2)",
                score: "rgba(0, 0, 0, .6)",
                card: "hsla(0, 0%, 100%, .1)",
                scrollbar: "hsl(219, 4%, 16%)",
                "scrollbar-thumb": "hsl(219, 4%, 24%)"
            },
            maxWidth: {
                "home": "700px",
                "480md": "480px",
                "380md": "380px"
            },
            boxShadow: {
                "start-one": "0 0 12px hsl(158, 98%, 43%)",
                "start-two": "0 0 24px hsl(158, 98%, 43%)"
            },
            backgroundImage: {
                home: "url(../img/home.png)",
                overlay: "linear-gradient(270deg,rgba(4,4,4,.23) 0,rgba(0,0,0,.48) 100%)"
            },
            gridTemplateColumns: {
                "15": "repeat(1, max-content)",
                "16": "repeat(2, max-content)",
                "17": "repeat(3, max-content)",
                "04": "repeat(4, max-content)",
                "228": "repeat(2, 228px)",
                "248": "repeat(3, 248px)",
                "252": "repeat(4, 252px)",
                "5fr": ".5fr"
            },
            gridTemplateRows: {
                "224": "max-content 224px"
            }
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                ".transition-3s": {
                    transition: ".3s",
                },
            });
        }),
    ],
}
