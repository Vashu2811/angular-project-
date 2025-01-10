import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-ad-config",
  template: `
   <div class="overflow-hidden bg-white">
      <div class="flex gap-5 max-md:flex-col">
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
        <div class="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
           <header class="flex flex-wrap gap-5 justify-between px-9 py-5 w-full whitespace-nowrap bg-white max-md:px-5 max-md:max-w-full">
      <h1 class="my-auto text-2xl font-semibold text-slate-700">Dashboard</h1>
      <div class="flex flex-wrap gap-8 items-center text-base text-slate-400">
        <form class="flex gap-4 self-stretch px-6 py-4 my-auto shadow-lg bg-slate-100 rounded-[40px] max-md:px-5">
          <label for="searchInput" class="sr-only">Search</label>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5699daf23b4d7d22c6aa21b52e0eab5e824a977c97a87f5edd4fe0ff40b2156?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
            alt=""
            class="object-contain shrink-0 w-5 aspect-square"
          />
          <input 
            type="search"
            id="searchInput"
            placeholder="Search.."
            class="bg-transparent border-none focus:outline-none"
          />
        </form>
        <button aria-label="Notifications">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b23acbed105800c2c9f1399fce172f1c934c3020b5a0338ede065fa35512b1a?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
            alt=""
            class="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
          />
        </button>
        <button aria-label="Messages">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f8b3eb645e91ba350524a9d026b62db8171698f9ffb5869f1070f569307af1a?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
            alt=""
            class="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
          />
        </button>
        <button aria-label="Profile">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0548a329eb08d195aa93556ecd09bb437ff11c9f15e9eb045b9e1e137801414?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
            alt=""
            class="object-contain shrink-0 self-stretch aspect-square w-[60px]"
          />
        </button>
      </div>
    </header>
          <app-calendar-grid />
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class DashboardComponent {
  onSubmit() {
    // Handle form submission
  }
}