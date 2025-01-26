import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import Providers from 'src/providers';

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
