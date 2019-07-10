import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectSummary from '../components/projects/ProjectSummary'


storiesOf('projects', module)
  .add('ProjectSummary', () => (
    <ProjectSummary project={ {
      title: 'タイトル',
      authorFirstName: '太郎',
      authorLastName: '山田',
    } }/>
  ));
