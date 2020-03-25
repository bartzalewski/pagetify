import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

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
		}
	}

	.count {
		&__wrapper {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 30px;
			width: 100%;
		}

		&__box {
			width: 100%;
			text-align: center;
		}
	}
`;

export default function Websites() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledWebsites className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title">Websites</h1>
						<div className="sites__wrapper">
							<p className="sites__desc">
								Supported mobile devices, easy to use independently, SEO
								friendly and ready for any expansion at any time. We create
								websites ideally suited to the needs of both you and your
								recipients.
							</p>
							<div className="websites__wrapper">
								<div className="websites__box">
									<img src="" alt="wordpress icon" />
									<p className="websites__title">Wordpress</p>
									<p className="websites__desc">
										Responsible, SEO-friendly and convenient in self-service
										thanks to the popular WordPress CMS.
									</p>
								</div>
								<div className="websites__box">
									<img src="" alt="react icon" />
									<p className="websites__title">React</p>
									<p className="websites__desc">
										Responsible, SEO-friendly and convenient in self-service
										thanks to the popular WordPress CMS.
									</p>
								</div>
								<div className="websites__box">
									<img src="" alt="laravel icon" />
									<p className="websites__title">Laravel</p>
									<p className="websites__desc">
										Responsible, SEO-friendly and convenient in self-service
										thanks to the popular WordPress CMS.
									</p>
								</div>
								<div className="websites__box">
									<img src="" alt="technology icon" />
									<p className="websites__title">Wordpress</p>
									<p className="websites__desc">
										Responsible, SEO-friendly and convenient in self-service
										thanks to the popular WordPress CMS.
									</p>
								</div>
								<div className="websites__box">
									<img src="" alt="technology icon" />
									<p className="websites__title">Wordpress</p>
									<p className="websites__desc">
										Responsible, SEO-friendly and convenient in self-service
										thanks to the popular WordPress CMS.
									</p>
								</div>
								<div className="websites__box">
									<img src="" alt="technology icon" />
									<p className="websites__title">Wordpress</p>
									<p className="websites__desc">
										Responsible, SEO-friendly and convenient in self-service
										thanks to the popular WordPress CMS.
									</p>
								</div>
							</div>
							<p className="section__subtitle">Our website features</p>
							<div className="websites__wrapper">
								<div className="websites__box">
									<img src="" alt="wordpress icon" />
									<p className="websites__title">Wordpress</p>
									<p className="websites__desc">
										Responsible, SEO-friendly and convenient in self-service
										thanks to the popular WordPress CMS.
									</p>
								</div>
								<div className="websites__box">
									<img src="" alt="react icon" />
									<p className="websites__title">React</p>
									<p className="websites__desc">
										Responsible, SEO-friendly and convenient in self-service
										thanks to the popular WordPress CMS.
									</p>
								</div>
								<div className="websites__box">
									<img src="" alt="laravel icon" />
									<p className="websites__title">Laravel</p>
									<p className="websites__desc">
										Responsible, SEO-friendly and convenient in self-service
										thanks to the popular WordPress CMS.
									</p>
								</div>
								<div className="websites__box">
									<img src="" alt="technology icon" />
									<p className="websites__title">Wordpress</p>
									<p className="websites__desc">
										Responsible, SEO-friendly and convenient in self-service
										thanks to the popular WordPress CMS.
									</p>
								</div>
								<div className="websites__box">
									<img src="" alt="technology icon" />
									<p className="websites__title">Wordpress</p>
									<p className="websites__desc">
										Responsible, SEO-friendly and convenient in self-service
										thanks to the popular WordPress CMS.
									</p>
								</div>
								<div className="websites__box">
									<img src="" alt="technology icon" />
									<p className="websites__title">Wordpress</p>
									<p className="websites__desc">
										Responsible, SEO-friendly and convenient in self-service
										thanks to the popular WordPress CMS.
									</p>
								</div>
							</div>
							<div className="count__wrapper">
								<CountUp
									start={0}
									end={100}
									duration={2}
									redraw={true}
									prefix={'+'}
								>
									{({ countUpRef, start }) => (
										<VisibilitySensor onChange={start} delayedCall>
											<span ref={countUpRef} className="count__box" />
										</VisibilitySensor>
									)}
								</CountUp>
								<CountUp
									start={0}
									end={1000000}
									duration={3}
									redraw={true}
									prefix={'+'}
								>
									{({ countUpRef, start }) => (
										<VisibilitySensor onChange={start} delayedCall>
											<span ref={countUpRef} className="count__box" />
										</VisibilitySensor>
									)}
								</CountUp>
								<CountUp
									start={0}
									end={100}
									duration={4}
									redraw={true}
									prefix={'+'}
								>
									{({ countUpRef, start }) => (
										<VisibilitySensor onChange={start} delayedCall>
											<span ref={countUpRef} className="count__box" />
										</VisibilitySensor>
									)}
								</CountUp>
							</div>
						</div>
					</div>
				</div>
			</StyledWebsites>
		</>
	);
}
