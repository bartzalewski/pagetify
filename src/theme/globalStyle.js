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

	.section-title {
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
        width: fit-content;
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

  @media (max-width: 1200px) {
    .container {
      width: 90%;
    }
  }

  @media (max-width: 1024px) {
    .container {
      width: 97.5%;
    }
  }
  
  @media (max-width: 900px) {

    .section-title {
      text-align: center !important;
    }

    .navbar {

      &__right {
        display: none !important;
      }
    }

    .hero {
      .wrapper {
        width: 100% !important;
        text-align: center;
      }

      &__cta {
        flex-direction: column;
      }
    }

    .offer {
      &__wrapper {
        grid-template-columns: repeat(1,1fr) !important;
      }
    }

    .reviews {
      h1 {
        width: 100% !important;
      }

      &__wrapper {
        grid-template-columns: repeat(1,1fr) !important;
      }
    }

    .blog {
      h1 {
        width: 100% !important;
      }

      &__wrapper {
        grid-template-columns: repeat(1,1fr) !important;
      }
    }

    .footer {
      &__wrapper {
        grid-template-columns: repeat(1,1fr) !important;
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
