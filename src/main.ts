import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `

       <nav class="flex flex-col w-[20%] max-md:ml-0 max-md:w-full" role="navigation" aria-label="Main navigation">
          <div class="flex flex-col grow font-semibold">
            <div class="flex flex-col py-6 border-2 border-solid bg-slate-900 border-slate-700">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a39f0c38a7df43e5792955bcb6bc6f487e0a74eaf6c55b39f21215e4c862acb?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain self-end aspect-square rounded-[100px_0px_0px_100px] w-[50px]" />
              <div class="flex flex-col px-2.5 w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cece72af3df4d6f6a28d39e0ea8987a837f9f6f3162e845f90ae385e91531e33?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="Company Logo" class="object-contain self-center max-w-full aspect-[4.95] w-[228px]" />
                <div class="flex flex-col mt-14 w-full text-sm leading-6 text-white max-md:mx-1.5 max-md:mt-10">
                
                  <button class="flex gap-4 px-5 py-4 mt-2.5 items-center w-full rounded-3xl  shadow-[0px_20px_60px_rgba(0,119,255,0.3)]" tabindex="0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Billing & Coding Workspace</span>
                  </button>

                  <button class="flex gap-4 px-5 py-4 mt-2.5 items-center w-full  bg-blue-600 rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)]" tabindex="0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Real Time Eligibility Check</span>
                  </button>

                  <button class="flex gap-4 px-5 py-4 mt-2.5 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)]" tabindex="0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Utilization Review Work Center</span>
                  </button>

                  <button class="flex gap-4 px-5 py-4 mt-2.5 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(145,142,244,0.53)] text-slate-300" tabindex="0" aria-current="page">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Automated Claim Creation</span>
                  </button>

                   <button class="flex gap-4 px-5 py-4 mt-2.5 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(145,142,244,0.53)] text-slate-300" tabindex="0" aria-current="page">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Payment Posting</span>
                  </button>

                   <button class="flex gap-4 px-5 py-4 mt-2.5 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(145,142,244,0.53)] text-slate-300" tabindex="0" aria-current="page">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Reporting Dashboard</span>
                  </button>

                   <button class="flex gap-4 px-5 py-4 mt-2.5 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(145,142,244,0.53)] text-slate-300" tabindex="0" aria-current="page">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce39861d393ecbd4b51c25442c828e747ae584c669be8a0d903d129f368d8273?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Reporting Dashboard</span>
                  </button>

                   <button class="flex gap-4 px-5 py-4 mt-2.5 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(145,142,244,0.53)] text-slate-300" tabindex="0" aria-current="page">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/95df032cabff403584cac9d5d0c6959da9aba94555a845002a166f5c16890a65?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Reporting Dashboard</span>
                  </button>

                   <button class="flex gap-4 px-5 py-4 mt-2.5 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(145,142,244,0.53)] text-slate-300" tabindex="0" aria-current="page">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/443f637e40fbfc3a6a5d52a8e2a873aa063061e1eb6f714dcf0f263bcea6d4e1?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Reporting Dashboard</span>
                  </button>

                  
                  
                  <button class="flex gap-4 px-5 py-4 mt-4 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)]" tabindex="0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a28d5acf9b6eb2b87e8be41fcbdf4b7a44ba93f0812873d2d0934f96040a1241?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Social Outreach</span>
                  </button>

                  <button class="flex gap-4 px-5 py-4 mt-4 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)]" tabindex="0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06fc3dcd4497a01514a45cdc18cc18dbc01587ad705d56ffc5d438f89db79bc3?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Settings</span>
                  </button>

                  <button class="flex gap-4 px-5 py-4 mt-4 items-center w-full rounded-3xl shadow-[0px_20px_60px_rgba(0,119,255,0.3)]" tabindex="0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcfdebece1be864460674c9afbcf8acd6fe11c98496346f370717d378e042a21?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="" class="object-contain shrink-0 aspect-square w-[26px]" />
                    <span>Logout</span>
                  </button>
                </div>

                <div class="flex items-center mt-28 w-full text-base text-zinc-200 max-md:mt-10">
                  <div class="flex gap-4 items-center">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/90fbc7193584070ca61e8974c82dcca028c7f15634a012e678dcc370b9107549?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="Profile picture of Jackson D." class="object-contain w-20 aspect-square" />
                    <span>Jackson D.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>


  `,
})
export class App {
  firstName = '';
  lastName = '';
  email = '';
  dateOfBirth = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirmPassword = false;

  onSubmit() {
    console.log({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      dateOfBirth: this.dateOfBirth,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }
}

bootstrapApplication(App);
