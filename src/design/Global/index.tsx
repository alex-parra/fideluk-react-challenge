import React from 'react';
import { Global, css } from '@emotion/core';
import normalizeMore from './_base';

export default () => (
  <Global
    styles={css`
      ${normalizeMore}

      :root {
        --text-color: #212529
        --btn-color: #212529;
      }

      html {
        background-color: #EBF4FF;
      }

      #root {
        & > header {
          padding: 20px 30px;
        }

        & > main {
          padding: 0 30px 30px;
        }
      }

      .text-center {
        text-align: center;
      }
    `}
  />
);
