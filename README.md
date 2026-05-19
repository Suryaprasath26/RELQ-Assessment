# RELQ-Assessment


# 🧪 SauceDemo Playwright Automation Framework

## 📌 Project Overview

This project is a **Playwright + TypeScript Automation Testing Framework** developed to test the core functionalities of the demo e-commerce application [SauceDemo](https://www.saucedemo.com/).

The framework follows an industry-standard **Page Object Model (POM)** architecture with reusable page classes, JSON-based test data management, modular test design, and clean assertions.

It covers major modules such as:

- Login
- Navigation
- Products
- Cart
- Checkout
- Negative Scenarios

---

## 🧰 Tech Stack Used

- **Language**: TypeScript
- **Automation Tool**: Playwright
- **Framework**: Playwright Test Runner
- **Design Pattern**: Page Object Model (POM)
- **Test Data**: JSON Data-Driven Testing
- **Assertions**: Playwright Expect API
- **Package Manager**: npm
- **Version Control**: Git & GitHub
- **IDE**: VS Code

---

## 📂 Folder Structure

```
RELQ Assessment/
│
├── pages/
│   ├── LoginPage.ts
│   ├── NavigationPage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── NegativePage.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── login-json.spec.ts
│   ├── navigation.spec.ts
│   ├── product.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   └── negative.spec.ts
│
├── test-data/
│   └── users.json
│
├── playwright-report/
│
├── test-results/
│
├── playwright.config.ts
│
│
├── package.json
```


## ✅ Features Covered

### 🔐 Login Module
Valid Login,
Invalid Login,
Locked User Validation,
Empty Username / Password,
Password Mask Validation,
Login Button Validation


### 🧭 Navigation Module
Hamburger Menu,
About Navigation,
Logout Functionality,
Cart Navigation,
Browser Back Navigation


### 🛍️ Product Module
Product Visibility Validation,
Product Details Validation,
Product Sorting,
Add / Remove Products,
Product Price Validation


### 🛒 Cart Module
Add to Cart,
Remove from Cart,
Cart Badge Validation,
Continue Shopping,
Multiple Product Validation


### 💳 Checkout Module
Checkout Information Validation,
Order Placement,
Payment Information Validation,
Shipping Information Validation,
Checkout Completion


### ❌ Negative Test Scenarios
Invalid Login,
Unauthorized URL Access,
Empty Fields Validation,
Invalid Checkout Validation,
Session Validation After Logout



## 🚀 How to Run This Project

---
1️⃣ **Clone the Repository**
 ```bash
git clone https://github.com/Suryaprasath26/RELQ-Assessment.git
```

2️⃣ **Navigate to Project Folder**
 ```bash 
cd RELQ-Assessment
```

3️⃣ **Install Playwright** 
 ```bash
npm init playwright@latest
```

▶️ **Execute Test Cases**
Run All Tests 
 ```bash
npx playwright test
```

▶️**Run Specific Test File** 
Login Tests - 
 ```bash
npx playwright test tests/login.spec.ts
```

JSON Data-Driven Login Tests - 
 ```bash
npx playwright test tests/login-json.spec.ts
```

Product Tests - 
 ```bash
npx playwright test tests/product.spec.ts
```

Cart Tests - 
 ```bash
npx playwright test tests/cart.spec.ts
```

Checkout Tests - 
 ```bash
npx playwright test tests/checkout.spec.ts
```

Navigation Tests - 
 ```bash
npx playwright test tests/navigation.spec.ts
```

Negative Tests - 
 ```bash
npx playwright test tests/negative.spec.ts
```

🌐 **Run Tests in Different Browsers** 
Chromium - 
 ```bash
npx playwright test --project=chromium
```

Firefox - 
 ```bash
npx playwright test --project=firefox
```

WebKit - 
 ```bash
npx playwright test --project=webkit
```

🖥️ **Run Tests in Headed Mode** 
 ```bash
npx playwright test --headed
```

🐞 **Run Tests in Debug Mode** 
 ```bash
npx playwright test --debug
```

📊 **Generate HTML Report** 
 ```bash
npx playwright show-report
```

📸 Reports & Screenshots - 
HTML Reports are generated automatically by Playwright.
Failed test screenshots can be configured in playwright.config.ts.
Videos and traces can also be enabled for debugging.

---

**🏗️ Framework Design Highlights**
✅ Page Object Model (POM)
✅ Reusable Methods
✅ Readonly Locators
✅ JSON Test Data
✅ Modular Test Structure
✅ beforeEach Hooks
✅ Clean Assertions
✅ Maintainable Architecture

## 🌐 Website

🔗 [SauceDemo site](https://www.saucedemo.com/)

---

## 🙋‍♂️ Author

**Surya Prasath S**  
🔗 [LinkedIn](https://www.linkedin.com/in/suryaprasath26/)  

---
> Happy Testing! 🚀
