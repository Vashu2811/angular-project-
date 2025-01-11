import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  template: `
   <div class="overflow-hidden bg-white">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col grow font-semibold"></div>
        <div class="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
          <div class="px-9 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
            <header
              class="flex flex-wrap gap-5 justify-between px-9 py-5 w-full bg-white max-md:px-5 max-md:max-w-full"
            >
              <h1 class="my-auto text-2xl font-semibold text-slate-700">
                Facebook Posts
              </h1>
              <div
                class="flex flex-wrap gap-8 items-center text-base whitespace-nowrap text-slate-400"
              >
                <button
                  type="submit"
                  class="px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded-3xl"
                >
                  Create New Post
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
          </div>
          <div class="flex shrink-0 h-px bg-slate-200 max-md:max-w-full"></div>
          <div
            class="flex flex-col self-center py-6 mt-7 w-full text-sm bg-white rounded-3xl max-w-[1032px] max-md:max-w-full"
          >
            <div
              class="flex flex-wrap gap-10 w-full font-medium max-w-[980px] text-slate-400 max-md:max-w-full"
            >
              <div class="flex gap-10">
                <div>Created At</div>
                <div>Time</div>
                <div>Active Time</div>
                <div>Per Day</div>
                <div>Location</div>
                <div>Status</div>
                <div>Media</div>
                <div>Audience</div>
                <div>Actions</div>
              </div>
            </div>
            <div
              class="flex shrink-0 mt-3.5 h-px bg-slate-200 max-md:max-w-full"
            ></div>
            <div
              class="flex flex-col mt-3.5 text-neutral-800 max-md:max-w-full"
            >
              <!-- Table rows with data -->
              <div>
                <div class="flex flex-col w-full max-md:max-w-full">
                  <div class="flex flex-wrap gap-10 max-w-full w-[987px]">
                    <div class="flex gap-8 my-auto">
                      <div>06/25/2024</div>
                      <div class="my-auto basis-auto">15:36</div>
                    </div>
                    <div
                      class="flex flex-wrap flex-auto gap-10 items-center max-md:max-w-full"
                    >
                      <div class="self-stretch my-auto">0 days 1 hours</div>
                      <div class="self-stretch my-auto">$2.00</div>
                      <div class="self-stretch my-auto">Countries: CA</div>
                      <div class="self-stretch my-auto">PAUSED</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87ce530c46f3ed3a9d5f00aa8249b1c345f1645fec9837239a6e621cbc2be665?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                        alt="Post media preview"
                        class="object-contain shrink-0 self-stretch aspect-[1.58] w-[84px]"
                      />
                      <div class="self-stretch my-auto">18 TO 65</div>
                      <button tabindex="0" aria-label="More actions">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb39299ece4ddb24b248c10a0173d1fd2a3f728575b1c3bc262a91bfdc67288?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                          alt=""
                          class="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    class="flex mt-4 w-full bg-gray-100 min-h-[1px] max-md:max-w-full"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex flex-col w-full max-md:max-w-full">
                  <div class="flex flex-wrap gap-10 max-w-full w-[987px]">
                    <div class="flex gap-8 my-auto">
                      <div>06/25/2024</div>
                      <div class="my-auto basis-auto">15:36</div>
                    </div>
                    <div
                      class="flex flex-wrap flex-auto gap-10 items-center max-md:max-w-full"
                    >
                      <div class="self-stretch my-auto">0 days 1 hours</div>
                      <div class="self-stretch my-auto">$2.00</div>
                      <div class="self-stretch my-auto">Countries: CA</div>
                      <div class="self-stretch my-auto">PAUSED</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87ce530c46f3ed3a9d5f00aa8249b1c345f1645fec9837239a6e621cbc2be665?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                        alt="Post media preview"
                        class="object-contain shrink-0 self-stretch aspect-[1.58] w-[84px]"
                      />
                      <div class="self-stretch my-auto">18 TO 65</div>
                      <button tabindex="0" aria-label="More actions">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb39299ece4ddb24b248c10a0173d1fd2a3f728575b1c3bc262a91bfdc67288?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                          alt=""
                          class="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    class="flex mt-4 w-full bg-gray-100 min-h-[1px] max-md:max-w-full"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex flex-col w-full max-md:max-w-full">
                  <div class="flex flex-wrap gap-10 max-w-full w-[987px]">
                    <div class="flex gap-8 my-auto">
                      <div>06/25/2024</div>
                      <div class="my-auto basis-auto">15:36</div>
                    </div>
                    <div
                      class="flex flex-wrap flex-auto gap-10 items-center max-md:max-w-full"
                    >
                      <div class="self-stretch my-auto">0 days 1 hours</div>
                      <div class="self-stretch my-auto">$2.00</div>
                      <div class="self-stretch my-auto">Countries: CA</div>
                      <div class="self-stretch my-auto">PAUSED</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87ce530c46f3ed3a9d5f00aa8249b1c345f1645fec9837239a6e621cbc2be665?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                        alt="Post media preview"
                        class="object-contain shrink-0 self-stretch aspect-[1.58] w-[84px]"
                      />
                      <div class="self-stretch my-auto">18 TO 65</div>
                      <button tabindex="0" aria-label="More actions">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb39299ece4ddb24b248c10a0173d1fd2a3f728575b1c3bc262a91bfdc67288?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                          alt=""
                          class="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    class="flex mt-4 w-full bg-gray-100 min-h-[1px] max-md:max-w-full"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex flex-col w-full max-md:max-w-full">
                  <div class="flex flex-wrap gap-10 max-w-full w-[987px]">
                    <div class="flex gap-8 my-auto">
                      <div>06/25/2024</div>
                      <div class="my-auto basis-auto">15:36</div>
                    </div>
                    <div
                      class="flex flex-wrap flex-auto gap-10 items-center max-md:max-w-full"
                    >
                      <div class="self-stretch my-auto">0 days 1 hours</div>
                      <div class="self-stretch my-auto">$2.00</div>
                      <div class="self-stretch my-auto">Countries: CA</div>
                      <div class="self-stretch my-auto">PAUSED</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87ce530c46f3ed3a9d5f00aa8249b1c345f1645fec9837239a6e621cbc2be665?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                        alt="Post media preview"
                        class="object-contain shrink-0 self-stretch aspect-[1.58] w-[84px]"
                      />
                      <div class="self-stretch my-auto">18 TO 65</div>
                      <button tabindex="0" aria-label="More actions">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb39299ece4ddb24b248c10a0173d1fd2a3f728575b1c3bc262a91bfdc67288?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                          alt=""
                          class="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    class="flex mt-4 w-full bg-gray-100 min-h-[1px] max-md:max-w-full"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex flex-col w-full max-md:max-w-full">
                  <div class="flex flex-wrap gap-10 max-w-full w-[987px]">
                    <div class="flex gap-8 my-auto">
                      <div>06/25/2024</div>
                      <div class="my-auto basis-auto">15:36</div>
                    </div>
                    <div
                      class="flex flex-wrap flex-auto gap-10 items-center max-md:max-w-full"
                    >
                      <div class="self-stretch my-auto">0 days 1 hours</div>
                      <div class="self-stretch my-auto">$2.00</div>
                      <div class="self-stretch my-auto">Countries: CA</div>
                      <div class="self-stretch my-auto">PAUSED</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87ce530c46f3ed3a9d5f00aa8249b1c345f1645fec9837239a6e621cbc2be665?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                        alt="Post media preview"
                        class="object-contain shrink-0 self-stretch aspect-[1.58] w-[84px]"
                      />
                      <div class="self-stretch my-auto">18 TO 65</div>
                      <button tabindex="0" aria-label="More actions">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb39299ece4ddb24b248c10a0173d1fd2a3f728575b1c3bc262a91bfdc67288?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                          alt=""
                          class="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    class="flex mt-4 w-full bg-gray-100 min-h-[1px] max-md:max-w-full"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex flex-col w-full max-md:max-w-full">
                  <div class="flex flex-wrap gap-10 max-w-full w-[987px]">
                    <div class="flex gap-8 my-auto">
                      <div>06/25/2024</div>
                      <div class="my-auto basis-auto">15:36</div>
                    </div>
                    <div
                      class="flex flex-wrap flex-auto gap-10 items-center max-md:max-w-full"
                    >
                      <div class="self-stretch my-auto">0 days 1 hours</div>
                      <div class="self-stretch my-auto">$2.00</div>
                      <div class="self-stretch my-auto">Countries: CA</div>
                      <div class="self-stretch my-auto">PAUSED</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87ce530c46f3ed3a9d5f00aa8249b1c345f1645fec9837239a6e621cbc2be665?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                        alt="Post media preview"
                        class="object-contain shrink-0 self-stretch aspect-[1.58] w-[84px]"
                      />
                      <div class="self-stretch my-auto">18 TO 65</div>
                      <button tabindex="0" aria-label="More actions">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb39299ece4ddb24b248c10a0173d1fd2a3f728575b1c3bc262a91bfdc67288?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                          alt=""
                          class="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    class="flex mt-4 w-full bg-gray-100 min-h-[1px] max-md:max-w-full"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex flex-col w-full max-md:max-w-full">
                  <div class="flex flex-wrap gap-10 max-w-full w-[987px]">
                    <div class="flex gap-8 my-auto">
                      <div>06/25/2024</div>
                      <div class="my-auto basis-auto">15:36</div>
                    </div>
                    <div
                      class="flex flex-wrap flex-auto gap-10 items-center max-md:max-w-full"
                    >
                      <div class="self-stretch my-auto">0 days 1 hours</div>
                      <div class="self-stretch my-auto">$2.00</div>
                      <div class="self-stretch my-auto">Countries: CA</div>
                      <div class="self-stretch my-auto">PAUSED</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87ce530c46f3ed3a9d5f00aa8249b1c345f1645fec9837239a6e621cbc2be665?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                        alt="Post media preview"
                        class="object-contain shrink-0 self-stretch aspect-[1.58] w-[84px]"
                      />
                      <div class="self-stretch my-auto">18 TO 65</div>
                      <button tabindex="0" aria-label="More actions">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb39299ece4ddb24b248c10a0173d1fd2a3f728575b1c3bc262a91bfdc67288?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                          alt=""
                          class="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    class="flex mt-4 w-full bg-gray-100 min-h-[1px] max-md:max-w-full"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex flex-col w-full max-md:max-w-full">
                  <div class="flex flex-wrap gap-10 max-w-full w-[987px]">
                    <div class="flex gap-8 my-auto">
                      <div>06/25/2024</div>
                      <div class="my-auto basis-auto">15:36</div>
                    </div>
                    <div
                      class="flex flex-wrap flex-auto gap-10 items-center max-md:max-w-full"
                    >
                      <div class="self-stretch my-auto">0 days 1 hours</div>
                      <div class="self-stretch my-auto">$2.00</div>
                      <div class="self-stretch my-auto">Countries: CA</div>
                      <div class="self-stretch my-auto">PAUSED</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87ce530c46f3ed3a9d5f00aa8249b1c345f1645fec9837239a6e621cbc2be665?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                        alt="Post media preview"
                        class="object-contain shrink-0 self-stretch aspect-[1.58] w-[84px]"
                      />
                      <div class="self-stretch my-auto">18 TO 65</div>
                      <button tabindex="0" aria-label="More actions">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb39299ece4ddb24b248c10a0173d1fd2a3f728575b1c3bc262a91bfdc67288?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                          alt=""
                          class="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    class="flex mt-4 w-full bg-gray-100 min-h-[1px] max-md:max-w-full"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class FaceBookPost {}