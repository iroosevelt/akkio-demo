import React from "react";
import Container from "./container";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";

const footerData = [
  {
    title: "Product",
    links: [
      { text: "Overview", href: "/overview" },
      { text: "Chat Data Prep™", href: "/chat-data-prep" },
      { text: "Chat Explore™", href: "/chat-explore" },
      { text: "Pricing", href: "/pricing" },
      { text: "Applications", href: "/applications" },
      { text: "Integrations", href: "/integrations" },
      { text: "Performance", href: "/performance" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "/about" },
      { text: "Mission", href: "/mission" },
      { text: "Jobs", href: "/jobs" },
      { text: "Press", href: "/press" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Blog", href: "/blog" },
      { text: "Tools", href: "/tools" },
      { text: "Docs", href: "/docs" },
      { text: "Security", href: "/security" },
      { text: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Featured",
    links: [
      { text: "Agency’s Guide to AI Analytics", href: "/ai-analytics-guide" },

      {
        text: "Machine Learning for Digital Marketers",
        href: "/ml-digital-marketers",
      },
      { text: "What is AI Marketing?", href: "/ai-marketing" },
      { text: "Lead Scoring: Start Here", href: "/lead-scoring" },
      {
        text: "Twitter Sentiment Analysis",
        href: "/twitter-sentiment-analysis",
      },
      { text: "The Complete No-Code AI Guide", href: "/no-code-ai-guide" },
      {
        text: "Benchmarking Top AutoML Platforms",
        href: "/automl-benchmarking",
      },
    ],
  },
];

interface FooterCardProps {
  title: string;
  links: { text: string; href: string }[];
}

const FooterCard: React.FC<FooterCardProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col py-4">
      <h3 className="font-normal text-sm mb-2">{title}</h3>
      <ul className="space-y-1">
        {links.map((link, index) => (
          <li key={index} className="text-[#1E1E1E] text-sm py-1 font-light">
            <Link href={link.href}>
              <span className="hover:underline">{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <Container className="p-0">
      <section className="bg-[#C5FD2C] flex flex-col justify-center items-center gap-y-4 rounded-3xl w-full h-auto pb-10">
        <div className="flex justify-center w-full gap-x-4 p-10" />
        <Image
          src="/icon-logo.svg"
          alt="Logo"
          width={100}
          height={100}
          // layout="responsive"
        />
        <h2 className="text-5xl text-black leading-snug">
          Subscribe. Scale. Succeed.
        </h2>
        <p className="text-md font-light opacity-80">
          No strings attached—Try Akkio month-to-month and see the results for
          yourself.
        </p>
        <div className="flex justify-center w-full gap-x-4 p-10">
          <Button
            className="bg-black text-white font-normal text-lg py-8 px-16 rounded-full"
            size="lg"
          >
            View Pricing
          </Button>
        </div>
      </section>
      <footer className="w-full px-16 pt-6 bg-white grid grid-cols-1 md:grid-cols-4 gap-4">
        {footerData.map((card, index) => (
          <FooterCard key={index} title={card.title} links={card.links} />
        ))}
        <hr className="col-span-full my-0 border-t-1 border-gray-200" />
        <div className="col-span-1 md:col-span-4 pb-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#1E1E1E]/50 font-light text-sm space-y-2">
            <span>
              &copy; {new Date().getFullYear()} Akkio Inc. All rights reserved.
            </span>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <Link href="/platform-terms">
                <span className="hover:underline">
                  Platform Terms of Service
                </span>
              </Link>
              <Link href="/website-terms">
                <span className="hover:underline">
                  Website Terms of Service
                </span>
              </Link>
              <Link href="/privacy-policy">
                <span className="hover:underline">Privacy Policy</span>
              </Link>
            </div>
          </div>
          <div className="flex opacity-50 space-x-4 mt-4 md:mt-0">
            <a aria-label="Facebook" target="_blank">
              <FaFacebook />
            </a>

            <a aria-label="LinkedIn" target="_blank">
              <FaLinkedin />
            </a>

            <a aria-label="Twitter" target="_blank">
              <FaXTwitter />
            </a>
            <a aria-label="YouTube" target="_blank">
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>
    </Container>
  );
}
