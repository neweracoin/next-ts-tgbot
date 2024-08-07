


import { AppProps } from 'next/app';

import React from 'react';
import { TelegramProvider } from "@/lib";


/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <TelegramProvider>
 <Component
        
        {...pageProps} />
  </TelegramProvider>
 
  
   ) ;
}

export default MyApp;
