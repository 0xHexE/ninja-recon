import React from 'react';
import { StyledLink } from 'baseui/link';
import { Breadcrumbs } from 'baseui/breadcrumbs';
import { useRecoilValue } from 'recoil';
import { breadcrumbMappedState } from '@atoms/breadcrumb';

export default function AppBreadcrumbs() {
  const breadcrumbs = useRecoilValue(breadcrumbMappedState);

  // Ignored default breadcrumb
  if (breadcrumbs.length === 1) {
    return null;
  }

  return (
    <Breadcrumbs>
      {breadcrumbs.map((breadcrumb) => {
        return (
          <StyledLink href={breadcrumb.link}>{breadcrumb.title}</StyledLink>
        );
      })}
    </Breadcrumbs>
  );
}
