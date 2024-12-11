# TODO.md

## Project Setup

### **Frontend (React + TypeScript)**

1. **Create Components**:

   - [ ] `CodeEditor.tsx`: Set up a simple text area for code input with state management.
   - [ ] `OutputDisplay.tsx`: Component to display output from the interpreter.
   - [ ] `FileManager.tsx`: Allow users to create, save, and load files.

2. **Implement API Integration**:

   - [ ] Set up API calls to the backend for code interpretation.
   - [ ] Integrate backend for saving files (e.g., `POST` to `/api/files`).

3. **UI/UX**:
   - [ ] Basic styling for the editor.
   - [ ] Error handling and validation (e.g., display errors for invalid code).

---

### **Backend (Node.js + Express + MongoDB)**

1. **Create Routes and Controllers**:

   - [ ] `/api/interpreter/run`: Handle the code interpretation logic.
   - [ ] `/api/files/save`: Save files to MongoDB (name, content).
   - [ ] `/api/files/load`: Load saved files from MongoDB.

2. **Implement Interpreter Logic**:

   - [ ] Write the interpreter logic (e.g., simple math, custom syntax handling).
   - [ ] Return results or errors from the interpreter to the frontend.

3. **Authentication (Optional)**:

   - [ ] Implement user authentication (JWT or sessions).
   - [ ] Create routes for login, register, and session management.

4. **Error Handling**:
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

4. **Settings & Customization**:
   - [ ] Theme support for the editor (light/dark mode).
   - [ ] Syntax highlighting for the custom code.

---

### **Future Ideas**

- **Collaboration**: Enable real-time collaboration for multiple users working on the same file.
