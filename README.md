# Product List & Details Application

This is a simple Angular application that displays a list of products with **filtering** and **sorting** functionality. It allows users to filter products by name, sort them based on various criteria such as name or price and check the product details. 

---

## Features

- **Filter by Name**: Dynamically filter the product list based on user input.
- **Sorting**:
  - Sort by name (A-Z or Z-A).
  - Sort by price (Low to High or High to Low).
- **Responsive Design**: Ensures the UI is user-friendly across devices.
- **Reusable Code**: Uses modular and reusable functions for filtering and sorting.

---

## Technologies Used

- **Angular**: For building the application framework.
- **SCSS**: For styling the application.
- **TypeScript**: For logic and component implementation.

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/mah-hossam/shop-app.git
cd shop-app
```

### 2. Install Dependencies
Make sure you have Node.js and Angular CLI installed. Then, install dependencies:
```bash
npm install
```

### 3. Run the Application
Start the Angular development server:
```bash
ng serve
```

Open your browser and navigate to: [http://localhost:4200](http://localhost:4200)

---

## Project Structure

src/
├── app/
│   ├── components/
│   │   ├── product-details/
│   │   │   ├── product-details.component.html      // Product details HTML template
│   │   │   ├── product-details.component.scss      // SCSS styles for product details
│   │   │   ├── product-details.component.spec.ts   // Unit tests for product details
│   │   │   └── product-details.component.ts        // Component logic for product details
│   │   ├── products-list/
│   │   │   ├── products-list.component.html        // Product list HTML template
│   │   │   ├── products-list.component.scss        // SCSS styles for product list
│   │   │   └── products-list.component.ts          // Component logic for product list
│   ├── models/
│   │   └── IProducts.ts                            // Interface for product data model
│   ├── services/
│   │   └── backend-mock.service.ts                 // Mock service for simulating backend API
│   ├── app.component.html                          // Root component HTML
│   ├── app.component.scss                          // Root component SCSS styles
│   ├── app.component.ts                            // Root component logic
│   ├── app.config.ts                               // Application-wide configuration
│   ├── app.routes.ts                               // Routing configuration  // Entry point

```

---


## Future Enhancements

- Implement **pagination** for large datasets.
- Add unit tests for the filtering and sorting methods.

---


## License

This Task Made for the Rwafed-Tech interview process.

---

## Contact

For any questions or feedback, feel free to reach out:

- **Email**: mahmoud-hossam@outlook.com