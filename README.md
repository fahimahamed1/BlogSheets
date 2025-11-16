# Accounts Dashboard

A web-based dashboard to **manage accounts** with features like **add, edit, delete, search, pagination, sorting, and CSV export**, all backed by **Google Sheets** as a database. Built using **HTML, CSS, JS** for frontend and **Google Apps Script** for backend. Fully functional with **cross-origin support (CORS)**.

---

## Features

- **Add Account** – Add new accounts via modal form.
- **Edit Account** – Edit existing account details.
- **Delete Account** – Delete accounts with confirmation.
- **Search** – Filter accounts by Name, Username, or Email.
- **Pagination** – Navigate through pages of accounts.
- **Sorting** – Sort accounts by any column by clicking headers.
- **Export CSV** – Download all accounts as a CSV file.
- **Mobile-friendly** – Fully responsive with floating add button and sticky action bar.
- **CORS-enabled** – Works directly from any frontend domain.

---

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Google Apps Script (Web App)  
- **Database**: Google Sheets  

---

## Setup Instructions

### 1. Deploy Google Apps Script Backend

1. Open [Google Apps Script](https://script.google.com/).  
2. Create a new project and paste the **backend code**.  
3. Save and click **Deploy → New Deployment → Web App**.  
4. Set:  
   - Execute as: **Me**  
   - Who has access: **Anyone, even anonymous**  
5. Copy the **Web App URL** and replace the `apiURL` in the frontend JS.

---

### 2. Configure Frontend

1. Copy the **frontend HTML code** to your website or local HTML file.  
2. Replace the `apiURL` with your deployed Google Apps Script Web App URL.  
3. Open the HTML in a browser — the dashboard should load accounts from your Google Sheet.  

---

### 3. Google Sheet Setup

- The backend will automatically create a sheet named **AccountsDB** with a sheet named **Accounts** if it does not exist.  
- Column headers (order matters):  

```
Name, Username, Email, Password, 2FA Key, Phone, Recovery, Notes
```

---

## Usage

1. Click the **+ floating button** to add an account.  
2. Use the **Edit** or **Delete** buttons on any row.  
3. Search accounts using the search bar.  
4. Navigate pages using **Prev/Next** buttons.  
5. Click **Export CSV** to download all accounts.  

---

## Notes

- Make sure the Web App backend is deployed as **Anyone, even anonymous** for the frontend to function.  
- The `Username` field is **unique**; add/edit/delete operations rely on it.  
- Supports all modern browsers and mobile devices.  

---

## License

This project is open-source and free to use.
