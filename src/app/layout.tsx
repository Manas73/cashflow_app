import "../styles/globals.css";
import {ThemeProvider} from "@/components/theme-provider"

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {ThemeToggle} from "@/components/ui/theme-toggle";

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >

            <header className="w-full">
                <NavigationMenu className="max-w-screen-xl mx-auto px-4 top-2">
                    <div className="flex justify-between w-full">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link className={"nav-link"} href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link className={"nav-link"} href="/login" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Login
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </div>
                </NavigationMenu>
            </header>
            <main>{children}</main>
            <div className={'fixed bottom-4 right-4'}>
                <ThemeToggle/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
