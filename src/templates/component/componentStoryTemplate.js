module.exports = `/* eslint-disable */
/* eslint-disable */
import React from 'react';
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

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

`;
