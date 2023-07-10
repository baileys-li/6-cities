export const FavoritesEmpty = () => (
	<div className="page page--favorites-empty">
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<div className="header__left">
						<a className="header__logo-link" href="main.html">
							<img
								alt="6 cities logo"
								className="header__logo"
								height={41}
								src="img/logo.svg"
								width={81}
							/>
						</a>
					</div>
					<nav className="header__nav">
						<ul className="header__nav-list">
							<li className="header__nav-item user">
								<a
									className="header__nav-link header__nav-link--profile"
									href="#"
								>
									<div className="header__avatar-wrapper user__avatar-wrapper"></div>
									<span className="header__user-name user__name">
										Oliver.conner@gmail.com
									</span>
									<span className="header__favorite-count">0</span>
								</a>
							</li>
							<li className="header__nav-item">
								<a className="header__nav-link" href="#">
									<span className="header__signout">Sign out</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
		<main className="page__main page__main--favorites page__main--favorites-empty">
			<div className="page__favorites-container container">
				<section className="favorites favorites--empty">
					<h1 className="visually-hidden">Favorites (empty)</h1>
					<div className="favorites__status-wrapper">
						<b className="favorites__status">Nothing yet saved.</b>
						<p className="favorites__status-description">
							Save properties to narrow down search or plan your future trips.
						</p>
					</div>
				</section>
			</div>
		</main>
		<footer className="footer">
			<a className="footer__logo-link" href="main.html">
				<img
					alt="6 cities logo"
					className="footer__logo"
					height={33}
					src="img/logo.svg"
					width={64}
				/>
			</a>
		</footer>
	</div>
);
