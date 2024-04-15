import React from 'react'
import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubscribeForm from "@/components/SubscribeForm";
import GoTop from "@/components/GoTop";

import detail1 from "@/assets/img/history/detail1.jpg";
import detail2 from "@/assets/img/history/detail2.jpg";
import detail3 from "@/assets/img/history/detail3.jpg";
import RelatedArticle from '@/components/RelatedArticle';

export default function Season() {
  return (
    <>
      <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <GoTop />

        <div className="flex flex-col bg-white min-h-screen ">
        <div className="flex flex-col space-y-1 py-2 md:py-4 mx-auto w-11/12">
          
          <h1 className="text-4xl font-bold md:leading-9 text-black">
          2024 Ford Mustang Mach-E GT Joins The Bronze Age
          </h1>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-semibold text-[#757575]">
                          By Brigitt Earley
                        </p>
            
            <span className="text-xs text-gray-900">January 6, 2024</span>
          </div>
        </div>
        <div className="relative2 z-0 mx-auto w-11/12 overflow-hidden bg-grayish h-[230px] md:h-[363px]">
          <Image src={detail1} alt="" className=" object-cover h-full" />
        </div>

        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col items-center justify-center relative">
            <div className="flex flex-1 flex-col pb-18 max-w-md md:max-w-2xl ">
              <section className="w-full mx-auto  mt-0 md:mt-0 px-5 markdown-blog">
                <article>
                  <p>
                  Hlozek joined head coach Gerardo Seoane and his squad for the team&lsquo;s training camp in Austria in July. Florian Wirtz also made the trip to continue his rehabilitation after his cruciate ligament injury in March.
                  </p>
                  <p>
                  Alongside training sessions, media appointments and time with travelling fans, there were also two friendly matches. The game against Greek Cup holders Panathinaikos - where Hlozek made his debut - ended goalless. An encounter with Udinese of Italy resulted in a 2-1 win.
                  </p>
                  <p>
                    However, they’re prone to illness and infestations when
                    improperly watered.
                  </p>
                  <p>
                    As overwatering is perhaps the single biggest mistake plant
                    lovers make regularly, it’s essential to know the signs of
                    overwatering, address them, and what to do in severe cases.
                  </p>
                  <h2>6 Signs Of Overwatered Peace Lily</h2>
                  <p>
                    The following symptoms don’t always equate to overwatering
                    but are a good indicator. Try to eliminate other possible
                    causes of these signs and follow the remedies we’ve included
                    to solve each symptom.
                  </p>
                  <h3>Soggy Soil</h3>
                  <p>
                    Perhaps the single most obvious sign of overwatering is the
                    soil itself. You should never see puddles forming, nor
                    should the soil feel squishy to the touch.
                  </p>
                  <p>
                    Additionally, many factors affect how much and how often
                    your plant will drink, so watering on a schedule is one of
                    the worst things you can do. The soak-and-dry method is
                    perhaps the most effective way to water plants, with few
                    exceptions.
                  </p>
                  <p>Follow these steps:</p>
                  <ol className="list-disc">
                    <li>
                      Simply stick your finger in the soil to judge how far down
                      it feels dry.
                    </li>
                    <li>
                      Water for peace lilies when it feels dry 2″ inches down.
                    </li>
                    <li>
                      Always water slowly, working your way around the pot and
                      doing your best not to get the leaves wet.
                    </li>
                    <li>
                      Stop watering when you see moisture seeping from the
                      drainage holes, or the surface can no longer absorb at the
                      same speed you’re pouring.
                    </li>
                  </ol>
                  <h3>Yellowing Leaves</h3>
                  <p>
                    In the language of plants, this sign is the equivalent of a
                    human saying, “I don’t feel so well.” However, it’s not
                    difficult to verify this is being caused by overwatering by
                    checking the soil when you see yellowing leaves.
                  </p>
                  <p>
                    Some other common causes of yellow leaves include the
                    following:
                  </p>

                  <ol className="list-disc">
                    <li>Sunburn</li>
                    <li>Infestations</li>
                    <li>Root rot</li>
                  </ol>
                  <p>
                    Follow the soil care guide below once you confirm the
                    problem is being caused by overwatering. Chances are, many
                    of the leaves will regain their color, but some may be too
                    far gone and will need to be pruned away.
                  </p>
                  <h3>Blisters</h3>
                  <p>
                    When you spend too long in a tub or pool, your skin will
                    become so saturated that it wrinkles. Plants suffer a
                    similar condition called edema, in which the roots are
                    drawing more water than the plant can use.
                  </p>
                  <p>
                    As a result, the excess water fills leaf cells until they
                    burst, causing blister-like abscesses that can be found
                    mainly on the undersides of the leaves.
                  </p>
                  <p>
                    This is one of those conditions where you will likely need
                    to repot the plant. The blisters can eventually burst, and
                    you may find it necessary to prune away the worst leaves.
                  </p>

                  <h3>Brown Or Black Leaf Tips</h3>
                  <p>
                    Commonly associated with chemical burns from fertilizers or
                    sunburn, brown to black lea tips may also be related to
                    overwatering.
                  </p>
                  <p>
                    Unfortunately, this damage cannot be reversed. Some
                    yellowing and black means that part of the plant has turned
                    necrotic. The only treatment for this symptom is to remove
                    the damaged leaves.
                  </p>
                  <h3>Fungus Gnats Or Oddly-Tinted Soil</h3>
                  <p>
                    Fungus gnats are tiny insects that serve as pollinators for
                    some plants but are largely pests. These little guys can be
                    a sign of overwatering, as the larvae feed on soil-based
                    fungi.
                  </p>
                  <p>
                    Depending on the fungus, you might not be able to see it, or
                    you might see a greenish tint or gray to white cottony film
                    on the surface.
                  </p>
                  <p>
                    These problems can often be solved using a neem soil soak
                    and possibly also fungicide (although neem oil will kill
                    some forms of fungus).
                  </p>
                  <h3>Root Rot</h3>
                  <p>
                    Root rot is the worst-case scenario, and it can kill your
                    plant if left untreated. In addition to yellowed, droopy
                    leaves, you’ll likely smell a foul odor coming from the
                    soil. Either bacteria or fungus may cause root rot, so you
                    can’t rely on fungicides to treat it.
                  </p>
                  <p>
                    You’ll have to dig up the plant, remove the damaged roots,
                    sterilize the surviving roots, and plant it in a fresh pot
                    with fresh soil to treat root rot.
                  </p>
                  <p>
                    Note that neem soil soaks have been known to help fight off
                    both bacterial and fungal root rot in its early stages but
                    will not be able to save a plant once the condition begins
                    to worsen.
                  </p>

                  <h2>How To Treat Severe Overwatering?</h2>
                  <p>
                    In most of the above cases, you can stop watering to allow
                    the soil to dry out, but what happens when the damage is a
                    bit more severe, or the plant has been overwatered
                    repeatedly?
                  </p>
                  <p>
                    Treating severe overwatering means acting fast and
                    completely repotting the plant.
                  </p>

                  <h3>Step 1: Remove The Wet Soil</h3>
                  <p>
                    Tip the pot over and slide the plant out, gently removing as
                    much dirt from the roots as possible. Now is a good time to
                    check for root rot and treat it, if necessary. It’s often
                    good to let the plant dry out a little for 8 hours (or
                    overnight) in a warm, dry spot.
                  </p>
                  <h3>Step 2: Prepare A New Container</h3>
                  <p>
                    If your old pot has adequate drainage holes, you can soak it
                    in a solution of 1 part bleach to 9 parts water for 30
                    minutes and allow it to dry.
                  </p>
                  <p>
                    Otherwise, you’ll want to get a new container, making sure
                    the drainage holes are large enough and that the pot isn’t
                    too big or small for your plant.
                  </p>
                  <p>
                    To help ensure the best drainage, ad a ½ to 1” inch layer of
                    gravel or aquarium stones to the bottom of the pot.
                  </p>
                  <h3>Step 3: Prepare The Soil</h3>
                  <p>Here are the steps to prepare the soil:</p>

                  <ol className="list-disc">
                    <li>
                      Now you’ll want to add some fresh soil to the container.
                      Don’t use the old soil, as it’s likely contaminated.
                    </li>
                    <li>
                      Mix some perlite or coarse sand into the soil to help
                      ensure it remains loose, as compacted soil can contribute
                      to overwatering issues.
                    </li>
                    <li>
                      Add the soil to the container and give it a light
                      watering.
                    </li>
                  </ol>
                  <p>
                    You only need enough to get the soil slightly damp to help
                    things settle.
                  </p>

                  <h3>Step 4: Replant Your Peace Lily</h3>
                  <p>
                    Once the pot and soil are ready, you can replant your lily.
                    Ensure it’s planted at the same depth as before and give it
                    another light watering.
                  </p>
                  <p>
                    Note that the plant needs LESS water if you group it with
                    other plants, as over 97% percent of the water it absorbs is
                    used in transpiration (essentially sweating to improve local
                    humidity levels).
                  </p>
                  <p>
                    Grouped plants share the benefits of transpiration, reducing
                    the amount of water they need.
                  </p>
                  <p>
                    As long as you use the soak-and-dry method to water your
                    peace lily, overwatering should become a thing of the past.
                  </p>
                </article>
              </section>

              </div>
              </div>
              </div>
              </div>

              <div className="flex flex-row py-4 md:py-6 border-y">
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row mx-auto w-11/12 md:w-8/12 lg:w-1/2">
            <div className="flex flex-col w-full md:w-1/2 ">
              <div>
                <span className="text-sm font-semibold text-gray-400">Topics of this article</span>
              </div>
              <div>
                <div className="flex flex-wrap ">
                  <button className="flex mr-2 mt-2 rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
                    <span className=" font-semibold text-[#002f6c] text-sm">
                      News
                    </span>
                  </button>
                  <button className="flex mr-2 mt-2 rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
                    <span className=" font-semibold text-[#002f6c] text-sm">
                      Thomas Muller
                    </span>
                  </button>
                  <button className="flex mr-2 mt-2 rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
                    <span className=" font-semibold text-[#002f6c] text-sm">
                      Training
                    </span>
                  </button>
                  <button className="flex mr-2 mt-2 rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
                    <span className=" font-semibold text-[#002f6c] text-sm">
                      Audi Summer Tour 2023
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2 space-y-3">
                <div>
                <span className="text-sm font-semibold text-gray-400">Share this article</span>
              </div>
              <div className="flex space-x-4 OuQGd">
                <Link href={"/"} className="">
                    <span className="text-[#002f6c]" >
                    <svg height="28" width="28" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" role="img" xmlns="http://www.w3.org/2000/svg" className="base-icon__StyledIconSvg-sc-fzrbhv-0 eCHnXp"><title>icon</title><path fillRule="evenodd" clipRule="evenodd" d="M2 2.25C1.0335 2.25 0.25 3.0335 0.25 4V20C0.25 20.9665 1.0335 21.75 2 21.75H22C22.9665 21.75 23.75 20.9665 23.75 20V4C23.75 3.0335 22.9665 2.25 22 2.25H2ZM1.75 4C1.75 3.86193 1.86193 3.75 2 3.75H22C22.1381 3.75 22.25 3.86193 22.25 4V5.58833L12.0001 12.111L1.75 5.58825V4ZM1.75 7.36621V20C1.75 20.1381 1.86193 20.25 2 20.25H22C22.1381 20.25 22.25 20.1381 22.25 20V7.3663L12.4027 13.6327C12.1571 13.7891 11.8431 13.7891 11.5974 13.6327L1.75 7.36621Z"></path></svg>
                    </span>
                </Link>
                <Link href={"/"} className="">
                    <span className="text-[#002f6c]" >
                    <svg height="28" width="28" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" role="img" xmlns="http://www.w3.org/2000/svg" className="base-icon__StyledIconSvg-sc-fzrbhv-0 eCHnXp"><title>icon</title><path fillRule="evenodd" clipRule="evenodd" d="M2.75001 12C2.75001 6.89137 6.89138 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C10.2442 21.25 8.60468 20.7615 7.20751 19.9134L6.92235 19.7403L3.11862 20.8814L4.25974 17.0777L4.08663 16.7925C3.23852 15.3953 2.75001 13.7559 2.75001 12ZM12 1.25C6.06295 1.25 1.25001 6.06294 1.25001 12C1.25001 13.9172 1.75252 15.719 2.63334 17.2788L0.881409 23.1186L6.7212 21.3667C8.28102 22.2475 10.0828 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.6343 15.49C16.6437 15.5613 16.6322 15.6334 16.6012 15.6978C16.4974 15.9132 16.0529 16.3188 15.3019 16.491C14.45 16.6864 12.6727 16.6682 10.3388 14.3513C8.00483 12.0344 7.98647 10.2702 8.18318 9.42493C8.35656 8.67908 8.76521 8.23751 8.98223 8.13447C9.04699 8.10376 9.11965 8.09241 9.19141 8.1017C9.40361 8.12905 9.87427 8.19306 10.1219 8.2269L10.204 8.23807C10.3259 8.25471 10.4328 8.32944 10.4903 8.43762C10.6203 8.68279 11.059 9.55519 11.2455 10.4867C11.2655 10.5869 11.2435 10.6904 11.1844 10.7729L10.5892 11.6047C10.6949 11.8495 11.0064 12.4842 11.613 13.0864C12.226 13.6949 12.8586 13.9993 13.105 14.103L13.9433 13.5117C14.0264 13.4531 14.1307 13.4312 14.2317 13.4511C15.1702 13.6364 16.0489 14.0718 16.2959 14.2008C16.405 14.2582 16.4802 14.3642 16.4969 14.4851L16.5006 14.5116C16.5315 14.7349 16.6043 15.2625 16.6343 15.49Z"></path></svg>
                    </span>
                </Link>
                <Link href={"/"} className="">
                    <span className="text-[#002f6c]" >
                        <svg height="28" width="28" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" role="img" xmlns="http://www.w3.org/2000/svg" className="eCHnXp"><title>icon</title><path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.06294 6.06293 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.3664 18.8186 21.8129 13.6788 22.6195L12.8125 22.7554V14.1406H15.2488L15.4621 12.75H12.8125V10.1242C12.8125 9.61973 12.9348 9.02962 13.3442 8.55619C13.7712 8.06245 14.4081 7.8125 15.1921 7.8125H15.7031V6.75421C15.6883 6.75246 15.6733 6.75071 15.6581 6.74896C15.25 6.70183 14.7218 6.65625 14.2146 6.65625C13.2241 6.65625 12.4878 6.95361 12.0001 7.4418C11.5131 7.92924 11.1875 8.69342 11.1875 9.79688V12.75H8.64844V14.1406H11.1875V22.7554L10.3212 22.6195C5.18143 21.8129 1.25 17.3664 1.25 12ZM16.4531 6.10156L16.5793 5.36225L17.2031 5.46872V9.3125H15.1921C14.7339 9.3125 14.5561 9.44797 14.4788 9.53735C14.3839 9.64705 14.3125 9.83777 14.3125 10.1242V11.25H17.2097L16.5363 15.6406H14.3125V20.9586C18.3019 19.932 21.25 16.3097 21.25 12C21.25 6.89136 17.1086 2.75 12 2.75C6.89136 2.75 2.75 6.89136 2.75 12C2.75 16.3097 5.69805 19.932 9.6875 20.9586V15.6406H7.14844V11.25H9.6875V9.79688C9.6875 8.39408 10.1084 7.21295 10.9389 6.38164C11.7687 5.55108 12.921 5.15625 14.2146 5.15625C14.8016 5.15625 15.3926 5.20833 15.8302 5.25886C16.0506 5.28431 16.2357 5.30979 16.3665 5.32904C16.4319 5.33868 16.4839 5.34677 16.5201 5.35256L16.5624 5.35942L16.5741 5.36138L16.5775 5.36195L16.5793 5.36225C16.5794 5.36226 16.5793 5.36225 16.4531 6.10156Z"></path></svg>
                    </span>
                </Link>
                <Link href={"/"} className="">
                    <span className="text-[#002f6c]" >
                    <svg height="28" width="28" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" role="img" xmlns="http://www.w3.org/2000/svg" className="base-icon__StyledIconSvg-sc-fzrbhv-0 eCHnXp"><title>icon</title><path fillRule="evenodd" clipRule="evenodd" d="M2.74995 12C2.74995 6.89137 6.89132 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C10.2441 21.25 8.60462 20.7615 7.20745 19.9134L6.92229 19.7403L3.11856 20.8814L4.25967 17.0777L4.08657 16.7925C3.23846 15.3953 2.74995 13.7559 2.74995 12ZM12 1.25C6.06289 1.25 1.24995 6.06294 1.24995 12C1.24995 13.9172 1.75246 15.719 2.63328 17.2788L0.881348 23.1186L6.72114 21.3667C8.28095 22.2475 10.0828 22.75 12 22.75C17.937 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.937 1.25 12 1.25ZM6 15L11 9.5L14 11L18 9L14 15L11 13L6 15Z"></path></svg>
                    </span>
                </Link>
                <Link href={"/"} className="">
                    <span className="text-[#002f6c]" >
                        <svg height="28" width="28" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" role="img" xmlns="http://www.w3.org/2000/svg" className="base-icon__StyledIconSvg-sc-fzrbhv-0 eCHnXp"><title>icon</title><path fillRule="evenodd" clipRule="evenodd" d="M22.7489 1.55201L22.1977 3.53011C22.1232 3.79735 22.0368 4.05442 21.9484 4.29111L23.9214 3.28228L22.6493 5.48248C22.1499 6.34614 21.5278 7.12178 20.8083 7.76796L20.8136 8.0045V8.01291C20.8136 11.1356 19.7875 14.4977 17.8037 17.0948C15.8079 19.7078 12.8273 21.5589 8.9744 21.5589C6.59849 21.5589 4.39616 20.7533 2.5535 19.388L0.233276 17.6688L3.09684 18.0416C3.37247 18.0775 3.64994 18.097 3.92964 18.097C4.99575 18.097 6.01153 17.8228 6.92588 17.3245C5.57894 16.8311 4.32683 15.8235 3.46824 14.3374L2.60635 12.8456L4.28534 13.2312C4.27149 13.228 4.27187 13.228 4.29218 13.2292C4.30826 13.2302 4.33683 13.232 4.38074 13.2335C4.1457 13.0342 3.92215 12.8158 3.71473 12.5807C2.86794 11.6212 2.25001 10.3374 2.25001 8.85968V6.79288L3.41594 8.13826C3.17709 7.5032 3.04664 6.80724 3.04664 6.08253C3.04664 5.14199 3.26462 4.25296 3.65479 3.48298L4.21773 2.37202L4.93636 3.38924C6.564 5.69317 8.89061 7.25795 11.5086 7.67571C11.5068 7.61612 11.506 7.55634 11.506 7.4964C11.506 4.70396 13.49 2.25 16.1538 2.25C17.3581 2.25 18.439 2.76327 19.2491 3.5788C19.8865 3.38592 20.4916 3.0919 21.0525 2.70923L22.7489 1.55201ZM4.02077 10.2667C4.2124 10.7536 4.49593 11.199 4.83941 11.5882C5.49895 12.3356 6.3394 12.8293 7.06032 12.9967L9.75657 13.6227L7.1131 14.4435C7.09355 14.4496 7.07285 14.4561 7.0511 14.4629C6.75263 14.5564 6.25551 14.7122 5.79412 14.7122C5.75449 14.7122 5.69372 14.7136 5.61615 14.7157C6.55148 15.6771 7.71651 16.1527 8.78585 16.175L10.674 16.2145L9.2732 17.4812C8.23286 18.4219 6.98923 19.0977 5.62445 19.4074C6.67707 19.8302 7.80358 20.0589 8.9744 20.0589C12.2915 20.0589 14.8555 18.4836 16.6117 16.1843C18.3783 13.8715 19.3118 10.8393 19.3136 8.02121L19.2925 7.08316L19.5739 6.85157C19.8843 6.59608 20.1773 6.31008 20.4493 5.99757L19.5697 5.74107L20.0242 4.92084L20.0274 4.91497L20.0363 4.89854C19.7524 4.99943 19.4619 5.08422 19.1655 5.1519L18.7106 5.25575L18.4164 4.89361C17.8281 4.16945 17.0207 3.75 16.1538 3.75C14.5126 3.75 13.006 5.3239 13.006 7.4964C13.006 7.79976 13.0357 8.0938 13.092 8.37252L13.2849 9.32623L12.3135 9.26993C9.29268 9.09485 6.59228 7.6301 4.60167 5.38022C4.56559 5.607 4.54664 5.84172 4.54664 6.08253C4.54664 7.42753 5.14052 8.57802 5.98802 9.23144L7.84791 10.6654L5.50117 10.5748C5.10059 10.5594 4.54872 10.4506 4.02077 10.2667ZM20.6806 5.28379L20.4842 5.95714C20.4843 5.95698 20.4841 5.9573 20.4842 5.95714C20.5044 5.88723 20.5553 5.71344 20.6806 5.28379Z"></path></svg>
                    </span>
                </Link>
                </div>
            </div>
          </div>
        </div>

        <RelatedArticle />

        <Footer />  
    </>
  )
}
