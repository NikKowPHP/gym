import React from "react";

type Props = {
	children: React.ReactNode;
};

export function Htext({ children }: Props) {
	return <h1 className="basis-3/5 text-3xl font-bold">{children}</h1>;
}
