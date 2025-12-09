# Project-Currency-Coverter-Fetch-API

🌍 Currency Converter Web App

A simple and responsive Currency Converter built using HTML, CSS, and JavaScript.
It fetches live exchange rates using the Fawaz Ahmed Currency API and updates currency values instantly.
Includes automatic flag updates, currency dropdown population, and swap functionality.

🚀 Features

🔄 Convert currency between any two countries

🇺🇸 Country flags update automatically

📥 Dropdown auto-filled with all currency codes

↔️ One-click swap currency button

🌐 Uses the latest migrated API version

📱 Fully responsive design

⚡ Fast and lightweight

📸 Screenshot

(Add yours later)

[ Add an image here using: ![](screenshot.png) ]

📡 API Used

This project uses the new version of the Fawaz Ahmed Currency API after migration.

Base URL
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1

Example Request

Get all rates for USD:

https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

Sample Response
{
  "date": "2023-05-01",
  "usd": {
    "inr": 82.15,
    "eur": 0.91,
    "jpy": 138.45
  }
}

How conversion works
rate = data["usd"]["inr"];

🛠 Technologies Used

HTML5

CSS3

Vanilla JavaScript

Flags API

Currency API

📂 Project Structure
/project-folder
│── index.html
│── style.css
│── app.js
└── codes.js

▶️ How to Use

Clone or download the project

Open the index.html file in a browser

Enter an amount

Select “From” and “To” currencies

Click Get Exchange Rate

🔄 Future Improvements

📈 Show history graph

🌙 Add dark mode

💾 Save conversion history

📱 Improve mobile layout

🔍 Add search in dropdown

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a pull request.

🧑‍💻 Author

Vguru Shetty
GitHub: 