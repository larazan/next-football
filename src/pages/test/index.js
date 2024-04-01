import React from "react";
import Image from "next/image";

import lunin from "@/assets/img/player/lunin.png";
import carvajal from "@/assets/img/player/carvajal.png";
import rudiger from "@/assets/img/player/rudiger.png";
import nacho from "@/assets/img/player/nacho.png";
import mendy from "@/assets/img/player/mendy.png";
import tchouameni from "@/assets/img/player/tchouameni.png";
import kroos from "@/assets/img/player/kroos.png";
import valverde from "@/assets/img/player/valverde.png";
import bellingham from "@/assets/img/player/bellingham.png";
import diaz from "@/assets/img/player/diaz.png";
import rodrigo from "@/assets/img/player/rodrigo.png";

export default function Test() {

    const playerData = [
        {
            name: "lunin",
            position: "GK",
            rate: 7.7,
            subs: 81,
            assist: false,
            goal: false,
            yellowCard: true,
            redCard: false,
            img: lunin
        },
        {
            name: "carvajal",
            position: "RW",
            rate: 7.7,
            subs: 81,
            assist: false,
            goal: false,
            yellowCard: true,
            redCard: false,
            img: carvajal
        },
        {
            name: "rudiger",
            position: "RCB",
            rate: 7.7,
            subs: 81,
            assist: false,
            goal: false,
            yellowCard: true,
            redCard: false,
            img: rudiger
        },
        {
            name: "nacho",
            position: "LCB",
            rate: 7.7,
            subs: 81,
            assist: false,
            goal: false,
            yellowCard: true,
            redCard: false,
            img: nacho
        },
        {
            name: "Mendy",
            position: "LWB",
            rate: 7.7,
            subs: 81,
            assist: false,
            goal: false,
            yellowCard: true,
            redCard: false,
            img: mendy
        },
        {
            name: "tchouameni",
            position: "RCM",
            rate: 7.7,
            subs: 81,
            assist: false,
            goal: false,
            yellowCard: true,
            redCard: false,
            img: tchouameni
        },
        {
            name: "kroos",
            position: "LCM",
            rate: 7.7,
            subs: 81,
            assist: false,
            goal: false,
            yellowCard: true,
            redCard: false,
            img: kroos
        },
        {
            name: "valverde",
            position: "RW",
            rate: 7.7,
            subs: 81,
            assist: false,
            goal: false,
            yellowCard: true,
            redCard: false,
            img: valverde
        },
        {
            name: "bellingham",
            position: "LW",
            rate: 7.7,
            subs: 81,
            assist: false,
            goal: false,
            yellowCard: true,
            redCard: false,
            img: bellingham
        },
        {
            name: "diaz",
            position: "RCF",
            rate: 7.7,
            subs: 81,
            assist: false,
            goal: false,
            yellowCard: true,
            redCard: false,
            img: diaz
        },
        {
            name: "rodrigo",
            position: "LCF",
            rate: 7.7,
            subs: 81,
            assist: false,
            goal: false,
            yellowCard: true,
            redCard: false,
            img: rodrigo
        },
    ]

  return (
    <>
      <section className="relative flex justify-center w-[170px] h-[230px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="170"
          height="230"
          viewBox="0 0 170 230"
          fill="none"
        >
          <path
            d="M164 0H6C2.68629 0 0 2.68629 0 6V224C0 227.314 2.68629 230 6 230H164C167.314 230 170 227.314 170 224V6C170 2.68629 167.314 0 164 0Z"
            fill="rgba(239, 239, 239, 1)"
          ></path>
          <path
            d="M34 230V186.617C33.9992 186.351 34.1041 186.095 34.2915 185.906C34.479 185.717 34.7337 185.61 35 185.608H135C135.266 185.61 135.521 185.717 135.709 185.906C135.896 186.095 136.001 186.351 136 186.617V230H139V186.617C139.005 185.552 138.586 184.528 137.836 183.771C137.085 183.015 136.066 182.587 135 182.582H104.828C102.459 179.594 99.4446 177.18 96.0111 175.521C92.5776 173.861 88.8135 172.999 85 172.999C81.1866 172.999 77.4224 173.861 73.9889 175.521C70.5555 177.18 67.5414 179.594 65.172 182.582H35C33.9346 182.587 32.9146 183.015 32.1645 183.771C31.4144 184.528 30.9955 185.552 31 186.617V230H34ZM85 176.026C87.9343 176.027 90.8394 176.607 93.5494 177.732C96.2593 178.857 98.7208 180.506 100.793 182.583H69.207C71.2792 180.506 73.7407 178.857 76.4506 177.732C79.1606 176.607 82.0658 176.027 85 176.026Z"
            fill="rgba(250, 250, 250, 1)"
          ></path>
          <path
            d="M106 208H64.0001C62.9392 208 61.9218 208.421 61.1716 209.172C60.4215 209.922 60.0001 210.939 60.0001 212V230H63.0001V212C63.0001 211.735 63.1054 211.48 63.293 211.293C63.4805 211.105 63.7348 211 64.0001 211H106C106.265 211 106.52 211.105 106.707 211.293C106.895 211.48 107 211.735 107 212V230H110V212C110 210.939 109.579 209.922 108.828 209.172C108.078 208.421 107.061 208 106 208Z"
            fill="rgba(250, 250, 250, 1)"
          ></path>
          <path
            d="M34 0V43.383C33.9992 43.6493 34.104 43.905 34.2914 44.0942C34.4789 44.2833 34.7337 44.3904 35 44.392H135C135.266 44.3904 135.521 44.2833 135.709 44.0942C135.896 43.905 136.001 43.6493 136 43.383V0H139V43.383C139.004 44.4485 138.586 45.4721 137.836 46.2288C137.085 46.9855 136.065 47.4132 135 47.418H104.828C102.459 50.4061 99.4446 52.82 96.0111 54.4794C92.5776 56.1387 88.8134 57.0006 85 57.0006C81.1865 57.0006 77.4224 56.1387 73.9889 54.4794C70.5554 52.82 67.5413 50.4061 65.172 47.418H35C33.9345 47.4132 32.9146 46.9855 32.1644 46.2288C31.4143 45.4721 30.9955 44.4485 31 43.383V0H34ZM85 53.974C87.9342 53.9728 90.8394 53.393 93.5493 52.2679C96.2592 51.1428 98.7207 49.4944 100.793 47.417H69.207C71.2791 49.4945 73.7406 51.1429 76.4506 52.2681C79.1605 53.3932 82.0657 53.9729 85 53.974Z"
            fill="rgba(250, 250, 250, 1)"
          ></path>
          <path
            d="M106 22H64C62.9391 22 61.9217 21.5786 61.1716 20.8284C60.4214 20.0783 60 19.0609 60 18V0H63V18C63 18.2652 63.1054 18.5196 63.2929 18.7071C63.4804 18.8946 63.7348 19 64 19H106C106.265 19 106.52 18.8946 106.707 18.7071C106.895 18.5196 107 18.2652 107 18V0H110V18C110 19.0609 109.579 20.0783 108.828 20.8284C108.078 21.5786 107.061 22 106 22Z"
            fill="rgba(250, 250, 250, 1)"
          ></path>
          <path
            d="M170 114H107.444C107.064 108.306 104.534 102.97 100.367 99.0719C96.1993 95.1737 90.7063 93.0049 85 93.0049C79.2937 93.0049 73.8007 95.1737 69.6334 99.0719C65.4662 102.97 62.9363 108.306 62.556 114H0V117H62.556C62.9363 122.694 65.4662 128.03 69.6334 131.928C73.8007 135.826 79.2937 137.995 85 137.995C90.7063 137.995 96.1993 135.826 100.367 131.928C104.534 128.03 107.064 122.694 107.444 117H170V114ZM85 96C89.908 96.0076 94.6329 97.8645 98.2329 101.201C101.833 104.537 104.043 109.107 104.424 114H65.576C65.9566 109.107 68.1671 104.537 71.7671 101.201C75.3671 97.8645 80.092 96.0076 85 96ZM85 135C80.092 134.992 75.3671 133.135 71.7671 129.799C68.1671 126.463 65.9566 121.893 65.576 117H104.424C104.043 121.893 101.833 126.463 98.2329 129.799C94.6329 133.135 89.908 134.992 85 135Z"
            fill="rgba(250, 250, 250, 1)"
          ></path>
        </svg>
        <div title="Kiper" className="gk"><span className="inline-block px-2 py-1 text-xs text-white">GK</span></div>
        <div title="Bek Kanan" className="rb"><span className="inline-block px-2 py-1 text-xs text-white">RB</span></div>
        <div title="Bek Tengah" className="cb"><span className="inline-block px-2 py-1 text-xs text-white">CB</span></div>
        <div title="Bek Kiri" className="lb"><span className="inline-block px-2 py-1 text-xs text-white">LB</span></div>
        <div title="Gelandang Bertahan Tengah" className="dm"><span className="inline-block px-2 py-1 text-xs text-white">DM</span></div>
        <div title="Gelandang Kanan" className="rm"><span className="inline-block px-2 py-1 text-xs text-white">RM</span></div>
        <div title="Gelandang Tengah" className="cm">
          <span className="inline-block px-2 py-1 text-xs text-white">CM</span>
        </div>
        
        <div title="Gelandang Kiri" className="lm">
          <span className="inline-block px-2 py-1 text-xs text-white">LM</span>
        </div>
        <div title="Sayap Kanan" className="rw"><span className="inline-block px-2 py-1 text-xs text-white">RW</span></div>
        <div title="Gelandang Serang Tengah" className="am">
          <span className="inline-block px-2 py-1 text-xs text-white">AM</span>
        </div>
        <div title="Sayap Kiri" className="lw">
          <span className="inline-block px-2 py-1 text-xs text-white">LW</span>
        </div>
        <div title="Penyerang" className="st">
          <span className="inline-block px-2 py-1 text-xs text-white">ST</span>
        </div>
      </section>

      <div>
        <section className="flex relative w-full h-[500px] bg-[#01935c] css-1crh5uh-LineupMapContainer eoc95b0">
          <div className="absolute top-[36%] left-0 -translate-x-16 -rotate-90 css-1539ek9-GoalContainer eoc95b1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="lineup_1_214x118"
              width="276"
              height="154"
              viewBox="0 0 316 174"
            >
              <g
                id="Group_4486"
                fill="rgba(13, 159, 104, 1.0)"
                data-name="Group 4486"
                transform="translate(84.168)"
              >
                <path
                  id="Path_2174"
                  d="M57 0h5.907v50.136a5.92 5.92 0 0 0 5.907 5.9H192.85a5.92 5.92 0 0 0 5.907-5.9V0h5.907v50.136a11.84 11.84 0 0 1-11.813 11.8H68.813A11.84 11.84 0 0 1 57 50.136z"
                  className="cls-1"
                  data-name="Path 2174"
                  transform="translate(-57)"
                ></path>
              </g>
              <path
                id="Path_2175"
                fill="rgba(13, 159, 104, 1.0)"
                d="M11.813 150.407h90.813a76.778 76.778 0 0 0 110.748 0h90.813A11.839 11.839 0 0 0 316 138.61V0h-5.906v138.61a5.92 5.92 0 0 1-5.907 5.9H11.813a5.92 5.92 0 0 1-5.907-5.9V0H0v138.61a11.84 11.84 0 0 0 11.813 11.797zm193 0a70.761 70.761 0 0 1-93.619 0z"
                className="cls-1"
                data-name="Path 2175"
              ></path>
            </svg>
          </div>
          <div className="gtengah absolute left-[50%] h-full w-[6px]  bg-[#0d9f68] opacity-100 css-1xbh153-MiddleOfField eoc95b2"></div>
          <div className="absolute top-[36%] right-0 translate-x-16 rotate-90 css-1y1f56-GoalContainer eoc95b1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="lineup_1_214x118"
              width="276"
              height="154"
              viewBox="0 0 316 174"
            >
              <g
                id="Group_4486"
                fill="rgba(13, 159, 104, 1.0)"
                data-name="Group 4486"
                transform="translate(84.168)"
              >
                <path
                  id="Path_2174"
                  d="M57 0h5.907v50.136a5.92 5.92 0 0 0 5.907 5.9H192.85a5.92 5.92 0 0 0 5.907-5.9V0h5.907v50.136a11.84 11.84 0 0 1-11.813 11.8H68.813A11.84 11.84 0 0 1 57 50.136z"
                  className="cls-1"
                  data-name="Path 2174"
                  transform="translate(-57)"
                ></path>
              </g>
              <path
                id="Path_2175"
                fill="rgba(13, 159, 104, 1.0)"
                d="M11.813 150.407h90.813a76.778 76.778 0 0 0 110.748 0h90.813A11.839 11.839 0 0 0 316 138.61V0h-5.906v138.61a5.92 5.92 0 0 1-5.907 5.9H11.813a5.92 5.92 0 0 1-5.907-5.9V0H0v138.61a11.84 11.84 0 0 0 11.813 11.797zm193 0a70.761 70.761 0 0 1-93.619 0z"
                className="cls-1"
                data-name="Path 2175"
              ></path>
            </svg>
          </div>
          <div className="relative w-full h-full css-8ex4qq-TeamContainer ej1i4971">
            <div className="absolute flex top-[37.5%] left-[0.4%] h-[25%] w-[19.2%] justify-center items-center css-1rq3yte-PlayerContainer ej1i4970">
              <a href="/id/matches/athletic-club-vs-real-madrid/2dil23?player=800882#4205639">
                <div className="flex flex-col items-center text-[15px] pt-[27px]">
                  <div className="relative css-1w3irai-PlayerHeadContainer e181j9b83">
                    <div
                      className="playerIcon PlayerIcon css-b5axoj-PlayerIconCSS e1bzmajh0"
                      width="44"
                      height="44"
                    >
                      <Image src={lunin} className="w-10 h-10 rounded-full" alt="" />
                    </div>
                    {/* subs */}
                    <div className="absolute flex bottom-[34px] right-[32px] flex-col items-center css-xf9ljh-TopLeft ek2uae19">
                      <div className="flex flex-col items-center css-1j9o5tz-SubInOutContainer ek2uae18">
                        <span className="text-[12px] leading-[14px] text-white font-semibold css-1lptc2q-SubText ek2uae17">
                          81'
                        </span>
                        <div className="badgeContainer  css-1qh57t7-BadgeContainer ek2uae110">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.00016 0.16667C7.54442 0.175853 9.02283 0.793384 10.1148 1.88536C11.2068 2.97734 11.8243 4.45574 11.8335 6C11.8226 7.54519 11.2034 9.02388 10.1099 10.1157C9.01652 11.2076 7.53694 11.8247 5.99174 11.8333C4.44857 11.8231 2.97164 11.205 1.88122 10.113C0.790805 9.02101 0.174813 7.54318 0.16683 6C0.175845 4.45569 0.79332 2.97719 1.88533 1.88518C2.97735 0.793165 4.45585 0.175686 6.00016 0.16667ZM2.74646 6C2.74505 6.08586 2.76248 6.17099 2.79753 6.24938C2.83258 6.32777 2.8844 6.39752 2.94933 6.45371L5.08822 8.55695C5.19097 8.65642 5.32892 8.71118 5.47192 8.70926C5.54045 8.71086 5.60859 8.69854 5.67222 8.67305C5.73585 8.64755 5.79365 8.60942 5.84212 8.56095C5.8906 8.51248 5.92873 8.45468 5.95422 8.39105C5.97972 8.32742 5.99204 8.25928 5.99044 8.19075C5.98922 8.1196 5.9736 8.04944 5.94452 7.9845C5.91545 7.91956 5.87352 7.86118 5.82127 7.81288L5.06553 7.07982L4.35257 6.5101L5.64887 6.56648L8.7185 6.56648C8.79227 6.5683 8.86562 6.55482 8.93393 6.5269C9.00224 6.49897 9.06403 6.45722 9.11541 6.40426C9.1668 6.35129 9.20666 6.28825 9.2325 6.21913C9.25833 6.15 9.26958 6.07628 9.26553 6.0026C9.26909 5.92903 9.25751 5.85552 9.2315 5.78661C9.20549 5.7177 9.16561 5.65487 9.11432 5.602C9.06304 5.54914 9.00144 5.50737 8.93336 5.47928C8.86527 5.45119 8.79214 5.43738 8.7185 5.43871L5.65081 5.43871L4.35451 5.50352L5.05905 4.92861L5.81998 4.2014C5.87382 4.15313 5.91676 4.09395 5.94593 4.02778C5.9751 3.96162 5.98983 3.89 5.98914 3.81769C5.99074 3.74916 5.97842 3.68102 5.95293 3.61739C5.92743 3.55376 5.8893 3.49596 5.84083 3.44749C5.79236 3.39902 5.73456 3.36088 5.67093 3.33539C5.6073 3.30989 5.53915 3.29757 5.47063 3.29917C5.32812 3.29987 5.19111 3.35426 5.08692 3.45149L2.94803 5.55473C2.88426 5.61065 2.8333 5.67966 2.79863 5.75706C2.76395 5.83446 2.74638 5.91844 2.74711 6.00325L2.74646 6Z"
                              fill="#e55e5b"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* rating */}
                    <div className="absolute left-[27px] bottom-[34px] css-kdfokk-TopRight ek2uae16">
                      <div className="playerRating">
                        <span>7,7</span>
                      </div>
                    </div>
                    {/* card */}
                    <div className="flex absolute bottom-[13px] right-[36px] ml-[-9px] css-rwtqlg-MiddleLeft ek2uae12">
                      <div className="badgeContainer css-1qh57t7-BadgeContainer ek2uae110">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_800_11560)">
                            <path
                              d="M9.5459 0.848389H4.45499C3.40063 0.848389 2.5459 1.70312 2.5459 2.75748V11.2421C2.5459 12.2965 3.40063 13.1512 4.45499 13.1512H9.5459C10.6003 13.1512 11.455 12.2965 11.455 11.2421V2.75748C11.455 1.70312 10.6003 0.848389 9.5459 0.848389Z"
                              fill="#fece2f"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_800_11560">
                              <rect
                                width="14"
                                height="14"
                                fill="white"
                                stroke="none"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="flex absolute bottom-[13px] left-[36px] css-hsyld3-MiddleRight ek2uae15"></div>
                    {/* assist */}
                    <div className="absolute bottom-[-8px] right-[32px] flex flex-row justify-start items-center  css-1n4fb28-BottomLeft ek2uae10">
                      <div className="badgeContainer  css-1qh57t7-BadgeContainer ek2uae110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 14 14"
                        >
                          <ellipse
                            cx="7"
                            cy="7"
                            rx="7"
                            ry="7"
                            fill="transparent"
                          ></ellipse>
                          <g id="ic_assist" transform="translate(0 0)">
                            <path
                              id="Path_88"
                              fill="var(--MFFullscreenColorScheme-eventIconColor)"
                              fill-rule="evenodd"
                              d="M12.608 5.7c-.175.1-.377.209-.6.337-.156.09-.322.188-.493.3-.806.524-6.651 4.113-7.836 4.793s-3.035.929-3.565.016 1.029-1.952 1.948-3.055C3.11 6.833 4.48 5.461 4.48 5.461c-.088-.426.332-.712.494-.805a.607.607 0 0 1 .06-.03c-.117-.5.631-.929.631-.929l1.147-2.518a.231.231 0 0 1 .094-.105.236.236 0 0 1 .208-.013l1.024.424c.673.283-.769 1.89-.465 1.962a1.67 1.67 0 0 0 1.043-.273 2.826 2.826 0 0 0 .735-.614c.48-.56-.03-1.38.249-1.543.1-.054.287-.034.642.095 1.393.535 2.192 2.211 2.776 3.254.402.709.121.973-.51 1.334zm-8.018.693a.085.085 0 0 0-.075.022l-.631.62a.079.079 0 0 0 .04.135l3.227.669a.09.09 0 0 0 .058-.009l.981-.563a.081.081 0 0 0-.02-.15zm5.558-.418l-4.407-.844a.089.089 0 0 0-.075.023l-.628.618a.081.081 0 0 0 .041.137l3.99.807a.089.089 0 0 0 .058-.009l1.041-.581a.082.082 0 0 0-.02-.151zM3.807 12.1a.083.083 0 0 1-.039.1l-.734.422a.082.082 0 0 1-.1-.016l-.546-.579a.083.083 0 0 1-.016-.063 5.312 5.312 0 0 0 1.3-.462zm1.668-.92a.083.083 0 0 1-.039.1l-.736.42a.082.082 0 0 1-.1-.016l-.41-.484c.3-.177.693-.415 1.15-.691zm5.687-3.4a.084.084 0 0 1-.039.1l-.735.422a.082.082 0 0 1-.1-.016l-.488-.5c.441-.27.839-.516 1.158-.716zM12.5 6.132c.1-.052.184-.1.268-.154L12.9 5.9l.222.754a.084.084 0 0 1-.039.1l-.734.422a.082.082 0 0 1-.1-.016L11.7 6.6c.144-.093.294-.182.466-.281.118-.068.224-.129.334-.187z"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    {/* goal */}
                    <div className="absolute bottom-[-8px] left-[33px] flex flex-row justify-start items-center css-oo57ed-BottomRight ek2uae11">
                      <div className="badgeContainer css-1qh57t7-BadgeContainer ek2uae110">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1030_9128)">
                            <circle cx="7" cy="7" r="5.25" fill="#fff"></circle>
                            <path
                              d="M8.88284 9.49699C8.72009 9.49699 8.55734 9.48591 8.39459 9.46958C8.34242 9.4595 8.29347 9.43694 8.25192 9.40382C8.21037 9.3707 8.17746 9.32802 8.156 9.27941C7.988 8.65524 7.82525 8.06374 7.66775 7.48858C7.6388 7.41343 7.63706 7.33052 7.66285 7.25423C7.68863 7.17794 7.74031 7.11308 7.80892 7.07091L9.17625 5.84591C9.2334 5.7961 9.30665 5.76865 9.38246 5.76865C9.45827 5.76865 9.53152 5.7961 9.58867 5.84591C10.0474 6.09633 10.4588 6.42503 10.8043 6.81716C10.8827 6.91412 10.9266 7.03436 10.9292 7.15899C10.932 7.84171 10.7287 8.50937 10.3458 9.07466C10.342 9.09048 10.3346 9.10523 10.3243 9.11782C10.253 9.2147 10.1577 9.29131 10.0478 9.34008C9.67045 9.44934 9.27911 9.50241 8.88634 9.49758L8.88284 9.49699Z"
                              fill="rgba(34, 34, 34, 1.0)"
                            ></path>
                            <path
                              d="M4.46584 8.17283C4.40038 8.17345 4.33693 8.15023 4.28734 8.10749C3.85925 7.84832 3.48656 7.50715 3.19067 7.10358C3.14231 7.03529 3.11586 6.95391 3.11484 6.87024C3.11458 6.23357 3.28305 5.60821 3.60309 5.05783C3.60723 5.03788 3.61894 5.02032 3.63575 5.00883C3.68407 4.96581 3.74151 4.93429 3.80375 4.91666C4.17914 4.77018 4.57855 4.69501 4.9815 4.69499C5.1061 4.68414 5.23141 4.68414 5.356 4.69499C5.42674 4.70258 5.49274 4.73415 5.54304 4.78445C5.59335 4.83475 5.62492 4.90076 5.6325 4.97149C5.72992 5.39499 5.83842 5.82899 5.94167 6.26299L6.02334 6.61299C6.03691 6.666 6.036 6.72167 6.02071 6.77421C6.00542 6.82674 5.97631 6.87421 5.93642 6.91166L4.67234 8.09699C4.64603 8.1233 4.61472 8.14409 4.58026 8.15811C4.5458 8.17214 4.50888 8.17912 4.47167 8.17866H4.46584V8.17283Z"
                              fill="rgba(34, 34, 34, 1.0)"
                            ></path>
                            <path
                              d="M6.99984 1.16699C5.84612 1.16699 4.7183 1.50911 3.75901 2.15009C2.79973 2.79106 2.05205 3.7021 1.61054 4.76801C1.16903 5.83391 1.05351 7.0068 1.27859 8.13835C1.50367 9.26991 2.05924 10.3093 2.87505 11.1251C3.69086 11.9409 4.73026 12.4965 5.86181 12.7216C6.99337 12.9467 8.16626 12.8311 9.23216 12.3896C10.2981 11.9481 11.2091 11.2004 11.8501 10.2412C12.4911 9.28186 12.8332 8.15405 12.8332 7.00033C12.8332 5.45323 12.2186 3.9695 11.1246 2.87554C10.0307 1.78157 8.54694 1.16699 6.99984 1.16699ZM7.07042 11.3304L7.03776 11.2137C7.02663 11.134 6.98701 11.0609 6.92622 11.008C6.86543 10.9552 6.78757 10.9261 6.70701 10.9262C6.03797 10.915 5.38769 10.7032 4.84034 10.3183C4.78464 10.2907 4.72343 10.2759 4.66126 10.2752C4.62301 10.2718 4.58447 10.2763 4.54804 10.2884C4.51162 10.3006 4.47808 10.3201 4.44951 10.3457L4.05342 10.7202C3.29755 10.1246 2.74097 9.31297 2.45775 8.39325C2.17453 7.47354 2.1781 6.48938 2.46798 5.57174C2.75785 4.6541 3.3203 3.84649 4.08047 3.25638C4.84063 2.66626 5.76248 2.32163 6.72334 2.26833L6.78167 2.47424C6.82056 2.58819 6.85303 2.70213 6.87909 2.81608C6.89714 2.869 6.92709 2.91708 6.96663 2.95662C7.00617 2.99616 7.05425 3.02611 7.10717 3.04416H7.15617C7.80616 3.14238 8.43738 3.33908 9.02809 3.62749C9.06957 3.65019 9.11697 3.65975 9.16401 3.65491C9.22873 3.65539 9.2924 3.63847 9.34834 3.60591L9.88034 3.23141C10.6579 3.82155 11.2341 4.63761 11.53 5.56787C11.826 6.49813 11.8271 7.49711 11.5333 8.42804C11.2396 9.35898 10.6652 10.1764 9.88898 10.7683C9.11273 11.3602 8.17249 11.6977 7.19701 11.7347L7.07042 11.3304Z"
                              fill="rgba(34, 34, 34, 1.0)"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_1030_9128">
                              <rect width="14" height="14" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="relative text-[14px] text-center text-white break-words font-semibold leading-[16px] max-w-full mt-[12px] py-[2px] h-[32px]  css-1xu0yj7-LineupPlayerText e181j9b82">
                    <span className="mr-[4px] inline-block text-white  css-50w9ch-Shirt eytjge26">
                      13
                    </span>
                    Lunin
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="relative w-full h-full css-8ex4qq-TeamContainer ej1i4971">
            <div className="css-1rim4bd-PlayerContainer ej1i4970">
              <a href="/id/matches/athletic-club-vs-real-madrid/2dil23?player=711231#4205639">
                <div className="css-2wfnb3-LineupPlayerContainer-applyMediumHover e181j9b84">
                  <div className="css-1w3irai-PlayerHeadContainer e181j9b83">
                    <div
                      className="PlayerIcon css-b5axoj-PlayerIconCSS e1bzmajh0"
                      width="44"
                      height="44"
                    >
                      <img
                        src="https://images.fotmob.com/image_resources/playerimages/711231.png"
                        className="Image PlayerImage"
                        alt=""
                        width="92%"
                        height="92%"
                        loading="lazy"
                      />
                    </div>
                    <div className="css-xf9ljh-TopLeft ek2uae19">
                      <div className="css-1j9o5tz-SubInOutContainer ek2uae18">
                        <span className="css-1lptc2q-SubText ek2uae17">58'</span>
                        <div className="css-1qh57t7-BadgeContainer ek2uae110">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.00016 0.16667C7.54442 0.175853 9.02283 0.793384 10.1148 1.88536C11.2068 2.97734 11.8243 4.45574 11.8335 6C11.8226 7.54519 11.2034 9.02388 10.1099 10.1157C9.01652 11.2076 7.53694 11.8247 5.99174 11.8333C4.44857 11.8231 2.97164 11.205 1.88122 10.113C0.790805 9.02101 0.174813 7.54318 0.16683 6C0.175845 4.45569 0.79332 2.97719 1.88533 1.88518C2.97735 0.793165 4.45585 0.175686 6.00016 0.16667ZM2.74646 6C2.74505 6.08586 2.76248 6.17099 2.79753 6.24938C2.83258 6.32777 2.8844 6.39752 2.94933 6.45371L5.08822 8.55695C5.19097 8.65642 5.32892 8.71118 5.47192 8.70926C5.54045 8.71086 5.60859 8.69854 5.67222 8.67305C5.73585 8.64755 5.79365 8.60942 5.84212 8.56095C5.8906 8.51248 5.92873 8.45468 5.95422 8.39105C5.97972 8.32742 5.99204 8.25928 5.99044 8.19075C5.98922 8.1196 5.9736 8.04944 5.94452 7.9845C5.91545 7.91956 5.87352 7.86118 5.82127 7.81288L5.06553 7.07982L4.35257 6.5101L5.64887 6.56648L8.7185 6.56648C8.79227 6.5683 8.86562 6.55482 8.93393 6.5269C9.00224 6.49897 9.06403 6.45722 9.11541 6.40426C9.1668 6.35129 9.20666 6.28825 9.2325 6.21913C9.25833 6.15 9.26958 6.07628 9.26553 6.0026C9.26909 5.92903 9.25751 5.85552 9.2315 5.78661C9.20549 5.7177 9.16561 5.65487 9.11432 5.602C9.06304 5.54914 9.00144 5.50737 8.93336 5.47928C8.86527 5.45119 8.79214 5.43738 8.7185 5.43871L5.65081 5.43871L4.35451 5.50352L5.05905 4.92861L5.81998 4.2014C5.87382 4.15313 5.91676 4.09395 5.94593 4.02778C5.9751 3.96162 5.98983 3.89 5.98914 3.81769C5.99074 3.74916 5.97842 3.68102 5.95293 3.61739C5.92743 3.55376 5.8893 3.49596 5.84083 3.44749C5.79236 3.39902 5.73456 3.36088 5.67093 3.33539C5.6073 3.30989 5.53915 3.29757 5.47063 3.29917C5.32812 3.29987 5.19111 3.35426 5.08692 3.45149L2.94803 5.55473C2.88426 5.61065 2.8333 5.67966 2.79863 5.75706C2.76395 5.83446 2.74638 5.91844 2.74711 6.00325L2.74646 6Z"
                              fill="#e55e5b"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="css-kdfokk-TopRight ek2uae16">
                      <div className="css-fk320-PlayerRatingStyled e1e3pkqa0">
                        <span>6,7</span>
                      </div>
                    </div>
                    <div className="css-rwtqlg-MiddleLeft ek2uae12"></div>
                    <div className="css-hsyld3-MiddleRight ek2uae15"></div>
                    <div className="css-1n4fb28-BottomLeft ek2uae10"></div>
                    <div className="css-oo57ed-BottomRight ek2uae11"></div>
                  </div>
                  <span className="css-1xu0yj7-LineupPlayerText e181j9b82">
                    <span className="css-50w9ch-Shirt eytjge26">12</span>Guruzeta
                  </span>
                </div>
              </a>
            </div>
            <div className="css-1ms3kc0-PlayerContainer ej1i4970">
              <a href="/id/matches/athletic-club-vs-real-madrid/2dil23?player=574629#4205639">
                <div className="css-2wfnb3-LineupPlayerContainer-applyMediumHover e181j9b84">
                  <div className="css-1w3irai-PlayerHeadContainer e181j9b83">
                    <div
                      className="PlayerIcon css-b5axoj-PlayerIconCSS e1bzmajh0"
                      width="44"
                      height="44"
                    >
                      <img
                        src="https://images.fotmob.com/image_resources/playerimages/574629.png"
                        className="Image PlayerImage"
                        alt=""
                        width="92%"
                        height="92%"
                        loading="lazy"
                      />
                    </div>
                    <div className="css-xf9ljh-TopLeft ek2uae19"></div>
                    <div className="css-kdfokk-TopRight ek2uae16">
                      <div className="css-1kqwceh-PlayerRatingStyled e1e3pkqa0">
                        <span>7,0</span>
                      </div>
                    </div>
                    <div className="css-rwtqlg-MiddleLeft ek2uae12"></div>
                    <div className="css-hsyld3-MiddleRight ek2uae15"></div>
                    <div className="css-1n4fb28-BottomLeft ek2uae10"></div>
                    <div className="css-oo57ed-BottomRight ek2uae11"></div>
                  </div>
                  <span className="css-1xu0yj7-LineupPlayerText e181j9b82">
                    <span className="css-50w9ch-Shirt eytjge26">7</span>Berenguer
                  </span>
                </div>
              </a>
            </div>
            <div className="css-1shiftr-PlayerContainer ej1i4970">
              <a href="/id/matches/athletic-club-vs-real-madrid/2dil23?player=950545#4205639">
                <div className="css-2wfnb3-LineupPlayerContainer-applyMediumHover e181j9b84">
                  <div className="css-1w3irai-PlayerHeadContainer e181j9b83">
                    <div
                      className="PlayerIcon css-b5axoj-PlayerIconCSS e1bzmajh0"
                      width="44"
                      height="44"
                    >
                      <img
                        src="https://images.fotmob.com/image_resources/playerimages/950545.png"
                        className="Image PlayerImage"
                        alt=""
                        width="92%"
                        height="92%"
                        loading="lazy"
                      />
                    </div>
                    <div className="css-xf9ljh-TopLeft ek2uae19">
                      <div className="css-1j9o5tz-SubInOutContainer ek2uae18">
                        <span className="css-1lptc2q-SubText ek2uae17">76'</span>
                        <div className="css-1qh57t7-BadgeContainer ek2uae110">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.00016 0.16667C7.54442 0.175853 9.02283 0.793384 10.1148 1.88536C11.2068 2.97734 11.8243 4.45574 11.8335 6C11.8226 7.54519 11.2034 9.02388 10.1099 10.1157C9.01652 11.2076 7.53694 11.8247 5.99174 11.8333C4.44857 11.8231 2.97164 11.205 1.88122 10.113C0.790805 9.02101 0.174813 7.54318 0.16683 6C0.175845 4.45569 0.79332 2.97719 1.88533 1.88518C2.97735 0.793165 4.45585 0.175686 6.00016 0.16667ZM2.74646 6C2.74505 6.08586 2.76248 6.17099 2.79753 6.24938C2.83258 6.32777 2.8844 6.39752 2.94933 6.45371L5.08822 8.55695C5.19097 8.65642 5.32892 8.71118 5.47192 8.70926C5.54045 8.71086 5.60859 8.69854 5.67222 8.67305C5.73585 8.64755 5.79365 8.60942 5.84212 8.56095C5.8906 8.51248 5.92873 8.45468 5.95422 8.39105C5.97972 8.32742 5.99204 8.25928 5.99044 8.19075C5.98922 8.1196 5.9736 8.04944 5.94452 7.9845C5.91545 7.91956 5.87352 7.86118 5.82127 7.81288L5.06553 7.07982L4.35257 6.5101L5.64887 6.56648L8.7185 6.56648C8.79227 6.5683 8.86562 6.55482 8.93393 6.5269C9.00224 6.49897 9.06403 6.45722 9.11541 6.40426C9.1668 6.35129 9.20666 6.28825 9.2325 6.21913C9.25833 6.15 9.26958 6.07628 9.26553 6.0026C9.26909 5.92903 9.25751 5.85552 9.2315 5.78661C9.20549 5.7177 9.16561 5.65487 9.11432 5.602C9.06304 5.54914 9.00144 5.50737 8.93336 5.47928C8.86527 5.45119 8.79214 5.43738 8.7185 5.43871L5.65081 5.43871L4.35451 5.50352L5.05905 4.92861L5.81998 4.2014C5.87382 4.15313 5.91676 4.09395 5.94593 4.02778C5.9751 3.96162 5.98983 3.89 5.98914 3.81769C5.99074 3.74916 5.97842 3.68102 5.95293 3.61739C5.92743 3.55376 5.8893 3.49596 5.84083 3.44749C5.79236 3.39902 5.73456 3.36088 5.67093 3.33539C5.6073 3.30989 5.53915 3.29757 5.47063 3.29917C5.32812 3.29987 5.19111 3.35426 5.08692 3.45149L2.94803 5.55473C2.88426 5.61065 2.8333 5.67966 2.79863 5.75706C2.76395 5.83446 2.74638 5.91844 2.74711 6.00325L2.74646 6Z"
                              fill="#e55e5b"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="css-kdfokk-TopRight ek2uae16">
                      <div className="css-1kqwceh-PlayerRatingStyled e1e3pkqa0">
                        <span>7,1</span>
                      </div>
                    </div>
                    <div className="css-rwtqlg-MiddleLeft ek2uae12"></div>
                    <div className="css-hsyld3-MiddleRight ek2uae15"></div>
                    <div className="css-1n4fb28-BottomLeft ek2uae10"></div>
                    <div className="css-oo57ed-BottomRight ek2uae11"></div>
                  </div>
                  <span className="css-1xu0yj7-LineupPlayerText e181j9b82">
                    <span className="css-50w9ch-Shirt eytjge26">8</span>Sancet
                  </span>
                </div>
              </a>
            </div>
            <div className="css-aqgwhy-PlayerContainer ej1i4970">
              <a href="/id/matches/athletic-club-vs-real-madrid/2dil23?player=604105#4205639">
                <div className="css-2wfnb3-LineupPlayerContainer-applyMediumHover e181j9b84">
                  <div className="css-1w3irai-PlayerHeadContainer e181j9b83">
                    <div
                      className="PlayerIcon css-b5axoj-PlayerIconCSS e1bzmajh0"
                      width="44"
                      height="44"
                    >
                      <img
                        src="https://images.fotmob.com/image_resources/playerimages/604105.png"
                        className="Image PlayerImage"
                        alt=""
                        width="92%"
                        height="92%"
                        loading="lazy"
                      />
                    </div>
                    <div className="css-xf9ljh-TopLeft ek2uae19"></div>
                    <div className="css-kdfokk-TopRight ek2uae16">
                      <div className="css-fk320-PlayerRatingStyled e1e3pkqa0">
                        <span>6,1</span>
                      </div>
                    </div>
                    <div className="css-rwtqlg-MiddleLeft ek2uae12"></div>
                    <div className="css-hsyld3-MiddleRight ek2uae15"></div>
                    <div className="css-1n4fb28-BottomLeft ek2uae10"></div>
                    <div className="css-oo57ed-BottomRight ek2uae11"></div>
                  </div>
                  <span className="css-1xu0yj7-LineupPlayerText e181j9b82">
                    <span className="css-50w9ch-Shirt eytjge26">9</span>Williams
                  </span>
                </div>
              </a>
            </div>
            <div className="css-ajbj9b-PlayerContainer ej1i4970">
              <a href="/id/matches/athletic-club-vs-real-madrid/2dil23?player=1229176#4205639">
                <div className="css-2wfnb3-LineupPlayerContainer-applyMediumHover e181j9b84">
                  <div className="css-1w3irai-PlayerHeadContainer e181j9b83">
                    <div
                      className="PlayerIcon css-b5axoj-PlayerIconCSS e1bzmajh0"
                      width="44"
                      height="44"
                    >
                      <img
                        src="https://images.fotmob.com/image_resources/playerimages/1229176.png"
                        className="Image PlayerImage"
                        alt=""
                        width="92%"
                        height="92%"
                        loading="lazy"
                      />
                    </div>
                    <div className="css-xf9ljh-TopLeft ek2uae19">
                      <div className="css-1j9o5tz-SubInOutContainer ek2uae18">
                        <span className="css-1lptc2q-SubText ek2uae17">57'</span>
                        <div className="css-1qh57t7-BadgeContainer ek2uae110">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.00016 0.16667C7.54442 0.175853 9.02283 0.793384 10.1148 1.88536C11.2068 2.97734 11.8243 4.45574 11.8335 6C11.8226 7.54519 11.2034 9.02388 10.1099 10.1157C9.01652 11.2076 7.53694 11.8247 5.99174 11.8333C4.44857 11.8231 2.97164 11.205 1.88122 10.113C0.790805 9.02101 0.174813 7.54318 0.16683 6C0.175845 4.45569 0.79332 2.97719 1.88533 1.88518C2.97735 0.793165 4.45585 0.175686 6.00016 0.16667ZM2.74646 6C2.74505 6.08586 2.76248 6.17099 2.79753 6.24938C2.83258 6.32777 2.8844 6.39752 2.94933 6.45371L5.08822 8.55695C5.19097 8.65642 5.32892 8.71118 5.47192 8.70926C5.54045 8.71086 5.60859 8.69854 5.67222 8.67305C5.73585 8.64755 5.79365 8.60942 5.84212 8.56095C5.8906 8.51248 5.92873 8.45468 5.95422 8.39105C5.97972 8.32742 5.99204 8.25928 5.99044 8.19075C5.98922 8.1196 5.9736 8.04944 5.94452 7.9845C5.91545 7.91956 5.87352 7.86118 5.82127 7.81288L5.06553 7.07982L4.35257 6.5101L5.64887 6.56648L8.7185 6.56648C8.79227 6.5683 8.86562 6.55482 8.93393 6.5269C9.00224 6.49897 9.06403 6.45722 9.11541 6.40426C9.1668 6.35129 9.20666 6.28825 9.2325 6.21913C9.25833 6.15 9.26958 6.07628 9.26553 6.0026C9.26909 5.92903 9.25751 5.85552 9.2315 5.78661C9.20549 5.7177 9.16561 5.65487 9.11432 5.602C9.06304 5.54914 9.00144 5.50737 8.93336 5.47928C8.86527 5.45119 8.79214 5.43738 8.7185 5.43871L5.65081 5.43871L4.35451 5.50352L5.05905 4.92861L5.81998 4.2014C5.87382 4.15313 5.91676 4.09395 5.94593 4.02778C5.9751 3.96162 5.98983 3.89 5.98914 3.81769C5.99074 3.74916 5.97842 3.68102 5.95293 3.61739C5.92743 3.55376 5.8893 3.49596 5.84083 3.44749C5.79236 3.39902 5.73456 3.36088 5.67093 3.33539C5.6073 3.30989 5.53915 3.29757 5.47063 3.29917C5.32812 3.29987 5.19111 3.35426 5.08692 3.45149L2.94803 5.55473C2.88426 5.61065 2.8333 5.67966 2.79863 5.75706C2.76395 5.83446 2.74638 5.91844 2.74711 6.00325L2.74646 6Z"
                              fill="#e55e5b"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="css-kdfokk-TopRight ek2uae16">
                      <div className="css-1kqwceh-PlayerRatingStyled e1e3pkqa0">
                        <span>7,7</span>
                      </div>
                    </div>
                    <div className="css-rwtqlg-MiddleLeft ek2uae12"></div>
                    <div className="css-hsyld3-MiddleRight ek2uae15"></div>
                    <div className="css-1n4fb28-BottomLeft ek2uae10"></div>
                    <div className="css-oo57ed-BottomRight ek2uae11"></div>
                  </div>
                  <span className="css-1xu0yj7-LineupPlayerText e181j9b82">
                    <span className="css-50w9ch-Shirt eytjge26">24</span>Prados
                  </span>
                </div>
              </a>
            </div>
            <div className="css-856qyn-PlayerContainer ej1i4970">
              <a href="/id/matches/athletic-club-vs-real-madrid/2dil23?player=616545#4205639">
                <div className="css-2wfnb3-LineupPlayerContainer-applyMediumHover e181j9b84">
                  <div className="css-1w3irai-PlayerHeadContainer e181j9b83">
                    <div
                      className="PlayerIcon css-b5axoj-PlayerIconCSS e1bzmajh0"
                      width="44"
                      height="44"
                    >
                      <img
                        src="https://images.fotmob.com/image_resources/playerimages/616545.png"
                        className="Image PlayerImage"
                        alt=""
                        width="92%"
                        height="92%"
                        loading="lazy"
                      />
                    </div>
                    <div className="css-xf9ljh-TopLeft ek2uae19"></div>
                    <div className="css-kdfokk-TopRight ek2uae16">
                      <div className="css-fk320-PlayerRatingStyled e1e3pkqa0">
                        <span>6,5</span>
                      </div>
                    </div>
                    <div className="css-rwtqlg-MiddleLeft ek2uae12"></div>
                    <div className="css-hsyld3-MiddleRight ek2uae15"></div>
                    <div className="css-1n4fb28-BottomLeft ek2uae10"></div>
                    <div className="css-oo57ed-BottomRight ek2uae11"></div>
                  </div>
                  <span className="css-1xu0yj7-LineupPlayerText e181j9b82">
                    <span className="css-50w9ch-Shirt eytjge26">6</span>Vesga
                  </span>
                </div>
              </a>
            </div>
            <div className="css-10u8awp-PlayerContainer ej1i4970">
              <a href="/id/matches/athletic-club-vs-real-madrid/2dil23?player=616544#4205639">
                <div className="css-2wfnb3-LineupPlayerContainer-applyMediumHover e181j9b84">
                  <div className="css-1w3irai-PlayerHeadContainer e181j9b83">
                    <div
                      className="PlayerIcon css-b5axoj-PlayerIconCSS e1bzmajh0"
                      width="44"
                      height="44"
                    >
                      <img
                        src="https://images.fotmob.com/image_resources/playerimages/616544.png"
                        className="Image PlayerImage"
                        alt=""
                        width="92%"
                        height="92%"
                        loading="lazy"
                      />
                    </div>
                    <div className="css-xf9ljh-TopLeft ek2uae19"></div>
                    <div className="css-kdfokk-TopRight ek2uae16">
                      <div className="css-fk320-PlayerRatingStyled e1e3pkqa0">
                        <span>6,2</span>
                      </div>
                    </div>
                    <div className="css-rwtqlg-MiddleLeft ek2uae12"></div>
                    <div className="css-hsyld3-MiddleRight ek2uae15"></div>
                    <div className="css-1n4fb28-BottomLeft ek2uae10"></div>
                    <div className="css-oo57ed-BottomRight ek2uae11"></div>
                  </div>
                  <span className="css-1xu0yj7-LineupPlayerText e181j9b82">
                    <span className="css-50w9ch-Shirt eytjge26">15</span>Lekue
                  </span>
                </div>
              </a>
            </div>
            <div className="css-15dmyfy-PlayerContainer ej1i4970">
              <a href="/id/matches/athletic-club-vs-real-madrid/2dil23?player=1191407#4205639">
                <div className="css-2wfnb3-LineupPlayerContainer-applyMediumHover e181j9b84">
                  <div className="css-1w3irai-PlayerHeadContainer e181j9b83">
                    <div
                      className="PlayerIcon css-b5axoj-PlayerIconCSS e1bzmajh0"
                      width="44"
                      height="44"
                    >
                      <img
                        src="https://images.fotmob.com/image_resources/playerimages/1191407.png"
                        className="Image PlayerImage"
                        alt=""
                        width="92%"
                        height="92%"
                        loading="lazy"
                      />
                    </div>
                    <div className="css-xf9ljh-TopLeft ek2uae19"></div>
                    <div className="css-kdfokk-TopRight ek2uae16">
                      <div className="css-fk320-PlayerRatingStyled e1e3pkqa0">
                        <span>6,0</span>
                      </div>
                    </div>
                    <div className="css-rwtqlg-MiddleLeft ek2uae12"></div>
                    <div className="css-hsyld3-MiddleRight ek2uae15"></div>
                    <div className="css-1n4fb28-BottomLeft ek2uae10"></div>
                    <div className="css-oo57ed-BottomRight ek2uae11"></div>
                  </div>
                  <span className="css-1xu0yj7-LineupPlayerText e181j9b82">
                    <span className="css-50w9ch-Shirt eytjge26">4</span>Paredes
                  </span>
                </div>
              </a>
            </div>
            <div className="css-f7h5lw-PlayerContainer ej1i4970">
              <a href="/id/matches/athletic-club-vs-real-madrid/2dil23?player=639450#4205639">
                <div className="css-2wfnb3-LineupPlayerContainer-applyMediumHover e181j9b84">
                  <div className="css-1w3irai-PlayerHeadContainer e181j9b83">
                    <div
                      className="PlayerIcon css-b5axoj-PlayerIconCSS e1bzmajh0"
                      width="44"
                      height="44"
                    >
                      <img
                        src="https://images.fotmob.com/image_resources/playerimages/639450.png"
                        className="Image PlayerImage"
                        alt=""
                        width="92%"
                        height="92%"
                        loading="lazy"
                      />
                    </div>
                    <div className="css-xf9ljh-TopLeft ek2uae19">
                      <div className="css-1j9o5tz-SubInOutContainer ek2uae18">
                        <span className="css-1lptc2q-SubText ek2uae17">25'</span>
                        <div className="css-1qh57t7-BadgeContainer ek2uae110">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.00016 0.16667C7.54442 0.175853 9.02283 0.793384 10.1148 1.88536C11.2068 2.97734 11.8243 4.45574 11.8335 6C11.8226 7.54519 11.2034 9.02388 10.1099 10.1157C9.01652 11.2076 7.53694 11.8247 5.99174 11.8333C4.44857 11.8231 2.97164 11.205 1.88122 10.113C0.790805 9.02101 0.174813 7.54318 0.16683 6C0.175845 4.45569 0.79332 2.97719 1.88533 1.88518C2.97735 0.793165 4.45585 0.175686 6.00016 0.16667ZM2.74646 6C2.74505 6.08586 2.76248 6.17099 2.79753 6.24938C2.83258 6.32777 2.8844 6.39752 2.94933 6.45371L5.08822 8.55695C5.19097 8.65642 5.32892 8.71118 5.47192 8.70926C5.54045 8.71086 5.60859 8.69854 5.67222 8.67305C5.73585 8.64755 5.79365 8.60942 5.84212 8.56095C5.8906 8.51248 5.92873 8.45468 5.95422 8.39105C5.97972 8.32742 5.99204 8.25928 5.99044 8.19075C5.98922 8.1196 5.9736 8.04944 5.94452 7.9845C5.91545 7.91956 5.87352 7.86118 5.82127 7.81288L5.06553 7.07982L4.35257 6.5101L5.64887 6.56648L8.7185 6.56648C8.79227 6.5683 8.86562 6.55482 8.93393 6.5269C9.00224 6.49897 9.06403 6.45722 9.11541 6.40426C9.1668 6.35129 9.20666 6.28825 9.2325 6.21913C9.25833 6.15 9.26958 6.07628 9.26553 6.0026C9.26909 5.92903 9.25751 5.85552 9.2315 5.78661C9.20549 5.7177 9.16561 5.65487 9.11432 5.602C9.06304 5.54914 9.00144 5.50737 8.93336 5.47928C8.86527 5.45119 8.79214 5.43738 8.7185 5.43871L5.65081 5.43871L4.35451 5.50352L5.05905 4.92861L5.81998 4.2014C5.87382 4.15313 5.91676 4.09395 5.94593 4.02778C5.9751 3.96162 5.98983 3.89 5.98914 3.81769C5.99074 3.74916 5.97842 3.68102 5.95293 3.61739C5.92743 3.55376 5.8893 3.49596 5.84083 3.44749C5.79236 3.39902 5.73456 3.36088 5.67093 3.33539C5.6073 3.30989 5.53915 3.29757 5.47063 3.29917C5.32812 3.29987 5.19111 3.35426 5.08692 3.45149L2.94803 5.55473C2.88426 5.61065 2.8333 5.67966 2.79863 5.75706C2.76395 5.83446 2.74638 5.91844 2.74711 6.00325L2.74646 6Z"
                              fill="#e55e5b"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="css-kdfokk-TopRight ek2uae16">
                      <div className="css-fk320-PlayerRatingStyled e1e3pkqa0">
                        <span>6,0</span>
                      </div>
                    </div>
                    <div className="css-rwtqlg-MiddleLeft ek2uae12"></div>
                    <div className="css-hsyld3-MiddleRight ek2uae15"></div>
                    <div className="css-1n4fb28-BottomLeft ek2uae10"></div>
                    <div className="css-oo57ed-BottomRight ek2uae11"></div>
                  </div>
                  <span className="css-1xu0yj7-LineupPlayerText e181j9b82">
                    <span className="css-50w9ch-Shirt eytjge26">5</span>Álvarez
                  </span>
                </div>
              </a>
            </div>
            <div className="css-fblmwf-PlayerContainer ej1i4970">
              <a href="/id/matches/athletic-club-vs-real-madrid/2dil23?player=181297#4205639">
                <div className="css-2wfnb3-LineupPlayerContainer-applyMediumHover e181j9b84">
                  <div className="css-1w3irai-PlayerHeadContainer e181j9b83">
                    <div
                      className="PlayerIcon css-b5axoj-PlayerIconCSS e1bzmajh0"
                      width="44"
                      height="44"
                    >
                      <img
                        src="https://images.fotmob.com/image_resources/playerimages/181297.png"
                        className="Image PlayerImage"
                        alt=""
                        width="92%"
                        height="92%"
                        loading="lazy"
                      />
                    </div>
                    <div className="css-xf9ljh-TopLeft ek2uae19">
                      <div className="css-1j9o5tz-SubInOutContainer ek2uae18">
                        <span className="css-1lptc2q-SubText ek2uae17">57'</span>
                        <div className="css-1qh57t7-BadgeContainer ek2uae110">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.00016 0.16667C7.54442 0.175853 9.02283 0.793384 10.1148 1.88536C11.2068 2.97734 11.8243 4.45574 11.8335 6C11.8226 7.54519 11.2034 9.02388 10.1099 10.1157C9.01652 11.2076 7.53694 11.8247 5.99174 11.8333C4.44857 11.8231 2.97164 11.205 1.88122 10.113C0.790805 9.02101 0.174813 7.54318 0.16683 6C0.175845 4.45569 0.79332 2.97719 1.88533 1.88518C2.97735 0.793165 4.45585 0.175686 6.00016 0.16667ZM2.74646 6C2.74505 6.08586 2.76248 6.17099 2.79753 6.24938C2.83258 6.32777 2.8844 6.39752 2.94933 6.45371L5.08822 8.55695C5.19097 8.65642 5.32892 8.71118 5.47192 8.70926C5.54045 8.71086 5.60859 8.69854 5.67222 8.67305C5.73585 8.64755 5.79365 8.60942 5.84212 8.56095C5.8906 8.51248 5.92873 8.45468 5.95422 8.39105C5.97972 8.32742 5.99204 8.25928 5.99044 8.19075C5.98922 8.1196 5.9736 8.04944 5.94452 7.9845C5.91545 7.91956 5.87352 7.86118 5.82127 7.81288L5.06553 7.07982L4.35257 6.5101L5.64887 6.56648L8.7185 6.56648C8.79227 6.5683 8.86562 6.55482 8.93393 6.5269C9.00224 6.49897 9.06403 6.45722 9.11541 6.40426C9.1668 6.35129 9.20666 6.28825 9.2325 6.21913C9.25833 6.15 9.26958 6.07628 9.26553 6.0026C9.26909 5.92903 9.25751 5.85552 9.2315 5.78661C9.20549 5.7177 9.16561 5.65487 9.11432 5.602C9.06304 5.54914 9.00144 5.50737 8.93336 5.47928C8.86527 5.45119 8.79214 5.43738 8.7185 5.43871L5.65081 5.43871L4.35451 5.50352L5.05905 4.92861L5.81998 4.2014C5.87382 4.15313 5.91676 4.09395 5.94593 4.02778C5.9751 3.96162 5.98983 3.89 5.98914 3.81769C5.99074 3.74916 5.97842 3.68102 5.95293 3.61739C5.92743 3.55376 5.8893 3.49596 5.84083 3.44749C5.79236 3.39902 5.73456 3.36088 5.67093 3.33539C5.6073 3.30989 5.53915 3.29757 5.47063 3.29917C5.32812 3.29987 5.19111 3.35426 5.08692 3.45149L2.94803 5.55473C2.88426 5.61065 2.8333 5.67966 2.79863 5.75706C2.76395 5.83446 2.74638 5.91844 2.74711 6.00325L2.74646 6Z"
                              fill="#e55e5b"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="css-kdfokk-TopRight ek2uae16">
                      <div className="css-fk320-PlayerRatingStyled e1e3pkqa0">
                        <span>6,0</span>
                      </div>
                    </div>
                    <div className="css-rwtqlg-MiddleLeft ek2uae12"></div>
                    <div className="css-hsyld3-MiddleRight ek2uae15"></div>
                    <div className="css-1n4fb28-BottomLeft ek2uae10"></div>
                    <div className="css-oo57ed-BottomRight ek2uae11"></div>
                  </div>
                  <span className="css-1xu0yj7-LineupPlayerText e181j9b82">
                    <div className="css-4w241y-CaptaincyWrapper e181j9b80">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="15"
                          height="15"
                          rx="7.5"
                          fill="var(--Lineup-captainBackground)"
                        ></rect>
                        <path
                          d="M7.55609 11.22C5.25609 11.22 3.67609 9.67 3.67609 7.5C3.67609 5.33 5.25609 3.78 7.55609 3.78C9.73609 3.78 11.1561 4.85 11.3261 6.69H9.12609C8.98609 6.05 8.42609 5.63 7.56609 5.63C6.48609 5.63 5.84609 6.35 5.84609 7.5C5.84609 8.65 6.48609 9.37 7.56609 9.37C8.42609 9.37 8.98609 8.95 9.12609 8.31H11.3261C11.1561 10.15 9.73609 11.22 7.55609 11.22Z"
                          fill="var(--Lineup-captainText)"
                        ></path>
                      </svg>
                    </div>
                    <span className="css-50w9ch-Shirt eytjge26">18</span>de Marcos
                  </span>
                </div>
              </a>
            </div>
            <div className="css-11udzw1-PlayerContainer ej1i4970">
              <a href="/id/matches/athletic-club-vs-real-madrid/2dil23?player=1280020#4205639">
                <div className="css-2wfnb3-LineupPlayerContainer-applyMediumHover e181j9b84">
                  <div className="css-1w3irai-PlayerHeadContainer e181j9b83">
                    <div
                      className="PlayerIcon css-b5axoj-PlayerIconCSS e1bzmajh0"
                      width="44"
                      height="44"
                    >
                      <img
                        src="https://images.fotmob.com/image_resources/playerimages/1280020.png"
                        className="Image PlayerImage"
                        alt=""
                        width="92%"
                        height="92%"
                        loading="lazy"
                      />
                    </div>
                    <div className="css-xf9ljh-TopLeft ek2uae19"></div>
                    <div className="css-kdfokk-TopRight ek2uae16">
                      <div className="css-fk320-PlayerRatingStyled e1e3pkqa0">
                        <span>6,1</span>
                      </div>
                    </div>
                    <div className="css-rwtqlg-MiddleLeft ek2uae12"></div>
                    <div className="css-hsyld3-MiddleRight ek2uae15"></div>
                    <div className="css-1n4fb28-BottomLeft ek2uae10"></div>
                    <div className="css-oo57ed-BottomRight ek2uae11"></div>
                  </div>
                  <span className="css-1xu0yj7-LineupPlayerText e181j9b82">
                    <span className="css-50w9ch-Shirt eytjge26">13</span>
                    Agirrezabala
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
