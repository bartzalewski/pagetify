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
import pyramidup from '../images/pyramidup.svg';
import pyramiddown from '../images/pyramiddown.svg';
import stairsup from '../images/stairsup.svg';
import stairsdown from '../images/stairsdown.svg';
import orella from '../images/clients/orella.png';
import charlean from '../images/clients/charlean.png';
import kalil from '../images/clients/kalil.png';
import jeralee from '../images/clients/jeralee.png';
import aaron from '../images/clients/aaron.png';
import marti from '../images/clients/marti.png';
import aubrie from '../images/clients/aubrie.png';
import dodi from '../images/clients/dodi.png';
import adam from '../images/clients/adam.png';
import standout1 from '../images/standout-1.svg';
import standout2 from '../images/standout-2.svg';
import standout3 from '../images/standout-3.svg';
import standout4 from '../images/standout-4.svg';
import bz from '../images/bz.png';
import dg from '../images/dg.png';
import tick from '../images/tick.svg';

const StyledHome = styled.section`
	.hero,
	.offer,
	.reviews,
	.stand-out,
	.blog,
	.requirements,
	.footer {
		display: flex;
		justify-content: center;
	}

	.offer,
	.reviews,
	.stand-out,
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
		top: 0;
	}

	.decoration--bottom {
		bottom: 0;
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
`;

const StyledHomeHero = styled.header`
	background-image: url(${bg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 75vh;

	.hero {
		height: fit-content;
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
				font-size: 18px;
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
				box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);
				transition: 0.2s ease-in-out;

				&:hover {
					transition: 0.2s ease-in-out;
					box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
				}
			}

			a {
				font-weight: 600;
				margin-left: 1rem;
			}
		}
	}

	.decoration {
		bottom: -2px;
	}
`;

const StyledHomeOffer = styled.section`
	position: relative;

	.offer {
		padding: 50px 0;

		h1 {
			margin-bottom: 50px;
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
			padding: 15px;
			transition: 0.2s ease-in-out;

			img {
				width: 75px;
				height: 75px;
			}

			&:hover {
				box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
				transition: 0.2s ease-in-out;
			}
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
	background: #fbfbfb;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	.reviews {
		h1 {
			width: 40%;
			text-align: right;
			align-self: flex-end;
			margin: 50px 0 100px;
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
			transition: 0.2s ease-in-out;

			&:hover {
				transition: 0.2s ease-in-out;
				box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
			}

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
			text-align: justify;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
				Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		}
	}

	.decoration--bottom {
		margin-top: 80px;
	}
`;

const StyledHomeStandOut = styled.section`
	position: relative;

	.stand-out {
		&__desc {
			margin: 50px 0;
			width: 50%;
			text-align: center;
			font-weight: 500;
			font-size: 18px;
		}

		&__wrapper {
			display: flex;
			flex-direction: column;
		}

		&__box {
			opacity: 0.9;
			border-radius: 5px;
			padding: 25px;
			border: 1px solid #d2d2d2;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: calc(50% + (25% / 3) * 2);
			margin: 10px 0;
			transition: 0.2s ease-in-out;
			background: #fff;

			&:hover {
				opacity: 1;
				transition: 0.2s ease-in-out;
				box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);
			}

			img {
				width: 75px;
				height: 75px;
			}

			&--left {
				align-self: flex-start;
			}

			&--right {
				align-self: flex-end;
			}
		}

		&__txt {
			text-align: justify;
			width: 75%;
		}
	}
`;

const StyledHomeBlog = styled.section`
	position: relative;
	background: #fbfbfb;
	display: flex;
	flex-direction: column;

	.blog {
		margin: 80px 0;

		h1 {
			margin-bottom: 50px;
			width: 40%;
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
			background: #fff;
			border-radius: 5px;
			padding: 15px;
			border: 2px solid #49a9e0;
			transition: 0.2s ease-in-out;

			&:hover {
				transition: 0.2s ease-in-out;
				box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
			}
		}

		&__author {
			align-self: flex-start;
			display: flex;
			justify-content: center;
			align-items: center;

			&--flex {
				margin-left: 0.5rem;
			}
		}

		&__name,
		&__date {
			font-weight: 500;
		}

		&__date {
			font-size: 14px;
			color: #7f7f7f;
		}

		&__title {
			font-size: 24px;
			font-weight: 600;
			margin: 1rem 0;
			text-align: justify;
		}

		&__desc {
			text-align: justify;
		}
	}

	.decoration {
		bottom: -2px;
	}
`;

const StyledHomeRequirements = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;

	.requirements {
		background: linear-gradient(to right, #36d1dc, #5b86e5);
		color: #fff;

		&__txt {
			text-align: center;
			width: 50%;
			font-weight: 500;
			margin: 25px 0;
		}

		&__btn {
			background: #fff;
			border-radius: 25px;
			padding: 10px 30px;
			font-weight: 500;
			box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);
			transition: 0.2s ease-in-out;
			z-index: 1;

			&:hover {
				transition: 0.2s ease-in-out;
				box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
			}

			&--txt {
				background: -webkit-linear-gradient(left, #36d1dc, #5b86e5);
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
				font-weight: 600;
			}
		}
	}

	.decoration {
		margin-bottom: 50px;
	}
`;

const StyledHomeFooter = styled.footer`
	position: relative;

	.footer {
		&__wrapper {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-gap: 30px;
		}

		&__title {
			font-weight: 600;
			font-size: 18px;
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
				<img
					className="decoration decoration--bottom"
					src={stairsup}
					alt="decoration"
				/>
			</StyledHomeReviews>
			<StyledHomeStandOut>
				<div className="stand-out">
					<div className="container">
						<h1 className="section-title">How do we stand out?</h1>
						<p className="stand-out__desc">
							We know that there are a lot of companies operating in our
							industry on the market. However, several issues distinguish us
							from others and make you entrust us with the image of your company
							on the web.
						</p>
						<div className="stand-out__wrapper">
							<img
								className="decoration decoration--tick"
								src={tick}
								alt="decoration"
							/>
							<div className="stand-out__box stand-out__box--right">
								<img src={standout1} alt="standout" />
								<p className="stand-out__txt">
									We approach each order individually. We guarantee that we will
									respond to your message within a maximum of 24 hours.
								</p>
							</div>
							<div className="stand-out__box stand-out__box--left">
								<img src={standout2} alt="standout" />
								<p className="stand-out__txt">
									We thoroughly analyze your requirements and propose solutions
									ourselves, thanks to which each project is tailor made.
								</p>
							</div>
							<div className="stand-out__box stand-out__box--right">
								<img src={standout3} alt="standout" />
								<p className="stand-out__txt">
									We do not leave anyone alone after commissioning the project.
									All you need to do is contact us and we'll advise you or help
									you in every situation.
								</p>
							</div>
							<div className="stand-out__box stand-out__box--left">
								<img src={standout4} alt="standout" />
								<p className="stand-out__txt">
									We do not leave anyone alone after commissioning the project.
									All you need to do is contact us and we'll advise you or help
									you in every situation.
								</p>
							</div>
						</div>
					</div>
				</div>
			</StyledHomeStandOut>
			<StyledHomeBlog>
				<img className="decoration" src={stairsdown} alt="decoration" />
				<div className="blog">
					<div className="container">
						<h1 className="section-title">
							Here are the latest posts from our blog
						</h1>
						<div className="blog__wrapper">
							<div className="blog__box">
								<div className="blog__author">
									<img src={bz} alt="bart zalewski" />
									<div className="blog__author--flex">
										<p className="blog__name">Bart Zalewski</p>
										<p className="blog__date">3 months ago</p>
									</div>
								</div>
								<div className="blog__title">
									Tips related to user interface - 7 things
								</div>
								<p className="blog__desc">
									Here are our user interface tips that, if implemented, will
									make your website more user-friendly. Check them out!
								</p>
							</div>
							<div className="blog__box">
								<div className="blog__author">
									<img src={dg} alt="david grzanka" />
									<div className="blog__author--flex">
										<p className="blog__name">David Grzanka</p>
										<p className="blog__date">3 months ago</p>
									</div>
								</div>
								<div className="blog__title">
									Getting money by blogging - 8 ways
								</div>
								<p className="blog__desc">
									Here are our user interface tips that, if implemented, will
									make your website more user-friendly. Check them out!
								</p>
							</div>
							<div className="blog__box">
								<div className="blog__author">
									<img src={bz} alt="bart zalewski" />
									<div className="blog__author--flex">
										<p className="blog__name">Bart Zalewski</p>
										<p className="blog__date">3 months ago</p>
									</div>
								</div>
								<div className="blog__title">
									Online stores not optimized - 10 reasons
								</div>
								<p className="blog__desc">
									Here are our user interface tips that, if implemented, will
									make your website more user-friendly. Check them out!
								</p>
							</div>
							<div className="blog__box">
								<div className="blog__author">
									<img src={dg} alt="david grzanka" />
									<div className="blog__author--flex">
										<p className="blog__name">David Grzanka</p>
										<p className="blog__date">3 months ago</p>
									</div>
								</div>
								<div className="blog__title">
									Tips related to user interface - 7 things
								</div>
								<p className="blog__desc">
									Here are our user interface tips that, if implemented, will
									make your website more user-friendly. Check them out!
								</p>
							</div>
							<div className="blog__box">
								<div className="blog__author">
									<img src={bz} alt="bart zalewski" />
									<div className="blog__author--flex">
										<p className="blog__name">Bart Zalewski</p>
										<p className="blog__date">3 months ago</p>
									</div>
								</div>
								<div className="blog__title">
									Online stores not optimized - 10 reasons
								</div>
								<p className="blog__desc">
									Here are our user interface tips that, if implemented, will
									make your website more user-friendly. Check them out!
								</p>
							</div>
							<div className="blog__box">
								<div className="blog__author">
									<img src={dg} alt="david grzanka" />
									<div className="blog__author--flex">
										<p className="blog__name">David Grzanka</p>
										<p className="blog__date">3 months ago</p>
									</div>
								</div>
								<div className="blog__title">
									Tips related to user interface - 7 things
								</div>
								<p className="blog__desc">
									Here are our user interface tips that, if implemented, will
									make your website more user-friendly. Check them out!
								</p>
							</div>
						</div>
					</div>
				</div>
				<img className="decoration" src={pyramidup} alt="decoration" />
			</StyledHomeBlog>
			<StyledHomeRequirements>
				<div className="requirements">
					<div className="container">
						<h1 className="section-title">Tell us your requirements</h1>
						<p className="requirements__txt">
							Complete a very simple quick quotation form. Thanks to this, we
							will get to know your requirements and select something fully
							adequate to your needs.
						</p>
						<a href="#!" className="requirements__btn">
							<span className="requirements__btn--txt">Ask for price</span>
						</a>
					</div>
				</div>
				<img className="decoration" src={pyramiddown} alt="decoration" />
			</StyledHomeRequirements>
			<StyledHomeFooter>
				<div className="footer">
					<div className="container">
						<div className="footer__wrapper">
							<div className="footer__box">
								<div className="footer__title">Info</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Maxime, aspernatur?
								</p>
							</div>
							<div className="footer__box">
								<div className="footer__title">Services</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Maxime, aspernatur?
								</p>
							</div>
							<div className="footer__box">
								<div className="footer__title">More</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Maxime, aspernatur?
								</p>
							</div>
							<div className="footer__box">
								<div className="footer__title">Newest posts</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Maxime, aspernatur?
								</p>
							</div>
						</div>
						<hr />
						<p>Pagetify &copy; 2019-2020. All rights reserved.</p>
					</div>
				</div>
			</StyledHomeFooter>
		</StyledHome>
	);
}
