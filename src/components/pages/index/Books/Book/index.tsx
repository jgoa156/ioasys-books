import React, { useEffect, useState } from "react";

// Shared
import Modal from "components/shared/Modal";

// Custom
import {
	BookWrapper,

	PlaceholderCover,
	Cover,
	Description,
	Details,
	TitleWrapper,

	BookModalWrapper,
	BookModalCover,
	BookModalDetails,
	BookModalDetailsTitle,
	BookModalDetailsSubtitle,
	BookModalDetailsInfo,
	BookModalDetailsDescription,
	BookModalDetailsSectionTitle
} from "./styles";
import { IconQuotes } from "components/shared/Icons";

export default function Book({ book = null, loading = false }) {
	const [showModal, setShowModal] = useState(false);
	const defaultBookCover = "https://d2drtqy2ezsot0.cloudfront.net/Book-1.jpg";

	useEffect(() => {
		document.body.style.overflow = showModal ? "hidden" : "auto";
		document.body.style.height = showModal ? "10px" : "auto";
	}, [showModal]);

	if (!loading) {
		const authors = book.authors.map((author, index) => {
			return `${author}${index != book.authors.length - 1 ? ", " : ""}`;
		});

		const bookInfo = [
			{ label: "Páginas", content: `${book.pageCount} páginas` },
			{ label: "Editora", content: `Editora ${book.publisher}` },
			{ label: "Publicação", content: `${book.published}` },
			{ label: "Idioma", content: `${book.language}` },
			{ label: "Título Original", content: `${book.title}` },
			{ label: "ISBN-10", content: `${book.isbn10}` },
			{ label: "ISBN-13", content: `${book.isbn13}` },
		];
	}

	return (
		<>
			<BookWrapper onClick={() => !loading ? setShowModal(true) : {}}>
				{loading
					? <PlaceholderCover className={"placeholder-wave"}>
						<span className="h-100 placeholder col-12"></span>
					</PlaceholderCover>
					: <Cover src={book.imageUrl ? book.imageUrl : defaultBookCover} />
				}

				<Details>
					<TitleWrapper>
						<h4 className={loading ? "placeholder-wave" : ""}>
							{loading
								? <span className="placeholder col-12"></span>
								: book.title
							}
						</h4>
						<h5 className={loading ? "placeholder-wave" : ""}>
							{loading
								? <span className="placeholder col-12"></span>
								: authors
							}
						</h5>
					</TitleWrapper>

					<Description className={loading ? "mt-3" : ""}>
						<p className={loading ? "placeholder-wave" : ""}>
							{loading
								? <span className="placeholder col-12"></span>
								: `${book.pageCount} páginas`
							}
						</p>
						<p className={loading ? "placeholder-wave" : ""}>
							{loading
								? <span className="placeholder col-12"></span>
								: `Editora ${book.publisher}`
							}
						</p>
						<p className={loading ? "placeholder-wave" : ""}>
							{loading
								? <span className="placeholder col-12"></span>
								: `Publicado em ${book.published}`
							}
						</p>
					</Description>
				</Details>
			</BookWrapper>

			{!loading
				? <Modal
					show={showModal}
					close={() => setShowModal(false)}
					size={"large"}>
					<BookModalWrapper>
						<BookModalCover src={book.imageUrl ? book.imageUrl : defaultBookCover} />

						<BookModalDetails>
							<div>
								<BookModalDetailsTitle>
									{book.title}
								</BookModalDetailsTitle>

								<BookModalDetailsSubtitle>
									{authors}
								</BookModalDetailsSubtitle>
							</div>

							<div>
								<BookModalDetailsSectionTitle>
									Informações
								</BookModalDetailsSectionTitle>

								<BookModalDetailsInfo>
									{bookInfo.map((info, index) => {
										return (
											<div key={index}>
												<label>{info.label}</label>
												<span>{info.content}</span>
											</div>
										);
									})}
								</BookModalDetailsInfo>
							</div>

							<div>
								<BookModalDetailsSectionTitle>
									Resenha da Editora
								</BookModalDetailsSectionTitle>

								<BookModalDetailsDescription>
									<IconQuotes /> {book.description}
								</BookModalDetailsDescription>
							</div>
						</BookModalDetails>
					</BookModalWrapper>
				</Modal>
				: null
			}
		</>
	);
}