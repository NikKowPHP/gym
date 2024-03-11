import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { Htext } from "@/shared/Htext";
import { triggerAsyncId } from "async_hooks";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};
export function ContactUs({ setSelectedPage }: Props) {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();
	const onSubmit = async (e: any) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
			<motion.div
				className="mt-5 rounded md border-2 border-gray-100 px-5 py-16 text-center"
				onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
			>
				{/* HEADER */}
				<motion.div
					className="md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<Htext>
						<span className="text-primary-500">JOIN NOW </span>
						TO GET IN SHAPE
					</Htext>
					<p className="my-5">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
						culpa velit repellendus temporibus ut a soluta eum hic ad rem,
						corporis aperiam ea, iusto necessitatibus! In inventore excepturi
						ducimus ut.
					</p>
				</motion.div>
				{/* FORM AND IMAGE */}
				<div className="mt-10 justify-between gap-8 md:flex">
					<motion.div
						className="mt-10 basis-3/5 md:mt-0"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<form
							target="_blank"
							onSubmit={onSubmit}
							method="POST"
							action="https://formsubmit.co/nik.kow@outlook.com"
						>
              <input type="email" name="email" className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white" />

            </form>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
