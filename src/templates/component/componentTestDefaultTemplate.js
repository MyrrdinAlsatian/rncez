module.exports = `import React from 'react';
import ReactDOM from 'react-dom';
import TemplateName from 'TemplateTestName';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TemplateName />, div);
  ReactDOM.unmountComponentAtNode(div);
});`;
