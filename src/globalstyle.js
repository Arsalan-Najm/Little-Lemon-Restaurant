import { createGlobalStyle } from 'styled-components';
export const Globalstyle = createGlobalStyle`
html {
    scroll-behavior: smooth;
}
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
.logo-box,
.form-nav .img-box {
    position: relative;
    width: 60px;
    min-height: 60px;
}
@media screen and (min-width: 768px) {
    .logo-box,
    .form-nav .img-box {
        width: 70px;
        min-height: 100px;
    }
}
.logo-box img,
.form-nav .img-box img {
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.logo-footer {
    position: relative;
    width: 200px;
    height: 50px;
    margin-bottom: 2rem;
}
.logo-footer img {
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.form-nav {
    max-width: 100%;
    width: 100%;
    height: 80px;
    padding: 3rem;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6));
    display: flex;
    align-items: center;
}

`;
