import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-ad-config",
  template: `
    <div class="overflow-hidden bg-white">
      <div class="flex gap-5 max-md:flex-col">
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
              <form
                class="flex flex-col mt-2 w-full max-md:mt-10 max-md:max-w-full"
                (ngSubmit)="onSubmit()"
              >
                <label class="text-sm font-semibold text-slate-700">
                  Define a required number of clicks
                </label>
                <div
                  class="flex flex-wrap gap-4 items-start mt-5 max-w-full w-[563px]"
                >
                  <!-- Time selection -->
                  <div
                    class="flex flex-col flex-1 shrink justify-center basis-0 min-h-[66px] min-w-[240px]"
                  >
                    <label
                      for="timeSelect"
                      class="flex gap-2.5 justify-center items-center self-start text-base tracking-wide leading-7 whitespace-nowrap h-[21px] rounded-[100px] text-neutral-400"
                    >
                      Time
                    </label>
                    <select
                      id="timeSelect"
                      class="flex overflow-hidden flex-1 gap-2.5 items-center px-3.5 py-7 text-sm font-medium tracking-normal leading-snug rounded-lg bg-slate-100 size-full text-neutral-400"
                    >
                      <option value="24">24 hours</option>
                    </select>
                  </div>
                  <!-- Number of clicks input -->
                  <div
                    class="flex flex-col flex-1 shrink justify-center basis-0 min-h-[64px] min-w-[240px]"
                  >
                    <label
                      for="clicksInput"
                      class="flex gap-2.5 justify-center items-center self-start text-base tracking-wide leading-7 h-[21px] rounded-[100px] text-neutral-400"
                    >
                      Number of clicks
                    </label>
                    <input
                      type="number"
                      id="clicksInput"
                      class="flex overflow-hidden flex-1 gap-2.5 items-center px-3.5 py-7 rounded-lg bg-slate-100 size-full"
                    />
                  </div>
                </div>
                <div class="mb-6">
                  <label class="block font-semibold mb-2"
                    >Set a minimum number of appointments booked within a chosen
                    duration</label
                  >
                  <div class="flex items-center space-x-4">
                    <select class="border rounded p-2">
                      <option>24 hours</option>
                      <option>48 hours</option>
                    </select>
                    <input
                      type="number"
                      placeholder="Number of appointments"
                      class="border rounded p-2 w-32"
                    />
                  </div>
                </div>
                <!-- Form Submission Requirement -->
                <div class="mb-6">
                  <label class="block font-semibold mb-2"
                    >Specify a minimum form submission requirement</label
                  >
                  <textarea class="border rounded p-2 w-full h-24"></textarea>
                </div>

                <!-- Form submission buttons -->
                <div
                  class="flex gap-2.5 items-end self-start mt-5 text-sm font-medium text-center"
                >
                  <button
                    type="button"
                    class="gap-2.5 self-stretch py-3.5 px-12 text-blue-600 whitespace-nowrap rounded-3xl bg-slate-100 min-h-[47px] w-[151px] max-md:px-5"
                  >
                    Schedule
                  </button>
                  <button
                    type="submit"
                    class="gap-2.5 self-stretch px-12 py-3.5 text-white bg-blue-600 rounded-3xl min-h-[47px] w-[151px] max-md:px-5"
                  >
                    Post Now
                  </button>
                </div>
              </form>
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
export class AdsConfigComponent {
  onSubmit() {
    // Handle form submission
  }
}