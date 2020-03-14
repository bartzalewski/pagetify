import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');

  /*
  
  MONTSERRAT FONT WEIGHT
  
  400 - regular
  500 - medium
  600 - semi-bold
  700 - bold

  */

  html {
    scroll-behavior: smooth;
	  scrollbar-color: #49A9E0 #f0f0f0;
	  scrollbar-width: thin;
  }

  body {
    font-family: 'Montserrat';
    color: #293347;
    overflow-x: hidden;
    width: 100vw;
  }

  body::-webkit-scrollbar {
    width: 0.75em;
  }

  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  body::-webkit-scrollbar-thumb {
    background: -webkit-linear-gradient(top, #36d1dc, #5b86e5);
    outline: 1px solid white;
    border-radius: 1em;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .active::before {
    transform: scaleX(1) !important;
  }

  .container {
    width: 1140px;
    display: flex;
    flex-direction: column;
  }

	.blog,
	.requirements,
	.footer {
		display: flex;
		justify-content: center;
	}

	.requirements,
	.footer {
		.container {
			align-items: center;
		}
	}

	.decoration {
		position: relative;
		bottom: 0px;
		width: 100%;
		z-index: 0;
		align-self: flex-end;
		user-select: none;
	}

	.decoration--top {
		top: 0px;
	}

	.decoration--bottom {
		bottom: 0px;
	}

	.decoration--tick {
		z-index: -1;
		height: 75%;
		position: absolute;
		align-self: center;
	}

	.section__title {
		font-size: 36px;
	}

  .navbar__services {
    position: relative;

    &:hover {
      .navbar__more {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
      }
    }
  }

  .navbar__more {
    width: 355px;
    position: absolute;
    left: -147px;
    top: 20px;
    z-index: 9010;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;
    margin: 0 auto;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 175px 0;
    transform-origin: 175px 0;
    opacity: 0;
    padding: 20px 0 0;

    &--flex {
      width: 75%;
      margin: .5rem 0;

      span {
        font-size: 14px;
        font-weight: 400;
      }
    }

    &__content {
      background-color: #fff;
      color: #293347;
      border-radius: 5px;
      padding: 20px 30px;
      box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.15);
      position: relative;
      display: flex;
      flex-direction: column;

      a {
        transition: .2s ease-in-out;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        svg {
          width: 15% !important;
        }

        p {
          color: #293347;
        }

        span {
          color: #293347 !important;
        }

        &:hover {
          transition: .2s ease-in-out;
          transform: translateX(10px);

          p {
            color: #49A9E0;
          }

          span {
            color: #293347 !important;
          }

          svg {
            fill: #49A9E0;
          }
        }
      }

      &::after {
        content: '';
        position: absolute;
        border: 10px solid transparent;
        border-bottom-color: #fff;
        top: -20px;
        left: calc(50% - 10px);
      }
    }
  }

  /* SIDENAV */

  .hamburger {
    display: none;
    position: relative;
    cursor: pointer;
    z-index: 4;
  }

  .hamburger__wrapper {
    width: 25px;
    height: 20px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .hamburger--line {
    position: absolute;
    height: 2px;
    width: 100%;
    transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55) 0.35s;
    background-image: linear-gradient(to right,#36d1dc,#5b86e5);
  }

  .top {
    top: 0%;
    width: 80%;
  }

  .middle {
    top: 45%;
  }

  .bottom {
    top: 90%;
    width: 60%;
  }

  .icon.close .top {
    transform: rotate(45deg);
    top: 48%;
    width: 100%;
  }

  .icon.close .middle,
  .icon.close .bottom {
    transform: rotate(-45deg);
    top: 48%;
    width: 100%;
  }

  .sidenav--open {
    width: 100% !important;
    transition: 0.5s;
  }

  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
	  right: 0;
    z-index: 4;
    background-color: white;
    transition: 0.2s ease-in-out;
    padding-top: 50px;
    overflow: hidden;

    a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      display: block;
      transition: 0.2s ease-in-out;
      color: #293347;

      :hover {
        color: #49A9E0;
      }
    }

    .active {
      width: 100%;
      height: fit-content;
      font-weight: 500;
    }
  }

  .sidenav__content {
    position: relative;
    width: fit-content !important;
  }

  /* SIDENAV END */

  /* OTHER SITES HERO */

  .sites {

    &__hero {
      margin: 50px 0;
    }

    &__container {
      display: flex;
      justify-content: center;
      align-items: center;

      .container {
        align-items: center;
      }
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 50px 0;
    }

    &__desc {
      width: 50%;
      text-align: center;
    }
  }

  /* OTHER SITES HERO END */

  @media (max-width: 1200px) {
    .container {
      width: 90%;
    }
  }

  @media (max-width: 1024px) {
    .container {
      width: 95%;
    }
  }
  
  @media (max-width: 900px) {

    .hamburger {
		  display: block;
	  }

    .section__title {
      text-align: center !important;
      font-size: 24px;
    }

    .navbar {
      height: 50px !important;

      &__left {

        img {
          width: 175px;
        }
      }

      &__right {
        display: none !important;
      }
    }

    .hero {

      h1 {
        font-size: 30px !important;
        width: 75%;
      }

      p {
        width: 75%;
        font-size: 16px !important;
      }

      .wrapper {
        width: 100% !important;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &__cta {
        flex-direction: column;
      }

      &__price {
        margin-bottom: 1rem;
      }

      &__check {
        margin-left: 0 !important;
      }
    }

    .offer {
      &__wrapper {
        grid-template-columns: repeat(1,1fr) !important;
      }

      &__box {

        img {
          width: 60px !important;
          height: 60px !important;
        }
      }

      &__title {
        font-size: 18px !important;
      }

      &__desc {
        font-size: 14px !important;
      }
    }

    .stand-out {
      padding: 3rem 0px !important;

      &__desc {
        width: 75% !important;
        font-size: 16px !important;
      }

      &__box {
        width: 100% !important;

        img {
          width: 50px !important;
          height: 50px !important;
        }
      }

      &__txt {
        font-size: 14px !important;
        width: 70% !important;
      }
    }

    .reviews {
      h1 {
        width: 100% !important;
      }

      &__wrapper {
        grid-template-columns: repeat(1,1fr) !important;
      }

      &__client {
        height: 50px !important;
        width: 50px !important;
      }

      &__img {
        height: 50px !important;
        width: 50px !important;
      }

      &__name {
        font-size: 18px !important;
        margin: 1.5rem 0 2rem 0 !important;
      }

      &__desc {
        font-size: 14px !important;
      }
    }

    .blog {
      h1 {
        width: 100% !important;
      }

      &__wrapper {
        grid-template-columns: repeat(1,1fr) !important;
        grid-gap: 10px !important;
      }

      &__title {
        font-size: 20px !important;
      }

      &__desc {
        font-size: 14px !important;
      }
    }

    .requirements {
      padding: 3rem 0 !important;

      &__txt {
        width: 75% !important;
        font-size: 16px !important;
      }
    }

    .footer {

      a, p {
        font-size: 14px !important;
      }

      &__wrapper {
        grid-template-columns: repeat(1,1fr) !important;
      }

      &__homepage {
        
        img {
          width: 175px !important;
        }
      }

      &__copyright {
        margin: 1rem 0 !important;
      }
    }
  }

  @keyframes float {
    0% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
`;

export default GlobalStyle;
