import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import {
	HomeModernIcon,
	UserGroupIcon,
	AcademicCapIcon,
} from "@heroicons/react/24/solid";

type Props = {
	setSelectedPage: (selectedPage: SelectedPage) => void;
};

export function Benefits({ setSelectedPage }: Props) {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	return (
		<section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
			>

      </motion.div>
		</section>
	);
}
