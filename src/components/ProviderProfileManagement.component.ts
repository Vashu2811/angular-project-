import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overflow-hidden bg-white" role="main">
      <div class="flex gap-5 max-md:flex-col">
        <main
          class="flex items-center flex-col ml-5 w-full max-md:ml-0 max-md:w-full"
        >
          <div class="flex flex-col items-center w-full max-md:max-w-full">
            <header
              class="flex flex-wrap gap-5 justify-between px-9 py-5 w-full bg-white max-md:px-5 max-md:max-w-full"
            >
              <h1 class="my-auto text-2xl font-semibold text-slate-700">
                Provider Profile Management
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
              class="w-full max-w-[1042px] max-md:mt-10 max-md:max-w-full"
            ></section>
          </div>
          <div class="p-6 min-h-screen">
            <!-- Main Content -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Provider List -->
              <div class=" rounded-lg shadow p-4">
                <div class="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    class="pl-4 pr-10 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    class="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500"
                  >
                    🔍
                  </button>
                </div>
                <table class=" mt-[50px] w-full">
                  <thead>
                    <tr class="text-left border-b">
                      <th class="pb-2">Name</th>
                      <th class="pb-2">Specialty</th>
                      <th class="pb-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let provider of providers" class="border-b">
                      <td class="py-2">{{ provider.name }}</td>
                      <td class="py-2">{{ provider.specialty }}</td>
                      <td class="py-2">
                        <span [class]="getStatusClass(provider.status)">
                          {{ provider.status }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Provider Details -->
              <div class="flex md:col-span-2">
                <div class="bg-white w-[400px] rounded-lg shadow p-6">
                  <!-- Profile Header -->
                  <div class="flex items-center mb-6">
                    <div class="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <h2 class="text-xl font-semibold">Michel Smith</h2>
                      <button class="text-blue-500">Share Profile</button>
                    </div>
                  </div>

                  <!-- Personal Information -->
                  <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-4">
                      Personal Information
                    </h3>
                    <div class="bg-gray-50 p-4 rounded">
                      <p class="mb-2">
                        <span class="font-medium">NPI Number:</span> 1234
                      </p>
                      <p class="mb-2">
                        <span class="font-medium">Specialty:</span> Lorem ipsum
                      </p>
                      <p>
                        <span class="font-medium">Contact Details:</span>
                        +1234567890
                      </p>
                    </div>
                  </div>

                  <!-- License Details -->
                  <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-4">License Details</h3>
                    <div class="bg-gray-50 p-4 rounded">
                      <p class="mb-2">
                        <span class="font-medium">State License Number:</span>
                        1234
                      </p>
                      <p class="mb-2">
                        <span class="font-medium">Expiration Date:</span>
                        January 1 2026
                      </p>
                      <p class="mb-2">
                        <span class="font-medium">Issuing Board:</span> lorem
                        ipsum
                      </p>
                      <p>
                        <span class="font-medium">Status:</span>
                        <span class="text-green-500">Active</span>
                      </p>
                    </div>
                  </div>

                  <!-- Action Buttons -->
                  <div class="space-y-2">
                    <button
                      class="w-full py-2 px-4 bg-gray-100 rounded flex items-center justify-between"
                    >
                      Certifications
                      <span>›</span>
                    </button>
                    <button
                      class="w-full py-2 px-4 bg-gray-100 rounded flex items-center justify-between"
                    >
                      Documents
                      <span>›</span>
                    </button>
                  </div>
                </div>
                <div class=" p-3 top-4 right-4 space-y-2">
                  <div
                    class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-lg"
                  >
                    <div class="flex">
                      <div class="flex-shrink-0">⚠️</div>
                      <div class="ml-3">
                        <p class="text-sm text-yellow-700">
                          Upcoming expiration lorem ipsum door sit.
                        </p>
                      </div>
                      <button class="ml-auto">×</button>
                    </div>
                  </div>
                  <div
                    class="bg-red-50 border-l-4 border-red-400 p-4 rounded shadow-lg"
                  >
                    <div class="flex">
                      <div class="flex-shrink-0">⛔</div>
                      <div class="ml-3">
                        <p class="text-sm text-red-700">
                          Missing credential lorem ipsum door sit.
                        </p>
                      </div>
                      <button class="ml-auto">×</button>
                    </div>
                  </div>
                  <div
                    class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-lg"
                  >
                    <div class="flex">
                      <div class="flex-shrink-0">⚠️</div>
                      <div class="ml-3">
                        <p class="text-sm text-yellow-700">
                          Upcoming expiration lorem ipsum door sit.
                        </p>
                      </div>
                      <button class="ml-auto">×</button>
                    </div>
                  </div>
                  <div
                    class="bg-red-50 border-l-4 border-red-400 p-4 rounded shadow-lg"
                  >
                    <div class="flex">
                      <div class="flex-shrink-0">⛔</div>
                      <div class="ml-3">
                        <p class="text-sm text-red-700">
                          Missing credential lorem ipsum door sit.
                        </p>
                      </div>
                      <button class="ml-auto">×</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  `,
})
export class AppProviderProfileManagement
{
  providers = [
    { name: 'Michel Smith', specialty: 'Lorem ipsum', status: 'Active' },
    { name: 'Jordan Barret', specialty: 'Lorem ipsum', status: 'Expiring soon' },
    { name: 'Jon Snow', specialty: 'Lorem ipsum', status: 'Expired' },
    { name: 'Michel Smith', specialty: 'Lorem ipsum', status: 'Active' },
    { name: 'Jordan Barret', specialty: 'Lorem ipsum', status: 'Expiring soon' },
    { name: 'Jon Snow', specialty: 'Lorem ipsum', status: 'Expired' },
    { name: 'Michel Smith', specialty: 'Lorem ipsum', status: 'Active' },
    { name: 'Jordan Barret', specialty: 'Lorem ipsum', status: 'Expiring soon' },
    { name: 'Jon Snow', specialty: 'Lorem ipsum', status: 'Expired' },
    { name: 'Michel Smith', specialty: 'Lorem ipsum', status: 'Active' },
    { name: 'Jordan Barret', specialty: 'Lorem ipsum', status: 'Expiring soon' },
    { name: 'Jon Snow', specialty: 'Lorem ipsum', status: 'Expired' },

    // ... more providers
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'text-green-500';
      case 'Expiring soon':
        return 'text-yellow-500';
      case 'Expired':
        return 'text-red-500';
      default:
        return '';
    }
  }
}

bootstrapApplication(AppProviderProfileManagement);