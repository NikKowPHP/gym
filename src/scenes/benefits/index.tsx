import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { BenefitType, SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import {
	HomeModernIcon,
	UserGroupIcon,
	AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { Htext } from "@/shared/Htext";
import { Benefit } from "./Benefit";

const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: "State of the Art Facilities",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aut officiis modi aliquam itaque impedit fuga velit illo. Consequuntur rem commodi repudiandae, ratione accusantium nihil! Ad et nam minima",
	},
	{
		icon: <UserGroupIcon className="h-6 w-6" />,
		title: "100s of Diverse Classes",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aut officiis modi aliquam itaque impedit fuga velit illo. Consequuntur rem commodi repudiandae, ratione accusantium nihil! Ad et nam minima",
	},
	{
		icon: <AcademicCapIcon className="h-6 w-6" />,
		title: "Expert And Pro Trainers",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aut officiis modi aliquam itaque impedit fuga velit illo. Consequuntur rem commodi repudiandae, ratione accusantium nihil! Ad et nam minima",
	},
];

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },
	},
};
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
				<motion.div className=" items-center justify-between gap-8 mt-5 md:flex"
				initial="hidden"
				whileInView="visible"
				viewport={{once: true, amount: 0.5}}
				variants={container}
				
				>
					{benefits.map((benefit: BenefitType) => (
						<Benefit
							key={benefit.title}
							icon={benefit.icon}
							title={benefit.title}
							description={benefit.description}
							setSelectedPage={setSelectedPage}
						/>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
}
