import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from './card';

storiesOf('Card', module).add('Default', () => (
  <div>
    <Card color="white">
      <h1>Text!</h1>
      <body>Text 2</body>
      <div />
    </Card>
  </div>
));
