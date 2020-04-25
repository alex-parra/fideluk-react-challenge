import { css } from '@emotion/core';
import normalize from './_normalize';
import { darken } from 'polished';

const theme = {
  colors: {
    text: '#2D3748',
    btnBg: '#E2E8F0',
  },
};

export default css`
  ${normalize}

  html {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    line-height: var(--line-height, 1.4);
    color: var(--text-color, ${theme.colors.text});
  }

  body {
    flex: 1;
    font-size: 1rem;
    line-height: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  input {
    font-size: 1rem;
    display: block;
    line-height: var(--line-height, 1.4);
    padding: 0.3em 0.4em;
    border: 1px solid var(--input-border-color, ${theme.colors.btnBg});
    border-radius: 0.2em;
  }

  button {
    padding: 0.5em 1.5em;
    font-size: 1em;
    line-height: inherit;
    background-color: ${theme.colors.btnBg};
    border: 1px solid transparent;
    color: var(--btn-color, #212529);
    border-radius: 0.2em;

    &:hover {
      cursor: pointer;
      background-color: var(--btn-bg-hover, ${darken(0.05, theme.colors.btnBg)});
    }
  }
`;
