import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};
export function Benefit({ }: Props) {
	return (
		<motion.div className="mt-5 rounded md border-2 border-gray-100 px-5 py-16 text-center"
    
    >
		</motion.div>
	);
}
