import React from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, useWindowSize} from '@docusaurus/theme-common';
import {DocProvider, useDoc} from '@docusaurus/theme-common/internal';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocItemFooter from '@theme/DocItem/Footer';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}

function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article className="prose dark:prose-invert">
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
            <Link to='/knowledge'>⬅ Torna all’indice</Link>
          </article>
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}

export default function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.unversionedId}`;
  const MDXComponent = props.content;
  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          <MDXComponent />
        </DocItemLayout>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
