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
          <h1 class="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p class="text-lg text-blue-100">Login to continue.</p>
        </div>
      </div>

      <!-- Right Side - Login Form -->
      <div class="w-1/2 bg-white p-12 flex items-center">
        <div class="w-full max-w-md mx-auto">
          <!-- Logo -->
          <div class="mb-12">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cece72af3df4d6f6a28d39e0ea8987a837f9f6f3162e845f90ae385e91531e33?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749" alt="Company Logo" class="object-contain self-center max-w-full aspect-[4.95] w-[228px]" />
          </div>

          <!-- Login Form -->
          <form class="space-y-6">
            <!-- Email Field -->
            <div>
              <label class="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter email or user name"
                class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <!-- Password Field -->
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
              <div class="mt-2 text-right">
                <a href="#" class="text-blue-500 hover:underline">Forgot password?</a>
              </div>
            </div>

            <!-- Login Button -->
            <button class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Login
            </button>

            <!-- Divider -->
            <div class="relative py-4">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-200"></div>
              </div>
              <div class="relative flex justify-center">
                <span class="bg-white px-4 text-gray-500">Or</span>
              </div>
            </div>

            <!-- Additional Options -->
            <div class="space-y-3">
              <button class="w-full bg-gray-50 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Create Patient Account
              </button>
              <button class="w-full bg-gray-50 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Create Practitioner Account
              </button>
              <div class="text-center">
                <a href="#" class="text-blue-500 hover:underline">Request MagicLink?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
})
export class Login {
  constructor() {}
}

bootstrapApplication(Login);