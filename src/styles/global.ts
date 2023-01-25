import { createGlobalStyle } from "styled-components";
import convertToRem from "../utils/convertToRem";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html{
        height: 100%;
        /* overflow-x: hidden; */
    }


    body, #root{
        position: relative;
        height: -webkit-fill-available;
        min-height: 100vh;
        /* overflow-x: hidden; */
    }


    ul,ol{
      list-style: none;
    }

    .content{
        width: 100%;
        height: 100%;
        max-width: 1250px;
        margin: 0 auto;
        padding: ${convertToRem(16)};
        position: relative;
    }

    .hide-scroll{
        overflow: hidden !important;

    }
    

    #home{
        overflow: hidden;
    }
`;
