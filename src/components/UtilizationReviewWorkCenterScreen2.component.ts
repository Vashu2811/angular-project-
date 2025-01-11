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
                Utilization Review Work Center
              </h1>
              <div
                class="flex flex-wrap gap-8 items-center text-base whitespace-nowrap text-slate-400"
              >
                <button
                  type="submit"
                  class="px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded-3xl"
                >
                  Check Eligibility
                </button>
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

            <div class="space-y-10 p-6">
              <!-- Requester Information -->
              <div>
                <h2 class="text-lg font-semibold text-gray-800 mb-4">
                  Requester Information
                </h2>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Requester’s Name *</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      value="Jackson D."
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Requester’s Email</label
                    >
                    <input
                      type="email"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      value="dkjh@example"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Client Code</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      value="1234"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Facility</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      value="Knoxvilles"
                    />
                  </div>
                  <div class="col-span-2">
                    <label class="block text-sm font-medium text-gray-700"
                      >Services</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      value="Physiotherapy"
                    />
                  </div>
                </div>
              </div>

              <!-- Patient Information -->
              <div>
                <h2 class="text-lg font-semibold text-gray-800 mb-4">
                  Patient Information
                </h2>
                <div class="space-y-4">
                  <label class="block text-sm font-medium text-gray-700"
                    >Search for a patient...</label
                  >
                  <input
                    type="text"
                    class="w-full px-4 py-2 border rounded-lg bg-gray-50"
                    placeholder="Search for a patient..."
                  />
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700"
                        >First name *</label
                      >
                      <input
                        type="text"
                        class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700"
                        >Last name *</label
                      >
                      <input
                        type="text"
                        class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Date of Birth *</label
                    >
                    <input
                      type="date"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Social Security Number</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                    />
                  </div>
                </div>
              </div>

              <!-- Insurance Information -->
              <div>
                <h2 class="text-lg font-semibold text-gray-800 mb-4">
                  Insurance Information
                </h2>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Primary Insurance Company *</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      placeholder="Primary Insurance Company"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Primary Insurance Phone No.</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      placeholder="Social Security Number"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Member ID *</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      placeholder="Member ID"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Subscriber Address</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      placeholder="Subscriber Address"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Relationship to Subscriber</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      placeholder="Relationship to Subscriber"
                    />
                  </div>
                  <div class="grid grid-cols-3 gap-4 col-span-2">
                    <div>
                      <label class="block text-sm font-medium text-gray-700"
                        >City</label
                      >
                      <input
                        type="text"
                        class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700"
                        >State</label
                      >
                      <input
                        type="text"
                        class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700"
                        >Zipcode</label
                      >
                      <input
                        type="text"
                        class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                        placeholder="Zipcode"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Secondary Insurance Information -->
              <div>
                <h2 class="text-lg font-semibold text-gray-800 mb-4">
                  Secondary Insurance Information
                </h2>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Secondary Insurance Company</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      placeholder="Secondary Insurance Company"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Secondary Insurance Phone No.</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      placeholder="Secondary Insurance Phone..."
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Secondary Member ID</label
                    >
                    <input
                      type="text"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      placeholder="Secondary Member ID"
                    />
                  </div>
                  <div class="col-span-2">
                    <label class="block text-sm font-medium text-gray-700"
                      >Coverage details</label
                    >
                    <textarea
                      rows="4"
                      class="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50"
                      placeholder="Coverage details"
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="flex justify-center">
                <button
                  class="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class UtilizationReviewWorkCenterScreen2{
  onSubmit() {
    // Handle form submission
  }
}