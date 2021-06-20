import React from 'react';
import { DefaultLayout } from '@layout/Default';
import AppToolbar from '@components/AppToolbar';
import { FlexFiller } from '@components/FlexFiller';
import { HeadingSmall } from 'baseui/typography';
import ProjectLists from '../../Containers/ProjectLists';
import NewProjects from '../../Containers/NewProjects';

export default function Home() {
  return (
    <DefaultLayout>
      <AppToolbar>
        <HeadingSmall margin="0">Projects</HeadingSmall>
        <FlexFiller />
        <NewProjects />
      </AppToolbar>

      <ProjectLists />
    </DefaultLayout>
  );
}
