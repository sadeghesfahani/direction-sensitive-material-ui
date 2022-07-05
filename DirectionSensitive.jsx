import React from 'react';
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from 'stylis'
import Box from "@mui/material/Box";

// this is where you should add your direction detector hook
import useLanguage from "../language/useLanguage";


const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
});

const cacheLtr = createCache({
  key: "muiltr"
});

const DirectionSensitive = ({ children }) => {

    // this is where you get your direction based on your program logic
    const {getLanguageDirection} = useLanguage()
    
    return (
        <CacheProvider value={getLanguageDirection()==="rtl" ? cacheRtl : cacheLtr}>
            <Box sx={{width:"100%"}} dir={getLanguageDirection()}>
                {children}
            </Box>
        </CacheProvider>
    );
};

export default DirectionSensitive;
