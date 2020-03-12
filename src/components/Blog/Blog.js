import React from 'react';
import styled from 'styled-components';
import stairsdown from '../../images/stairsdown.svg';
import pyramidup from '../../images/pyramidup.svg';
import bz from '../../images/bz.png';
import dg from '../../images/dg.png';

const StyledBlog = styled.section`
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
		bottom: 0px;
	}
`;

export default function Blog() {
	return (
		<StyledBlog>
			<img
				className="decoration decoration--blog"
				src={stairsdown}
				alt="decoration"
			/>
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
								Here are our user interface tips that, if implemented, will make
								your website more user-friendly. Check them out!
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
								Here are our user interface tips that, if implemented, will make
								your website more user-friendly. Check them out!
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
								Here are our user interface tips that, if implemented, will make
								your website more user-friendly. Check them out!
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
								Here are our user interface tips that, if implemented, will make
								your website more user-friendly. Check them out!
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
								Here are our user interface tips that, if implemented, will make
								your website more user-friendly. Check them out!
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
								Here are our user interface tips that, if implemented, will make
								your website more user-friendly. Check them out!
							</p>
						</div>
					</div>
				</div>
			</div>
			<img className="decoration" src={pyramidup} alt="decoration" />
		</StyledBlog>
	);
}
