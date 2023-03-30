import { FC, ReactElement } from "react";

import config from "config/seo.json";
import { DefaultSeo } from "next-seo";
import NextHead from "next/head";
import { v4 as uuidv4 } from "uuid";

/**
 * The head metadata component
 * @returns {ReactElement} the metadata component.
 */
export const Head: FC = (): ReactElement => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="facebook-domain-verification" content="55vjg8haszokndvagxkknzoemiepzp" />
        <meta name="304workaround" content="2022-02-10 22:19:23" />
        <meta name="theme-color" content="#f54a49" />
        {/*eslint-disable-next-line @next/next/no-sync-scripts*/}
        <script id={uuidv4()} src="https://cdn.optimizely.com/js/21283321875.js"></script>
        {/*eslint-disable-next-line @next/next/no-sync-scripts*/}
        <script src="//run.louassist.com/v2.5.1-m?id=278723932969"></script>
        <link rel="manifest" href="/manifest.json"></link>
        {/*eslint-disable-next-line @next/next/no-sync-scripts*/}
        <script src="//run.louassist.com/v2.5.1-m?id=278723932969"></script>
        <script
          id={uuidv4()}
          dangerouslySetInnerHTML={{
            __html: `
              window.STONLY_WID = "ad78691f-7f9f-11ec-82f1-064cee365e5a";
          `,
          }}
        ></script>
        <script
          id={uuidv4()}
          dangerouslySetInnerHTML={{
            __html: `
              !function(s,t,o,n,l,y,w,g){s.StonlyWidget||((w=s.StonlyWidget=function(){
              w._api?w._api.apply(w,arguments):w.queue.push(arguments)}).scriptPath=n,w.queue=[],(y=t.createElement(o)).async=!0,
              (g=new XMLHttpRequest).open("GET",n+"version?v="+Date.now(),!0),g.onreadystatechange=function(){
              4===g.readyState&&(y.src=n+"stonly-widget.js?v="+(200===g.status?g.responseText:Date.now()),
              (l=t.getElementsByTagName(o)[0]).parentNode.insertBefore(y,l))},g.send())
              }(window,document,"script","https://stonly.com/js/widget/v2/");
          `,
          }}
        ></script>
      </NextHead>
    </>
  );
};
