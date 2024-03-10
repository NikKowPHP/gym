import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import { Htext } from "@/shared/Htext";
import { Class } from "./Class";

const classes: Array<ClassType> = [
	{
		name: "Weight Training Classes",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda quis accusamus at ratione. Quam assumenda distinctio quibusdam quasi, minima dignissimos inventore. Magni minima facere, ipsam tempora repellendus corporis consectetur.",
		image: image1,
	},
	{
		name: "Weight Training Classes",
		image: image2,
	},
	{
		name: "Weight Training Classes",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda quis accusamus at ratione. Quam assumenda distinctio quibusdam quasi, minima dignissimos inventore. Magni minima facere, ipsam tempora repellendus corporis consectetur.",
		image: image3,
	},
	{
		name: "Weight Training Classes",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda quis accusamus at ratione. Quam assumenda distinctio quibusdam quasi, minima dignissimos inventore. Magni minima facere, ipsam tempora repellendus corporis consectetur.",
		image: image4,
	},
	{
		name: "Weight Training Classes",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda quis accusamus at ratione. Quam assumenda distinctio quibusdam quasi, minima dignissimos inventore. Magni minima facere, ipsam tempora repellendus corporis consectetur.",
		image: image5,
	},
	{
		name: "Weight Training Classes",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda quis accusamus at ratione. Quam assumenda distinctio quibusdam quasi, minima dignissimos inventore. Magni minima facere, ipsam tempora repellendus corporis consectetur.",
		image: image6,
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

export function OurClasses({ setSelectedPage }: Props) {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	return (
		<section id="ourclasses" className="bg-primary-100 w-full py-40">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
			>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
					className="mx-auto w-5/6"
				>
					<div className="md:w-3/5">
						<Htext>OUR CLASSES</Htext>
						<p className="py-5">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Dignissimos vero minus eveniet quod nulla quisquam provident est
							sequi corporis quia pariatur nam velit, odio labore dolorem,
							placeat corrupti sit quis?
						</p>
					</div>
				</motion.div>
				<div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
					<ul className="w-[2800px] whitespace-nowrap">
						{classes.map((item: ClassType, index) => (
							<Class
								key={`${item.name}-${index}`}
								name={item.name}
								description={item.description}
								image={item.image}
							/>
						))}
					</ul>
				</div>
			</motion.div>
		</section>
	);
}
