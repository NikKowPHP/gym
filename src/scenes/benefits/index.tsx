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
import { Htext } from "@/shared/Htext";

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
				{/* HEADER */}
				<div className="md:my-5 md:w-3/5">
					<Htext>MORE THAT JUST GYM.</Htext>
					<p className="my-5 text-sm">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aut
						officiis modi aliquam itaque impedit fuga velit illo. Consequuntur
						rem commodi repudiandae, ratione accusantium nihil! Ad et nam minima
						quia.
					</p>
				</div>
				{/* BENEFITS */}
				
			</motion.div>
		</section>
	);
}
