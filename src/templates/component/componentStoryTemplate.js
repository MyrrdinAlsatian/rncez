module.exports = `/* eslint-disable */
import React from 'react';
<<<<<<< HEAD
import TemplateName from '../TemplateName';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'TemplateName',
    component: TemplateName,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <TemplateName {...args} />;
=======
import { storiesOf } from '@storybook/react';
import TemplateName from '../TemplateName';
>>>>>>> 66601a69561204c53a995f78489b7682a8438e79

`;
