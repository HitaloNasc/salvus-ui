import React, { ReactNode } from 'react';

export interface PageProps {
  children?: ReactNode;
  nosolid?: boolean;
  fit?: boolean;
}

function PageRoot(props: PageProps) {
  const { children } = props;

  return (
    <main className='m-0 p-0 bg-background h-full w-full min-h-screen min-w-full'>
      <div className='h-[0.25px] shadow-md' />
      {children}
    </main>
  );
}

PageRoot.displayName = 'Page.Root';

function PageHeader(props: PageProps) {
  const { children } = props;

  return (
    <header className='mt-[2%] px-10 py-1 h-fit bg-white uppercase shadow-md'>{children}</header>
  );
}

PageHeader.displayName = 'Page.Header';

function PageContent(props: PageProps) {
  const { children, nosolid = false, fit = false } = props;

  const backgroundColor = nosolid ? ' bg-background ' : ' bg-white shadow-md ';
  const spacingContent = fit ? ' m-[5px] p-[5px] ' : ' mx-8 my-5 p-2 ';

  return (
    <section className={' rounded-lg m' + backgroundColor + spacingContent}>{children}</section>
  );
}

PageContent.displayName = 'Page.Content';

export const Page = { Root: PageRoot, Header: PageHeader, Content: PageContent };
