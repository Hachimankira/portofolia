import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/articles.css";
import ArticleCard from "../data/ArticleCard";

const Articles = () => {
	useEffect(() => {
		document.title = `Articles | ${INFO.main.title}`;
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container flex">
					<div className="title articles-title">
							{INFO.articles.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.articles.description}
						</div>

						<div>
						{INFO.article.map((article, index) => (
							<div key={index}>
								<ArticleCard
									title={article.title}
									description={article.description}
									image={article.image}
									category={article.category}
									date={article.date}
								/>
							</div>
						))}
					</div>
					</div>
					{/* //new code from here */}
					
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
