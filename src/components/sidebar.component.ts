import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-sidebar",
  template: `
    <div class="flex flex-col grow font-semibold">
      <nav
        class="flex flex-col py-7 border-2 border-solid bg-slate-900 border-slate-700"
        role="navigation"
        aria-label="Main navigation"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ac9c828c28b1ca7195bd35705d52de66d2658501907c310381a2f23b23a3e7c?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
          alt=""
          class="object-contain self-end aspect-square rounded-[100px_0px_0px_100px] w-[50px]"
        />
        <div class="flex flex-col px-2.5 w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cece72af3df4d6f6a28d39e0ea8987a837f9f6f3162e845f90ae385e91531e33?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
            alt="Company Logo"
            class="object-contain self-center max-w-full aspect-[4.95] w-[228px]"
          />
          <div
            class="flex flex-col mt-14 w-full text-sm leading-6 text-white max-md:mx-1.5 max-md:mt-10"
          >
            <button
              class="flex flex-col justify-center px-5 py-4 w-full max-w-[290px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              tabindex="0"
            >
              <div
                class="flex gap-5 justify-between w-full rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)]"
              >
                <div class="flex gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a2e9f547c71290c642538ebb28eed8c7bc7cba6a9c06fa50077ce4b35c1de9e?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                    alt=""
                    class="object-contain shrink-0 aspect-square w-[26px]"
                  />
                  <span class="basis-auto">Billing & Insurance</span>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa396a37f554b400f69598dab01f4b0b81ca0483d262d64fae208603742179ad?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                  alt=""
                  class="object-contain shrink-0 my-auto w-4 aspect-square"
                />
              </div>
            </button>
            <button
              class="flex flex-col justify-center px-5 py-4 mt-4 w-full max-w-[290px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              tabindex="0"
            >
              <div
                class="flex gap-5 justify-between rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)] w-full"
              >
                <div class="flex gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8a32967fcc95a277c348dd31510712854fd175a1c8af81c417bb7e6b6b889d1?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                    alt=""
                    class="object-contain shrink-0 aspect-square w-[26px]"
                  />
                  <span class="basis-auto">Credentialing Feature</span>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/26ee1b2819ace05d6d5dc223b70b453d3366a61023b44020604f90bb52a962ee?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                  alt=""
                  class="object-contain shrink-0 my-auto w-4 aspect-square"
                />
              </div>
            </button>
            <button
              class="flex flex-col justify-center px-5 py-4 mt-4 w-full max-w-[290px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              tabindex="0"
            >
              <div
                class="flex gap-5 justify-between w-full rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)]"
              >
                <div class="flex gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d86b70a28236fcaef761f10254c17b25991ccfdbdde676ff27616c31ba2517b1?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                    alt=""
                    class="object-contain shrink-0 aspect-square w-[26px]"
                  />
                  <span class="basis-auto">Social Outreach</span>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbabe76904f6ac9bc4671eca7557b0de02405083f8c02a89091ab3cbeae0461f?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                  alt=""
                  class="object-contain shrink-0 my-auto w-4 aspect-square"
                />
              </div>
            </button>
            <button
              class="flex gap-4 px-5 py-4 mt-4 max-w-full whitespace-nowrap bg-blue-600 rounded-3xl shadow-[0px_20px_60px_rgba(145,142,244,0.53)] text-slate-300 w-[290px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              tabindex="0"
              aria-current="page"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/db1b1d8fefc3d6e81826b9cc63046708c0db6d45b031827d82426e131c89c50f?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                alt=""
                class="object-contain shrink-0 aspect-square w-[26px]"
              />
              <span class="grow shrink w-[204px]">Settings</span>
            </button>
            <button
              class="flex gap-4 px-5 py-4 mt-4 max-w-full whitespace-nowrap rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)] w-[290px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              tabindex="0"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5ee760c47e1c154ba8817785067b3d7f163ce7a2d4db34189b06ce074a8b798?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                alt=""
                class="object-contain shrink-0 aspect-square w-[26px]"
              />
              <span class="grow shrink w-[204px]">Logout</span>
            </button>
          </div>
          <div
            class="flex items-center mt-96 w-full text-base text-zinc-200 max-md:mt-10"
          >
            <div class="flex gap-4 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/90fbc7193584070ca61e8974c82dcca028c7f15634a012e678dcc370b9107549?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                alt="Jackson D. profile picture"
                class="object-contain shrink-0 self-stretch my-auto w-20 aspect-square"
              />
              <div class="self-stretch my-auto">Jackson D.</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class SidebarComponent {}