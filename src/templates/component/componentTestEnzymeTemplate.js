module.exports = `import React from 'react';
import { shallow } from 'enzyme';
import TemplateName from 'TemplateTestName';

describe('<TemplateName />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TemplateName />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
`;
