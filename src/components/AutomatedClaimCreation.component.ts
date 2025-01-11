import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-ad-config",
  template: `
   <div class="overflow-hidden bg-white" role="main">
      
      <main class="flex  w-full justify-center items-center">
        <div class="flex flex-col items-center w-full max-md:max-w-full">
         
          <header
          class="flex flex-wrap gap-5 justify-between px-9 py-5 w-full bg-white max-md:px-5 max-md:max-w-full"
        >
          <h1 class="my-auto text-2xl font-semibold text-slate-700">
          Automated Claim Creation
          </h1>
          <div
            class="flex flex-wrap gap-8 items-center text-base whitespace-nowrap text-slate-400"
          >
          <button type="submit" class="px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded-3xl">Filter</button>
            <div
              class="flex gap-4 self-stretch px-6 py-4 my-auto shadow-lg bg-slate-100 rounded-[40px] max-md:px-5"
              role="search"
            >
              <label for="searchInput" class="sr-only">Search</label>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d05152512ebf6d17f0b8fadc3a96451f3d18ce1a671e530095ecb7a619efb06d?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                alt=""
                class="object-contain shrink-0 w-5 aspect-square"
              />
              <input
                type="search"
                id="searchInput"
                placeholder="Search.."
                class="bg-transparent border-none outline-none"
              />
            </div>
            <button aria-label="Notifications">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8e803a47511084d9af24b36b738e07e8f8a74bf099f60739e757817e985f4?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                alt=""
                class="object-contain shrink-0 aspect-square w-[50px]"
              />
            </button>
            <button aria-label="Messages">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f8b3eb645e91ba350524a9d026b62db8171698f9ffb5869f1070f569307af1a?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                alt=""
                class="object-contain shrink-0 aspect-square w-[50px]"
              />
            </button>
            <button aria-label="Settings">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0548a329eb08d195aa93556ecd09bb437ff11c9f15e9eb045b9e1e137801414?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                alt=""
                class="object-contain shrink-0 aspect-square w-[60px]"
              />
            </button>
          </div>
        </header>
<div
class="flex flex-wrap gap-5 items-start tracking-wide text-right text-black whitespace-nowrap"
role="region"
aria-label="Dashboard Statistics"
>
<div
  class="flex flex-col grow shrink pt-6 rounded-none min-w-[240px] w-[197px]"
>
  <div
    class="flex flex-col px-4 pb-4 w-full bg-white rounded-lg shadow-sm max-md:pr-5"
    tabindex="0"
  >
    <div class="flex z-10 gap-5 justify-between mt-0 text-lg">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/02340b187318059e537b6413dad33422d5565af65cbe46e8838823b198b37c7b?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
        loading="lazy"
        class="object-contain shrink-0 rounded-none aspect-square w-[75px]"
      />
      <div class="self-end mt-12 max-md:mt-10">Submitted</div>
    </div>
    <div class="self-end text-2xl" aria-live="polite">10</div>
  </div>
</div>
<div
  class="flex flex-col grow shrink pt-6 rounded-none min-w-[240px] w-[197px]"
>
  <div
    class="flex flex-col px-4 pb-4 w-full bg-white rounded-lg shadow-sm max-md:pr-5"
    tabindex="0"
  >
    <div class="flex z-10 gap-5 justify-between mt-0 text-lg">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/381f8c9157def1b6d83ec0f41798ccdce5fdbd4d3bf1d3a129accf53b5a69df0?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
        loading="lazy"
        class="object-contain shrink-0 rounded-none aspect-square w-[75px]"
      />
      <div class="self-end mt-12 max-md:mt-10">Paid</div>
    </div>
    <div class="self-end text-2xl" aria-live="polite">8</div>
  </div>
</div>
<div
  class="flex flex-col grow shrink pt-6 rounded-none min-w-[240px] w-[197px]"
>
  <div
    class="flex flex-col px-4 pb-4 w-full bg-white rounded-lg shadow-sm max-md:pr-5"
    tabindex="0"
  >
    <div class="flex z-10 gap-5 justify-between mt-0 text-lg">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/55a67dc021c210f5cae967423347bf2abf9ebeeaca7f6cedae296d72fc5dd159?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
        loading="lazy"
        class="object-contain shrink-0 rounded-none aspect-square w-[75px]"
      />
      <div class="self-end mt-12 max-md:mt-10">Denied</div>
    </div>
    <div class="self-end text-2xl" aria-live="polite">2</div>
  </div>
</div>
<div
  class="flex flex-col grow shrink pt-6 rounded-none min-w-[240px] w-[197px]"
>
  <div
    class="flex flex-col px-4 pb-4 w-full bg-white rounded-lg shadow-sm max-md:pr-5"
    tabindex="0"
  >
    <div class="flex z-10 gap-5 justify-between mt-0 text-lg">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/59c3afda9e14618804fe472f15236200fee1790955c5022ea473e25cdbd5845a?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
        loading="lazy"
        class="object-contain shrink-0 rounded-none aspect-square w-[75px]"
      />
      <div class="self-end mt-12 max-md:mt-10">Pending</div>
    </div>
    <div class="self-end text-2xl" aria-live="polite">4</div>
  </div>
</div>
</div>
          <section class="mt-11 w-full max-w-[1042px] max-md:mt-10 max-md:max-w-full">
            <div class="flex flex-wrap gap-5 justify-between mb-8">
              <form class="flex flex-wrap gap-4 items-end">
                <div class="flex flex-col min-w-[240px]">
                  <label for="fromDate" class="mb-2 text-base tracking-wide text-neutral-400">Payer Name</label>
                  <input type="text" placeholder="Select" id="fromDate" class="px-3.5 py-3 text-sm font-medium rounded-lg bg-slate-100 text-neutral-400" />
                </div>
                <div class="flex flex-col min-w-[240px]">
                  <label for="fromDate" class="mb-2 text-base tracking-wide text-neutral-400">From Date</label>
                  <input type="date" id="fromDate" class="px-3.5 py-3 text-sm font-medium rounded-lg bg-slate-100 text-neutral-400" />
                </div>
                <div class="flex flex-col min-w-[240px]">
                  <label for="toDate" class="mb-2 text-base tracking-wide text-neutral-400">Status</label>
                  <input type="text" placeholder="Select" id="toDate" class="px-3.5 py-3 text-sm font-medium rounded-lg bg-slate-100 text-neutral-400" />
                </div>
              <button class="px-12  py-3 text-sm font-medium text-white bg-blue-600 rounded-3xl">Flagged Payments</button>

              </form>
            </div>

            <table class="w-full text-sm" role="table">
              <thead>
                <tr class="text-slate-400 font-medium">
                  <th class="text-left w-[174px] py-4">Billed Codes</th>
                  <th class="text-left w-[174px] py-4">Total Charges</th>
                  <th class="text-left w-[174px] py-4">Expected Reimbursements</th>
                  <th class="text-left w-[174px] py-4">Patient name</th>
                  <th class="text-left w-[174px] py-4">Status</th>
                  <th class="text-left w-[174px] py-4">Payer Notes</th>
                  <th class="text-left w-[174px] py-4">Verification</th>
                </tr>
              </thead>
              <tbody>
                <tr  class="border-b border-gray-100">
                  <td class="py-4">1/3/2024</td>
                  <td class="py-4">Jackson</td>
                  <td class="py-4">$2000</td>
                  <td class="py-4">1234568</td>
                  <td class="py-4 text-blue-400">Submitted</td>
                  <td class="py-4 ">bla bla bla</td>
                  <td class="py-4 ">✅Validated</td>
                </tr>
                 <tr  class="border-b border-gray-100">
                  <td class="py-4">1/3/2024</td>
                  <td class="py-4">Jackson</td>
                  <td class="py-4">$2000</td>
                  <td class="py-4">1234568</td>
                  <td class="py-4 text-green-400">Paid</td>
                  <td class="py-4 ">bla bla bla</td>
                  <td class="py-4 ">❗Needs Validation</td>
                </tr>
                <tr  class="border-b border-gray-100">
                  <td class="py-4">1/3/2024</td>
                  <td class="py-4">Jackson</td>
                  <td class="py-4">$2000</td>
                  <td class="py-4">1234568</td>
                  <td class="py-4 text-red-500">Denied</td>
                  <td class="py-4 ">bla bla bla</td>
                  <td class="py-4 ">✅Validated</td>
                </tr>
                 <tr  class="border-b border-gray-100">
                  <td class="py-4">1/3/2024</td>
                  <td class="py-4">Jackson</td>
                  <td class="py-4">$2000</td>
                  <td class="py-4">1234568</td>
                  <td class="py-4 text-orange-400">Pending</td>
                  <td class="py-4 ">bla bla bla</td>
                  <td class="py-4 ">❗Needs Validation</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
  
  </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AutomatedClaimCreation{
  onSubmit() {
    // Handle form submission
  }
}