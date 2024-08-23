# News Aggregator

A powerful and user-friendly news aggregation application built with React, TypeScript, and Vite.

## Repository

This project is hosted on GitHub:

[https://github.com/anishpras/news-aggregator](https://github.com/anishpras/news-aggregator)

## Features

- Aggregate news from multiple sources (New York Times, NewsAPI, NewsData)
- Advanced search functionality with filters for date, category, and source
- Personalized news feed based on user preferences
- Responsive design for seamless experience across devices
- Built with modern web technologies for optimal performance

## Technologies Used

- React 18 with TypeScript
- Vite 4 for fast builds and hot module replacement
- TailwindCSS for responsive, utility-first styling
- React Query for efficient server state management
- Axios for HTTP requests
- React Router for navigation

## Prerequisites

- Docker (for containerized deployment)
- Node.js (v14 or later) and pnpm (for local development)

## Environment Variables

The application requires the following environment variables:

- `VITE_NYT_API_KEY`: API key for New York Times
- `VITE_NEWS_API_KEY`: API key for News API
- `VITE_NEWS_DATA_API_KEY`: API key for News Data API

## Setup

1. Clone the repository:

   ```
   git clone https://github.com/anishpras/news-aggregator.git
   cd news-aggregator
   ```

2. Create a `.env` file in the root directory with your API keys:
   ```
   VITE_NYT_API_KEY=your_nyt_api_key
   VITE_NEWS_API_KEY=your_news_api_key
   VITE_NEWS_DATA_API_KEY=your_news_data_api_key
   ```

## Docker Deployment

### Building the Docker Image

```bash
docker build \
  --build-arg VITE_NYT_API_KEY=$(grep VITE_NYT_API_KEY .env | cut -d '=' -f2) \
  --build-arg VITE_NEWS_API_KEY=$(grep VITE_NEWS_API_KEY .env | cut -d '=' -f2) \
  --build-arg VITE_NEWS_DATA_API_KEY=$(grep VITE_NEWS_DATA_API_KEY .env | cut -d '=' -f2) \
  -t news-aggregator .
```

### Running the Docker Container

```bash
docker run -p 3000:80 news-aggregator
```

Access the application at `http://localhost:3000`

## Local Development

1. Install dependencies:

   ```
   pnpm install
   ```

2. Start the development server:

   ```
   pnpm run dev
   ```

3. Build for production:

   ```
   pnpm run build
   ```

4. Preview production build:
   ```
   pnpm run preview
   ```

## Project Structure

```
news-aggregator/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API and other services
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── .env                 # Environment variables (not in version control)
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```


## Troubleshooting

If you encounter any issues:

1. Ensure all environment variables are correctly set
2. Check for any console errors in the browser developer tools
3. Verify that all API keys are valid and have the necessary permissions


## Contact

Anish Prashun - [GitHub](https://github.com/anishpras)

Project Link: [https://github.com/anishpras/news-aggregator](https://github.com/anishpras/news-aggregator)

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Query](https://react-query.tanstack.com/)
- [NewsAPI](https://newsapi.org/)
- [New York Times API](https://developer.nytimes.com/)
- [NewsData API](https://newsdata.io/)
