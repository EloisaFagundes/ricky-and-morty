import React from 'react';
import { storiesOf } from '@storybook/react';
import { H1, H2, H3 } from './typography.style';

storiesOf('Typography', module).add('Default', () => (
  <div>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
  </div>
));
