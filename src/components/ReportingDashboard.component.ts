import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-ad-config",
  template: `
  <div class="overflow-hidden bg-white" role="main">
      <div class="flex gap-5 max-md:flex-col">
        <nav class="flex flex-col w-[22%] max-md:ml-0 max-md:w-full" role="navigation" aria-label="Main navigation">
          <div class="flex flex-col grow font-semibold">
            <div class="flex flex-col py-6 border-2 border-solid bg-slate-900 border-slate-700">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a39f0c38a7df43e5792955bcb6bc6f487e0a74eaf6c55b39f21215e4c862acb?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain self-end aspect-square rounded-[100px_0px_0px_100px] w-[50px]" />
              <div class="flex flex-col px-2.5 w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cece72af3df4d6f6a28d39e0ea8987a837f9f6f3162e845f90ae385e91531e33?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="Company Logo" class="object-contain self-center max-w-full aspect-[4.95] w-[228px]" />
                <div class="flex flex-col mt-14 w-full text-sm leading-6 text-white max-md:mx-1.5 max-md:mt-10">
                  <button class="flex gap-4 px-5 py-4 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)]" tabindex="0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/54ebea0ec91da510ceec45dbce646d1b74aa614c3052fa3dafbc9a917a45f754?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Billing & Insurance</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee2978497c748c3a697d2cb38caa77b8f2ad68eb47f96813831acacd227cc831?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 ml-auto w-4 aspect-square" />
                  </button>
                  
                  <button class="flex gap-4 px-5 py-4 mt-4 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(145,142,244,0.53)]" tabindex="0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/01c894b49e808ec76b1645018374bae0075b12546c5c699464b9251e69f0a8e9?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Credentialing Feature</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee2978497c748c3a697d2cb38caa77b8f2ad68eb47f96813831acacd227cc831?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 ml-auto w-4 aspect-square" />
                  </button>

                  <button class="flex gap-4 px-5 py-4 mt-2.5 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)]" tabindex="0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce39861d393ecbd4b51c25442c828e747ae584c669be8a0d903d129f368d8273?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Provider Profile Management</span>
                  </button>

                  <button class="flex gap-4 px-5 py-4 mt-2.5 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)]" tabindex="0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/95df032cabff403584cac9d5d0c6959da9aba94555a845002a166f5c16890a65?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Automated Credential Verification</span>
                  </button>

                  <button class="flex gap-4 px-5 py-4 mt-2.5 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)]" tabindex="0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Document Storage and Management</span>
                  </button>

                  <button class="flex gap-4 px-5 py-4 mt-2.5 items-center w-full bg-blue-600 rounded-3xl shadow-[0px_20px_60px_rgba(145,142,244,0.53)] text-slate-300" tabindex="0" aria-current="page">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9856ed973e14408f57768bc1064b6342ce767100fe9a743bc015355da9b88218?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Credentialing History & Reporting</span>
                  </button>

                  <button class="flex gap-4 px-5 py-4 mt-4 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)]" tabindex="0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a28d5acf9b6eb2b87e8be41fcbdf4b7a44ba93f0812873d2d0934f96040a1241?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Social Outreach</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47359f9e62a795e0354627e070928e306a5297d43eb93f6c6e5911008708058b?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 ml-auto w-4 aspect-square" />
                  </button>

                  <button class="flex gap-4 px-5 py-4 mt-4 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)]" tabindex="0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06fc3dcd4497a01514a45cdc18cc18dbc01587ad705d56ffc5d438f89db79bc3?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Settings</span>
                  </button>

                  <button class="flex gap-4 px-5 py-4 mt-4 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)]" tabindex="0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcfdebece1be864460674c9afbcf8acd6fe11c98496346f370717d378e042a21?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Logout</span>
                  </button>
                </div>

                <div class="flex items-center mt-28 w-full text-base text-zinc-200 max-md:mt-10">
                  <div class="flex gap-4 items-center">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/90fbc7193584070ca61e8974c82dcca028c7f15634a012e678dcc370b9107549?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="Profile picture of Jackson D." class="object-contain w-20 aspect-square" />
                    <span>Jackson D.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main class="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col items-center w-full max-md:max-w-full">
            <header class="self-stretch px-9 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col">
                  <h1 class="text-2xl font-semibold text-slate-700 w-[40%] max-md:w-full max-md:mt-10 pt-6">
                   Reporting Dashboard
                  </h1>
                <div class="flex flex-col ml-5 w-[60%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-wrap gap-1 items-center text-base text-slate-400 max-md:mt-10">
                  <button type="submit" class="px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded-3xl">Filter</button>
                    <form role="search" class="flex gap-4 px-6 py-4 shadow-lg bg-slate-100 rounded-[40px] max-md:px-5">
                      <label for="search" class="sr-only">Search</label>
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6a10af273352939b08ad500b993635b1142b75a92cebfc66e12b7bfd3e2c8f5?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain w-5 aspect-square" />
                      <input type="search" id="search" placeholder="Search.." class="bg-transparent border-none focus:outline-none" />
                    </form>
                    <button aria-label="Notifications" class="p-2">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd9ce29bc853b6ee7585dd0c905ab504935b3f7ddeb831583907c09a34d5d8f1?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain aspect-square w-[50px]" />
                    </button>
                    <button aria-label="Messages" class="p-2">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f8b3eb645e91ba350524a9d026b62db8171698f9ffb5869f1070f569307af1a?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain aspect-square w-[50px]" />
                    </button>
                    <button aria-label="Profile" class="p-2">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0548a329eb08d195aa93556ecd09bb437ff11c9f15e9eb045b9e1e137801414?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain aspect-square w-[60px]" />
                    </button>
                  </div>
                </div>
              </div>
            </header>
                                            <div
  class="flex flex-wrap gap-5 items-start pr-52 -mr-px tracking-wide text-right text-black max-sm:pr-20 max-sm:-mr-0.5"
  role="region"
  aria-label="Dashboard Statistics"
>
  <div
    class="flex flex-col pt-6 rounded-none min-w-[240px] w-[299px]"
    role="article"
    aria-label="Payment Statistics"
  >
    <div
      class="flex gap-5 justify-between items-start px-4 pb-4 bg-white rounded-lg shadow-sm"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1abe1e75647e9bdd83d73ac5e0aa9b4ac5359c74bdd08224c2634ec7ced841e0?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
        class="object-contain shrink-0 self-start mt-0 rounded-none aspect-square w-[75px]"
        alt="Payment received icon"
      />
      <div class="flex flex-col self-end mt-6">
        <div class="text-lg">Payment Received</div>
        <div class="self-end mt-2 text-2xl" aria-label="Payment amount">
          200
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex flex-col pt-6 rounded-none min-w-[240px] w-[299px]"
    role="article"
    aria-label="Payment Statistics"
  >
    <div
      class="flex gap-5 justify-between items-start px-4 pb-4 bg-white rounded-lg shadow-sm"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7b4ad48475c3e665130a04c0fee96f83c74d61260ce1bf1cbc4207f53220661?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
        class="object-contain shrink-0 self-start mt-0 rounded-none aspect-square w-[75px]"
        alt="Payment received icon"
      />
      <div class="flex flex-col self-end mt-6">
        <div class="text-lg">OutstandingBalances</div>
        <div class="self-end mt-2 text-2xl" aria-label="Payment amount">
          $500k
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex flex-col pt-6 rounded-none min-w-[240px] w-[299px]"
    role="article"
    aria-label="Error Statistics"
  >
    <div
      class="flex gap-5 justify-between items-start px-4 pb-4 bg-white rounded-lg shadow-sm"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b559467146cba1c948e71462d6212b47db88efb143500885c437ba87053310a0?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
        class="object-contain shrink-0 self-start mt-0 rounded-none aspect-square w-[75px]"
        alt="Flagged errors icon"
      />
      <div class="flex flex-col self-end mt-6">
        <div class="text-lg">Flagged Errors</div>
        <div
          class="self-end mt-2 text-2xl"
          aria-label="Number of flagged errors"
        >
          10
        </div>
      </div>
    </div>
  </div>
</div>
            <section class="mt-11 w-full max-w-[1042px] max-md:mt-10 max-md:max-w-full">
              <div class="flex flex-wrap gap-5 justify-between mb-8">
                <form class="flex flex-wrap gap-11 items-end">
                  <div class="flex flex-col min-w-[240px]">
                    <label for="fromDate" class="mb-2 text-base tracking-wide text-neutral-400">Payer Name</label>
                    <input type="text" placeholder="Select" id="fromDate" class="px-3.5 py-3 text-sm font-medium rounded-lg bg-slate-100 text-neutral-400" />
                  </div>
                  <div class="flex flex-col min-w-[240px]">
                    <label for="fromDate" class="mb-2 text-base tracking-wide text-neutral-400">Treatment Type</label>
                    <input type="text" placeholder="Select" id="fromDate" class="px-3.5 py-3 text-sm font-medium rounded-lg bg-slate-100 text-neutral-400" />
                  </div>
                  <div class="flex flex-col min-w-[240px]">
                    <label for="fromDate" class="mb-2 text-base tracking-wide text-neutral-400">Select Patient</label>
                    <input type="text" placeholder="Select" id="fromDate" class="px-3.5 py-3 text-sm font-medium rounded-lg bg-slate-100 text-neutral-400" />
                  </div>
                  <div class="flex flex-col  min-w-[240px]">
                    <label for="fromDate" class="mb-2 text-base tracking-wide text-neutral-400">From Date</label>
                    <input type="text" placeholder="Select" id="fromDate" class="px-3.5 py-3 text-sm font-medium rounded-lg bg-slate-100 text-neutral-400" />
                  </div>
                  <div class="flex flex-col min-w-[240px]">
                    <label for="fromDate" class="mb-2 text-base tracking-wide text-neutral-400">From Date</label>
                    <input type="date" id="fromDate" class="px-3.5 py-3 text-sm font-medium rounded-lg bg-slate-100 text-neutral-400" />
                  </div>
                </form>
                <button class="px-12  py-3 text-sm font-medium text-white bg-blue-600 rounded-3xl">Genertate</button>
              </div>

          <canvas id="myBarChart" width="400" height="200"></canvas>
             
            </section>
          </div>
        </main>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ReportingDashboard{
  onSubmit() {
    // Handle form submission
  }
}