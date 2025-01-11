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
                Real Time Eligibility Check
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
              class=" w-full max-w-[1042px] max-md:mt-10 max-md:max-w-full"
            >
              <div class="space-y-6 p-6">
                <!-- Image Upload Fields -->
                <div class="grid grid-cols-2 gap-6">
                  <div
                    class="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50"
                  >
                    <div class="text-center">
                      <div class="text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-12 h-12 mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm9 7a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p class="mt-2 text-sm font-semibold text-gray-700">
                        Insurance card front
                      </p>
                      <p class="text-xs text-gray-400">JPEG, PNG, PDF</p>
                    </div>
                  </div>
                  <div
                    class="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50"
                  >
                    <div class="text-center">
                      <div class="text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-12 h-12 mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm9 7a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p class="mt-2 text-sm font-semibold text-gray-700">
                        Insurance card back
                      </p>
                      <p class="text-xs text-gray-400">JPEG, PNG, PDF</p>
                    </div>
                  </div>
                </div>

                <!-- Form Fields -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Name</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      value="Jackson D."
                      readonly
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Insurance ID number</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      value="1234"
                      readonly
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Group number</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      value="1234"
                      readonly
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Payer name</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      value="1234"
                      readonly
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Coverage details</label
                    >
                    <textarea
                      rows="4"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      readonly
                    >
bla bla bla</textarea
                    >
                  </div>
                </div>

                <!-- Verify Button -->
                <div class="flex justify-center">
                  <button
                    class="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                  >
                    Verify
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class EligibilityCheck{
  onSubmit() {
    // Handle form submission
  }
}