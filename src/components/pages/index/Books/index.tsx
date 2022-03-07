import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// Shared
import { IconChevron } from "components/shared/Icons";
import toast from "components/shared/Toast";
import { checkAuthentication } from "utils";

// Custom
import Book from "./Book";
import {
	BooksWrapper,
	BookList,

	Paginator,
	Button
} from "./styles";

export default function Books() {
	const router = useRouter()

	const isMobile = useMediaQuery({
		query: "(max-width: 575px)"
	});

	const user = useSelector(state => state.user);

	const [fetching, setFetching] = useState(true);
	const [books, setBooks] = useState([]);
	const [page, setPage] = useState(1);
	const [amount, setAmount] = useState(12);
	const [totalPages, setTotalPages] = useState(0);

	// Watcher for page change
	useEffect(() => {
		let pageQuery = 1;
		if (router.query.page && (parseInt(router.query.page) >= 1)) {
			pageQuery = parseInt(router.query.page);

			if (totalPages != 0 && pageQuery > totalPages) {
				router.replace(`/?page=${totalPages}`);
			}
		} else if (parseInt(router.query.page) < 1) {
			router.replace("/?page=1");
		}

		setPage(pageQuery);
		fetchBooks(pageQuery, amount);
	}, [router, amount]);

	// Watcher for resolution change
	useEffect(() => {
		setAmount(isMobile ? 10 : 12);
	}, [isMobile]);

	async function fetchBooks(page, amount) {
		setFetching(true);
		await checkAuthentication();

		const options = {
			url: `${process.env.api}/books?page=${page}&amount=${amount}`,
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${user.authorization}`
			}
		};

		await axios.request(options).then(
			(response) => {
				setBooks(response.data.data);
				setTotalPages(Math.ceil(response.data.totalPages));
			}).catch((error) => {
				toast("Oops", "Houve um erro ao carregar a página. Por favor, tente novamente.", "error");
			});

		setFetching(false);
	}

	return (
		<BooksWrapper>
			<div>
				<BookList>
					{!fetching
						? books.length != 0
							? books.map((book) => {
								return <Book key={book.id} book={book} />
							})
							: <p>
								Nope, nada aqui.
							</p>
						: Array.from(Array(amount).keys()).map((book) => {
							return <Book key={book} loading={true} />
						})
					}
				</BookList>

				<Paginator>
					{!isMobile
						? <p>Página <b>{page}</b> de <b>{totalPages}</b></p>
						: null
					}

					{/* Previous */}
					<Button onClick={() => router.push(`/?page=${parseInt(page) - 1}`)} disabled={page == 1}>
						<IconChevron />
					</Button>

					{isMobile
						? <p>Página <b>{page}</b> de <b>{totalPages}</b></p>
						: null
					}

					{/* Next */}
					<Button onClick={() => router.push(`/?page=${parseInt(page) + 1}`)} disabled={page >= totalPages}>
						<IconChevron style={{ transform: "rotate(90deg)" }} />
					</Button>
				</Paginator>
			</div>
		</BooksWrapper>
	);
}