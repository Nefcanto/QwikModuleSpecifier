import baseConfig from "./TailwindBase.js"

const config = {
    presets: [
        baseConfig
    ],
    theme: {
        extend: {
            colors: {
                custom: {
                    color1: "#3175B7",
                    color11: "#0B2659",
                    color12: "#0355a0",
                    color13: "#186ab8",
                    color14: "#255d92",
                    color15: "#6eaad5",
                    color16: "#09337c",
                    color2: "#f3f4f6",
                    color22: "#F6F6F6",
                    color3: "#d1d1d1",
                    color31: "#e7e7e7",
                    color32: "#636363",
                    color33: "#555555",
                    color34: "#E3E3E3",
                    color4: "#328d1b",
                }
            },
            boxShadow: {

                lineShadow: "inset 0 -1px 0 #d1d1d1"
            }
        }
    },
}

export default config
