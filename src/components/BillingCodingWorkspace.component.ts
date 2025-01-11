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
                Billing & Coding Workspace
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
              <div class="min-h-screen bg-gray-50 p-6">
                <!-- Top Navigation -->
                <nav class="mb-6">
                  <ul class="flex space-x-8">
                    <li>
                      <a href="#" class="text-gray-600 hover:text-blue-600"
                        >Medications</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-gray-600 hover:text-blue-600"
                        >VOBs</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-gray-600 hover:text-blue-600"
                        >Coding Tools</a
                      >
                    </li>
                  </ul>
                </nav>

                <!-- Search Section -->
                <div class="flex justify-between items-center mb-8">
                  <div class="flex items-center gap-4">
                    <div>
                      <label class="block text-sm text-gray-600 mb-1"
                        >Patient Name</label
                      >
                      <input
                        type="text"
                        placeholder="Search..."
                        class="w-64 px-4 py-2 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Search
                    </button>
                  </div>
                  <button
                    class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Q+A Chatbot
                  </button>
                </div>

                <!-- Main Content Grid -->
                <div class="grid grid-cols-3 gap-6">
                  <!-- Patient Overview Card -->
                  <div class="bg-white rounded-lg p-6 shadow-sm">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">
                      Patient and Appointment Overview
                    </h2>
                    <div class="space-y-3">
                      <p>
                        <span class="font-medium">Patient Name:</span> Jackson
                      </p>
                      <p>
                        <span class="font-medium">Patient Phone:</span>
                        +1234567890
                      </p>
                      <p>
                        <span class="font-medium">Patient Email:</span> veveve
                      </p>
                      <p>
                        <span class="font-medium">Appointment Details:</span>
                        lorem ipsum
                      </p>
                    </div>
                  </div>

                  <!-- Billing and Clinical Data Card -->
                  <div class="bg-white rounded-lg p-6 shadow-sm">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">
                      Billing and Clinical Data
                    </h2>

                    <div class="mb-6">
                      <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-medium text-blue-600">
                          Meds & Injections
                        </h3>
                        <button class="text-gray-400">▼</button>
                      </div>

                      <div class="space-y-2">
                        <div class="flex justify-between items-center">
                          <span>Medicine Name</span>
                          <button class="text-gray-400">⋮</button>
                        </div>
                        <div class="flex justify-between items-center">
                          <span>Medicine Name</span>
                          <button class="text-gray-400">⋮</button>
                        </div>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <button
                        class="w-full py-2 px-4 text-left flex items-center justify-between hover:bg-gray-50 rounded"
                      >
                        <span>Chart Notes</span>
                        <span>›</span>
                      </button>
                      <button
                        class="w-full py-2 px-4 text-left flex items-center justify-between hover:bg-gray-50 rounded"
                      >
                        <span>Previous Treatments</span>
                        <span>›</span>
                      </button>
                      <button
                        class="w-full py-2 px-4 text-left flex items-center justify-between hover:bg-gray-50 rounded"
                      >
                        <span>Patient Travel</span>
                        <span>›</span>
                      </button>
                    </div>
                  </div>

                  <!-- Tools and Resources Card -->
                  <div class="bg-white rounded-lg p-6 shadow-sm">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">
                      Tools and Resources
                    </h2>

                    <div class="mb-6">
                      <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-medium text-blue-600">
                          Coding Tool
                        </h3>
                        <button class="text-gray-400">▼</button>
                      </div>

                      <div class="space-y-3">
                        <div class="flex justify-between items-center">
                          <span>Tool Name</span>
                          <button class="text-gray-400">⋮</button>
                        </div>
                        <div class="flex justify-between items-center">
                          <span>C PT</span>
                          <button class="text-gray-400">⋮</button>
                        </div>
                        <div class="flex justify-between items-center">
                          <span>ICD</span>
                          <button class="text-gray-400">⋮</button>
                        </div>
                        <div class="flex justify-between items-center">
                          <span>Modifiers</span>
                          <button class="text-gray-400">⋮</button>
                        </div>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <button
                        class="w-full py-2 px-4 text-left flex items-center justify-between hover:bg-gray-50 rounded"
                      >
                        <span>VOBs & PAs</span>
                        <span>›</span>
                      </button>
                      <button
                        class="w-full py-2 px-4 text-left flex items-center justify-between hover:bg-gray-50 rounded"
                      >
                        <span>Insurance Contract Details</span>
                        <span>›</span>
                      </button>
                      <button
                        class="w-full py-2 px-4 text-left flex items-center justify-between hover:bg-gray-50 rounded"
                      >
                        <span>Similar Bills</span>
                        <span>›</span>
                      </button>
                      <button
                        class="w-full py-2 px-4 text-left flex items-center justify-between hover:bg-gray-50 rounded"
                      >
                        <span>Previous Bills</span>
                        <span>›</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="mt-8 flex justify-end">
                  <button
                    class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Submit Claim
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
export class BillingCodingWorkspace{
  onSubmit() {
    // Handle form submission
  }
}