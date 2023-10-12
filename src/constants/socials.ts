export type Social = {
    name: string;
    href: string;
    icon: string;
    bgColor: string;
    textColor: string;
}

export const socials: Social[] = [
    {
        name: "GitHub Profile",
        href: "https://github.com/maxusify",
        icon: "mdi:github",
        bgColor: "bg-slate-100",
        textColor: "text-black",
    },
    {
        name: "LinkedIn Profile",
        href: "https://linkedin.com/in/michalpedzik",
        icon: "mdi:linkedin",
        bgColor: "bg-sky-600",
        textColor: "text-slate-100",
    },
    {
        name: "Medium Blog",
        href: "https://medium.com/@maxusify",
        icon: "mdi:medium",
        bgColor: "bg-gray-600",
        textColor: "text-slate-100",
    },
];