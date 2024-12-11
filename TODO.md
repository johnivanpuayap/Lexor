# TODO.md

## Project Setup

### **Frontend (React + TypeScript)**

1. **Initialize the frontend project**:
   - [ ] Set up a new React project using TypeScript template.
   - [ ] Install necessary dependencies (`axios`, `react-router-dom`, etc.).
2. **Create Components**:

   - [ ] `CodeEditor.tsx`: Set up a simple text area for code input with state management.
   - [ ] `OutputDisplay.tsx`: Component to display output from the interpreter.
   - [ ] `FileManager.tsx`: Allow users to create, save, and load files.

3. **Implement API Integration**:

   - [ ] Set up API calls to the backend for code interpretation.
   - [ ] Integrate backend for saving files (e.g., `POST` to `/api/files`).

4. **Routing**:

   - [ ] Set up routing using `react-router-dom` (e.g., `/editor`, `/saved-files`, `/about`).

5. **State Management**:

   - [ ] Use React’s `useState` and `useEffect` for managing the code input and output.
   - [ ] Optional: Use Context API or Redux for global state if needed.

6. **UI/UX**:
   - [ ] Basic styling for the editor.
   - [ ] Error handling and validation (e.g., display errors for invalid code).

---

### **Backend (Node.js + Express + MongoDB)**

1. **Initialize the backend project**:

   - [ ] Set up a Node.js project using `express`.
   - [ ] Install necessary dependencies (`mongoose`, `cors`, `dotenv`, `express`).
   - [ ] Set up TypeScript configuration (`tsconfig.json`).

2. **Set Up Database (MongoDB)**:

   - [ ] Install and configure MongoDB (local or cloud MongoDB like Atlas).
   - [ ] Define file schema (name, content) with Mongoose.

3. **Create Routes and Controllers**:

   - [ ] `/api/interpreter/run`: Handle the code interpretation logic.
   - [ ] `/api/files/save`: Save files to MongoDB (name, content).
   - [ ] `/api/files/load`: Load saved files from MongoDB.

4. **Implement Interpreter Logic**:

   - [ ] Write the interpreter logic (e.g., simple math, custom syntax handling).
   - [ ] Return results or errors from the interpreter to the frontend.

5. **Authentication (Optional)**:

   - [ ] Implement user authentication (JWT or sessions).
   - [ ] Create routes for login, register, and session management.

6. **Error Handling**:
   - [ ] Handle errors (e.g., invalid code or failed database operations).

---

### **Features & Enhancements**

1. **Code Editor**:

   - [ ] Implement file tab management for creating, opening, and closing multiple files.
   - [ ] Support saving files (local or in the database).
   - [ ] Option to auto-save or manually save files.

2. **Interpreter Output**:

   - [ ] Display results of the code execution in a structured output format.
   - [ ] Display errors or issues with the code (syntax errors, runtime errors).

3. **File Management**:

   - [ ] Implement functionality to load saved files on app startup.
   - [ ] Option to create new files, rename, and delete files.
   - [ ] Add versioning support for files (e.g., track changes or multiple revisions).

4. **Settings & Customization**:
   - [ ] Theme support for the editor (light/dark mode).
   - [ ] Syntax highlighting for the custom code.

---

### **Milestones**

- **Milestone 1**: Basic setup with working frontend and backend.

  - [ ] Frontend: Display code editor and output.
  - [ ] Backend: Basic interpreter logic and saving files to MongoDB.

- **Milestone 2**: Enhanced functionality.

  - [ ] Frontend: Multiple tabs for code files.
  - [ ] Backend: File management and saving/loading functionality.

- **Milestone 3**: Authentication and deployment.
  - [ ] Backend: User authentication (optional).
  - [ ] Frontend: Login/registration pages (optional).
  - [ ] Deploy both frontend and backend.

---

### **Future Ideas**

- **Collaboration**: Enable real-time collaboration for multiple users working on the same file.
