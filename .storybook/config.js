import { addParameters, configure } from '@storybook/react';

// 全体のバックグラウンドカラーを設定する（Storybookで選択可能）
addParameters({
  backgrounds: [
    { name: 'original', value: '#e8f3ff', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
