import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import woocommerce from '../images/woocommerce.svg';
import prestashop from '../images/prestashop.svg';
import other2 from '../images/other-2.svg';
import branding from '../images/branding-online.svg';
import help from '../images/help.svg';
import sales from '../images/sales.svg';
import save from '../images/save-money.svg';
import success from '../images/success.svg';
import yourStore from '../images/your-store.svg';

const StyledWebsites = styled.section`
	.websites {
		&__wrapper {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 30px;
			margin: 50px 0;
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
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
				Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		}
	}
`;

export default function Stores() {
	useEffect(() => {
		window.scrollTo(0, 0);

		const spans = document.querySelectorAll('.rubber-span');

		spans.forEach(span => {
			span.addEventListener('mouseover', function(e) {
				span.classList.add('animated', 'rubberBand');
			});
		});

		spans.forEach(span =>
			span.addEventListener('mouseout', function(e) {
				setTimeout(() => {
					span.classList.remove('animated', 'rubberBand');
				}, 1000);
			})
		);
	}, []);
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledWebsites className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title rubber-band">
							<span className="rubber-span">O</span>
							<span className="rubber-span">n</span>
							<span className="rubber-span">l</span>
							<span className="rubber-span">i</span>
							<span className="rubber-span">n</span>
							<span className="rubber-span">e</span>
							<span className="rubber-span rubber-hide">i</span>
							<span className="rubber-span">s</span>
							<span className="rubber-span">t</span>
							<span className="rubber-span">o</span>
							<span className="rubber-span">r</span>
							<span className="rubber-span">e</span>
							<span className="rubber-span">s</span>
						</h1>
						<div className="sites__wrapper">
							<p className="sites__desc">
								Supported mobile devices, easy to use independently, SEO
								friendly and ready for any expansion at any time. We create
								websites ideally suited to the needs of both you and your
								recipients.
							</p>
							<div className="websites__wrapper">
								<div className="websites__box">
									<img
										data-aos="zoom-in"
										data-aos-once="true"
										src={woocommerce}
										alt="woocommerce icon"
									/>
									<p className="websites__title">WooCommerce</p>
									<p className="websites__desc">
										<b>The most popular option</b>. If you are not that much
										into websites, this is the perfect option for you. Wordpress
										is the easiest way to get started in managing your own
										website, because of it's very clear interface which is
										effortless to learn and maintain.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="zoom-in"
										data-aos-once="true"
										data-aos-delay="100"
										src={prestashop}
										alt="prestashop icon"
									/>
									<p className="websites__title">PrestaShop</p>
									<p className="websites__desc">
										<b>The best non-wordpress option</b>. If you want your
										website to be the fastest one, the most stable and the most
										customizable among your competitors, this is the right
										choice for you.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="zoom-in"
										data-aos-once="true"
										data-aos-delay="200"
										src={other2}
										alt="other icon"
									/>
									<p className="websites__title">Other technology</p>
									<p className="websites__desc">
										If you want your website to be in other technology that is
										not listed here, you can always tell us what specific type
										of technology you want us to use.
									</p>
								</div>
							</div>
							<h1 className="section__title">Our store features</h1>
							<div className="websites__wrapper">
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										src={yourStore}
										alt="your store icon"
									/>
									<p className="websites__title">Your store online</p>
									<p className="websites__desc">
										We make sure that our websites are fully responsive on every
										device. Hence, your website will be looking superb on every
										screen!
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										data-aos-delay="100"
										src={success}
										alt="success icon"
									/>
									<p className="websites__title">Build successful brand</p>
									<p className="websites__desc">
										We take care of every aspect that leads to making your
										website as fast as possible. Thanks to our experience, wthis
										is our strongest point amongst other companies.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										data-aos-delay="200"
										src={save}
										alt="save money icon"
									/>
									<p className="websites__title">Save your money</p>
									<p className="websites__desc">
										Don't spend a lot of money on website! With our service you
										can focus on getting more clients than saving up money.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										data-aos-delay="300"
										src={sales}
										alt="sales icon"
									/>
									<p className="websites__title">Make more sales</p>
									<p className="websites__desc">
										Responsible, SEO-friendly and convenient in self-service
										thanks to the popular WordPress CMS.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										data-aos-delay="400"
										src={help}
										alt="help icon"
									/>
									<p className="websites__title">Get our help</p>
									<p className="websites__desc">
										The number one rule to success with your website is that it
										has to be looking beautiful. Your clients and visitors won't
										be satisfied with your website if it's not looking good.
									</p>
								</div>
								<div className="websites__box">
									<img
										data-aos="fade-up"
										data-aos-once="true"
										data-aos-delay="500"
										src={branding}
										alt="easy to use icon"
									/>
									<p className="websites__title">Build your brand</p>
									<p className="websites__desc">
										After taking our service, we want you to feel comfortable
										maintaining your website. We always provide a manual
										instruction covering everything you need to know.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</StyledWebsites>
		</>
	);
}
