import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-ad-config",
  template: `
   <div class="overflow-hidden bg-white" role="main">
      <div class="flex gap-5 max-md:flex-col">
        <main class="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
          <div class="flex flex-col items-center w-full max-md:max-w-full">
            <header
              class="flex flex-wrap gap-5 justify-between px-9 py-5 w-full bg-white max-md:px-5 max-md:max-w-full"
            >
              <h1 class="my-auto text-2xl font-semibold text-slate-700">
                Payment Posting
              </h1>
              <div
                class="flex flex-wrap gap-8 items-center text-base whitespace-nowrap text-slate-400"
              >
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
                    <div
                      class="self-end mt-2 text-2xl"
                      aria-label="Payment amount"
                    >
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
                    <div
                      class="self-end mt-2 text-2xl"
                      aria-label="Payment amount"
                    >
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
            <section
              class="mt-11 w-full max-w-[1042px] max-md:mt-10 max-md:max-w-full"
            >
              <div class="flex flex-wrap gap-5 justify-between mb-8">
                <form class="flex flex-wrap gap-4 items-end">
                  <div class="flex flex-col min-w-[240px]">
                    <label
                      for="fromDate"
                      class="mb-2 text-base tracking-wide text-neutral-400"
                      >From Date</label
                    >
                    <input
                      type="date"
                      id="fromDate"
                      class="px-3.5 py-3 text-sm font-medium rounded-lg bg-slate-100 text-neutral-400"
                    />
                  </div>
                  <div class="flex flex-col min-w-[240px]">
                    <label
                      for="toDate"
                      class="mb-2 text-base tracking-wide text-neutral-400"
                      >To Date</label
                    >
                    <input
                      type="date"
                      id="toDate"
                      class="px-3.5 py-3 text-sm font-medium rounded-lg bg-slate-100 text-neutral-400"
                    />
                  </div>
                  <button
                    class="px-12 ml-[150px] py-3 text-sm font-medium text-white bg-blue-600 rounded-3xl"
                  >
                    Flagged Payments
                  </button>
                </form>
              </div>

              <table class="w-full text-sm" role="table">
                <thead>
                  <tr class="text-slate-400 font-medium">
                    <th class="text-left w-[174px] py-4">Date</th>
                    <th class="text-left w-[174px] py-4">Payer name</th>
                    <th class="text-left w-[174px] py-4">Amount</th>
                    <th class="text-left w-[174px] py-4">Associated claims</th>
                    <th class="text-left w-[174px] py-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-100">
                    <td class="py-4">1/3/2024</td>
                    <td class="py-4">Jackson</td>
                    <td class="py-4">$2000</td>
                    <td class="py-4">1234568</td>
                    <td class="py-4 text-orange-400">Awaiting Payment</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <td class="py-4">1/3/2024</td>
                    <td class="py-4">Jackson</td>
                    <td class="py-4">$2000</td>
                    <td class="py-4">1234568</td>
                    <td class="py-4 text-green-400">Received</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <td class="py-4">1/3/2024</td>
                    <td class="py-4">Jackson</td>
                    <td class="py-4">$2000</td>
                    <td class="py-4">1234568</td>
                    <td class="py-4 text-red-500">Discrepancy</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <td class="py-4">1/3/2024</td>
                    <td class="py-4">Jackson</td>
                    <td class="py-4">$2000</td>
                    <td class="py-4">1234568</td>
                    <td class="py-4 text-green-400">Received</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <td class="py-4">1/3/2024</td>
                    <td class="py-4">Jackson</td>
                    <td class="py-4">$2000</td>
                    <td class="py-4">1234568</td>
                    <td class="py-4 text-red-500">Mismatched Payment</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <td class="py-4">1/3/2024</td>
                    <td class="py-4">Jackson</td>
                    <td class="py-4">$2000</td>
                    <td class="py-4">1234568</td>
                    <td class="py-4 text-green-400">Received</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <td class="py-4">1/3/2024</td>
                    <td class="py-4">Jackson</td>
                    <td class="py-4">$2000</td>
                    <td class="py-4">1234568</td>
                    <td class="py-4 text-green-400">Received</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <td class="py-4">1/3/2024</td>
                    <td class="py-4">Jackson</td>
                    <td class="py-4">$2000</td>
                    <td class="py-4">1234568</td>
                    <td class="py-4 text-green-400">Received</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <td class="py-4">1/3/2024</td>
                    <td class="py-4">Jackson</td>
                    <td class="py-4">$2000</td>
                    <td class="py-4">1234568</td>
                    <td class="py-4 text-green-400">Received</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </main>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PaymentPosting{
  onSubmit() {
    // Handle form submission
  }
}