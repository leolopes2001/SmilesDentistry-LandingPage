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
}


    body, #root{
        position: relative;
        height: -webkit-fill-available;
        min-height: 100vh;
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

    .test{
     height: 100vh;
     
     
    }

    .test3{
        height: 100vh;
        width: 100vw;
        /* background-color: #000E29; */
        /* opacity: 0.3; */
        img{
            object-fit: cover;
            width: 100vw;   
           height: 110vh;
            /* min-height: 90vh; */
            /* max-height: 95vh; */
            /* max-width: 100vh; */
        }
    }
`;
