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
                container: "hsl(0, 0%, 100%, .1)",
                start: "hsl(158, 89%, 30%)",
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
                home: "url(../img/home.png)"
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
