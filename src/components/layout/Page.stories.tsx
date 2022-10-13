/* eslint-disable react/jsx-key */
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Page, PageProps } from './Page';
import { Heading } from '../typography/Heading';
import { Paragraph } from '../typography/Paragraph';

export default {
  title: 'Components/Layout/Page',
  component: Page.Root,
  args: {},
  argTypes: {
    table: {
      disable: true
    }
  }
} as Meta<PageProps>;

export const Default: StoryObj<PageProps> = {};

export const Header: StoryObj<PageProps> = {
  args: {
    children: (
      <Page.Header>
        <Heading size='h6'>Título</Heading>
      </Page.Header>
    )
  }
};

export const Content: StoryObj<PageProps> = {
  args: {
    children: [
      <Page.Header>
        <Heading size='h6'>Título</Heading>
      </Page.Header>,
      <Page.Content>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </Page.Content>
    ]
  }
};

export const No_Solid: StoryObj<PageProps> = {
  args: {
    children: [
      <Page.Header>
        <Heading size='h6'>Título</Heading>
      </Page.Header>,
      <Page.Content nosolid>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </Page.Content>
    ]
  }
};

export const List_Content: StoryObj<PageProps> = {
  args: {
    children: [
      <Page.Header>
        <Heading size='h6'>Título</Heading>
      </Page.Header>,
      <Page.Content>
        <Page.Content nosolid fit>
          <Page.Content>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Paragraph>
          </Page.Content>
          <Page.Content>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Paragraph>
          </Page.Content>
          <Page.Content>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Paragraph>
          </Page.Content>
        </Page.Content>
      </Page.Content>
    ]
  }
};
