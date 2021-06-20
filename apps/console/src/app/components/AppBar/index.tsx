import React from 'react';
import { useStyletron } from 'baseui';
import { HeadingSmall } from 'baseui/typography';
import { FlexFiller } from '@components/FlexFiller';
import { Button, SHAPE } from 'baseui/button';
import { useRecoilState } from 'recoil';
import { Theme, themeState } from '@atoms/theme';
import type { AppTheme } from '@utils/theme';

export default function AppBar() {
  const [css, theme] = useStyletron();
  const [, setTheme] = useRecoilState(themeState);

  function toggleTheme() {
    setTheme((currVal) => {
      return currVal === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    });
  }

  return (
    <div
      className={css({
        boxShadow: theme.lighting.shadow500,
      })}
    >
      <div
        className={css({
          height: '74px',
          maxWidth: (theme as AppTheme).maxPageWidth,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          margin: '0 auto',
        })}
      >
        <HeadingSmall>Ninja Recon</HeadingSmall>

        <FlexFiller />

        <Button shape={SHAPE.square} onClick={toggleTheme}>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <g transform="matrix( 1 0 0 1 4 1 )">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.3999 11C15.7999 10.1 16 9 16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 9.1 0.200098 10.1 0.600098 11L2.19995 15L13.8 15L15.3999 11ZM11 22L12.6001 18L3.3999 18L5 22L11 22Z"
                fill={theme.colors.backgroundSecondary}
                opacity="1"
              />
            </g>
          </svg>
        </Button>
      </div>
    </div>
  );
}
