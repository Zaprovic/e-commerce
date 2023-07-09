import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
	return <div className="flex flex-col mt-[60px] items-center">{children}</div>;
};

export default MainLayout;
