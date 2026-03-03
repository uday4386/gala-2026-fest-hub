import { motion } from "framer-motion";
import collegeLogo from "@/assets/college-logo.jpeg";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 py-3 sm:px-8 xl:px-12 bg-transparent text-foreground">
            <div className="mx-auto flex items-center justify-between w-full">

                {/* Left Side College Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center"
                >
                    <img
                        src={collegeLogo}
                        alt="College Logo"
                        className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain rounded-md"
                    />
                </motion.div>

                {/* Right Side Links */}
                <nav className="flex items-center gap-4 md:gap-8">
                    <a href="#events" className="hidden sm:block text-sm font-display font-bold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors">
                        Events
                    </a>
                    <a href="#guidelines" className="hidden sm:block text-sm font-display font-bold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors">
                        Guidelines
                    </a>
                    <a href="https://tinyurl.com/kitsagala2k26" target="_blank" rel="noopener noreferrer" className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg bg-accent text-accent-foreground font-display text-xs sm:text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(235,51,73,0.3)]">
                        Register Now
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
