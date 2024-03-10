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
import { Benefit } from "@/scenes/benefits/Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

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
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
					className="md:my-5 md:w-3/5"
				>
					<Htext>MORE THAT JUST GYM.</Htext>
					<p className="my-5 text-sm">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aut
						officiis modi aliquam itaque impedit fuga velit illo. Consequuntur
						rem commodi repudiandae, ratione accusantium nihil! Ad et nam minima
						quia.
					</p>
				</motion.div>
				{/* BENEFITS */}
				<motion.div
					className=" items-center justify-between gap-8 mt-5 md:flex"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
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
				{/* GRAPHICS AND DESCRIPTION */}
				<div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
					{/* GRAPHIC */}
					<img
						src={BenefitsPageGraphic}
						alt="benefits-page-graphic"
						className="mx-auto "
					/>
					{/* DESCRIPTION*/}
					<div>
						{/* TITLE */}
						<div className="relative">
							<div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.5 }}
									transition={{ duration: 0.5 }}
									variants={{
										hidden: { opacity: 0, x: 50 },
										visible: { opacity: 1, x: 0 },
									}}
								>
									<Htext>
										MILLIONS OF HAPPY MEMBERS GETTING{" "}
										<span className="text-primary-500">FIT</span>.
									</Htext>
								</motion.div>
							</div>
						</div>

						{/* DESCRIPTION */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							variants={{
								hidden: { opacity: 0, x: 50 },
								visible: { opacity: 1, x: 0 },
							}}
						>
							<p className="my-5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deleniti mollitia quas recusandae sequi corporis quo laborum a
								saepe earum reprehenderit praesentium consequuntur quisquam,
								nobis quae tenetur iusto? Est, nihil sint.
							</p>
							<p className="mb-5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deleniti mollitia quas recusandae sequi corporis quo laborum a
								saepe earum reprehenderit praesentium consequuntur quisquam,
								nobis quae tenetur iusto? Est, nihil sint.
							</p>
						</motion.div>

						{/* BUTTON */}
						<div className="relative mt-16">
							<div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
								<ActionButton setSelectedPage={setSelectedPage}>
									Join Now
								</ActionButton>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
