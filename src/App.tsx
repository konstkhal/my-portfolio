import React from 'react';
import './App.css';
import profilePic from './assets/profile.jpg';
import 'normalize.css';
import './App.css';

const projects = [
	{
		yearDate: '2021',
		title:
			'One-pager “Learning how to learn"',
		description:
			'Page viewable on any device to get info about “How to learn” built with BEM, animations, flexbox, grid, JS (ES6), React:',
		link: 'https://github.com/konstkhal/web_project_1',
		linkTitle:
			'View project repository',
	},
	{
		yearDate: '2022',
		title:
			'Front & Back-End “Around-US”',
		description:
			'An App where users can add and remove photos, like photos of others, and make adjustments to their profile built with Node.js, Airbnb JavaScript Style Guide, Model—View—Controller ',
		link: 'https://github.com/konstkhal/react-around-api-full',
		linkTitle:
			'View project repository',
	},
	{
		yearDate: '2022',
		title:
			'Front & Back-End “News Explorer”',
		description:
			'A service where users can search for news articles and save them to their profiles built with GIT workflow, React, JSON API, NODE.JS, JWT, ESLint, Figma ',
		link: 'https://github.com/konstkhal/news-explorer-frontend/',
		linkTitle:
			'View project repository',
	},
	{
		yearDate: '2014',
		title: 'Diacheck.ru',
		description:
			'An E-commerce site, where customers can make purchases & pay online and managers can process orders. 3+ different versions, based on different stacks. Developed and executed a custom migration system to SAAS MEVN Stack CMS, boosting site performance and scalability by 75%',
		link: 'https://www.diacheck.ru',
		linkTitle: 'Visit online',
	},
	{
		yearDate: '2011',
		title: 'ART7YA',
		description:
			'Constructed and deployed ART7YA, an e-commerce site where customers can purchase Japan Soroban (Abacus) and read articles online. Managers can process orders efficiently due to the innovative utilization of the Drupal Content management platform based on LAMP',
		link: ' https://web.archive.org/web/20171109024501/http://www.art7ya.ru/',
		linkTitle: 'Look on Web Archive',
	},
	{
		yearDate: '2011',
		title: 'Sumok-magazin.ru',
		description:
			'Devised and implemented Sumok-magazin.ru, a similar e-commerce site to ART7YA. Leveraged Drupal and LAMP for the content management platform, resulting in an efficient and user-friendly e-commerce experience:',
		link: 'https://web.archive.org/web/20140208100244/http://www.sumok-magazin.ru/',
		linkTitle: 'Look on Web Archive',
	},
	{
		yearDate: '2008',
		title: 'Capital Insurance',
		description:
			'Enhanced operational efficiency at Capital Insurance Co by designing and developing a local database of medical partners. The solution streamlined the sales process, reducing operational overhead using MS ACCESS SQL DataBase',
		link: '#',
		linkTitle: 'Project unaccessible',
	},
	{
		yearDate: '2007',
		title: 'Guta Insurance',
		description:
			'Developed insurance calculators for Guta Insurance Co. Ltd. Using Excel and VBA, the calculators optimized the insurance calculation process using Excel & VBA',
		link: '#',
		linkTitle: 'Project unaccessible',
	},
	{
		yearDate: '2006',
		title: 'Grazhdane.ru',
		description:
			'Created a custom article publishing platform for Grazhdane.ru. Utilized LAMP stack for design and deployment, increasing user engagement with fresh, regularly updated content',
		link: '#',
		linkTitle: 'Project unaccessible',
	},
	{
		yearDate: '2005',
		title: 'Reshu.ru',
		description:
			'Developed and deployed Reshu.ru, an online forum. . Constructed the platform with HTML/CSS and LAMP, contributing to the growth of the community by providing an engaging platform for discussion:',
		link: 'https://web.archive.org/web/20061017072518/http://reshu.ru/',
		linkTitle: 'Look on Web Archive',
	},
	{
		yearDate: '2004',
		title: 'West-Akras Insurance',
		description:
			'Designed and developed corporate website. Successfully refactored and redesigned the platform resulting in increased user engagement. Utilized LAMP stack for development:',
		link: 'https://web.archive.org/web/20050913015202/http://www.west-akras.ru/kontakts.html',
		linkTitle: 'Look on Web Archive',
	},
	{
		yearDate: '2003',
		title: 'Iceland travelers`s club',
		description:
			"Revitalized Icelandclub, a travelers' club website. Transformed and revamped the user interface, significantly improving user experience. Applied LAMP stack for the upgrade.",
		link: ' https://web.archive.org/web/20050404085238/http://icelandclub.ru/',
		linkTitle: 'Look on Web Archive',
	},
	{
		yearDate: '2003',
		title: 'Health @ In-Russia',
		description:
			'Informational dynamic portal with articles about venereal diseases & public health management. Created with:  HTML + CSS, table layout, pure Linux + Apache + PHP project, without a database',
		link: 'https://web.archive.org/web/20030602030323/http://health.in-russia.ru/management/consulting/specialists/index.php?url_locator=index.txt',
		linkTitle: 'Look on Web Archive',
	},
];

const App: React.FC = () => {
	return (
		<div className='container'>
			<div className='profile-card'>
				<img
					src={profilePic}
					alt='Profile'
					className='avatar'
				/>
				<h1>Konstantin Haletckii</h1>
				<p>
					Full Stack Developer | React &
					Node.js
				</p>
				<div className='links'>
					<a
						href='https://github.com/konstkhal'
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub
					</a>
					<a href='mailto:konstkhal+portfolio@gmail.com'>
						Email
					</a>
				</div>
			</div>

			<section className='portfolio'>
				<h2>Portfolio</h2>
				<div className='projects'>
					{projects.map(
						(project, index) => (
							<div
								key={index}
								className='project-card'
							>
								<h3>{project.title}</h3>
								<em>
									{project.yearDate}
								</em>
								<p>
									{project.description}
								</p>
								<a
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'
								>
									{project.linkTitle}
								</a>
							</div>
						)
					)}
				</div>
			</section>
		</div>
	);
};

export default App;
