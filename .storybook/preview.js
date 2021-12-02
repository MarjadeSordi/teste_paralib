import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: {
    default:"theme default",
    values: [
      {
        name: "theme purple",
        value: "#C39BD3"
      },
      {
        name: "theme orange",
        value: "#FAE5D3"
      },
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}