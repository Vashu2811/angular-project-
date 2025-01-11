import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-ad-config",
  template: `
    <div class="overflow-hidden bg-white" role="main">
      <div class="flex gap-5 max-md:flex-col">
        <main
          class="flex  items-center flex-col ml-5 w-full  max-md:ml-0 max-md:w-full"
        >
          <div class="flex flex-col items-center w-full max-md:max-w-full">
            <header
              class="flex flex-wrap gap-5 justify-between px-9 py-5 w-full bg-white max-md:px-5 max-md:max-w-full"
            >
              <h1 class="my-auto text-2xl font-semibold text-slate-700">
                Validate Claim
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
              <div class="flex gap-3  p-8 rounded-lg">
                <!-- Left Form Section -->
                <div class="w-full md:w-1/2 lg:w-2/3 space-y-6">
                  <!-- Select Patient -->
                  <div>
                    <label class="block text-sm font-medium text-gray-600"
                      >Select Patient</label
                    >
                    <div class="relative mt-1">
                      <select
                        class="block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Jackson D.</option>
                      </select>
                    </div>
                  </div>

                  <!-- CPT Codes -->
                  <div>
                    <label class="block text-sm font-medium text-gray-600"
                      >CPT codes</label
                    >
                    <input
                      type="text"
                      placeholder="1234"
                      class="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <!-- ICD Codes -->
                  <div>
                    <label class="block text-sm font-medium text-gray-600"
                      >ICD codes</label
                    >
                    <input
                      type="text"
                      placeholder="1234"
                      class="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <!-- PA Numbers -->
                  <div>
                    <label class="block text-sm font-medium text-gray-600"
                      >PA numbers</label
                    >
                    <input
                      type="text"
                      placeholder="1234"
                      class="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <!-- Submit Button -->
                  <button
                    class="w-full md:w-auto px-8 py-2 text-white bg-blue-500 rounded-3xl shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Submit
                  </button>
                </div>

                <!-- Right Summary Section -->
                <div
                  class="w-full mt-6 md:mt-0 md:w-1/2 lg:w-1/3  pl-8 pt-1 rounded-lg text-left "
                >
                  <div
                    class="shadow-md rounded-lg  bg-gray-100 border border-gray-200 p-2"
                  >
                    <h3 class="text-lg font-semibold text-blue-900">Summary</h3>
                    <p class="mt-4 text-gray-700">
                      <strong>Charges:</strong> $500
                    </p>
                    <p class="text-gray-700">
                      <strong>Patient:</strong> Jackson
                    </p>
                    <p class="text-gray-700">
                      <strong>Insurance details:</strong> lorem ipsum
                    </p>
                  </div>
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
export class ValidateClaim {
  onSubmit() {
    // Handle form submission
  }
}