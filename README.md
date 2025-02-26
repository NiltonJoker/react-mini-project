# **React Mini Project**  

This project is based on the **Minimal Free - React Admin Dashboard** template. It includes authentication using **WorkOS AuthKit**, a new page with a stock price chart, and additional improvements.  

## 🚀 **Live Demo**  
🔗 https://appl-stock-prices.vercel.app

## 📂 **Project Setup**  

Follow these steps to set up the project locally:  

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/NiltonJoker/react-mini-project.git
   cd react-mini-project
   ```  
2. **Install dependencies:**  
   ```bash
   npm install
   ```  
3. **Run the project:**  
   ```bash
   npm run dev
   ```  
4. **Open in the browser:**  
   The project will be available at `http://localhost:3039/` (or another port if specified).  

## 🔐 **Authentication with WorkOS AuthKit**  

The Sign-In screen has been modified to support **username and password authentication** using WorkOS AuthKit.  

### **Setup Instructions:**  
- Ensure you have a **WorkOS sandbox account** configured.  
- Update the environment variables with your WorkOS credentials.  
- Add the following environment variable in a `.env` file:
  ```
  VITE_WORKOS_CLIENT_ID=your_workos_client_id
  ```

## 📊 **Stock Price Chart Implementation**  

A new page has been added to the dashboard that displays **AAPL (Apple) end-of-day stock prices** for the past 12 months. The data is fetched dynamically from an API deployed on **Vercel**.  

### **Chart Features:**  
✅ Displays stock prices for the last 12 months.  
✅ Includes a **filter** to switch between the last **3, 6, or 12 months**.  

## 🛠️ **Improvements & Additional Features**  

In addition to the required modifications, the project includes:  

- ✅ **Stock Chart Filter** – Users can filter stock price data for the last **3, 6, or 12 months**, improving data visualization.  
- ✅ **Unit Tests for Custom Hook** – A custom hook was created to handle **SWR data fetching**, with **unit tests** ensuring its reliability.  

## 📝 **Tests**  

The project includes tests for the custom data-fetching hook. To run the tests, use:  

```bash
npm run test
```  

## 🚀 **Deployment**  

The project is deployed using **Vercel**.
