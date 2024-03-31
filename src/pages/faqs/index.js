import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubscribeForm from "@/components/SubscribeForm";
import AccordionItem from "@/components/AccordionItem";
import GoTop from "@/components/GoTop";

export default function Faqs() {

    const [open, setOpen] = useState(false)

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }

    const accordionData = [
        {
            title: "What is Now&Me?",
            desc: "Now&Me is a safe space for all - where you can share your feelings, talk to strangers online, and get the help you need from trained professionals. You can find community, make connections, or post anonymously when you want to keep it low-key."
        },
        {
            title: "How can Now&Me help me?",
            desc: "Now&Me can help you to create genuine connections, provide a judgement-free space, learn from others experiences, ask questions, and get the support you need. You can connect instantly with mental health and personal development coaches to become the best version of yourself, or share your feelings with the community to get the support you need."
        },
        {
            title: "What is Now&Me Experts?",
            desc: "Now&Me Experts is an instant chat-based mental health service that allows you to connect with trained experts from various fields to get personalised advice based on your unique situation. The Experts are online at all hours of the day to answer all your questions. All you have to do is recharge your wallet!"
        },
        {
            title: "Who are Now&Me Experts?",
            desc: "Now&Me Experts comprise a whole panel of certified and licensed professionals. They include life coaches, relationship coaches, career coaches, therapists, mindset coaches, self development coaches, and peer listeners. We’re constantly adding more experts to the panel so be sure to keep an eye out!"
        },
        {
            title: "Is Now&Me free?",
            desc: "Yes, the Now&Me app as well as the abundance of content available via blogs and resources is absolutely free. The first chat on Now&Me Experts is also free, after which each expert chat is charged at a nominal price."
        },
        {
            title: "What can I do on Now&Me?",
            desc: "You can do a whole lot of things on Now&Me! Chat with experts & get instant advice, build authentic connections, engage on the community feed, receive daily positivity reminders, use self-care tools to track your emotions, or simply lurk. There’s no wrong way to use Now&Me."
        },
        {
            title: "Who can I meet on Now&Me?",
            desc: "The Now&Me community is full of vibrant people from all walks of life. You can meet students, professionals, parents, teachers, homemakers, workers, non-workers, anyone."
        },
        {
            title: "Is Now&Me a suicide helpline?",
            desc: "Now&Me is not a crisis or suicide helpline. If you or anyone you know requires immediate help, please reach out to the nearest emergency services. You can find professional help in your country here."
        },
        {
            title: "Is Now&Me confidential?",
            desc: "Yes, Now&Me is completely confidential."
        },
        {
            title: "Is Now&Me anonymous?",
            desc: "The Now&Me app has an anonymous option that you can switch on anytime when posting or replying and your identity will be hidden from the community."
        },
    ]

  return (
    <>
      
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <GoTop />
        <div className="flex mx-auto w-full bg-white min-h-screen pt-10 md:pt-10">
          <div className="flex flex-row w-full">
            <div className="flex flex-1 flex-col items-center justify-center relative">
              <div className="flex flex-1 flex-col pb-18 max-w-md md:max-w-2xl ">
                

                <section className="w-full mx-auto pb-10 mt-10 md:mt-10 px-5 ">
                  <h5 className="font-semibold md:font-bold text-2xl md:text-3xl text-[#002f6c]">
                    FAQs
                  </h5>
                  <p className="mt-3 font-normal text-lg text-gray-700">
                    We at Bayern receive hundreds of enails every day. To help you find the information you want quickly and easily, the Bayern online team has compiled this list of the most frequently asked questions and answers.
                  </p>
                  <div className="w-full">
                  <dl className="w-full mt-6 space-y-6 divide-y divide-gray-200">
                    {accordionData.map((data, index) => {
                      return (
                        <AccordionItem
                          key={index}
                          open={index === open}
                          title={data.title}
                          desc={data.desc}
                          toggle={() => toggle(index)}
                        />
                      );
                    })}
                  </dl>
                  </div>
                </section>

              </div>
              <SubscribeForm />
            </div>
          </div>
        </div>

        <Footer />
      
    </>
  );
}
