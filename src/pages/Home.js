import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import bg from '../images/bg.png';
import websites from '../images/websites.svg';
import stores from '../images/stores.svg';
import graphic from '../images/graphic.svg';
import delivery from '../images/delivery.svg';
import quality from '../images/quality.svg';
import wallet from '../images/wallet.svg';
import waveup from '../images/waveup.svg';
import wavedown from '../images/wavedown.svg';
import orella from '../images/clients/orella.png';
import charlean from '../images/clients/charlean.png';
import kalil from '../images/clients/kalil.png';
import jeralee from '../images/clients/jeralee.png';
import aaron from '../images/clients/aaron.png';
import marti from '../images/clients/marti.png';
import aubrie from '../images/clients/aubrie.png';
import dodi from '../images/clients/dodi.png';
import adam from '../images/clients/adam.png';

const StyledHome = styled.section`
	.hero,
	.offer,
	.reviews {
		display: flex;
		justify-content: center;
	}

	.offer,
	.reviews {
		.container {
			align-items: center;
		}
	}

	.decoration {
		position: absolute;
		bottom: -75px;
		width: 100%;
		z-index: 0;
	}

	.decoration--top {
		top: 0;
	}

	.decoration--bottom {
		bottom: 0;
	}

	.section-title {
		font-size: 36px;
	}
`;

const StyledHomeHero = styled.header`
	background-image: url(${bg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	position: relative;

	.hero {
		height: calc(50vh - 100px);
		color: #fff;

		.container {
			justify-content: center;
			align-items: flex-start;

			.wrapper {
				width: 40%;
			}

			h1 {
				font-size: 48px;
				font-weight: 700;
			}

			p {
				font-weight: 500;
				margin: 1rem 0;
			}

			button {
				font-weight: 600;
				font-family: 'Montserrat';
				border: none;
				border-radius: 25px;
				background-image: linear-gradient(to right, #36d1dc, #5b86e5);
				color: #fff;
				padding: 10px 30px;
				cursor: pointer;
				font-size: inherit;
			}

			a {
				font-weight: 600;
				margin-left: 1rem;
			}
		}
	}
`;

const StyledHomeOffer = styled.section`
	position: relative;
	padding: 25px 0;

	.offer {
		h1 {
			margin-bottom: 100px;
		}

		&__wrapper {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 30px;
		}

		&__box {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		&__title {
			font-size: 24px;
			font-weight: 600;
			margin: 1rem 0;
		}

		&__desc {
			text-align: justify;
		}
	}
`;

const StyledHomeReviews = styled.section`
	position: relative;
	padding: 25px 0;

	.reviews {
		background: #fbfbfb;

		h1 {
			width: 40%;
			text-align: right;
			align-self: flex-end;
			margin: 100px 0;
		}

		&__wrapper {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 60px 30px;
			width: 100%;
		}

		&__box {
			background: #fff;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-direction: column;
			padding: 20px;
			border-top: 5px solid;
			position: relative;
			box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);

			&--left {
				border-image-source: linear-gradient(#36d0dc, #41bade);
				border-image-slice: 1;
			}

			&--center {
				border-image-source: linear-gradient(#43b6df, #4da1e1);
				border-image-slice: 1;
			}

			&--right {
				border-image-source: linear-gradient(#509ce2, #5b86e5);
				border-image-slice: 1;
			}
		}

		&__client {
			position: absolute;
			top: -30px;
			box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.4);
			overflow: hidden;
			border-radius: 100%;
			height: 60px;
			width: 60px;
		}

		&__name {
			margin: 1rem 0;
			font-weight: 500;
		}

		&__desc {
			font-size: 18px;
			text-align: justify;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
				Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		}
	}
`;

export default function Home() {
	return (
		<StyledHome>
			<StyledHomeHero>
				<Navbar></Navbar>
				<div className="hero">
					<div className="container">
						<div className="wrapper">
							<h1>Take your website to the next level</h1>
							<p>
								If you need a website that if fully responsive, optimized and
								easy to use - we are here for you.
							</p>
							<button>Ask for price</button>
							<a href="!#">or check our offer</a>
						</div>
					</div>
				</div>
				<img className="decoration" src={waveup} alt="decoration" />
			</StyledHomeHero>
			<StyledHomeOffer>
				<div className="offer">
					<div className="container">
						<h1 className="section-title">What can we offer for you?</h1>
						<div className="offer__wrapper">
							<div className="offer__box">
								<img src={websites} alt="websites" className="offer__icon" />
								<p className="offer__title">Websites</p>
								<p className="offer__desc">
									Responsible, SEO-friendly and convenient in self-service
									thanks to the popular WordPress CMS.
								</p>
							</div>
							<div className="offer__box">
								<img src={stores} alt="stores" className="offer__icon" />
								<p className="offer__title">Online stores</p>
								<p className="offer__desc">
									We use the world’s best e-commerce system called WooCommerce
									that is extremely easy to use.
								</p>
							</div>
							<div className="offer__box">
								<img src={graphic} alt="graphic" className="offer__icon" />
								<p className="offer__title">Graphic design</p>
								<p className="offer__desc">
									If you don't have graphic skills or a knack for writing,
									entrust us with creating effective content for your website.{' '}
								</p>
							</div>
							<div className="offer__box">
								<img src={delivery} alt="delivery" className="offer__icon" />
								<p className="offer__title">Fast delivery</p>
								<p className="offer__desc">
									We don’t like waiting as much as you do, so we make sure to
									guarantee as fastest delivery as possible.{' '}
								</p>
							</div>
							<div className="offer__box">
								<img src={quality} alt="quality" className="offer__icon" />
								<p className="offer__title">Highest quality</p>
								<p className="offer__desc">
									We are professionals that care about what are we developing.
									We always do our best.
								</p>
							</div>
							<div className="offer__box">
								<img src={wallet} alt="wallet" className="offer__icon" />
								<p className="offer__title">Wallet-friendly</p>
								<p className="offer__desc">
									We don’t want you to bankrupt after taking our service. Our
									prices are the most optimized ones.
								</p>
							</div>
						</div>
					</div>
				</div>
			</StyledHomeOffer>
			<StyledHomeReviews>
				<img
					className="decoration decoration--top"
					src={wavedown}
					alt="decoration"
				/>
				<div className="reviews">
					<div className="container">
						<h1 className="section-title">
							What do our customers say about us?
						</h1>
						<div className="reviews__wrapper">
							<div className="reviews__box reviews__box--left">
								<div className="reviews__client">
									<img src={orella} alt="client" className="reviews__img" />
								</div>
								<p className="reviews__name">Orella</p>
								<p className="reviews__desc">
									The best on the net! I have gotten at least 50 times the value
									from Pagetify. I am completely blown away. Thanks to Pagetify,
									we've just launched our 5th website!
								</p>
							</div>
							<div className="reviews__box reviews__box--center">
								<div className="reviews__client">
									<img src={charlean} alt="client" className="reviews__img" />
								</div>
								<p className="reviews__name">Charlean</p>
								<p className="reviews__desc">
									Pagetify was the best investment I ever made. Thank you!
								</p>
							</div>
							<div className="reviews__box reviews__box--right">
								<div className="reviews__client">
									<img src={kalil} alt="client" className="reviews__img" />
								</div>
								<p className="reviews__name">Kalil</p>
								<p className="reviews__desc">
									Pagetify is worth much more than I paid. Pagetify is the most
									valuable business resource we have EVER purchased. Pagetify is
									worth much more than I paid.
								</p>
							</div>
							<div className="reviews__box reviews__box--left">
								<div className="reviews__client">
									<img src={jeralee} alt="client" className="reviews__img" />
								</div>
								<p className="reviews__name">Jeralee</p>
								<p className="reviews__desc">
									The best on the net! I have gotten at least 50 times the value
									from Pagetify. I am completely blown away.
								</p>
							</div>
							<div className="reviews__box reviews__box--center">
								<div className="reviews__client">
									<img src={aaron} alt="client" className="reviews__img" />
								</div>
								<p className="reviews__name">Aaron</p>
								<p className="reviews__desc">
									Pagetify is the real deal! Great job, I will definitely be
									ordering again! Thank you for making it painless, pleasant and
									most of all hassle free! Pagetify is worth much more than I
									paid. I highly recommend them.
								</p>
							</div>
							<div className="reviews__box reviews__box--right">
								<div className="reviews__client">
									<img src={marti} alt="client" className="reviews__img" />
								</div>
								<p className="reviews__name">Marti</p>
								<p className="reviews__desc">
									Pagetify is the real deal! Great job, I will definitely be
									ordering again! Thank you for making it painless, pleasant and
									most of all hassle free! Thank you for making it painless,
									pleasant and most of all hassle free! I will be recommending
									you guys.
								</p>
							</div>
							<div className="reviews__box reviews__box--left">
								<div className="reviews__client">
									<img src={aubrie} alt="client" className="reviews__img" />
								</div>
								<p className="reviews__name">Aubrie</p>
								<p className="reviews__desc">
									You guys rock! No matter where you go, Pagetify is the best! I
									am completely blown away. I will be recommending you guys.
								</p>
							</div>
							<div className="reviews__box reviews__box--center">
								<div className="reviews__client">
									<img src={dodi} alt="client" className="reviews__img" />
								</div>
								<p className="reviews__name">Dodi</p>
								<p className="reviews__desc">
									The best on the net! I have gotten at least 50 times the value
									from Pagetify. I am completely blown away. I will be
									recommending you guys. Pagetify was the best investment I ever
									made. Thank you!
								</p>
							</div>
							<div className="reviews__box reviews__box--right">
								<div className="reviews__client">
									<img src={adam} alt="client" className="reviews__img" />
								</div>
								<p className="reviews__name">Adam</p>
								<p className="reviews__desc">
									Pagetify was the best investment I ever made. Thank you!
								</p>
							</div>
						</div>
					</div>
				</div>
			</StyledHomeReviews>
		</StyledHome>
	);
}
