import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { color } from "framer-motion";

const config: ThemeConfig = {
    initialColorMode: 'dark'
}

const theme = extendTheme ({config});

export default theme;