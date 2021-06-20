import React from 'react';
import { StyledLink } from 'baseui/link';
import { Breadcrumbs } from 'baseui/breadcrumbs';

export function AppBreadcrumbs() {
  return (
    <Breadcrumbs>
      <StyledLink href="#parent">Parent Page</StyledLink>
      <StyledLink href="#sub">Sub-Parent Page</StyledLink>
      <span>Current Page</span>
    </Breadcrumbs>
  );
}
