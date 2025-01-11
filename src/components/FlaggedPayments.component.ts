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
                Flagged Payments
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

            <section
              class="mt-11 w-full max-w-[1042px] max-md:mt-10 max-md:max-w-full"
            >
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
                    <td class="py-4 text-red-500">Flagged</td>
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
export class FlaggedPayments{
  onSubmit() {
    // Handle form submission
  }
}