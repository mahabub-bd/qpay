import { security,chargecalculator,limit,faq,reg,contact } from "@/public";

export const helpMenuLink = [
  { id: 1, img: faq, title: "Frequently Asked Questions", link: "/faq" },

  { id: 2, img: limit, title: "Charge and Limits", link: "/limit" },

  {
    id: 3,
    img: chargecalculator,
    title: "Charge Calculator",
    link: "/chargecalculator",
  },

  { id: 4, img: reg, title: "Registration Process", link: "/reg" },
  {
    id: 5,
    img: security,
    title: "Security Tips",
    link: "/security",
  },
  {
    id: 6,
    img: contact,
    title: "Contact us",
    link: "/contact",
  },
];
