import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-ad-config",
  template: `
  <div class="overflow-hidden bg-white">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col grow font-semibold"></div>
        <div class="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
          <header
            class="flex flex-wrap gap-5 justify-between px-9 py-5 w-full bg-white max-md:px-5 max-md:max-w-full"
          >
            <h1 class="my-auto text-2xl font-semibold text-slate-700">
              Ad Settings Configuration
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

          <div class="flex shrink-0 h-px bg-slate-200 max-md:max-w-full"></div>
          <div class="self-center mt-8 w-full max-w-[1047px] max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col">
              <div class="w-[500px]">
                <div>
                  <form class="space-y-6">
                    <!-- Clinics Dropdown -->
                    <div>
                      <label
                        for="clinics"
                        class="block font-semibold text-sm mb-2"
                        >Clinics</label
                      >
                      <select id="clinics" class="w-full p-3 border rounded">
                        <option>Select</option>
                        <option>Clinic A</option>
                        <option>Clinic B</option>
                      </select>
                    </div>

                    <!-- Content Textarea -->
                    <div>
                      <label
                        for="content"
                        class="block font-semibold text-sm mb-2"
                        >Content</label
                      >
                      <textarea
                        id="content"
                        placeholder="Content"
                        class="w-full p-3 border rounded"
                      ></textarea>
                      <div class="flex space-x-2 mt-2">
                        <span>📄</span>
                        <span>😊</span>
                        <div class="ml-auto flex space-x-2">
                          <select class="border rounded p-1">
                            <option>AI</option>
                          </select>
                          <select class="border rounded p-1">
                            <option>Template</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <!-- Media Upload -->
                    <div>
                      <label
                        for="media"
                        class="block font-semibold text-sm mb-2"
                        >Add Media</label
                      >
                      <div
                        class="flex items-center justify-center w-full h-32 border rounded"
                      >
                        <span class="text-gray-400">📷 Add Media</span>
                      </div>
                    </div>

                    <!-- Campaign Name -->
                    <div>
                      <label
                        for="campaignName"
                        class="block font-semibold text-sm mb-2"
                        >Campaign Name</label
                      >
                      <input
                        id="campaignName"
                        type="text"
                        class="w-full p-3 border rounded"
                      />
                    </div>

                    <!-- Daily Budget -->
                    <div>
                      <label
                        for="dailyBudget"
                        class="block font-semibold text-sm mb-2"
                        >Daily Budget ($ USD) *</label
                      >
                      <input
                        id="dailyBudget"
                        type="text"
                        class="w-full p-3 border rounded"
                      />
                    </div>

                    <!-- Gender Dropdown -->
                    <div>
                      <label
                        for="gender"
                        class="block font-semibold text-sm mb-2"
                        >Gender</label
                      >
                      <select id="gender" class="w-full p-3 border rounded">
                        <option>All</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>

                    <!-- Age Range Inputs -->
                    <div class="flex space-x-4">
                      <div class="flex-1">
                        <label
                          for="ageMin"
                          class="block font-semibold text-sm mb-2"
                          >Age Minimum</label
                        >
                        <input
                          id="ageMin"
                          type="number"
                          class="w-full p-3 border rounded"
                        />
                      </div>
                      <div class="flex-1">
                        <label
                          for="ageMax"
                          class="block font-semibold text-sm mb-2"
                          >Age Maximum</label
                        >
                        <input
                          id="ageMax"
                          type="number"
                          class="w-full p-3 border rounded"
                        />
                      </div>
                    </div>

                    <!-- State/Province -->
                    <div>
                      <label
                        for="state"
                        class="block font-semibold text-sm mb-2"
                        >State/Province</label
                      >
                      <input
                        id="state"
                        type="text"
                        class="w-full p-3 border rounded"
                      />
                    </div>

                    <!-- City -->
                    <div>
                      <label for="city" class="block font-semibold text-sm mb-2"
                        >City</label
                      >
                      <input
                        id="city"
                        type="text"
                        class="w-full p-3 border rounded"
                      />
                    </div>

                    <!-- Language Dropdown -->
                    <div>
                      <label
                        for="language"
                        class="block font-semibold text-sm mb-2"
                        >Language</label
                      >
                      <select id="language" class="w-full p-3 border rounded">
                        <option>Eng</option>
                        <option>Spanish</option>
                      </select>
                    </div>

                    <!-- Buttons -->
                    <div class="flex space-x-4">
                      <button
                        type="button"
                        class="bg-gray-500 text-white px-6 py-2 rounded"
                      >
                        Schedule
                      </button>
                      <button
                        type="button"
                        class="bg-blue-500 text-white px-6 py-2 rounded"
                      >
                        Post Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                class="flex overflow-hidden flex-col items-center max-md:mt-9 max-md:max-w-full"
              >
                <article
                  class="flex overflow-hidden flex-col items-center px-2.5 py-6 w-full max-w-md leading-none bg-white rounded border border-solid border-black border-opacity-10 max-md:max-w-full"
                >
                  <header
                    class="flex overflow-hidden gap-2 items-start whitespace-nowrap max-md:max-w-full"
                  >
                    <div
                      class="flex overflow-hidden gap-1.5 items-center min-w-[240px]"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/61f0513a1bb4fa140754584792824f29f600a20c56e695b7c7f0b214fc05d79b?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                        alt="Page profile picture"
                        class="object-contain shrink-0 self-stretch my-auto aspect-square w-[35px]"
                      />
                      <div
                        class="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[364px]"
                      >
                        <h2 class="text-sm font-medium text-blue-900">
                          Page_Name
                        </h2>
                        <div
                          class="flex overflow-hidden gap-1 items-center self-start text-xs text-zinc-500"
                        >
                          <span>Sponsored</span>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1550f44d938485e292f5a9d0898d85b9c3461913449d5f337fb09ea781b79f26?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                            alt=""
                            class="object-contain shrink-0 self-stretch my-auto aspect-square w-[11px]"
                          />
                        </div>
                      </div>
                    </div>
                  </header>

                  <div
                    class="flex overflow-hidden flex-col items-center mt-2 w-full text-xs tracking-normal text-blue-900"
                  >
                    <p class="leading-4 text-neutral-800 max-md:max-w-full">
                      Hey #Location#! For the next week, we are giving away 50
                      Vouchers for a KAP Session in order to Optimize Brain
                      Health, along with an Outcome Discovery Consultation to
                      assess treatment options and chances for success in
                      relation to your goals, for just $49 dollars (Normally a
                      $179 Total Package Value).
                    </p>
                    <div class="mt-1 max-md:max-w-full">
                      #tagOne #tagTwo #tagThree
                    </div>
                    <a href="https://enter-url" class="mt-1 max-md:max-w-full"
                      >https://enter-url</a
                    >
                  </div>
                </article>

                <div
                  class="flex max-w-full bg-blue-900 min-h-[234px] w-[448px]"
                  role="img"
                  aria-label="Ad preview image"
                ></div>

                <footer
                  class="flex overflow-hidden flex-col items-center py-2 pr-2.5 pl-3 w-full text-xs bg-white rounded-none border border-solid border-black border-opacity-10 text-zinc-500 max-md:max-w-full"
                >
                  <div
                    class="flex overflow-hidden gap-10 items-center leading-none text-right max-md:max-w-full"
                  >
                    <div
                      class="flex overflow-hidden gap-1 items-center self-stretch my-auto whitespace-nowrap"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8a396a9b80053558107995b8a900e4c10c054a7fccdd6a3c04dfc0efff4d71d?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                        alt="Like icon"
                        class="object-contain shrink-0 self-stretch my-auto aspect-[1.84] w-[35px]"
                      />
                      <span>541</span>
                    </div>
                    <div
                      class="flex overflow-hidden gap-1.5 items-center self-stretch my-auto"
                    >
                      <span>26 Comments</span>
                      <span>87 Shares</span>
                    </div>
                  </div>

                  <div
                    class="flex mt-2 max-w-full bg-gray-300 min-h-[1px] w-[425px]"
                  ></div>

                  <div
                    class="flex overflow-hidden gap-10 items-center mt-2 font-medium leading-4 whitespace-nowrap"
                  >
                    <button
                      class="flex overflow-hidden gap-1.5 items-center"
                      aria-label="Like"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/72b35000c1d94e61a6619b018d05ff8d4722e74dfe36d9258a447140c0dbc8f9?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                        alt=""
                        class="object-contain shrink-0 w-4 aspect-square"
                      />
                      <span>Like</span>
                    </button>
                    <button
                      class="flex overflow-hidden gap-1.5 items-center"
                      aria-label="Comment"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f43e35e51864596346ed7aeb2fa9167c94a377703349a10a176c12a6cec79ea?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                        alt=""
                        class="object-contain shrink-0 aspect-[0.94] w-[15px]"
                      />
                      <span>Comment</span>
                    </button>
                    <button
                      class="flex overflow-hidden gap-1.5 items-center"
                      aria-label="Share"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f84c74b6397cac907e6b4d0fd2edce4ea9414d34f75212164eabd77910463da?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                        alt=""
                        class="object-contain shrink-0 aspect-[1.12] w-[18px]"
                      />
                      <span>Share</span>
                    </button>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CreateAdsConfigComponent {
  onSubmit() {
    // Handle form submission
  }
}