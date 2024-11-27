# Role-Based Access Control (RBAC) Dashboard

## Project Description:
This project is a **Role-Based Access Control (RBAC) dashboard** built using **React**. The application allows users to manage departments, assign roles, and configure permissions for users. It provides a rich user interface for managing roles, filtering users, and accessing key department information. The app includes features like a sidebar for navigation, modals for editing roles, and pages for user and role management.

---

## Table of Contents:
- [Installation Instructions](#installation-instructions)
- [File Structure](#file-structure)
- [Component Descriptions](#component-descriptions)
- [Redux Setup](#redux-setup)
- [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)

---

## Installation Instructions:

To set up this project on your local machine, follow the instructions below:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/role-based-dashboard.git
    ```

2. Navigate to the project folder:
    ```bash
    cd role-based-dashboard
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

   Your app will be available at [http://localhost:3000](http://localhost:3000).

---

---

## Component Descriptions:

### **1. `/components/Card/card.jsx`**:
- **Purpose**: Displays department or role details within a card format, showing information such as team name and assigned roles.
- **Used in**: `Projects.jsx` to show department summaries.

### **2. `/components/Modal/modal.jsx`**:
- **Purpose**: Provides a modal window for role editing, such as adding new roles or modifying existing ones.
- **Used in**: Various parts of the app where role modifications are needed.

### **3. `/components/sidebar/Sidebar.jsx`**:
- **Purpose**: Implements the sidebar navigation. It contains links to different pages (Projects, Users, etc.) and includes a toggle for expanding and collapsing the sidebar on smaller screens.
- **Used in**: All pages for navigation.

### **4. `/components/sidebar/SidebarLinks.jsx`**:
- **Purpose**: Contains the list of navigation links inside the sidebar, enabling users to switch between pages.
- **Used in**: `Sidebar.jsx` for rendering navigation links.

### **5. `/data/mockTeams.json`**:
- **Purpose**: Contains mock data representing departments and their details.
- **Used in**: `Projects.jsx` to populate department cards.

### **6. `/data/User.json`**:
- **Purpose**: Contains mock user data, including roles and status.
- **Used in**: `Users.jsx` for listing users and managing roles.

### **7. `/Layout/Layout.jsx`**:
- **Purpose**: Wraps the layout of the application, including the sidebar and page content.
- **Used in**: All pages to provide a consistent layout structure.

### **8. `/pages/ChangeRole.jsx`**:
- **Purpose**: Displays the UI for changing the role of a user.
- **Used in**: As part of the role management feature.

### **9. `/pages/Projects.jsx`**:
- **Purpose**: Displays a list of departments and roles. It allows admins to manage department roles and permissions.
- **Used in**: The main content page for department management.

### **10. `/pages/Users.jsx`**:
- **Purpose**: Displays a list of users and their roles. It allows admins to manage user status and roles.
- **Used in**: The user management page.

---

## Redux Setup:

### **1. `/redux/actions/roleAction.js`**:
- **Purpose**: Contains Redux action creators for handling role-based actions like adding, editing, or removing roles.
- **Example**: Functions for dispatching actions to update user roles.

### **2. `/redux/reducers/roleReducer.js`**:
- **Purpose**: Contains the logic for handling role-related actions and updating the Redux store accordingly.

### **3. `/redux/slices/roleSlice.js`**:
- **Purpose**: Contains the slice for managing role state in Redux, with reducers and actions for role-related operations.
- **Used in**: Managing the state of roles and users throughout the app.

### **4. `/redux/slices/store.js`**:
- **Purpose**: Configures the Redux store and middleware, combining reducers and handling the role-related state.
- **Used in**: The central place to configure and initialize Redux.

---
## Demo Video

Click the image below to watch the video:

[![Vidyard Video](https://play.vidyard.com/gJRdVQGGuS6eWN2GeDViuD.jpg)](https://play.vidyard.com/gJRdVQGGuS6eWN2GeDViuD)
