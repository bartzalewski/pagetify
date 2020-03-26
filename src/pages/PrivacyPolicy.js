import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import { Link } from 'react-router-dom';

const StyledPrivacyPolicy = styled.section`
	p {
		margin-top: 1rem;
	}

	h2 {
		margin-top: 2rem;
	}

	.privacy-policy__wrapper {
		align-items: flex-start;
	}
`;

export default function PrivacyPolicy() {
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
			<StyledPrivacyPolicy className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title rubber-band">
							<span className="rubber-span">P</span>
							<span className="rubber-span">r</span>
							<span className="rubber-span">i</span>
							<span className="rubber-span">v</span>
							<span className="rubber-span">a</span>
							<span className="rubber-span">c</span>
							<span className="rubber-span">y</span>
							<span className="rubber-span rubber-hide">i</span>
							<span className="rubber-span">P</span>
							<span className="rubber-span">o</span>
							<span className="rubber-span">l</span>
							<span className="rubber-span">i</span>
							<span className="rubber-span">c</span>
							<span className="rubber-span">y</span>
						</h1>
						<div className="sites__wrapper privacy-policy__wrapper">
							<p>
								At Pagetify - Websites, online shops, graphics, accessible from{' '}
								<Link to="/" className="default-link">
									https://pagetify.com
								</Link>
								, one of our main priorities is the privacy of our visitors.
								This Privacy Policy document contains types of information that
								is collected and recorded by Pagetify - Websites, online shops,
								graphics and how we use it.
							</p>

							<p>
								If you have additional questions or require more information
								about our Privacy Policy, do not hesitate to{' '}
								<Link to="/contact" className="default-link">
									contact us
								</Link>
								.
							</p>

							<p>
								This Privacy Policy applies only to our online activities and is
								valid for visitors to our website with regards to the
								information that they shared and/or collect in Pagetify -
								Websites, online shops, graphics. This policy is not applicable
								to any information collected offline or via channels other than
								this website.
							</p>

							<h2>1. Consent</h2>

							<p>
								By using our website, you hereby consent to our Privacy Policy
								and agree to its terms.
							</p>

							<h2>2. Information we collect</h2>

							<p>
								The personal information that you are asked to provide, and the
								reasons why you are asked to provide it, will be made clear to
								you at the point we ask you to provide your personal
								information.
							</p>

							<p>
								If you contact us directly, we may receive additional
								information about you such as your name, email address, phone
								number, the contents of the message and/or attachments you may
								send us, and any other information you may choose to provide.
							</p>

							<p>
								When you register for an Account, we may ask for your contact
								information, including items such as name, company name,
								address, email address, and telephone number.
							</p>

							<h2>3. How we use your information</h2>

							<p>
								We use the information we collect in various ways, including to:
							</p>

							<ul>
								<li>Provide, operate, and maintain our webste</li>
								<li>Improve, personalize, and expand our webste</li>
								<li>Understand and analyze how you use our webste</li>
								<li>
									Develop new products, services, features, and functionality
								</li>
								<li>
									Communicate with you, either directly or through one of our
									partners, including for customer service, to provide you with
									updates and other information relating to the webste, and for
									marketing and promotional purposes
								</li>
								<li>Send you emails</li>
								<li>Find and prevent fraud</li>
							</ul>

							<h2>4. Log Files</h2>

							<p>
								Pagetify - Websites, online shops, graphics follows a standard
								procedure of using log files. These files log visitors when they
								visit websites. All hosting companies do this and a part of
								hosting services' analytics. The information collected by log
								files include internet protocol (IP) addresses, browser type,
								Internet Service Provider (ISP), date and time stamp,
								referring/exit pages, and possibly the number of clicks. These
								are not linked to any information that is personally
								identifiable. The purpose of the information is for analyzing
								trends, administering the site, tracking users' movement on the
								website, and gathering demographic information.
							</p>

							<h2>5. Advertising Partners Privacy Policies</h2>

							<p>
								You may consult this list to find the Privacy Policy for each of
								the advertising partners of Pagetify - Websites, online shops,
								graphics.
							</p>

							<p>
								Third-party ad servers or ad networks uses technologies like
								cookies, JavaScript, or Web Beacons that are used in their
								respective advertisements and links that appear on Pagetify -
								Websites, online shops, graphics, which are sent directly to
								users' browser. They automatically receive your IP address when
								this occurs. These technologies are used to measure the
								effectiveness of their advertising campaigns and/or to
								personalize the advertising content that you see on websites
								that you visit.
							</p>

							<p>
								Note that Pagetify - Websites, online shops, graphics has no
								access to or control over these cookies that are used by
								third-party advertisers.
							</p>

							<h2>6. Third Party Privacy Policies</h2>

							<p>
								Pagetify - Websites, online shops, graphics's Privacy Policy
								does not apply to other advertisers or websites. Thus, we are
								advising you to consult the respective Privacy Policies of these
								third-party ad servers for more detailed information. It may
								include their practices and instructions about how to opt-out of
								certain options. You may find a complete list of these Privacy
								Policies and their links here: Privacy Policy Links.
							</p>

							<p>
								You can choose to disable cookies through your individual
								browser options. To know more detailed information about cookie
								management with specific web browsers, it can be found at the
								browsers' respective websites. What Are Cookies?
							</p>

							<h2>
								7. CCPA Privacy Rights (Do Not Sell My Personal Information)
							</h2>

							<p>
								Under the CCPA, among other rights, California consumers have
								the right to:
							</p>

							<p>
								Request that a business that collects a consumer's personal data
								disclose the categories and specific pieces of personal data
								that a business has collected about consumers.
							</p>

							<p>
								Request that a business delete any personal data about the
								consumer that a business has collected.
							</p>

							<p>
								Request that a business that sells a consumer's personal data,
								not sell the consumer's personal data.
							</p>

							<p>
								If you make a request, we have one month to respond to you. If
								you would like to exercise any of these rights, please contact
								us.
							</p>

							<h2>8. GDPR Data Protection Rights</h2>

							<p>
								We would like to make sure you are fully aware of all of your
								data protection rights. Every user is entitled to the following:
							</p>

							<p>
								The right to access – You have the right to request copies of
								your personal data. We may charge you a small fee for this
								service.
							</p>

							<p>
								The right to rectification – You have the right to request that
								we correct any information you believe is inaccurate. You also
								have the right to request that we complete the information you
								believe is incomplete.
							</p>

							<p>
								The right to erasure – You have the right to request that we
								erase your personal data, under certain conditions.
							</p>

							<p>
								The right to restrict processing – You have the right to request
								that we restrict the processing of your personal data, under
								certain conditions.
							</p>

							<p>
								The right to object to processing – You have the right to object
								to our processing of your personal data, under certain
								conditions.
							</p>

							<p>
								The right to data portability – You have the right to request
								that we transfer the data that we have collected to another
								organization, or directly to you, under certain conditions.
							</p>

							<p>
								If you make a request, we have one month to respond to you. If
								you would like to exercise any of these rights, please contact
								us.
							</p>

							<h2>9. Children's Information</h2>

							<p>
								Another part of our priority is adding protection for children
								while using the internet. We encourage parents and guardians to
								observe, participate in, and/or monitor and guide their online
								activity.
							</p>

							<p>
								Pagetify - Websites, online shops, graphics does not knowingly
								collect any Personal Identifiable Information from children
								under the age of 13. If you think that your child provided this
								kind of information on our website, we strongly encourage you to
								contact us immediately and we will do our best efforts to
								promptly remove such information from our records.
							</p>
						</div>
					</div>
				</div>
			</StyledPrivacyPolicy>
		</>
	);
}
