import React from 'react';
import AppBar from '@components/AppBar';
import AppFooter from '@components/AppFooter';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import AppBreadcrumbs from '@components/AppBreadcrumbs';
import { AppTheme } from '../../utils/theme';

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const [css, theme] = useStyletron();

  return (
    <Block
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      backgroundColor="backgroundPrimary"
    >
      <AppBar />
      <div
        className={css({
          flexGrow: 1,
          padding: '0 12px',
          maxWidth: (theme as AppTheme).maxPageWidth,
          width: '100%',
          margin: '0 auto',
        })}
      >
        <AppBreadcrumbs />
        <div className={css({ marginTop: '12px' })}>{children}</div>
      </div>
      <AppFooter />
    </Block>
  );
}
