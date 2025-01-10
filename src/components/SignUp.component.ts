import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex">
      <!-- Left Side - Illustration -->
      <div class="w-1/2 p-12 flex flex-col justify-center text-white">
        <div class="max-w-md">
          <div class="mb-12">
            <img src="https://placehold.co/400x300" alt="Illustration" class="w-full" />
          </div>
          <h1 class="text-4xl font-bold mb-4">Create Practitioner Account</h1>
          <p class="text-lg text-blue-100">Register your new account.</p>
        </div>
      </div>

      <!-- Right Side - Registration Form -->
      <div class="w-1/2 bg-white p-12 flex items-center">
        <div class="w-full max-w-md mx-auto">
          <!-- Avatar and Welcome Message -->
          <div class="flex flex-col items-center mb-8">
            <img src="https://placehold.co/80x80" alt="Maya" class="w-20 h-20 rounded-full mb-4" />
            <h2 class="text-2xl font-bold text-center">Hey! I'm Maya. I'll get you signed up</h2>
            <p class="text-gray-600">in seconds. Ready to go?</p>
          </div>

          <!-- Registration Form -->
          <form class="space-y-6">
            <!-- Name Fields -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <!-- Email Field -->
            <div>
              <label class="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <!-- Date of Birth -->
            <div>
              <label class="block text-gray-700 mb-2">Date of Birth</label>
              <input
                type="date"
                placeholder="Date of Birth"
                class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <!-- Password Fields -->
            <div>
              <label class="block text-gray-700 mb-2">Password</label>
              <div class="relative">
                <input
                  type="password"
                  placeholder="Password"
                  class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  👁️
                </button>
              </div>
            </div>

            <div>
              <label class="block text-gray-700 mb-2">Confirm Password</label>
              <div class="relative">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  👁️
                </button>
              </div>
            </div>

            <!-- Submit Button -->
            <button class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Let's do it
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
})
export class SingUP {
  constructor() {}
}

bootstrapApplication(SingUP);