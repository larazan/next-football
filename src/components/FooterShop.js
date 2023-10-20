import React from "react";
import Link from "next/link";
import Image from "next/image";

import payment1 from "@/assets/img/payment/payment1.svg";

export default function FooterShop() {
  return (
    <>
      <section class="mx-auto w-full padding-x padding-t">
        <footer class="bg-[#98c5e9] w-full">
          <div class="mx-auto w-11/12 py-4 md:py-8 flex flex-col md:flex-row space-y-3 md:justify-between items-center flex-wrap2 ">
            <div class="w-full md:w-8/12 flex flex-row items-center justify-around md:justify-start">
              <div className=" flex space-x-4 leading-tight">
                <Link href={"/"}>
                  <span className="text-sm tracking-tighter md:text-lg font-bold text-slate-800">
                    Delivery & Shipping
                  </span>
                </Link>
                <Link href={"/"}>
                  <span className="text-sm tracking-tighter md:text-lg font-bold text-slate-800">
                    Track Order
                  </span>
                </Link>
                <Link href={"/"}>
                  <span className="text-sm tracking-tighter md:text-lg font-bold text-slate-800">FAQ</span>
                </Link>
                <Link href={"/"}>
                  <span className="text-sm tracking-tighter md:text-lg font-bold text-slate-800">
                    Contact
                  </span>
                </Link>
              </div>
            </div>
            <div class="w-full md:w-6/12 flex flex-row justify-center md:justify-end">
              <div className="flex space-x-4">
                <Link href={"/"} className="text-slate-800">
                  <span className="text-slate-800">
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      className="eCHnXp"
                    >
                      <title>icon</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.25 12C1.25 6.06294 6.06293 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.3664 18.8186 21.8129 13.6788 22.6195L12.8125 22.7554V14.1406H15.2488L15.4621 12.75H12.8125V10.1242C12.8125 9.61973 12.9348 9.02962 13.3442 8.55619C13.7712 8.06245 14.4081 7.8125 15.1921 7.8125H15.7031V6.75421C15.6883 6.75246 15.6733 6.75071 15.6581 6.74896C15.25 6.70183 14.7218 6.65625 14.2146 6.65625C13.2241 6.65625 12.4878 6.95361 12.0001 7.4418C11.5131 7.92924 11.1875 8.69342 11.1875 9.79688V12.75H8.64844V14.1406H11.1875V22.7554L10.3212 22.6195C5.18143 21.8129 1.25 17.3664 1.25 12ZM16.4531 6.10156L16.5793 5.36225L17.2031 5.46872V9.3125H15.1921C14.7339 9.3125 14.5561 9.44797 14.4788 9.53735C14.3839 9.64705 14.3125 9.83777 14.3125 10.1242V11.25H17.2097L16.5363 15.6406H14.3125V20.9586C18.3019 19.932 21.25 16.3097 21.25 12C21.25 6.89136 17.1086 2.75 12 2.75C6.89136 2.75 2.75 6.89136 2.75 12C2.75 16.3097 5.69805 19.932 9.6875 20.9586V15.6406H7.14844V11.25H9.6875V9.79688C9.6875 8.39408 10.1084 7.21295 10.9389 6.38164C11.7687 5.55108 12.921 5.15625 14.2146 5.15625C14.8016 5.15625 15.3926 5.20833 15.8302 5.25886C16.0506 5.28431 16.2357 5.30979 16.3665 5.32904C16.4319 5.33868 16.4839 5.34677 16.5201 5.35256L16.5624 5.35942L16.5741 5.36138L16.5775 5.36195L16.5793 5.36225C16.5794 5.36226 16.5793 5.36225 16.4531 6.10156Z"
                      ></path>
                    </svg>
                  </span>
                </Link>
                <Link href={"/"} className="text-slate-800">
                  <span className="text-slate-800">
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      className="base-icon__StyledIconSvg-sc-fzrbhv-0 eCHnXp"
                    >
                      <title>icon</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.25 6C1.25 3.37665 3.37665 1.25 6 1.25H18C20.6234 1.25 22.75 3.37665 22.75 6V18C22.75 20.6234 20.6234 22.75 18 22.75H6C3.37665 22.75 1.25 20.6234 1.25 18V6ZM6 2.75C4.20507 2.75 2.75 4.20507 2.75 6V18C2.75 19.7949 4.20507 21.25 6 21.25H18C19.7949 21.25 21.25 19.7949 21.25 18V6C21.25 4.20507 19.7949 2.75 18 2.75H6ZM12 7.75C9.65279 7.75 7.75 9.65279 7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 9.65279 14.3472 7.75 12 7.75ZM6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C15.1756 6.25 17.75 8.82436 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12ZM18.5 7C19.3284 7 20 6.32843 20 5.5C20 4.67157 19.3284 4 18.5 4C17.6716 4 17 4.67157 17 5.5C17 6.32843 17.6716 7 18.5 7Z"
                      ></path>
                    </svg>
                  </span>
                </Link>
                <Link href={"/"} className="text-slate-800">
                  <span className="text-slate-800">
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      className="base-icon__StyledIconSvg-sc-fzrbhv-0 eCHnXp"
                    >
                      <title>icon</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.12626 6.04674C5.97119 5.92349 9.08736 5.75 12 5.75C14.9126 5.75 18.0288 5.92349 19.8737 6.04674C20.4614 6.08601 20.9261 6.54031 20.9781 7.12446C21.1019 8.51248 21.25 10.4927 21.25 12C21.25 13.507 21.1021 15.5645 20.9782 17.0186C20.9264 17.6276 20.4282 18.0989 19.8099 18.1175C17.9512 18.1734 14.8785 18.25 12 18.25C9.12145 18.25 6.04877 18.1734 4.19006 18.1175C3.57177 18.0989 3.07362 17.6276 3.02177 17.0186C2.89795 15.5645 2.75 13.507 2.75 12C2.75 10.4927 2.89809 8.51248 3.02186 7.12446C3.07395 6.54031 3.53858 6.08601 4.12626 6.04674ZM12 4.25C9.03784 4.25 5.88306 4.42603 4.02627 4.55008C2.7041 4.63841 1.64571 5.66884 1.52779 6.99123C1.40359 8.38401 1.25 10.421 1.25 12C1.25 13.5764 1.40316 15.6894 1.52718 17.1459C1.64429 18.5213 2.7726 19.5755 4.14495 19.6168C6.00918 19.6729 9.09922 19.75 12 19.75C14.9008 19.75 17.9908 19.6729 19.8551 19.6168C21.2274 19.5755 22.3557 18.5213 22.4728 17.1459C22.5968 15.6894 22.75 13.5764 22.75 12C22.75 10.421 22.5964 8.38401 22.4722 6.99123C22.3543 5.66884 21.2959 4.63841 19.9737 4.55008C18.1169 4.42603 14.9622 4.25 12 4.25ZM15 12L10 9V15L15 12Z"
                      ></path>
                    </svg>
                  </span>
                </Link>
                <Link href={"/"} className="text-slate-800">
                  <span className="text-slate-800">
                    <svg
                      height="28"
                      width="28"
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      className="base-icon__StyledIconSvg-sc-fzrbhv-0 eCHnXp"
                    >
                      <title>icon</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 1H12.1311C13.0038 1 14.2734 1.26402 15.4503 1.95622C16.6448 2.65871 17.7676 3.81886 18.2486 5.60302L18.2504 5.60969L18.2504 5.6097C18.4164 6.24824 18.6242 7.70023 18.4256 9.31896C18.7231 9.11514 19.0658 9.05777 19.3557 9.07162C19.6816 9.0872 20.0116 9.19364 20.2906 9.37763C20.5714 9.56279 20.8352 9.85126 20.955 10.2459C21.0787 10.654 21.021 11.086 20.8113 11.4893C20.5597 11.9732 20.1107 12.2352 19.7702 12.3926C19.5479 12.4954 19.2654 12.5962 19.0392 12.6769C18.9401 12.7123 18.8517 12.7438 18.7841 12.77C18.647 12.8229 18.5471 12.8682 18.4744 12.9102C18.4641 12.9162 18.4548 12.9218 18.4467 12.9269C18.4522 12.9417 18.4593 12.9591 18.4685 12.9792C18.7887 13.6832 19.2147 14.5103 19.7564 15.17C20.3038 15.8367 20.8844 16.2307 21.5019 16.2791C22.013 16.3193 22.6653 16.4915 22.9155 17.11C23.1492 17.688 22.8443 18.223 22.6523 18.4867C22.4226 18.8023 22.1018 19.0846 21.7849 19.2897C21.4935 19.4782 21.0771 19.6852 20.655 19.6852C20.4258 19.6852 20.2696 19.6992 20.1658 19.7157C20.1432 19.8873 20.1012 20.1258 20.0046 20.3616C19.8824 20.66 19.6507 21.0069 19.2198 21.2021C18.8009 21.392 18.3234 21.379 17.829 21.2431C17.2793 21.0921 16.7874 21.2083 16.3344 21.4279C16.105 21.5391 15.8946 21.6728 15.6971 21.8069C15.6585 21.8331 15.6162 21.8623 15.572 21.893C15.4254 21.9945 15.2565 22.1114 15.1234 22.1846C14.5551 22.4968 13.5365 23 12.1311 23H12V21.4651H12.1311C13.156 21.4651 13.9036 21.1036 14.3844 20.8394C14.4433 20.807 14.5116 20.7597 14.6241 20.6819C14.6814 20.6422 14.7503 20.5946 14.8352 20.5369C15.0556 20.3873 15.337 20.2057 15.6649 20.0467C16.3266 19.7259 17.2117 19.4818 18.2356 19.7631C18.4343 19.8177 18.5349 19.8125 18.5722 19.8067C18.5755 19.8004 18.5796 19.7917 18.5844 19.7799C18.6151 19.7049 18.6354 19.5977 18.6529 19.4436C18.6545 19.4299 18.6563 19.4131 18.6583 19.3944C18.6645 19.3374 18.6725 19.2627 18.6809 19.2069C18.687 19.1661 18.6977 19.1025 18.7176 19.0341C18.732 18.9849 18.7781 18.8314 18.9073 18.6895C19.2626 18.299 19.8058 18.1519 20.6419 18.1504C20.6484 18.1489 20.671 18.1439 20.7111 18.1282C20.7758 18.103 20.8587 18.0608 20.9513 18.0009C21.0485 17.938 21.1406 17.866 21.2204 17.7926C20.0811 17.6458 19.2062 16.9185 18.5703 16.1441C17.899 15.3265 17.407 14.3522 17.0716 13.6149C16.9554 13.3596 16.8812 13.0829 16.8952 12.7946C16.9098 12.4934 17.0183 12.2324 17.1839 12.0206C17.4778 11.6445 17.9343 11.4528 18.2313 11.3381C18.3836 11.2793 18.5126 11.2338 18.6299 11.1925C18.8087 11.1295 18.9604 11.076 19.1262 10.9994C19.3799 10.8821 19.439 10.8017 19.4497 10.7812C19.4749 10.7326 19.4819 10.7029 19.4838 10.6909C19.4782 10.6842 19.4669 10.6729 19.4458 10.6591C19.397 10.6269 19.3336 10.6072 19.2825 10.6048C19.2776 10.6045 19.2734 10.6045 19.2698 10.6045C18.8902 10.8998 18.4551 10.9808 18.1196 10.9874C17.7734 10.9943 17.4559 10.9248 17.2438 10.8471L16.6097 10.6148L16.7595 9.95619C17.1457 8.25841 16.9167 6.58216 16.7659 5.9992C16.4072 4.6723 15.5845 3.81577 14.6724 3.27929C13.7419 2.73205 12.7429 2.53488 12.1311 2.53488H12V1ZM19.2511 10.6061C19.2511 10.606 19.2521 10.6057 19.2544 10.6054C19.2523 10.606 19.2511 10.6062 19.2511 10.6061ZM18.5634 19.8209C18.5634 19.8208 18.564 19.8198 18.5653 19.8184C18.5641 19.8202 18.5634 19.821 18.5634 19.8209Z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.42479 3.28191C10.3734 2.73258 11.389 2.53488 12 2.53488V1C11.1301 1 9.8476 1.26349 8.65582 1.9536C7.44696 2.6536 6.30173 3.81247 5.81339 5.60061L5.81155 5.60735L5.81158 5.60735C5.64283 6.24814 5.43158 7.70633 5.63519 9.33072C5.33172 9.11705 4.97934 9.05761 4.68264 9.0716C4.35621 9.087 4.02483 9.19229 3.74393 9.37514C3.4616 9.55893 3.19385 9.84679 3.07202 10.2433C2.9458 10.6541 3.00499 11.0887 3.21794 11.4929C3.47282 11.9769 3.92653 12.2377 4.26944 12.3942C4.494 12.4967 4.77852 12.5969 5.00732 12.6775C5.10814 12.713 5.19815 12.7448 5.26743 12.7712C5.40662 12.8242 5.50858 12.8698 5.58308 12.9123C5.5935 12.9183 5.60279 12.9238 5.61102 12.9289C5.60581 12.9424 5.59927 12.958 5.59106 12.9758C5.26678 13.6795 4.83539 14.5065 4.28662 15.1663C3.7328 15.8321 3.14209 16.23 2.50918 16.2791C1.99646 16.3188 1.33959 16.4885 1.08628 17.1068C0.847563 17.6895 1.15962 18.2281 1.35312 18.4905C1.58572 18.806 1.91018 19.0877 2.23017 19.2921C2.5253 19.4806 2.94372 19.6852 3.3655 19.6852C3.60349 19.6852 3.76471 19.6999 3.87111 19.717C3.89406 19.889 3.9368 20.1283 4.03491 20.3648C4.15944 20.665 4.39429 21.0102 4.82679 21.2037C5.24622 21.3913 5.72485 21.3789 6.22311 21.2438C6.78604 21.0911 7.28928 21.209 7.75 21.4296C7.98328 21.5412 8.19694 21.6753 8.3972 21.8095C8.43654 21.8358 8.47948 21.8652 8.52442 21.8959C8.67289 21.9974 8.84317 22.1138 8.97737 22.1866L8.99715 22.1973C9.56238 22.504 10.4763 23 12 23V21.4651C10.8657 21.4651 10.2268 21.1183 9.73081 20.8491L9.70908 20.8374C9.6488 20.8047 9.57893 20.7569 9.46451 20.6788C9.40647 20.6391 9.33697 20.5917 9.25146 20.5344C9.02829 20.3848 8.74381 20.2036 8.41252 20.0451C7.74412 19.7251 6.85255 19.4827 5.82142 19.7624C5.60613 19.8208 5.50135 19.812 5.46587 19.8053C5.46242 19.799 5.4579 19.7898 5.45248 19.7767C5.42176 19.7026 5.40128 19.5964 5.38354 19.4424C5.38198 19.4289 5.38016 19.4122 5.37813 19.3936C5.37191 19.3365 5.36372 19.2615 5.35521 19.2055C5.34898 19.1645 5.33806 19.1004 5.3177 19.0316C5.30294 18.9816 5.25589 18.8276 5.12524 18.6859C4.7676 18.2978 4.22203 18.1516 3.37678 18.1504C3.37115 18.1492 3.34685 18.1443 3.30193 18.127C3.23528 18.1014 3.15044 18.0587 3.0562 17.9985C2.95891 17.9364 2.86689 17.8654 2.78674 17.7932C3.93588 17.6483 4.82098 16.9239 5.46644 16.1479C6.14643 15.3304 6.64492 14.3559 6.98483 13.6183C7.10266 13.3626 7.17838 13.0846 7.16411 12.7941C7.1492 12.4905 7.0384 12.2284 6.87089 12.0168C6.57416 11.6419 6.11396 11.4513 5.81402 11.3369C5.66077 11.2785 5.53042 11.2332 5.41162 11.1918C5.22978 11.1285 5.07501 11.0747 4.90661 10.9978C4.64759 10.8796 4.58656 10.7981 4.57576 10.7776C4.55281 10.734 4.54509 10.7061 4.5425 10.693C4.54875 10.686 4.56047 10.675 4.58112 10.6615C4.63232 10.6282 4.69945 10.6074 4.75494 10.6048C4.76306 10.6044 4.76971 10.6044 4.77501 10.6046C5.1578 10.9003 5.59648 10.9808 5.93421 10.9874C6.28224 10.9942 6.60145 10.9252 6.81456 10.8481L7.45409 10.6169L7.30137 9.95409C6.91056 8.25812 7.14232 6.58355 7.29479 6.00158C7.65713 4.67867 8.49402 3.82088 9.42479 3.28191ZM4.7917 10.6066C4.79174 10.6065 4.79073 10.6062 4.78857 10.6058C4.79059 10.6064 4.79167 10.6066 4.7917 10.6066ZM5.47359 19.8172C5.47362 19.8171 5.47291 19.816 5.47139 19.8145C5.4728 19.8165 5.47356 19.8173 5.47359 19.8172ZM3.83699 19.4304C3.83693 19.4301 3.83704 19.4308 3.83736 19.4324L3.83699 19.4304Z"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div class="bg-white py-4">
            <div className="mx-auto w-11/12 flex flex-col md:flex-row space-y-2 justify-between text-slate-800-400  max-sm:flex-col max-sm:items-center">
              <div class="w-full md:w-1/2 flex flex-1 justify-center md:justify-start items-center gap-2 font-montserrat cursor-pointer">
                <div className="flex space-x-3">
                  <Link href={"/"}>
                    <span className="text-xs tracking-tighter md:text-sm font-bold text-slate-800">
                      Privacy Policy
                    </span>
                  </Link>
                  <Link href={"/"}>
                    <span className="text-xs tracking-tighter md:text-sm font-bold text-slate-800">
                      Terms & Conditions
                    </span>
                  </Link>
                  <Link href={"/"}>
                    <span className="text-xs tracking-tighter md:text-sm font-bold text-slate-800">
                      Return Policy
                    </span>
                  </Link>
                  
                </div>
              </div>
              <div className="w-11/12 md:w-1/2">
                <div className="flex space-x-3">
                  <Link href={"/"}>
                    <Image src={payment1} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
