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
                Q+A Chatbot
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
              <div
                class="flex flex-col px-7 py-8 mt-0 w-full max-w-[1073px] max-md:px-5 max-md:max-w-full"
              >
                <div class="chat-messages" role="log" aria-live="polite">
                  <!-- Chat messages structure repeated for each message -->
                  <div
                    class="flex gap-3 items-start w-full text-base leading-relaxed text-slate-600 max-md:max-w-full"
                  >
                    <div
                      class="flex flex-col flex-1 shrink basis-0 min-w-[240px] w-[961px]"
                    >
                      <div
                        class="flex flex-col items-start w-full max-md:max-w-full"
                      >
                        <div class="gap-2.5 p-3 rounded-3xl bg-slate-50">
                          The question of whether androids dream of electric
                          sheep is the title and central theme of the science
                          fiction novel Do Androids Dream of Electric Sheep? by
                          Philip K. Dick. The book explores a world where
                          androids are indistinguishable from humans except for
                          a lack of empathy. The story follows Rick Deckard, a
                          bounty hunter who tracks down rogue androids. The
                          title refers to the empathy test used to distinguish
                          between humans and androids. The test involves
                          administering a fictional scenario and evaluating the
                          subject's emotional response. Electric sheep are rare,
                          real animals that people own as status symbols. Owning
                          one is seen as a sign of empathy and a connection to
                          the natural world. The book never definitively answers
                          the question of whether androids dream or not. It
                          explores the nature of reality, consciousness, and
                          what it means to be human. The book inspired the movie
                          Blade Runner, though there are some key differences in
                          plot.
                        </div>
                        <div
                          class="flex gap-3 items-center self-start min-h-[24px]"
                        >
                          <div
                            class="gap-2 self-stretch my-auto text-base font-bold tracking-normal leading-none whitespace-nowrap text-slate-800"
                          >
                            You
                          </div>
                          <time
                            class="self-stretch my-auto text-sm font-medium tracking-normal leading-none text-slate-400"
                          >
                            02:22 AM
                          </time>
                        </div>
                        <div class="gap-2.5 p-3 rounded-3xl bg-slate-50">
                          What modifiers are required for this procedure?
                        </div>
                        <div
                          class="flex gap-3 items-center self-start min-h-[24px]"
                        >
                          <div
                            class="gap-2 self-stretch my-auto text-base font-bold tracking-normal leading-none whitespace-nowrap text-slate-800"
                          >
                            Ai
                          </div>
                          <time
                            class="self-stretch my-auto text-sm font-medium tracking-normal leading-none text-slate-400"
                          >
                            02:22 AM
                          </time>
                        </div>
                        <div class="gap-2.5 p-3 rounded-3xl bg-slate-50">
                          The question of whether androids dream of electric
                          sheep is the title and central theme of the science
                          fiction novel Do Androids Dream of Electric Sheep? by
                          Philip K. Dick. The book explores a world where
                          androids are indistinguishable from humans except for
                          a lack of empathy. The story follows Rick Deckard, a
                          bounty hunter who tracks down rogue androids. The
                          title refers to the empathy test used to distinguish
                          between humans and androids. The test involves
                          administering a fictional scenario and evaluating the
                          subject's emotional response. Electric sheep are rare,
                          real animals that people own as status symbols. Owning
                          one is seen as a sign of empathy and a connection to
                          the natural world. The book never definitively answers
                          the question of whether androids dream or not. It
                          explores the nature of reality, consciousness, and
                          what it means to be human. The book inspired the movie
                          Blade Runner, though there are some key differences in
                          plot.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form
                class="flex overflow-hidden flex-wrap gap-4 items-start self-center p-3 mt-5 w-full bg-white rounded-full border border-solid shadow-md border-slate-300 max-w-[1047px] max-md:max-w-full"
              >
                <div
                  class="flex flex-wrap flex-1 shrink gap-1 items-center basis-0 min-w-[240px] max-md:max-w-full"
                >
                  <label for="chatInput" class="sr-only"
                    >Message slothGPT</label
                  >
                  <div
                    class="flex overflow-hidden gap-2.5 justify-center items-center self-stretch p-2 my-auto w-10 min-h-[40px] rounded-[123px]"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/46ff97f84fed7db9b5555221f6d909b2edc34ed8e9e379c859c0ad9b66e53d77?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                      alt=""
                      class="object-contain self-stretch my-auto w-6 aspect-square"
                    />
                  </div>
                  <input
                    type="text"
                    id="chatInput"
                    placeholder="Message slothGPT..."
                    class="flex-1 shrink self-stretch my-auto text-base font-medium tracking-normal leading-none basis-4 text-slate-600 bg-transparent border-none focus:outline-none max-md:max-w-full"
                  />
                </div>
                <div class="flex gap-1 items-start">
                  <button
                    type="button"
                    aria-label="Additional options"
                    class="flex overflow-hidden gap-2.5 justify-center items-center p-2 w-10 min-h-[40px] rounded-[123px]"
                  >
                    <div
                      class="flex self-stretch my-auto w-6 min-h-[24px]"
                    ></div>
                  </button>
                  <button
                    type="submit"
                    aria-label="Send message"
                    class="flex overflow-hidden gap-2.5 justify-center items-center px-2 w-10 h-10 bg-blue-600 min-h-[40px] rounded-[123px]"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8d16ea89b8b23b4521254a1243efdbd6866d166b6f803ea59f7613023e43385?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                      alt=""
                      class="object-contain self-stretch my-auto w-6 aspect-square"
                    />
                  </button>
                </div>
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class Chatbot{
  onSubmit() {
    // Handle form submission
  }
}