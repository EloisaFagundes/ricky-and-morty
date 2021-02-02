import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './button';

storiesOf('Button', module)
  // as variações dos componentes acontecem aqui v
  .add('Default', () => <Button>Default</Button>)
  .add('Outlined', () => <Button outlined>Outlined</Button>)
  .add('Disabled', () => <Button disabled>Default</Button>);
