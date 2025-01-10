import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-ad-config",
  template: `
   <div>
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



       <div class="flex flex-col w-full max-md:max-w-full">
      <header
        class="flex flex-wrap gap-5 justify-between items-start px-9 pt-5 pb-2.5 w-full bg-white max-md:px-5 max-md:max-w-full"
      >
        <h1 class="mt-4 text-2xl font-semibold text-slate-700">Settings</h1>
        <div
          class="flex flex-wrap gap-8 items-center text-base whitespace-nowrap text-slate-400"
        >
          <div
            class="flex gap-4 self-stretch px-6 py-4 my-auto shadow-lg bg-slate-100 rounded-[40px] max-md:px-5"
          >
            <label for="searchInput" class="sr-only">Search</label>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5baf6310b17e1bc637a0b7bfc76cb77b52028202bcb1527145e2e1dce8e36d17?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
              alt=""
              class="object-contain shrink-0 w-5 aspect-square"
            />
            <input
              type="search"
              id="searchInput"
              placeholder="Search.."
              class="bg-transparent border-none focus:outline-none"
            />
          </div>
          <button
            aria-label="Notifications"
            class="focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e27d69ad9a7b62bb1c430d4009c9b284cab7921044ddde2265ab1880cdb438c1?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
              alt=""
              class="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
            />
          </button>
          <button
            aria-label="Messages"
            class="focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f8b3eb645e91ba350524a9d026b62db8171698f9ffb5869f1070f569307af1a?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
              alt=""
              class="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
            />
          </button>
          <button
            aria-label="Profile"
            class="focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0548a329eb08d195aa93556ecd09bb437ff11c9f15e9eb045b9e1e137801414?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
              alt=""
              class="object-contain shrink-0 self-stretch aspect-square w-[60px]"
            />
          </button>
        </div>
      </header>

      <form
        class="flex flex-col items-start mt-4 ml-8 max-w-full w-[842px]"
        (ngSubmit)="onSubmit()"
      >
        <h2 class="text-lg font-semibold text-slate-700">Account Settings</h2>
        <div
          class="flex flex-wrap gap-10 items-start self-stretch mt-8 max-md:max-w-full"
        >
          <div
            class="flex flex-wrap gap-4 items-start min-w-[240px] w-[563px] max-md:max-w-full"
          >
            <div class="flex grow shrink gap-4 items-start min-w-[240px] w-[533px] max-md:max-w-full">
              <div
                class="flex flex-col flex-1 shrink justify-center w-full basis-0 min-h-[69px] min-w-[240px] max-md:max-w-full"
              >
                <label
                  for="nameInput"
                  class="flex gap-2.5 justify-center items-center self-start text-base tracking-wide leading-7 whitespace-nowrap h-[21px] rounded-[100px] text-neutral-400"
                >
                  <span class="self-stretch my-auto opacity-70">Name</span>
                </label>
                <input
                  type="text"
                  id="nameInput"
                  
                  name="name"
                  class="flex overflow-hidden flex-wrap flex-1 gap-2.5 items-center px-3.5 py-7 text-sm font-medium tracking-normal leading-snug rounded-lg bg-slate-100 size-full text-neutral-400 max-md:max-w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="Jackson D."
                />
              </div>
            </div>
            <div class="flex grow shrink gap-4 items-start whitespace-nowrap min-w-[240px] w-[533px] max-md:max-w-full">
              <div
                class="flex flex-col flex-1 shrink justify-center w-full basis-0 min-h-[69px] min-w-[240px] max-md:max-w-full"
              >
                <label
                  for="emailInput"
                  class="flex gap-2.5 justify-center items-center self-start text-base tracking-wide leading-7 h-[21px] rounded-[100px] text-neutral-400"
                >
                  <span class="self-stretch my-auto opacity-70">Email</span>
                </label>
                <input
                  type="email"
                  id="emailInput"
                  [(ngModel)]="email"
                  name="email"
                  class="flex overflow-hidden flex-wrap flex-1 gap-2.5 items-center px-3.5 py-7 text-sm font-medium tracking-normal leading-snug rounded-lg bg-slate-100 size-full text-neutral-400 max-md:max-w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="Jackson@gmail.com"
                />
              </div>
            </div>
            <button
              type="submit"
              class="flex grow shrink gap-2.5 items-end text-sm font-medium text-center text-white min-h-[74px] w-[121px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span
                class="gap-2.5 self-stretch pr-8 pl-8 bg-blue-600 rounded-3xl min-h-[47px] w-[151px] max-md:px-5 flex items-center justify-center"
              >
                Update Profile
              </span>
            </button>
          </div>
          <div class="flex flex-col items-start py-1 pr-9 w-[235px]">
            <label
              for="profilePicture"
              class="text-sm font-semibold text-zinc-800"
            >
              Profile picture
            </label>
            <div
              class="flex overflow-hidden relative flex-col items-start px-2 pt-40 pb-2 mt-2.5 shadow-sm aspect-square rounded-[100px] w-[200px] max-md:pt-24 max-md:pr-5"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b04bf05df805b8c71a34a8cd20defd92eae779b57cceec6c86a472b410fd083d?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                alt="Current profile picture"
                class="object-cover absolute inset-0 size-full"
              />
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                class="relative shrink-0 bg-white rounded-md border border-gray-300 border-solid h-[31px] w-[63px]"
                aria-label="Upload new profile picture"
              />
            </div>
          </div>
        </div>
        <h2 class="mt-12 text-lg font-semibold text-slate-700 max-md:mt-10">
          Social Account
        </h2>
        <div
          class="flex gap-4 mt-6 max-w-full text-xs font-medium text-center text-white w-[171px]"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fac4695edbca73a04797baec38008db3dace58f2a59bfd6930736b1e229ffccf?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
            alt="Social media icon"
            class="object-contain shrink-0 aspect-square w-[51px]"
          />
          <button
            type="button"
            class="gap-2 self-stretch pr-3.5 pl-3.5 my-auto bg-blue-600 rounded-2xl min-h-[33px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Connect Account
          </button>
        </div>
      </form>
    </div>
      </div>
    </div>
   </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class SettingConfigComponent {
  onSubmit() {
    // Handle form submission
  }
}