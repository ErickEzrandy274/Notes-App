import { AnimatePresence } from "framer-motion";
import React from "react";
import ScrollButton from "../Button/ScrollButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { MainLayoutProps } from "./interface";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<AnimatePresence>
			<ScrollButton />
			<div className="flex flex-col justify-between min-h-screen">
				<Header />
				{children}
				<Footer />
			</div>
		</AnimatePresence>
	);
};

export default MainLayout;
