import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Logo from "@/assets/Logo.png";

type Props = {};

export function Navbar({}: Props) {
	const flexBetween = "flex intems-center justify-between";
	return (
		<nav>
			<div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
						{/* LEFT SIDE */}
						<img src={Logo} alt="logo" />
						{/* RIGHT SIDE */}
						<div className={`${flexBetween} w-full`}>
							<div  className={`${flexBetween} w-full gap-8 text-sm`}>
                <p>Home</p>
                <p>About</p>
                <p>Benefits</p>
                <p>Our Classes</p>
                <p>Contact Us</p>
              </div>
							<div className={`${flexBetween} w-full gap-8`}>
                <p>Sign In</p>
                <button>Become a member</button>
              </div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
