# Juddie Ecommerce - Modern Shopping Experience

Juddie Ecommerce is a high-fidelity, responsive online shopping platform built with modern web technologies. This project demonstrates advanced React patterns, robust state management with Redux Toolkit, and scalable API integration.

## 🚀 Key Features

- **Dynamic Product Catalog**: Fetched in real-time from FakeStoreAPI.
- **Advanced State Management**: Centralized cart logic using Redux Toolkit.
- **RTK Query Integration**: Efficient data fetching with automatic caching and state tracking.
- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **Seamless Cart Experience**: Add, remove, and adjust quantities with persistent storage.
- **Toast Notifications**: Real-time feedback for user actions.

## 🛠️ Technology Stack

- **Frontend**: React 18
- **State Management**: Redux Toolkit & RTK Query
- **Styling**: Tailwind CSS & Flowbite
- **Routing**: React Router 7
- **Tooling**: Vite (Fast HMR & Optimized Builds)

## 🏗️ Architecture Detail

The project follows a modular architecture designed for scalability:
- `src/api`: RTK Query service definitions.
- `src/store`: Centralized store configuration and slices.
- `src/components`: Atomic UI components.
- `src/pages`: Higher-level page compositions.

## 🏁 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Chubbi-Stephen/JuddieEcommerce.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📈 Future Roadmap (Senior Engineering Goals)
- [ ] **TypeScript Migration**: Full type safety across the application.
- [ ] **Unit & Integration Testing**: Implementing Vitest and React Testing Library.
- [ ] **Skeleton Loaders**: Enhanced UX during data fetching.
- [ ] **Authentication**: Secure user login and persistent profiles.

---
Designed with ❤️ for a premium shopping experience.
