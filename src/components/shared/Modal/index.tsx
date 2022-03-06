import React from "react";
import { Modal } from "react-bootstrap";

// Shared
import { IconTimes } from "components/shared/Icons";

// Custom
import styles from "./styles.module.scss";
import { ModalClose } from "./styles";

export default function ModalCustom({
	show,
	close,
	size = "medium",
	...props
}) {
	const sizeStyles = {
		"large": styles.customModalLarge,
		"medium": styles.customModalMedium,
		"small": styles.customModalSmall,
	};

	return (
		<Modal
			show={show}
			onHide={close}
			backdropClassName={styles.customModalBackdrop}
			dialogClassName={styles.customModalDialog}
			contentClassName={`${styles.customModalContent} ${sizeStyles[size]}`}>
			{props.children}

			<ModalClose onClick={close}>
				<IconTimes />
			</ModalClose>
		</Modal>
	);
}