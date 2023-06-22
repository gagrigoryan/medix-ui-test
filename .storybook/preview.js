import "!style-loader!css-loader!sass-loader!../src/styles/global.scss";
import "!style-loader!css-loader!sass-loader!../src/styles/palette.scss";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
