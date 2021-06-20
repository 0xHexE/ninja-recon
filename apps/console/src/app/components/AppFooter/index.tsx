import React, { useMemo } from 'react';
import { Block } from 'baseui/block';
import { HeadingXSmall } from 'baseui/typography';

export default function AppFooter() {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <Block
      backgroundColor="backgroundSecondary"
      display="flex"
      alignItems="center"
      placeContent="center"
    >
      <HeadingXSmall>{year}. Ninja Recon contributors.</HeadingXSmall>
    </Block>
  );
}
