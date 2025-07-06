"use client";

import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigation = [
		{ name: "Services", href: "#services" },
		{ name: "About", href: "#about" },
		{ name: "Testimonials", href: "#testimonials" },
		{ name: "Rates & FAQs", href: "#faq" },
		{ name: "Areas Served", href: "#areas" },
		{ name: "Contact", href: "#contact" },
	];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 shadow-sm">
			{/* Top Contact Bar */}
			<div className="bg-[#ffefec] text-sm text-slate-800 px-4 sm:px-6 lg:px-8 border-b border-gray-300">
				<div className="max-w-7xl mx-auto flex justify-between items-center h-8">
					<div className="flex items-center space-x-2">
						<Phone className="w-4 h-4" />
						<span className="text-[13px]">(323) 555-0192</span>
					</div>
					<div className="flex items-center space-x-2">
						<MapPin className="w-4 h-4" />
						<span className="text-[13px]">
							1287 Maplewood Drive, Los Angeles, CA 90026
						</span>
					</div>
				</div>
			</div>

			{/* Main Header Bar */}
			<div className="bg-[#f8fafc] backdrop-blur-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						{/* Logo and Name */}
						<div className="flex items-center space-x-3">
							<img
								src="/Images/logo.png"
								alt="Ellie Shumaker Logo"
								className="w-12 h-12 object-contain"
							/>
							<div>
								<h1 className="text-xl font-bold text-sky-900 leading-tight">
									Dr. Serena Blake
								</h1>
								<p className="text-xs text-sky-800 tracking-wide -mt-1">
									LICENSED CLINICAL & SOCIAL PSYCHOLOGIST
								</p>
							</div>
						</div>

						{/* Navigation Links */}
						<nav className="hidden md:flex items-center space-x-7">
							{navigation.map((item) => (
								<button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									className="text-[15px] text-slate-800 hover:text-sky-600 font-medium transition"
								>
									{item.name}
								</button>
							))}

							{/* CTA Button */}
							<Button
								onClick={() => scrollToSection("#contact")}
								className="ml-3 px-4 py-[6px] border border-sky-700 text-sky-700 bg-white hover:bg-sky-50 rounded-md text-[14px] font-medium"
							>
								✨ Get Started
							</Button>
						</nav>

						{/* Mobile Menu Button */}
						<div className="md:hidden">
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="text-gray-700"
							>
								{isMenuOpen ? (
									<X className="h-6 w-6" />
								) : (
									<Menu className="h-6 w-6" />
								)}
							</Button>
						</div>
					</div>
				</div>

				{/* Mobile Nav Dropdown */}
				{isMenuOpen && (
					<div className="md:hidden bg-white shadow-inner py-4 border-t border-gray-200">
						<div className="flex flex-col space-y-2 px-4">
							{navigation.map((item) => (
								<button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									className="text-left py-2 text-gray-800 hover:bg-gray-100 rounded-md font-medium"
								>
									{item.name}
								</button>
							))}
							<Button
								onClick={() => {
									scrollToSection("#contact");
									setIsMenuOpen(false);
								}}
								className="w-full bg-sky-700 text-white hover:bg-sky-800 mt-2"
							>
								✨ Get Started
							</Button>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
